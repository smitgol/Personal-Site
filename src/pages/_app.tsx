import Theme from "../styles/theme";
import "../css/index.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <title>Smit Gol</title>
      </Head>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
