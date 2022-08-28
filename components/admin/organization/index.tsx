import Eyes from "@components/assets/icons/eyes";
import LockClose from "@components/assets/icons/lockClose";
import BreadCrumbs from "@components/utils/breadCrumbs";

const Organization = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex justify-between mb-4">
          <div className="flex items-center mb-3 mt-3">
            <BreadCrumbs url="/home" name="home" active={false} />
            <BreadCrumbs url="/admin/dashboard" name="Compte" active={true} />
            <BreadCrumbs url="/" name="Information entreprise" active={false} />
          </div>
        </div>
        <div className="flex flex-wrap w-full mb-5 text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Information entreprise
          </h1>
        </div>
        <section className="text-gray-600 body-font">
          <div className="flex w-full flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <section className="text-gray-600 body-font">
                <div className="border-b pb-2 mb-2 border-gray-200">
                  <div className="flex flex-wrap justify-between text-left mt-6 sm:mt-0">
                    <div>
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                        Nom de l'entreprise
                      </h2>
                      <p className="leading-relaxed text-base">XXXXXXXXXX</p>
                    </div>
                    <div className="mt-3 text-black underline inline-flex items-center cursor-pointer">
                      Modifier
                    </div>
                  </div>
                </div>
                <div className="border-b pb-2 mb-2 border-gray-200">
                  <div className="flex flex-wrap justify-between text-left mt-6 sm:mt-0">
                    <div>
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                        Adresse de l'entreprise
                      </h2>
                      <p className="leading-relaxed text-base">
                        3 boulecard de la seine
                      </p>
                    </div>
                    <div className="mt-3 text-black underline inline-flex items-center cursor-pointer">
                      Modifier
                    </div>
                  </div>
                </div>
                <div className="border-b pb-2 mb-2 border-gray-200">
                  <div className="flex flex-wrap justify-between text-left mt-6 sm:mt-0">
                    <div>
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                        Siren / Siret de l'entreprise
                      </h2>
                      <p className="leading-relaxed text-base">
                        151715645187154614767
                      </p>
                    </div>
                    <div className="mt-3 text-black underline inline-flex items-center cursor-pointer">
                      Modifier
                    </div>
                  </div>
                </div>
                <div className="border-b pb-2 mb-2 border-gray-200">
                  <div className="flex flex-wrap justify-between text-left mt-6 sm:mt-0">
                    <div>
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                        Email du responsable financier
                      </h2>
                      <p className="leading-relaxed text-base">
                        drapala@gmail.com
                      </p>
                    </div>
                    <div className="mt-3 text-black underline inline-flex items-center cursor-pointer">
                      Modifier
                    </div>
                  </div>
                </div>
                <div className="border-b pb-2 mb-2 border-gray-200">
                  <div className="flex flex-wrap justify-between text-left mt-6 sm:mt-0">
                    <div>
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                        Telephone du responsable financier
                      </h2>
                      <p className="leading-relaxed text-base">
                        +33 7 09 87 67 65
                      </p>
                    </div>
                    <div className="mt-3 text-black underline inline-flex items-center cursor-pointer">
                      Modifier
                    </div>
                  </div>
                </div>
              </section>
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

export default Organization;
