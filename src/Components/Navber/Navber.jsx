import React from "react";
import navimage from "../../assets/logo.png";
import dollarImg from "../../assets/dollar 1.png";

const Navber = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img className="w-10 h-10" src={navimage} alt="Logo" />
          </a>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span>6000000</span>
          <span>coin</span>
          <img src={dollarImg} alt="Dollar" />
        </div>
      </div>
    </div>
  );
};

export default Navber;
