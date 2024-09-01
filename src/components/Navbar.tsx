import React from "react"
// @ts-ignore
import { assets } from "../assets/frontend_assets/assets.js";
import { NavLink } from "react-router-dom";

interface NavbarProps {
}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex py-5 font-medium items-center justify-between">
      <img src={assets.logo} className="w-36" />
      <ul className="hidden sm:flex text-sm text-gray-700 gap-5">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 bg-gray-700 h-[1.5px] border-black hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 bg-gray-700 h-[1.5px] border-black hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 bg-gray-700 h-[1.5px] border-black hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 bg-gray-700 h-[1.5px] border-black hidden" />
        </NavLink>
      </ul>
    </div>
  )
}

