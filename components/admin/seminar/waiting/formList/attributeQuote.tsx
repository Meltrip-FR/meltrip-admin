import { useAppSelector } from "@redux/hooks";
import axios from "axios";
import { Fragment, useCallback, useEffect, useState } from "react";

export function sortByDate(array: any) {
  if (array?.length > 0)
    return array?.sort(function (a: any, b: any) {
      return (
        new Date(b?.seminar?.createdAt).valueOf() -
        new Date(a?.seminar?.createdAt).valueOf()
      );
    });
}

export function containsValue(array: any, value: any) {
  return array?.some((obj: any) => obj?.id === value);
}

const AttributeSeminar = ({
  formState,
  setFormState,
  handSubmit,
  setNextPage,
}: any) => {
  const { auth } = useAppSelector((state) => state);
  const [listTemplate, setListTemplate] = useState<any>();
  const [errorMessage, setErrorMessage] = useState<any>({
    type: "",
    message: "",
  });

  const verifyNextPage = () => {
    if (formState?.listTemplateSelect.length !== 3) {
      setErrorMessage({
        type: "listTemplateSelect",
        message: " Vous devez selectionner 3 devis",
      });
      setNextPage(4);
    } else {
      setErrorMessage({
        type: "",
        message: "",
      });

      handSubmit();
    }
  };

  const handleSelectDevis = async (e: any, url: any, id: any) => {
    if (
      !formState.listTemplateSelect.includes({ url: url, id: id }) &&
      formState.listTemplateSelect.length < 3
    ) {
      setFormState({
        ...formState,
        listTemplateSelect: [
          ...formState.listTemplateSelect,
          { url: url, id: id },
        ],
      });
    }
  };

  const handleRemoveObJect = async (e: any, id: any) => {
    const newItems = formState.listTemplateSelect.filter(
      (item: any) => item.id !== id
    );
    console.log({ newItems });
    setFormState({
      ...formState,
      listTemplateSelect: newItems,
    });
  };

  const getTemplate = useCallback(async () => {
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

  return (
    <Fragment>
      {/* Header picture */}
      <h1 className="text-4xl font-poppins">Attribution de 3 devis</h1>
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Attribuer les 3 devis pour ce seminaire - (
        {formState.listTemplateSelect.length} / 3)
      </p>

      {/**List Card */}
      <div className="col-span-2">
        <div className="mt-5 flex flex-row flex-wrap">
          {listTemplate?.length > 0 &&
            listTemplate?.map((element: any, index: any) => (
              <div
                key={index}
                onClick={(e) =>
                  containsValue(formState.listTemplateSelect, element.id)
                    ? handleRemoveObJect(e, element.id)
                    : handleSelectDevis(e, element.url, element.id)
                }
                className={`${
                  containsValue(formState.listTemplateSelect, element.id)
                    ? "opacity-50"
                    : "opacity-100"
                } cursor-pointer card w-96 m-5 bg-base-100 shadow-xl`}
              >
                <figure>
                  <img
                    src={
                      element.urlPicture || "https://placeimg.com/400/225/arch"
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
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center mt-10">
        <div
          onClick={() => setNextPage(3)}
          className="text-meltrip-primary cursor-pointer mt-[48px] text-[20px] font-semibold leading-7 font-poppins"
        >
          {"< "} Précédent
        </div>
        <div>
          <button
            onClick={() => verifyNextPage()}
            className="bg-meltrip-primary p-2 rounded text-white mt-[48px] text-[20px] font-semibold leading-7 font-poppins"
          >
            Confirmer le Séminaire
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default AttributeSeminar;
