import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { calibre, jetbrains_mono } from "../public/fonts";
import { GoogleAnalytics } from "@next/third-parties/google";
import Meta from "@/components/Meta/Meta";
import Navbar from "@/components/Header/Navbar";
import FooterSimple from "@/components/Footer/FooterSimple";
import Cursor from "@/components/Cursor/Cursor";
import "../styles/globals.scss";
import { GTAG } from "../constants";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", background: "#120e16", color: "#cf0000", minHeight: "100vh", fontFamily: "monospace", overflow: "auto" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>🚨 Next.js Hydration / Render Error</h2>
          <pre style={{ whiteSpace: "pre-wrap", background: "rgba(255,255,255,0.02)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(255, 0, 0, 0.2)" }}>
            {this.state.error?.toString()}
          </pre>
          <h3 style={{ fontSize: "18px", marginTop: "24px", marginBottom: "8px", color: "#dbdbdb" }}>Stack Trace:</h3>
          <pre style={{ whiteSpace: "pre-wrap", background: "rgba(255,255,255,0.01)", padding: "16px", borderRadius: "8px", color: "#8a8a8a", fontSize: "12px", lineHeight: "1.6" }}>
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [isDesktop, setIsDesktop] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const { orientation, history } = window;
    const result =
      typeof orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    history.scrollRestoration = "manual";
    setIsDesktop(result);
  }, []);

  return (
    <ErrorBoundary>
      <Meta />
      <main
        className={`${calibre.variable} font-sans ${jetbrains_mono.variable} font-mono`}
      >
        {mounted && <Cursor isDesktop={isDesktop} pathname={router.pathname} />}
        {mounted && <Navbar />}
        <Component {...pageProps} />
        {mounted && !isHome && <FooterSimple />}
        {GTAG && <GoogleAnalytics gaId={GTAG} />}
      </main>
    </ErrorBoundary>
  );
};

export default App;
