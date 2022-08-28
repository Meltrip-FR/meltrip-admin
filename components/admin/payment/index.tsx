import CircleList from "@components/assets/icons/circleList";
import Eyes from "@components/assets/icons/eyes";
import LockClose from "@components/assets/icons/lockClose";
import SuccessCircle from "@components/assets/icons/successCircle";
import BreadCrumbs from "@components/utils/breadCrumbs";
import { useRouter } from "next/router";

const Payments = () => {
  const router = useRouter();
  const data = [
    {
      id: 1,
      price: 0,
      url: "",
      status: false,
    },
    {
      id: 2,
      price: 0,
      url: "",
      status: false,
    },
    {
      id: 3,
      price: 200,
      url: "https://google.com",
      status: true,
    },
    {
      id: 4,
      price: 400000,
      url: "https://google.com",
      status: true,
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex justify-between mb-4">
          <div className="flex items-center mb-3 mt-3">
            <BreadCrumbs url="/" name="home" active={false} />
            <BreadCrumbs url="/admin/dashboard" name="Compte" active={true} />
            <BreadCrumbs url="/" name="Information entreprise" active={false} />
          </div>
        </div>
        <div className="flex flex-wrap w-full mb-5 text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Paiements
          </h1>
        </div>
        <div className="flex flex-wrap justify-between text-left mt-6 sm:mt-0 mb-10">
          <div>
            <h2 className="text-gray-900 text-xl font-medium title-font">
              Résumé de vos paiements
            </h2>
            <p className="text-xs text-gray-700">
              Vous avez organisé 4 séminaires
            </p>
          </div>
        </div>

        <section className="text-gray-600 body-font">
          <div className="flex w-full flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <div className="grid grid-rows-4 gap-4">
                {data.map((item) => (
                  <div className="grid grid-cols-4 gap-3 border-b">
                    <div>
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                        {item.id}e séminaire
                      </h2>
                      <p className="leading-relaxed text-base">
                        {item.price} $
                      </p>
                    </div>
                    <div
                      className="mt-3 text-black underline inline-flex items-center cursor-pointer"
                      onClick={() => item.url && router.push(item.url)}
                    >
                      {item.url && "télécharger la facture"}
                    </div>

                    <div className="mt-3 text-black inline-flex items-center cursor-pointer">
                      {item.status ? "Payé" : "En cours"}
                    </div>
                    <div className="mt-3 text-black underline inline-flex items-center mr-10">
                      {item.status ? (
                        <SuccessCircle size={20} />
                      ) : (
                        <CircleList size={20} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/6 md:w-1/2  border-2 rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0">
              <div className="border-b pb-2 mb-2 ">
                <div className="flex flex-wrap justify-between text-left mt-6 sm:mt-0">
                  <div className="flex">
                    <div className="mt-4 mr-5">
                      <LockClose size={25} />
                    </div>
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                      Quelles informations peuvent être modifiées ?
                    </h2>
                  </div>
                  <p className="text-xs text-gray-700 mb-3">
                    Les informations utilisées par Meltrip pour vérifier
                    l’identité de votre entreprise ne peuvent être modifiées que
                    par les personnes ayant droit.
                  </p>
                </div>
              </div>
              <div className="pb-2 mb-2 border-gray-200">
                <div className="flex flex-wrap justify-between text-left mt-6 sm:mt-0">
                  <div>
                    <div className="flex">
                      <div className="mt-4 mr-5">
                        <Eyes size={25} />
                      </div>
                      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                        Quelles informations sont communiquées à des tiers ?
                      </h2>
                    </div>
                    <p className="text-xs text-gray-700">
                      Meltrip ne communique les coordonnées des personnes
                      participants à un sémiaire que dans le cadre de
                      réservations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Payments;
