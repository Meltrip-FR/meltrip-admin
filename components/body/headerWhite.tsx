import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { logout } from "@redux/slices/auth.slice";

// Icons
import ChevronDown from "@components/assets/icons/chevronDown";
import ChevronUp from "@components/assets/icons/chevronUp";
import ArrowOut from "@components/assets/icons/arrowOut";
import LogoColor from "@components/assets/icons/logoColor";

export const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { auth } = useAppSelector((state) => state);

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const signOut = () => {
    dispatch(logout());
    router.push("/home");
  };

  return (
    <div className="w-full font-body font-poppins">
      <div className="grid grid-cols-3">
        <div className="pl-5" onClick={() => router.push("/home")}>
          <LogoColor size={100} color={"white"} />
        </div>
        <div className="grid grid-flow-col auto-cols-max gap-20 text-base justify-center items-center text-left uppercase">
          <h5 className="cursor-pointer" onClick={() => router.push("/")}>
            NOTRE AGENCE
          </h5>
          <h5 className="cursor-pointer" onClick={() => router.push("/")}>
            SÉMINAIRES
          </h5>
          <h5 className="cursor-pointer" onClick={() => router.push("/blog")}>
            BLOG
          </h5>
          <h5
            className="cursor-pointer"
            onClick={() => router.push("/contact")}
          >
            CONTACT
          </h5>
        </div>
        <div className="flex items-center justify-center text-base uppercase">
          <div className="flex flex-row align-center items-center justify-between w-full">
            <div className="block lg:hidden ml-6" />
            <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
              <div className="relative p-1 flex items-center w-full space-x-4 justify-end">
                {!auth.login ? (
                  <Fragment>
                    <span
                      className="uppercase cursor-pointer"
                      onClick={() => router.push("/auth/signin")}
                    >
                      Se Connecter
                    </span>
                    <span className="w-1 h-8 pt-1 bg-black" />
                    <span
                      className="uppercase cursor-pointer"
                      onClick={() => router.push("/auth/signup")}
                    >
                      S'inscription
                    </span>
                  </Fragment>
                ) : (
                  <Fragment>
                    {/* <div className="block relative">
                      <img
                        referrerPolicy="no-referrer"
                        alt="profil"
                        src={
                          "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm"
                        }
                        className="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </div> */}
                    <div className="relative inline-block text-left">
                      <button
                        className="flex items-center  text-lg tracking-wider pr-5 uppercase"
                        onClick={() => setOpenMenu(!openMenu)}
                      >
                        <span>
                          {auth.user.firstname + " " + auth.user.lastname}
                        </span>
                        {openMenu ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </button>
                      {openMenu && (
                        <Fragment>
                          <div className="origin-top-right absolute right-0 mt-3 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                            <div className="py-1 cursor-pointer">
                              <div
                                onClick={() => router.push("/admin/dashboard")}
                                className="border-b border-white flex items-center justify-start px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover: dark:hover:bg-gray-600"
                              >
                                <span className="ml-2">
                                  <span>Dashboard</span>
                                </span>
                              </div>
                              <div
                                onClick={() => signOut()}
                                className=" flex items-center justify-start px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover: dark:hover:bg-gray-600"
                              >
                                <ArrowOut size={15} />
                                <span className="ml-2">
                                  <span>Logout</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </Fragment>
                      )}
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
