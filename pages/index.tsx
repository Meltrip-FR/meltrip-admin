//React / Next
import { Header } from "@components/body/headerWhite";
import Head from "next/head";
import { Fragment } from "react";

export default function Layout({ children }: { children: React.ReactElement }) {
  let content = (
    <div className="h-screen flex flex-row flex-auto">
      <div className="flex flex-col w-full">
        <Header />
        {children}
      </div>
    </div>
  );

  return (
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
  );
}
