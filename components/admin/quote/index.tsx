import BreadCrumbs from "@components/utils/breadCrumbs";
import { storage } from "@lib/config/firebase";
import { useAppSelector } from "@redux/hooks";
import axios from "axios";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export function sortByDate(array: any) {
  if (array?.length > 0)
    return array?.sort(function (a: any, b: any) {
      return (
        new Date(b?.seminar?.createdAt).valueOf() -
        new Date(a?.seminar?.createdAt).valueOf()
      );
    });
}

const QuotePage = () => {
  const { auth } = useAppSelector((state) => state);
  const router = useRouter();
  const [listTemplate, setListTemplate] = useState<any>();
  const [formState, setFormState] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [progresspercent, setProgresspercent] = useState(0);

  const onFormChange = (e: any) => {
    if (e.target) {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const file = e.target[0]?.files[0];

    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    await uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(
          async (downloadURL: any) => {
            setLoading(false);
            setProgresspercent(0);
            const res = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/templatequote/`,
              { ...formState, url: downloadURL },
              {
                headers: {
                  "x-access-token": auth.user.accessToken,
                },
              }
            );
            if (res.data) {
              console.log("success");
              getTemplate().catch((e) => console.error(e));
            }
          }
        );
      }
    );
  };

  const RemovePDF = async (e: any, url: any, id: any) => {
    e.preventDefault();
    setLoading(true);
    const imageRef = ref(storage, url);

    // Delete the file
    deleteObject(imageRef).then(async () => {
      // File deleted successfully
      setLoading(false);
      setProgresspercent(0);
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/templatequote/${id}`,
        {
          headers: {
            "x-access-token": auth.user.accessToken,
          },
        }
      );
      if (res.data) {
        console.log("success");
        getTemplate().catch((e) => console.error(e));
      }
    });
  };

  const getTemplate = useCallback(async () => {
    console.log(auth);
    let arrayTemplate = [];
    const template = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/templatequotes`,
      {
        headers: {
          "x-access-token": auth.user.accessToken,
        },
      }
    );
    const templateList = template.data;
    if (templateList?.length > 0) {
      for (let template of templateList) {
        arrayTemplate.push({
          ...template,
        });
      }
    }
    setListTemplate(sortByDate(arrayTemplate));
  }, [auth.user.accessToken, auth.user.id]);

  useEffect(() => {
    getTemplate().catch((e) => console.error(e));
  }, [getTemplate]);

  console.log(listTemplate);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex justify-between mb-4">
          <div className="flex items-center mb-3 mt-3">
            <BreadCrumbs
              url="/admin/dashboard"
              name="Dashboard"
              active={true}
            />
            <BreadCrumbs url="/admin/devis" name="Devis" active={false} />
          </div>
        </div>
        <div className="flex flex-wrap w-full mb-5 text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Devis
          </h1>
        </div>

        <div className="w-full grid grid-cols-3 gap-12">
          {/**List Card */}
          <div className="col-span-2">
            <div className="mt-5 flex flex-row flex-wrap">
              {listTemplate?.length > 0 &&
                listTemplate?.map((element: any, index: any) => (
                  <div
                    key={index}
                    className="card w-96 m-5 bg-base-100 shadow-xl"
                  >
                    <figure>
                      <img
                        src={
                          element.urlPicture ||
                          "https://placeimg.com/400/225/arch"
                        }
                        alt="pdf"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{element.title}</h2>
                      <p>{element.price}?</p>
                      <div className="card-actions items-center justify-end">
                        <a
                          className="btn btn-primary text-white"
                          href={element?.url}
                          target="_blank"
                        >
                          <span className="underline">Voir le PDF</span>
                        </a>
                        <button
                          className="btn btn-error text-white"
                          onClick={(e) => RemovePDF(e, element.url, element.id)}
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/**Form add PDF */}
          <div className="col-span-1 fixed right-32">
            <div className="card w-96 bg-base-100 shadow-xl cursor-pointer">
              <div className="card-body rounded bg-gray-300 mt-2">
                <h2 className="card-title text-white">Ajouter un Devis</h2>
                <form onSubmit={handleSubmit}>
                  {loading && <p>Téléchargement en cours...</p>}
                  {progresspercent}%
                  <label htmlFor="file">Sélectionnez un fichier PDF:</label>
                  <div className="flex flex-col">
                    <input
                      className="bg-gray-100 mt-2 border rounded p-2"
                      placeholder=""
                      type="file"
                      id="file"
                      name="file"
                      accept="application/pdf"
                    />
                    <input
                      className="bg-gray-100 mt-2 border rounded p-2"
                      placeholder="Prix"
                      type="number"
                      onChange={onFormChange}
                      name="price"
                    />
                    <input
                      className="bg-gray-100 mt-2 border rounded p-2"
                      placeholder="Titre du PDF"
                      type="text"
                      onChange={onFormChange}
                      name="title"
                    />
                    <input
                      className="bg-gray100  mt-2 border rounded p-2"
                      placeholder=" Url présentation image"
                      type="text"
                      onChange={onFormChange}
                      name="urlPicture"
                    />{" "}
                  </div>
                  <div className="card-actions items-center justify-end mt-3">
                    <button type="submit" className="btn bg-meltrip-primary">
                      Créer le fichier
                    </button>
                  </div>{" "}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotePage;
