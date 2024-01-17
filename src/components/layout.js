import React from "react";
import "../global.css";
import "../index.css";
import "../about.css";
import "../dashboard.css";
import "../auth.css";
import "../card.css";
import "../postcard.css"
import "../blog.css"

import Footer from "./footer";
import { CookiesProvider } from "react-cookie";
import { AppProvider } from "../context_api/Appcontext";

const Layout = ({ children }) => {
  return (
    <CookiesProvider>
      <AppProvider>
        <main className="parent">
          {children}
          <Footer />
        </main>
      </AppProvider>
    </CookiesProvider>
  );
};

export default Layout;
