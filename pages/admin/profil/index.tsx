import Profil from "@components/admin/profil";
import store from "@redux/store";
import { useRouter } from "next/router";
import Layout from "pages";
import { useEffect } from "react";

const ProfilPage = () => {
  return (
    <Layout>
      <Profil />
    </Layout>
  );
};

export default ProfilPage;
