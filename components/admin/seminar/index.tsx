import BreadCrumbs from "@components/utils/breadCrumbs";
import { useRouter } from "next/router";

const Seminar = () => {
  const router = useRouter();
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex justify-between mb-4">
          <div className="flex items-center mb-3 mt-3">
            <BreadCrumbs url="/" name="home" active={false} />
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
          <div
            className="bg-meltrip-secondary w-full p-2 rounded-lg text-left mt-5 hover:bg-orange-800 cursor-pointer"
            onClick={() => router.push("seminar/list/")}
          >
            <span className="text-white">Vos Séminaires (2)</span>
          </div>
          <div className="w-full p-2 rounded-lg text-left mt-5">
            <span>Vos Collègues (6)</span>
          </div>
          {/* LIst user .map */}
          <div className="grid grid-cols-4 w-full">
            <div className="flex flex-col items-center mt-4">
              <img
                className="mb-3 w-24 h-24 rounded-full shadow-lg"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              />
              <h3 className="mb-1 text-xl font-medium text-gray-900">
                Bonnie Green
              </h3>
            </div>
            <div className="flex flex-col items-center mt-4">
              <img
                className="mb-3 w-24 h-24 rounded-full shadow-lg"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              />
              <h3 className="mb-1 text-xl font-medium text-gray-900">
                Bonnie Green
              </h3>
            </div>
            <div className="flex flex-col items-center mt-4">
              <img
                className="mb-3 w-24 h-24 rounded-full shadow-lg"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              />
              <h3 className="mb-1 text-xl font-medium text-gray-900">
                Bonnie Green
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seminar;
