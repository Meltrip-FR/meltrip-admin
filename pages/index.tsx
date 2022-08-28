//React / Next
import { Header } from "@components/body/headerWhite";
import { useAppSelector } from "@redux/hooks";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import SigninPage from "../components/auth/signin";

export default function Layout({ children }: { children: React.ReactElement }) {
  const router = useRouter();
  const { auth } = useAppSelector((state) => state);

  useEffect(() => {
    router.pathname === "/" && router.push("/admin/dashboard");
  }, [auth.user.roles]);

  let content = (
    <div className="h-screen flex flex-row flex-auto">
      <div className="flex flex-col w-full">
        <Header />
        {children}
      </div>
    </div>
  );

  return auth.login ? (
    <Fragment>
      <Head>
        <meta name="author" content="Meltrip" />
        <meta charSet="utf-8" />
        <title>Meltrip - Admin</title>
        <link rel="meltrip icon" href="logo2.webp" />
      </Head>
      <noscript
        style={{
          fontFamily: "sans-serif",
          display: "grid",
          placeItems: "center",
          height: "100vh",
        }}
      >
        Please enable Javascript to access to Meltrip
      </noscript>
      {content}
    </Fragment>
  ) : (
    <SigninPage />
  );
}
