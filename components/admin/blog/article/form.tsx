import React, { useState, useEffect, Fragment, useRef } from "react";
import axios from "axios";
import Select from "react-select";
import { useAppSelector } from "@redux/hooks";

import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { Editor } from "@tinymce/tinymce-react";
import { useRouter } from "next/router";
import { FormItem } from "@components/utils/formItem";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ request }: any) => {
  const router = useRouter();
  const { auth } = useAppSelector((state) => state);
  const editorRef = useRef<any>(null);

  const [dataTag, setDataTag] = useState<any>([]);
  const [formState, setFormState] = useState<any>();
  const [message, setMessage] = useState<any>();
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const handleEditorChange = (e: any) => {
    setFormState({ ...formState, text: e.target.getContent() });
  };
  const onFormChange = (e: any) => {
    if (e.target) {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  const getArticle = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/blog/article/${router.query.id}`
    );
    const tagInfos: any = await getNameTag(res.data.tagId);
    setFormState({
      ...res.data,
      tagName: tagInfos.data.name,
      tagSlug: tagInfos.data.slug,
    });
  };
  const getNameTag = async (id: number) => {
    return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blog/tag/${id}`);
  };
  const getAllTag = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/blog/tags/`
    );
    setDataTag(res.data);
  };

  useEffect(() => {
    getArticle();
    getAllTag();
  }, [router.query.id]);

  const handleAddForm = async () => {
    delete formState.createdAt;
    delete formState.updatedAt;
    delete formState.deleteAt;
    delete formState.tagSlug;
    delete formState.tagName;
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/blog/article/${formState.id}`,
      formState,
      {
        headers: {
          "x-access-token": auth.user.accessToken,
        },
      }
    );
    if (res.data) {
      setMessage(`L'article ${formState.title} à bien était mis à jour !`);
      toast.success(`L'article ${formState.title} à bien était mis à jour !`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setOpen(false);
    }
  };

  return (
    <>
      <div className="flex w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full space-y-8">
          <div className="md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              {message && (
                <p className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  {message}
                </p>
              )}
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <FormItem
                      type="title"
                      name="title"
                      label="title"
                      style="bg-[#ECF3F2] px-2 py-3"
                      value={formState?.title}
                      onChange={onFormChange}
                      disabled={false}
                      required={true}
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Selectionner une catégorie
                    </label>
                    <Select
                      placeholder="Catégorie"
                      options={dataTag.map((item: any) => ({
                        value: item?.id,
                        label: item?.name,
                      }))}
                      onChange={(e: any) =>
                        setFormState({
                          ...formState,
                          tagId: e.value,
                          tagName: e.label,
                        })
                      }
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <FormItem
                      type="description"
                      name="description"
                      label="Description"
                      style="bg-[#ECF3F2] px-2 py-3"
                      value={formState?.description}
                      onChange={onFormChange}
                      disabled={false}
                      required={true}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <FormItem
                      type="text"
                      name="slug"
                      label="slug"
                      style="bg-[#ECF3F2] px-2 py-3"
                      value={formState?.slug}
                      onChange={onFormChange}
                      disabled={false}
                      required={true}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <FormItem
                      type="pictureURL"
                      name="pictureURL"
                      label="picture URL"
                      style="bg-[#ECF3F2] px-2 py-3"
                      value={formState?.pictureURL}
                      onChange={onFormChange}
                      disabled={false}
                      required={true}
                    />
                  </div>
                  <div className="col-span-6">
                    <div className="flex items-center mb-4">
                      <div className="form-check">
                        <input
                          className={`${
                            formState?.status &&
                            "form-check-input checked:bg-blue-600 checked:border-blue-600 "
                          } appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`}
                          type="checkbox"
                          value={formState?.status}
                          onChange={(e: any) =>
                            setFormState({
                              ...formState,
                              status: !formState?.status,
                            })
                          }
                          id="flexCheckChecked"
                          checked
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          htmlFor="flexCheckChecked"
                        >
                          Afficher l'article
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <Editor
                      apiKey={process.env.NEXT_PUBLIC_TINY}
                      initialValue={formState?.text}
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                          "advlist",
                          "autolink",
                          "lists",
                          "link",
                          "image",
                          "charmap",
                          "preview",
                          "anchor",
                          "searchreplace",
                          "visualblocks",
                          "code",
                          "fullscreen",
                          "insertdatetime",
                          "media",
                          "table",
                          "code",
                          "help",
                          "wordcount",
                        ],
                        toolbar:
                          "undo redo | blocks | " +
                          "bold italic forecolor | alignleft aligncenter " +
                          "alignright alignjustify | bullist numlist outdent indent | " +
                          "removeformat | help",
                        content_style:
                          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                      }}
                      onChange={handleEditorChange}
                    />
                  </div>
                  <div className="col-span-6">
                    <button
                      onClick={() => setOpen(true)}
                      type="submit"
                      className={
                        "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      }
                    >
                      Mettre à jour un article
                    </button>
                  </div>
                  <Transition.Root show={open} as={Fragment}>
                    <Dialog
                      as="div"
                      static
                      className="fixed z-10 inset-0 overflow-y-auto"
                      initialFocus={cancelButtonRef}
                      open={open}
                      onClose={setOpen}
                    >
                      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>
                        <span
                          className="hidden sm:inline-block sm:align-middle sm:h-screen"
                          aria-hidden="true"
                        >
                          &#8203;
                        </span>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                              <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                  <CheckIcon
                                    className="h-6 w-6 text-green-600"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                  <Dialog.Title
                                    as="h3"
                                    className="text-lg leading-6 font-medium text-gray-900"
                                  >
                                    Mettre à jour un article
                                  </Dialog.Title>
                                  <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                      Êtes-vous sûr de vouloir mettre à jour cet
                                      article ? Toutes les informations seront
                                      directement ajoutée sur le blog.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                              <button
                                type="button"
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => handleAddForm()}
                              >
                                Mettre à jour
                              </button>
                              <button
                                type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => setOpen(false)}
                                ref={cancelButtonRef}
                              >
                                Retour
                              </button>
                            </div>
                          </div>
                        </Transition.Child>
                      </div>
                    </Dialog>
                  </Transition.Root>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Form;
