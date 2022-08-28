// React / Next
import { useEffect } from "react";
import type { AppProps } from "next/app";

// Redux
import store, { persistor } from "@redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// CSS
import "../styles/globals.css";

// Constants
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  let { auth } = store.getState();
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      router.push("/home");
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
