import Router from 'next/router';
import React from 'react';
import Head from 'next/head';
import '../styles/globals.scss';
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
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
          <link type="text/css" href="https://s3.amazonaws.com/glowscript/css/redmond/2.1/jquery-ui.custom.css" rel="stylesheet" />
          <link type="text/css" href="https://s3.amazonaws.com/glowscript/css/ide.css" rel="stylesheet" />
          <script type="text/javascript" src="https://s3.amazonaws.com/glowscript/lib/jquery/2.1/jquery.min.js"></script>
          <script type="text/javascript" src="https://s3.amazonaws.com/glowscript/lib/jquery/2.1/jquery-ui.custom.min.js"></script>
          <script type="text/javascript" src="https://s3.amazonaws.com/glowscript/package/glow.3.0.min.js"></script>
          <script type="text/javascript" src="http://latex.codecogs.com/latexit.js"></script>
          <script type="text/javascript">
            LatexIT.add('p',true)
          </script>
          <title>LabFísica</title>
        </Head>
      </>
      )
  }
  
  export default App