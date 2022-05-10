import Theme from "../styles/theme";
import "../css/index.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
