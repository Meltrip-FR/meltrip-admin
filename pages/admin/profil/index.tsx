import Profil from "@components/admin/profil";
import store from "@redux/store";
import { useRouter } from "next/router";
import Layout from "pages";
import { useEffect } from "react";

const ProfilPage = () => {
  let { auth } = store.getState();
  const router = useRouter();

  useEffect(() => {
    if (auth.login === false) {
      router.push("/home");
    }
  }, [auth.login]);

  return (
    <Layout>
      <Profil />
    </Layout>
  );
};

export default ProfilPage;
