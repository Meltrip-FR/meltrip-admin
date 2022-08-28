import SeminarList from "@components/admin/seminar/list";
import store from "@redux/store";
import { useRouter } from "next/router";
import Layout from "pages";
import { useEffect } from "react";

const SeminarListPage = () => {
  let { auth } = store.getState();
  const router = useRouter();

  useEffect(() => {
    if (auth.login === false) {
      router.push("/home");
    }
  }, [auth.login]);

  return (
    <Layout>
      <SeminarList />
    </Layout>
  );
};

export default SeminarListPage;
