import "../styles/global.css";
import { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="t3.gg">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}
