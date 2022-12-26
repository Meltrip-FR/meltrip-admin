import { Fragment, useState } from "react";

const ThreePointOneSignup = ({
  formState,
  setFormState,
  handSubmit,
  setNextPage,
}: any) => {
  const [errorMessage, setErrorMessage] = useState<any>({
    type: "",
    message: "",
  });

  const verifyNextPage = () => {
    console.log(formState);
    if (formState?.billingManager === false && !formState?.emailFinancial) {
      setErrorMessage({
        type: "emailFinancial",
        message: " Vous n'avez pas saisie l'email du responsable financier",
      });
      setNextPage(3);
    } else if (
      formState?.billingManager === false &&
      !formState?.numberFinancial
    ) {
      setErrorMessage({
        type: "numberFinancial",
        message:
          " Vous n'avez pas saisie le numéro de téléphone du responsable financier",
      });
      setNextPage(3);
    } else {
      setErrorMessage({
        type: "",
        message: "",
      });
      handSubmit();
    }
  };

  return (
    <Fragment>
      {/* Header picture */}
      <h1 className="text-4xl font-poppins">Facturation</h1>
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Pour traiter vos informations, merci de nous informer sur le responsable
        de facturation
      </p>
      {/* billingManager */}
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Êtes-vous le responsable de facturation ?
      </p>
      <div className="flex flex-col mt-5">
        <div>
          <input
            className="accent-meltrip-primary"
            type="radio"
            id="yes"
            name="billingManager"
            onChange={(_e) =>
              setFormState({
                ...formState,
                billingManager: true,
              })
            }
            checked={formState.billingManager}
          />
          <label className="ml-3" htmlFor="yes">
            <span className="mt-[48px] text-[20px]">Oui</span>
          </label>
        </div>
        <div>
          <input
            className="accent-meltrip-primary"
            type="radio"
            id="no"
            name="billingManager"
            onChange={(_e) =>
              setFormState({
                ...formState,
                billingManager: false,
              })
            }
            checked={!formState.billingManager}
          />
          <label className="ml-3" htmlFor="no">
            <span className="mt-[48px] text-[20px]">Non</span>
          </label>
          {!formState.billingManager && (
            <Fragment>
              <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
                Saississez l’e-mail du responsable financier{" "}
                <span className="text-red-500">
                  {errorMessage.type === "emailFinancial" &&
                    errorMessage.message}
                </span>
              </p>
              <input
                type="email"
                placeholder="meltrip@meltrip.fr"
                name="emailFinancial"
                className="py-3 px-4 pl-9 pr-16 block w-full shadow-sm text-sm focus:z-10 border-gray-500 border mt-5"
                value={formState.emailFinancial}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    emailFinancial: e.target.value,
                  })
                }
              />
              <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
                Saississez le numero du responsable financier{" "}
                <span className="text-red-500">
                  {errorMessage.type === "phoneFinancial" &&
                    errorMessage.message}
                </span>
              </p>
              <input
                type="text"
                name="numberFinancial"
                className="py-3 px-4 pl-9 pr-16 block w-full shadow-sm text-sm focus:z-10 border-gray-500 border mt-5"
                value={formState.numberFinancial}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    numberFinancial: e.target.value,
                  })
                }
              />
            </Fragment>
          )}
        </div>
      </div>

      <div className="w-full flex justify-between items-center mt-10">
        <div
          onClick={() => setNextPage(2)}
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

export default ThreePointOneSignup;
