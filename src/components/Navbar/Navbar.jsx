import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import "./Navbar.css";

const NavBar = () => {
  const links = (
    <>
      <li className="transition-all duration-700 ease-in-out hover:scale-110">
        <NavLink to="/">Shoes</NavLink>
      </li>
      <li className="transition-all duration-700 ease-in-out hover:scale-110">
        <NavLink to="/">Boots</NavLink>
      </li>
      <li className="transition-all duration-700 ease-in-out hover:scale-110">
        <NavLink to="/dashboard">Bottles</NavLink>
      </li>
      <li className="transition-all duration-700 ease-in-out hover:scale-110">
        <NavLink to="/dashboard">Bags</NavLink>
      </li>
      <li className="transition-all duration-700 ease-in-out hover:scale-110">
        <NavLink to="/dashboard">Socks</NavLink>
      </li>
      <li className="transition-all duration-700 ease-in-out hover:scale-110">
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar  bg-[#FAEAB1] mt-2 rounded-sm  shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a href="/" className="ml-16 text-3xl lobster-regular text-[#67C090]">
          MERN <span className="text-[#FF9A00]">Fashions</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2 ">
        <NavLink to="/cart" className="btn rounded-full">
          <BsCart2 />
        </NavLink>
        <NavLink to="/wish" className="btn rounded-full">
          <FaRegHeart />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
