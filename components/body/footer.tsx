// import { useState } from "react";

// //Firestore
// import { addContact } from "database/data/contact";

// //Library && css
// import { toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

//Icons
import LogoTitle from "@components/assets/icons/logoTitle";
import Instagram from "@components/assets/icons/socials/instagram";
import Facebook from "@components/assets/icons/socials/facebook";
import Linkedin from "@components/assets/icons/socials/linkedin";
import Twitter from "@components/assets/icons/socials/twitter";

const Footer = () => {
  // const [firstName, setFirstName] = useState<string>("");
  // const [lastName, setLastName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [message, setMessage] = useState<string>("");

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();

  //   if (firstName && lastName && email && message) {
  //     const res = await addContact(firstName, lastName, email, message);
  //     if (res) {
  //       setFirstName("");
  //       setLastName("");
  //       setEmail("");
  //       setMessage("");
  //       toast.success(
  //         "Message bien envoyé, nos équipes vous recontacteront au plus vite !",
  //         {
  //           position: "top-right",
  //           autoClose: 3000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: false,
  //           draggable: true,
  //           progress: undefined,
  //         }
  //       );
  //     } else {
  //       setMessage("");
  //       toast.error("Une erreur est survenue lors de l'envoi !", {
  //         position: "top-right",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: false,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     }
  //   } else {
  //     toast.error("Vous devez remplir tous les champs !", {
  //       position: "top-right",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: false,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }
  // };

  return (
    <footer className=" bg-meltrip-primary body-font mt-14">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-96 flex flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <LogoTitle size={150} color={"white"} />
          </a>
          <div className="ml-5">
            <p className="w-full mt-2 text-sm text-meltrip-textW">
              Vous avez peur d’avoir du mal à organiser votre séminaire ou vous
              ne voulez pas perdre de temps avec l’organisation de celui-ci ?
            </p>
            <p className="w-full mt-2 text-sm text-meltrip-textW">
              Meltrip, c’est l’agence événementielle qu’il vous faut !
            </p>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-extrabold text-meltrip-textW tracking-widest text-sm mb-3 uppercase">
              Liens Utiles
            </h2>
            <nav className="list-none mb-10">
              <li className="pt-5">
                <a className="text-meltrip-textW hover:text-gray-50">
                  Organiser mon séminaire
                </a>
              </li>
              <li className="pt-5">
                <a className="text-meltrip-textW hover:text-gray-50">
                  Nous rejoindre
                </a>
              </li>
              <li className="pt-5">
                <a
                  className="text-meltrip-textW hover:text-gray-50"
                  href="/help"
                >
                  CGV & CGU
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-extrabold text-meltrip-textW tracking-widest text-sm mb-3 uppercase">
              En savoir plus
            </h2>
            <nav className="list-none mb-10">
              <li className="pt-5">
                <a className="text-meltrip-textW hover:text-gray-50">contact</a>
              </li>

              <li className="pt-5">
                <a className="text-meltrip-textW hover:text-gray-50">
                  Newsletter
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-extrabold text-meltrip-textW tracking-widest text-sm mb-3 uppercase">
              Adresse
            </h2>
            <nav className="list-none mb-10">
              <li className="pt-5">
                <a className="text-meltrip-textW hover:text-gray-50 underline">
                  11 rue Cambrai
                </a>
              </li>
              <li className="pt-5">
                <a className="text-meltrip-textW hover:text-gray-50">
                  +33 6 32 07 10 64
                </a>
              </li>
              <li className="pt-5">
                <a className="text-meltrip-textW hover:text-gray-50">
                  contact@meltrip.com
                </a>
              </li>
            </nav>
          </div>
          <div className="-mt-10 lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              <li className="p-1">
                <Instagram size={50} color={"text-meltrip-primary"} />
              </li>
              <li className="p-1">
                <Facebook size={50} color={"text-meltrip-primary"} />
              </li>
              <li className="p-1">
                <Twitter size={50} color={"text-meltrip-primary"} />
              </li>
              <li className="p-1">
                <Linkedin size={50} color={"text-meltrip-primary"} />
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
