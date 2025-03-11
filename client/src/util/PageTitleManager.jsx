// src/utils/PageTitleManager.js
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      "/": "Reserve the most finest and exquisite coloured gemstones from us! - SUBLIME.CO.TH",
      "/details/": "Reserve the most finest and exquisite coloured gemstones from us! - SUBLIME.CO.TH",
      // Add more routes as needed
    };

    document.title = pageTitles[location.pathname] || "Kassapalionrock";
  }, [location]);

  return null; // This component renders nothing
};

export default PageTitleManager;
