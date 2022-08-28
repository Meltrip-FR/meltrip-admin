import Seminar from "@components/admin/seminar";
import store from "@redux/store";
import { useRouter } from "next/router";
import Layout from "pages";
import { useEffect } from "react";

const SeminarPage = () => {
  let { auth } = store.getState();
  const router = useRouter();

  useEffect(() => {
    if (auth.login === false) {
      router.push("/home");
    }
  }, [auth.login]);
  return (
    <Layout>
      <Seminar />
    </Layout>
  );
};

export default SeminarPage;
