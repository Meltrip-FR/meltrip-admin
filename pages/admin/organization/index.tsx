import Organization from "@components/admin/organization";
import store from "@redux/store";
import { useRouter } from "next/router";
import Layout from "pages";
import { useEffect } from "react";

const OrganizationPage = () => {
  let { auth } = store.getState();
  const router = useRouter();

  useEffect(() => {
    if (auth.login === false) {
      router.push("/home");
    }
  }, [auth.login]);

  return (
    <Layout>
      <Organization />
    </Layout>
  );
};

export default OrganizationPage;
