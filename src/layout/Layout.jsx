import React from "react";
import { Outlet } from "react-router-dom";
import "../components/navBar/NavBar.jsx";
import NavBar from "../components/navBar/NavBar.jsx";
import LeftBar from "../components/leftBar/LeftBar.jsx";
import RightBar from "../components/rightBar/RightBar.jsx";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default Layout;
