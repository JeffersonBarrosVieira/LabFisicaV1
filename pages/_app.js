import Router from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import '../styles/globals.css';
import NProgress from 'nprogress';

Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
  });
  
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());
  
  function App({ Component, pageProps }) {
    return (
      <>
        <Component {...pageProps} />
        <Head>
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
          <link rel="stylesheet" type="text/css" href="/styles.css" />
        </Head>
      </>
      )
  }
  
  export default App