import React from "react";
import navImg from "../../assets/logo.png";
import dollar from "../../assets/dollar.png";

const Navbar = ({availableBalance}) => {
  return (
    <div className="navbar max-w-[1200px] mx-auto">
      <div className="flex-1">
        <img className="w-[60px] h-[60px]" src={navImg} alt="" />
      </div>
      <div className="flex">
        <ul className="flex items-center gap-4">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
          <button className="btn">
            <span>{availableBalance}</span>
            coin <img className="w-5 h-5" src={dollar} alt="" />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
