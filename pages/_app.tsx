import { AppProps } from "next/app";
import "../common/styles/globals";

export default function _app({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
