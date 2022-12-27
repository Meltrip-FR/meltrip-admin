import BreadCrumbs from "@components/utils/breadCrumbs";
import { useAppSelector } from "@redux/hooks";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export function sortByDate(array: any) {
  if (array?.length > 0)
    return array?.sort(function (a: any, b: any) {
      return (
        new Date(b?.seminar?.createdAt).valueOf() -
        new Date(a?.seminar?.createdAt).valueOf()
      );
    });
}

const SeminarWaiting = () => {
  const router = useRouter();
  const { auth } = useAppSelector((state) => state);
  const [seminarList, setListSeminar] = useState<any>();

  const getSeminar = useCallback(async () => {
    let arrayUserSeminar = [];

    const seminar = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/seminars`,
      {
        headers: {
          "x-access-token": auth.user.accessToken,
        },
      }
    );
    const seminarList = seminar.data;
    if (seminarList?.length > 0) {
      for (let seminar of seminarList) {
        const users = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/${seminar.idUser}`,
          {
            headers: {
              "x-access-token": auth.user.accessToken,
            },
          }
        );

        const organization = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/organization/${users?.data?.idOrganization}`
        );
        arrayUserSeminar.push({
          seminar: { ...seminar },
          organization: { ...organization.data },
          user: { ...users.data },
        });
      }
    }
    setListSeminar(sortByDate(arrayUserSeminar));
  }, [auth.user.accessToken, auth.user.id]);

  useEffect(() => {
    getSeminar().catch((e) => console.error(e));
  }, [getSeminar]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex justify-between mb-4">
          <div className="flex items-center mb-3 mt-3">
            <BreadCrumbs url="/admin/dashboard" name="Compte" active={true} />
            <BreadCrumbs url="/admin/seminar" name="Séminaires" active={true} />
            <BreadCrumbs
              url="/admin/seminar/waitinglist"
              name="Séminaires Waiting"
              active={false}
            />
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-5 text-gray-900">
            Séminaires Waiting
          </h1>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Créateur</th>
                  <th>Entreprise</th>
                  <th>Date de création</th>
                </tr>
              </thead>
              <tbody>
                {seminarList?.length > 0 &&
                  seminarList?.map((element: any, index: any) => {
                    return (
                      element?.seminar?.status === ("Attente" || null) && (
                        <tr
                          key={index}
                          className="cursor-pointer hover"
                          onClick={() => {
                            router.push(
                              `/admin/seminar/waitinglist/${element?.seminar?.id}`
                            );
                          }}
                        >
                          <th>{element?.seminar?.id}</th>
                          <td>{element?.user?.email}</td>
                          <td>
                            {element?.organization?.denominationUniteLegale}
                          </td>
                          <td> {element?.seminar?.createdAt}</td>
                        </tr>
                      )
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeminarWaiting;
