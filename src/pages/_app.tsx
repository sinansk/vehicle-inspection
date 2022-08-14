import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Register from "../components/Register";
import ContactPage from "./ContactPage";
import AboutUsPage from "./AboutUsPage";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vehicle Inspection</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {/* <Register /> */}
      {/* <AboutUsPage /> */}
      {/* <ContactPage /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
