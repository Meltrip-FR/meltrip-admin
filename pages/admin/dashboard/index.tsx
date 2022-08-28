import Dashboard from "@components/admin/dashboard";
import store from "@redux/store";
import { useRouter } from "next/router";
import Layout from "pages";
import { useEffect } from "react";

const DashboardPage = () => {
  let { auth } = store.getState();
  const router = useRouter();

  useEffect(() => {
    if (auth.login === false) {
      router.push("/home");
    }
  }, [auth.login]);

  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default DashboardPage;
