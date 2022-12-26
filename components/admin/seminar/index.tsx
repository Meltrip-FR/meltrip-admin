import BreadCrumbs from "@components/utils/breadCrumbs";
import { useRouter } from "next/router";

const Seminar = () => {
  const router = useRouter();

  const listFunction = [
    {
      title: "Séminaire en attente",
      url: "seminar/waitinglist",
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex justify-between mb-4">
          <div className="flex items-center mb-3 mt-3">
            <BreadCrumbs url="/admin/dashboard" name="Compte" active={true} />
            <BreadCrumbs
              url="/admin/seminar"
              name="Séminaires"
              active={false}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full mb-5 text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Séminaires
          </h1>

          {listFunction.map((element) => {
            return (
              <div
                className="bg-meltrip-secondary w-full p-2 rounded-lg text-left mt-5 hover:bg-orange-800 cursor-pointer"
                onClick={() => router.push(element.url)}
              >
                <span className="text-white">{element.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Seminar;
