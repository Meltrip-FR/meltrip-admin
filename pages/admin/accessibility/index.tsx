import Accessibility from "@components/admin/organization";
import store from "@redux/store";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AccessibilityPage = () => {
  let { auth } = store.getState();
  const router = useRouter();

  useEffect(() => {
    if (auth.login === false) {
      router.push("/home");
    }
  }, [auth.login]);

  return <Accessibility />;
};

export default AccessibilityPage;
