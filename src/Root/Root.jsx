import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Root = () => {
  return (
    <div className="min-h-screen relative z-10">
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
