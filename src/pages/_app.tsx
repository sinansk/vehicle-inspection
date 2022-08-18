import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vehicle Inspection</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Newsletter />
      <Footer />
    </>
  );
}

export default MyApp;
