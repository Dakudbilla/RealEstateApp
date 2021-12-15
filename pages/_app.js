import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  nProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", () => {
    nProgress.start();
  });

  Router.events.on("routeChangeStart", () => {
    nProgress.done();
  });
  return (
    <>
      <Head>
        <title>realEstor</title>
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
