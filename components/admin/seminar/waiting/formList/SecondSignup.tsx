import City from "components/assets copy/icons/seminar/city";
import Drill from "components/assets copy/icons/seminar/drill";
import Sunny from "components/assets copy/icons/seminar/sunny";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

const SecondSignup = ({
  formState,
  onFormChange,
  setFormState,
  setNextPage,
}: any) => {
  const router = useRouter();
  const [pathname, setPathName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<any>({
    type: "",
    message: "",
  });

  useEffect(() => {
    setPathName(router.pathname);
  }, [router.pathname]);

  const formListSleep = [
    {
      key: 1,
      value: "Chez l'habitant, guest-house, etc.",
    },
    {
      key: 2,
      value: "Hôtels simples (propres et peu chers)",
    },
    {
      key: 3,
      value: "Hôtels confortables (équivalent 3 étoiles)",
    },
    {
      key: 4,
      value: "Hôtels charme et luxe (équivalent 4 étoiles ou plus",
    },
    {
      key: 5,
      value: "Hébergements d'Exception, Lodges Haut de gamme",
    },
  ];
  const formSeminarType = [
    {
      key: 1,
      value: "Intégration",
      picture: <Sunny height={150} width={230} />,
    },
    { key: 2, value: "Formation", picture: <City height={150} width={230} /> },
    {
      key: 3,
      value: "Management",
      picture: <Drill height={150} width={230} />,
    },
    {
      key: 4,
      value: "Commercial",
      picture: <Drill height={150} width={230} />,
    },
  ];
  const formDestinationType = [
    { key: 1, value: "Mer", picture: <Sunny height={150} width={230} /> },
    { key: 2, value: "Ville", picture: <City height={150} width={230} /> },
    { key: 3, value: "Montagne", picture: <Drill height={150} width={230} /> },
  ];

  const verifyNextPage = () => {
    if (!formState?.typeSeminar) {
      setErrorMessage({
        type: "typeSeminar",
        message: "Vous devez choisir un type de séminaire",
      });
    } else if (!formState?.destinationType) {
      setErrorMessage({
        type: "destinationType",
        message: "Vous n'avez pas sélectionné un type de destination",
      });
    } else if (!formState?.sleepSuggest) {
      setErrorMessage({
        type: "sleepSuggest",
        message: "Vous n'avez pas sélectionné un type d'hébergement",
      });
    } else {
      setErrorMessage({
        type: "",
        message: "",
      });
      setNextPage(3);
    }
  };

  return (
    <Fragment>
      {/* Seminar Type */}
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Quel type de séminaire voulez vous organiser ?{" "}
        <span className="text-red-500">
          {errorMessage.type === "typeSeminar" && errorMessage.message}
        </span>
      </p>
      <div className="mt-5 flex flex-row justify-between">
        {formSeminarType.map((element, index) => {
          return (
            <div key={index} className="cursor-pointer">
              <label className="mb-5" htmlFor={element.value}>
                <div className="flex flex-col items-center w-64">
                  <div
                    className={`${
                      formState.typeSeminar === element.value
                        ? "border-4 border-meltrip-primary rounded opacity-75"
                        : "border-4 border-[#263238] rounded"
                    }`}
                  >
                    {element.picture}
                  </div>
                  <span className="my-5">{element.value}</span>
                  <input
                    className="accent-meltrip-primary"
                    type="radio"
                    id={element.value}
                    name="typeSeminar"
                    onChange={(_e) => {
                      setFormState({
                        ...formState,
                        typeSeminar: element.value,
                      });
                    }}
                  />
                </div>{" "}
              </label>
            </div>
          );
        })}
      </div>
      {/* Destination Type */}
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Dans quel type de destination aimeriez-vous aller ?{" "}
        <span className="text-red-500">
          {errorMessage.type === "destinationType" && errorMessage.message}
        </span>
      </p>
      <div className="mt-5 flex flex-row justify-between">
        {formDestinationType.map((element, index) => {
          return (
            <div key={index} className="cursor-pointer">
              <label className="mb-5" htmlFor={element.value}>
                <div className="flex flex-col items-center w-64">
                  <div
                    className={`${
                      formState.destinationType === element.value
                        ? "border-4 border-meltrip-primary rounded opacity-75"
                        : "border-4 border-[#263238] rounded"
                    }`}
                  >
                    {element.picture}
                  </div>
                  <span className="my-5">{element.value}</span>
                  <input
                    className="accent-meltrip-primary"
                    type="radio"
                    id={element.value}
                    name="destinationType"
                    onChange={(_e) => {
                      setFormState({
                        ...formState,
                        destinationType: element.value,
                      });
                    }}
                  />
                </div>{" "}
              </label>
            </div>
          );
        })}
      </div>
      {/* Budget par personne (facultatif) */}
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Quel est votre budget par personne ?{" "}
        <span className="text-gray-400">(facultatif)</span>
      </p>
      <div className="md:w-[40%]">
        <div className="relative">
          <input
            type="number"
            className="py-3 px-4 pl-9 pr-16 block w-full shadow-sm text-sm focus:z-10"
            placeholder="0.00"
            name="budgetPerPerson"
            value={formState.budgetPerPerson}
            onChange={onFormChange}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
            <span className="text-gray-500">€</span>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
            <span className="text-gray-500">EUR</span>
          </div>
        </div>
      </div>
      {/* Sleeping */}
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Pour dormir, vous êtes plutôt ...{" "}
        <span className="text-red-500">
          {errorMessage.type === "sleepSuggest" && errorMessage.message}
        </span>
      </p>
      <div className="flex flex-col mt-5">
        {formListSleep.map((sleepSuggest, index) => {
          return (
            <div key={index}>
              <input
                className="accent-meltrip-primary"
                type="radio"
                id={sleepSuggest.value}
                name="sleepSuggest"
                onChange={(_e) =>
                  setFormState({
                    ...formState,
                    sleepSuggest: sleepSuggest.value,
                  })
                }
              />
              <label className="ml-3" htmlFor={sleepSuggest.value}>
                <span
                  className={`mt-[48px] text-[20px] ${
                    formState?.sleepSuggest === sleepSuggest.value
                      ? "text-meltrip-primary"
                      : "text-black"
                  }`}
                >
                  {sleepSuggest.value}
                </span>
              </label>
            </div>
          );
        })}
      </div>
      {/* Describe Project (facultatif) */}
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Vous souhaitez nous en dire plus sur votre projet ?{" "}
        <span className="text-gray-400">(facultatif)</span>
      </p>
      <textarea
        name="describeProject"
        className="resize-y rounded-md w-full h-64 mt-5 border border-b-gray-100"
        onChange={onFormChange}
        value={formState.describeProject}
      />
      {/* Paginate */}
      <div className="w-full flex justify-between items-center mt-10">
        <div
          onClick={() => setNextPage(1)}
          className="text-meltrip-primary cursor-pointer mt-[48px] text-[20px] font-semibold leading-7 font-poppins"
        >
          {"< "} Précédent
        </div>
        <div>
          <button
            onClick={() => verifyNextPage()}
            className="bg-meltrip-primary p-2 rounded text-white mt-[48px] text-[20px] font-semibold leading-7 font-poppins"
          >
            Étape suivante{" "}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default SecondSignup;
