import BreadCrumbs from "components/utils/breadCrumbs";
import { FormItem } from "components/utils/formItem";
import { useAppSelector } from "redux/hooks";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import FirstSignup from "./formList/FirstSignup";
import SecondSignup from "./formList/SecondSignup";
import ThreePointOneSignup from "./formList/ThreePointOneSignup";
import {
  getOrganizationById,
  getOrganizationBySiret,
  postOrganization,
} from "@lib/organizations";
import { getGroupById, updateGroupbyId } from "@lib/groups";
import { getSeminarById, updateSeminarById } from "@lib/seminar";
import { getUserById, updateUserById } from "@lib/users";

const FormSeminar = () => {
  const router = useRouter();
  const { auth } = useAppSelector((state) => state);
  const [nextPage, setNextPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState({
    status: false,
    url: "",
    message: "",
  });
  const [formState, setFormState] = useState({
    participNumber: 0,
    knowDate: false,
    departurePeriod: "",
    approximateDuration: "",
    startDate: "" || null,
    endDate: "" || null,
    budgetPerPerson: 0,
    typeSeminar: "",
    destinationType: "",
    describeProject: "",
    sleepSuggest: "",
    accompaniedSuggest: "",
    civility: "",
    nameManager: "",
    emailManager: "",
    phoneManager: "",
    emailFinancial: "",
    numberFinancial: "",
    denominationUniteLegale: "",
    siretCompany: "",
  });

  const onFormChange = (e: any) => {
    if (e.target) {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  const getSeminar = useCallback(async () => {
    const seminar: any = getSeminarById(
      auth.user.accessToken,
      router?.query?.id
    );
    if (seminar) {
      const user: any = getUserById(auth.user.accessToken, seminar?.idUser);
      const organization: any = getOrganizationById(seminar?.idOrganization);
      const group: any = getGroupById(seminar?.idGroup);

      setFormState({
        participNumber: seminar?.adultNumber,
        knowDate: seminar?.knowDate === 0 ? false : true,
        departurePeriod: seminar?.departurePeriod,
        approximateDuration: seminar?.approximateDuration,
        startDate: seminar?.startDate || null,
        endDate: seminar?.endDate || null,
        budgetPerPerson: seminar?.budgetPerPerson,
        typeSeminar: seminar?.typeSeminar,
        destinationType: seminar?.destinationType,
        describeProject: seminar?.describeProject,
        sleepSuggest: seminar?.sleepSuggest,
        accompaniedSuggest: seminar?.accompaniedSuggest,
        civility: user?.civility,
        nameManager: user?.username,
        emailManager: user?.email,
        phoneManager: user?.phone,
        emailFinancial: group?.financialEmail,
        numberFinancial: group?.financialPhone,
        denominationUniteLegale: organization?.denominationUniteLegale,
        siretCompany: organization?.siret,
      });
    }
  }, [auth.user.accessToken, auth.user.id]);

  useEffect(() => {
    getSeminar().catch((e) => console.error(e));
  }, [getSeminar]);

  const handSubmit = async () => {
    setLoading(true);
    const seminar: any = getSeminarById(
      auth.user.accessToken,
      router?.query?.id
    );

    if (seminar) {
      let organizationId: string = "";
      const organization: any = getOrganizationBySiret(formState.siretCompany);

      //Create Organization if not exist
      if (!organization?.id) {
        const createOrganization: any = postOrganization(
          formState.siretCompany
        );
        organizationId = createOrganization.id;
      }

      // verifier si le user est update
      await updateUserById(auth.user.accessToken, seminar?.idUser, {
        email: formState.emailManager,
        phone: formState.phoneManager,
        idOrganization: organizationId
          ? organizationId
          : seminar?.idOrganization,
      });

      // verifier si un group est update
      await updateGroupbyId(seminar?.id, {
        financialEmail: formState.emailFinancial,
        financialPhone: formState.numberFinancial,
      });

      // verifier si un seminar est update
      await updateSeminarById(auth.user.accessToken, seminar?.id, {
        adultNumber: formState.participNumber,
        knowDate: formState.knowDate ? 1 : 0,
        departurePeriod: formState.departurePeriod,
        approximateDuration: formState.approximateDuration,
        startDate: formState.startDate,
        endDate: formState.endDate,
        typeSeminar: formState.typeSeminar,
        destinationType: formState.destinationType,
        budgetPerPerson: formState.budgetPerPerson,
        sleepSuggest: formState.sleepSuggest,
        describeProject: formState.describeProject,
        accompaniedSuggest: formState.accompaniedSuggest,
        status: "Accepté",
        step: "devis",
        idUser: seminar?.idUser,
        idOrganization: organizationId
          ? organizationId
          : seminar?.idOrganization,
      });

      setLoading(false);
      setOpenModal(true);
      setTimeout(() => {
        router.push("/admin/seminar/waitinglist");
      }, 3000);
    }
  };

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
              active={true}
            />
            <BreadCrumbs
              url={`/admin/seminar/waitinglist/${router?.asPath}`}
              name="Confirmation de séminaire"
              active={false}
            />
          </div>
        </div>
        <div className="flex flex-col flex-wrap mb-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-5 text-gray-900">
            Séminaires
          </h1>
          {/* Manager */}
          <div className="col-span-6 sm:col-span-3 mb-2">
            <label>Email (créateur du séminaire)</label>
            <FormItem
              type="email"
              name="emailManager"
              label="emailManager"
              style="bg-[#ECF3F2] px-2 py-3"
              value={formState?.emailManager}
              onChange={onFormChange}
              disabled={false}
              required={true}
            />
          </div>
          <div className="col-span-6 sm:col-span-3 mb-2">
            <label>Téléphone (créateur du séminaire)</label>
            <FormItem
              type="text"
              name="phoneManager"
              label="phoneManager"
              style="bg-[#ECF3F2] px-2 py-3"
              value={formState?.phoneManager}
              onChange={onFormChange}
              disabled={false}
              required={true}
            />
          </div>
          {/* Organization */}
          <div className="col-span-6 sm:col-span-3 mb-2">
            <label>
              Siret ({formState.denominationUniteLegale || "undefined"})
            </label>
            <FormItem
              type="text"
              name="siretCompany"
              label="siretCompany"
              style="bg-[#ECF3F2] px-2 py-3"
              value={formState?.siretCompany}
              onChange={onFormChange}
              disabled={false}
              required={true}
            />
          </div>
          {/* Seminar */}
          {nextPage === 1 ? (
            <FirstSignup
              formState={formState}
              setFormState={setFormState}
              setNextPage={setNextPage}
            />
          ) : nextPage === 2 ? (
            <SecondSignup
              formState={formState}
              onFormChange={onFormChange}
              setFormState={setFormState}
              setNextPage={setNextPage}
            />
          ) : (
            nextPage === 3 && (
              <ThreePointOneSignup
                formState={formState}
                onFormChange={onFormChange}
                setFormState={setFormState}
                handSubmit={handSubmit}
                setNextPage={setNextPage}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FormSeminar;
