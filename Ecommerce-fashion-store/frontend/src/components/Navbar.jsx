import React from "react";
import { NavLink } from "react-router-dom";
import { MdHomeFilled, MdCategory, MdShopTwo, MdContacts } from "react-icons/md"; // Corrected MdShop2 to MdShopTwo

const Navbar = ({ containerStyle }) => {
  return (
    <nav className={containerStyle}>
      <NavLink
        to="/"
        className="flex items-center gap-x-1 text-black hover:text-orange-500"
        activeClassName="text-orange-500 underline"
      >
        <MdHomeFilled />
        <span className="ml-1">Home</span> {/* Added a margin for spacing */}
      </NavLink>
      <NavLink
        to="/mens"
        className="flex items-center gap-x-1 text-black hover:text-orange-500"
        activeClassName="text-orange-500 underline"
      >
        <MdCategory />
        <span className="ml-1">Men</span>
      </NavLink>
      <NavLink
        to="/womens"
        className="flex items-center gap-x-1 text-black hover:text-orange-500"
        activeClassName="text-orange-500 underline"
      >
        <MdShopTwo />
        <span className="ml-1">Women</span> {/* Corrected MdShop2 to MdShopTwo */}
      </NavLink>
      <NavLink
        to="/kids"
        className="flex items-center gap-x-1 text-black hover:text-orange-500"
        activeClassName="text-orange-500 underline"
      >
        <MdContacts />
        <span className="ml-1">Kids</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
