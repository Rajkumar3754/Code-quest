import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { FaOpencart, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false); // State to manage mobile menu open/close
  const [cartCount, setCartCount] = useState(0); // State to manage cart count

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  // Function to add item to cart and update cart count
  const addItemToCart = () => {
    setCartCount(cartCount + 1); // Increment cart count by 1
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white ring-1 ring-slate-900/5 z-10">
      <div className="px-4 flex items-center justify-between py-3 max-xs:px-2">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} height={66} width={88} alt="Logo" />
        </Link>

        {/* Navbar for Desktop (Medium and Above) */}
        <div className="hidden md:flex flex-1 justify-center">
          <Navbar containerStyle="flex gap-x-5 xl:gap-x-10 items-center" />
        </div>

        {/* Cart NavLink for Small and Medium Screens (Right Side) */}
        <div className="flex items-center ml-auto space-x-4 relative">
          {/* Cart NavLink */}
          <NavLink
            to="/cart"
            className="text-black hover:text-secondary cursor-pointer relative"
            activeClassName="text-orange-500 hover:text-orange-700 underline"
          >
            <div className="relative" onClick={addItemToCart}>
              <FaOpencart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </div>
          </NavLink>

          {/* Logout Button
          <button className="flex items-center text-orange-500 hover:text-orange-700 cursor-pointer">
            <FaSignOutAlt size={20} className="mr-1" />
            Logout
          </button> */}

          {/* Login NavLink */}
          <NavLink
            to="/login"
            className="flex items-center text-blue-500 hover:text-blue-700 cursor-pointer"
            activeClassName="text-orange-500 hover:text-orange-700 underline"
          >
            <FaSignInAlt size={20} className="mr-1" />
            Login
          </NavLink>
        </div>

        {/* Menu Button for Mobile */}
        <div className="md:hidden flex items-center">
          <div className="ml-4" onClick={toggleMenu}>
            {menuOpened ? (
              <MdClose className="text-black hover:text-orange-500 cursor-pointer" size={24} />
            ) : (
              <MdMenu className="text-black hover:text-orange-500 cursor-pointer" size={24} />
            )}
          </div>
        </div>
      </div>

      {/* Navbar for Mobile */}
      <div
        className={`md:hidden fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 ${
          menuOpened ? "flex flex-col gap-y-12" : "hidden"
        }`}
      >
        <Navbar containerStyle="flex flex-col gap-y-12 items-center" />
      </div>
    </header>
  );
};

export default Header;
