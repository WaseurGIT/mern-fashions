import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { FaMoon, FaRegHeart, FaSun } from "react-icons/fa";
import "./Navbar.css";
import { AuthContext } from "../../context/AuthProvider";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdDelete, MdLogout, MdOutlineWbSunny } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeProvider";
import { CartContext } from "../../context/CartProvider";
import Swal from "sweetalert2";
import avatar from "/avater.png";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { cartItems, cartCount, removeFromCart } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    logOut();
    Swal.fire({
      toast: true, // enables toast mode
      position: "top-end", // top-right corner
      icon: "success", // "success", "error", "info", etc.
      title: "Successfully Logged Out", // the text you want to show
      showConfirmButton: false,
      timer: 2000, // auto-close after 2 seconds
      timerProgressBar: true, // optional progress bar
      background: "#f0f0f0", // optional: change background
      iconColor: "#4ade80", // optional: change icon color
    });
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
      {/* <li className="transition-all duration-700 ease-in-out hover:scale-110">
        <NavLink to="/reviewForm">Review</NavLink>
      </li> */}
      <li className="transition-all duration-700 ease-in-out hover:scale-110">
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#FAEAB1] mt-2 rounded-sm shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a
          href="/"
          className="ml-4 md:ml-16 text-xl md:text-3xl lobster-regular text-[#67C090]"
        >
          MERN <span className="text-[#FF9A00]">Fashions</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <button
          onClick={toggleTheme}
          className="btn p-2 rounded-full transition-colors"
        >
          {theme === "light" ? (
            <FaMoon size={22} className="text-gray-800" />
          ) : (
            <FaSun size={22} className="text-yellow-400" />
          )}
        </button>
        <div className="navbar-end gap-2 relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn rounded-full flex items-center gap-2"
          >
            <BsCart2 className="text-lg" />
            {cartCount > 0 && (
              <span className="bg-red-500 text-white rounded-full px-2 text-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Floating Cart List */}
          {isOpen && (
            <div className="absolute right-0 top-12 w-80 bg-white shadow-2xl rounded-2xl p-4 z-50 border border-gray-100">
              {/* Header */}
              <h3 className="font-semibold text-lg text-gray-700 border-b pb-2 mb-3 flex justify-between items-center">
                Your Cart
                <span className="text-sm font-normal text-gray-500">
                  {cartItems.length} item{cartItems.length !== 1 && "s"}
                </span>
              </h3>

              {/* Items */}
              {cartItems.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-6">
                  🛒 Your cart is empty
                </p>
              ) : (
                <ul className="space-y-3 max-h-96 overflow-y-auto pr-1">
                  {cartItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 p-2 rounded-lg transition"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-md border"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800 truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">${item.price}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm font-semibold"
                      >
                        <MdDelete className="text-xl" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="mt-4 border-t pt-3">
                  <div className="flex justify-between mb-3 text-gray-700 font-medium">
                    <span>Total:</span>
                    <span>
                      $
                      {cartItems
                        .reduce((sum, item) => sum + Number(item.price), 0)
                        .toFixed(2)}
                    </span>
                  </div>
                  {/* <NavLink
                    to="/cart"
                    className="btn btn-sm bg-purple-600 hover:bg-purple-700 w-full text-white rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Go to Cart
                  </NavLink> */}
                </div>
              )}
            </div>
          )}
        </div>
        {/* <NavLink to="/wish" className="btn btn-sm rounded-full">
          <FaRegHeart />
        </NavLink> */}
      </div>

      <div className="ml-2">
        {user && (
          <div className="flex items-center gap-2">
            {/* show user profile pic */}
            <img src={avatar} className="w-10 h-10 rounded-full" alt="" />
            <h1 className="text-blue-500 font-semibold w-26">
              Hi, {user.displayName ? user.displayName.split(" ")[0] : "User"}
            </h1>
            <MdLogout
              onClick={handleLogOut}
              className="text-2xl text-red-500 cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
