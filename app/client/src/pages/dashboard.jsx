import React from "react";
import Navbar from "../components/navbar.jsx";
import Addjoin from "../components/addjoin.jsx";

const dashboard = ({ baseip }) => {
  return (
    <div className="min-h-[80vh] ">
      <Navbar />
      <Addjoin baseip={baseip} />
    </div>
  );
};

export default dashboard;
