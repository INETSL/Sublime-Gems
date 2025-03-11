// Layout.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import IntergratedNavBar from "./components/NavBar/IntergratedNavBar";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout({ children }) {
  const location = useLocation();
  const showHeaderAndFooter = location.pathname !== "/admin";

  return (
    <>
      {showHeaderAndFooter && <IntergratedNavBar />}
      <ScrollToTop />
      {children}
      {showHeaderAndFooter && <Footer />}
    </>
  );
}

export default Layout;
