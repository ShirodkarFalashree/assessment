import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div
      className="w-screen min-h-screen flex flex-col items-center overflow-x-hidden relative"
      style={{
        background:
          "linear-gradient(318deg, rgba(234,176,255,1) 0%, rgba(255,255,255,1) 38%, rgba(255,255,255,1) 52%, rgba(255,255,255,1) 67%, rgba(234,176,255,1) 98%)",
      }}
    >
      <div className="w-full z-10">
        <Navbar />
      </div>
      <div className="w-full flex-grow z-10">
        <Outlet />
      </div>
      <div className="w-full z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
