import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import "./Navbar.css";
import { AuthContext } from "../../context/AuthProvider";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  const links = (
    <>
      <li className="transition-all duration-700 ease-in-out hover:scale-110">
        <a href="#shoes">Shoes</a>
      </li>
      <li className="transition-all duration-700 ease-in-out hover:scale-110">
        <a href="#boots">Boots</a>
      </li>
      <li className="transition-all duration-700 ease-in-out hover:scale-110">
        <a href="#bottles">Bottles</a>
      </li>
      <li className="transition-all duration-700 ease-in-out hover:scale-110">
        <a href="#bags">Bags</a>
      </li>
      <li className="transition-all duration-700 ease-in-out hover:scale-110">
        <a href="#socks">Socks</a>
      </li>
      <li className="transition-all duration-700 ease-in-out hover:scale-110">
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#FAEAB1] mt-2 rounded-sm shadow-sm px-4">
      {/* Left Side */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        {/* Logo */}
        <a href="/" className="ml-4 md:ml-16 text-xl md:text-3xl lobster-regular text-[#67C090]">
          MERN <span className="text-[#FF9A00]">Fashions</span>
        </a>
      </div>

      {/* Center Menu (Hidden on mobile) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end gap-2">
        <NavLink to="/cart" className="btn btn-sm rounded-full">
          <BsCart2 />
        </NavLink>
        {/* <NavLink to="/wish" className="btn btn-sm rounded-full">
          <FaRegHeart />
        </NavLink> */}
      </div>

      {/* User Info (Shows on all devices) */}
      <div className="ml-2">
        {user && (
          <div className="flex items-center gap-2">
            <FaRegCircleUser className="text-2xl text-green-500" />
            <MdLogout onClick={handleLogOut} className="text-2xl text-red-500 cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
