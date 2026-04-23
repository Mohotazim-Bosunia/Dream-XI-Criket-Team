import React from "react";
import navimage from "../../assets/logo.png";
import dollarImg from "../../assets/dollar 1.png";

const Navber = ({ balance }) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm flex justify-between">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img className="w-16 h-16" src={navimage} alt="Logo" />
          </a>
        </div>
        <div className="flex justify-center items-center gap-2 text-2xl font-bold">
          <img className="w-8" src={dollarImg} alt="Dollar" />
          <span>{balance} cr</span>
        </div>
      </div>
    </div>
  );
};

export default Navber;
