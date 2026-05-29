import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { calibre, jetbrains_mono } from "public/fonts";
import { GoogleAnalytics } from "@next/third-parties/google";
import Meta from "@/components/Meta/Meta";
import Navbar from "@/components/Header/Navbar";
import FooterSimple from "@/components/Footer/FooterSimple";
import "../styles/globals.scss";
import { GTAG } from "constants";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <>
      <Meta />
      <main
        className={`${calibre.variable} font-sans ${jetbrains_mono.variable} font-mono`}
      >
        <Navbar />
        <Component {...pageProps} />
        {!isHome && <FooterSimple />}
        <GoogleAnalytics gaId={GTAG} />
      </main>
    </>
  );
};

export default App;
