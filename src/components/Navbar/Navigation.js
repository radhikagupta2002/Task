import React from "react";
import Sidebar from "../Sidebar";
import MainNav from "./MainNav";
import "./Navigation.css";
const Navigation = ({ children }) => {
  return (
    <div className="view">
      <MainNav />
      <div className="main-cont-w_sidebar">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Navigation;
