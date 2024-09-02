import React, { ReactNode, useState } from "react"
// @ts-ignore
import { assets } from "../assets/frontend_assets/assets.js";
import { NavLink } from "react-router-dom";

interface NavbarProps {
}

interface MenuLinkProps {
  handleOnClick: () => void,
  children: ReactNode,
  href: string
}

const MenuLink: React.FC<MenuLinkProps> = ({ handleOnClick, href, children }) => {

  return (
    <NavLink onClick={handleOnClick}
      className={({ isActive }) => [
        isActive ? 'bg-black text-white' : '',
        'py-2 pl-6 border'
      ].join(" ")}
      to={href}
    >
      {children}
    </NavLink>
  )
}


export const Navbar: React.FC<NavbarProps> = () => {
  const [visible, setVisible] = useState(false)

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
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" />
        <img src={assets.profile_icon} className="w-5 cursor-pointer" />
        <NavLink to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 cursor-pointer" />
          <p className="absolute bottom-[-5px] right-[-5px] w-4 leading-4 bg-black rounded-full text-center text-[8px] text-white">10</p>
        </NavLink>
        <img src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" onClick={() => setVisible(true)} />
      </div>
      {
        <div className={`absolute top-0 bottom-0 right-0 left-0 overflow-hidden transition-all ${visible ? 'w-full' : 'w-0'} bg-white`}>
          <div className="flex flex-col text-gray-600">
            <div className="flex items-center gap-4 p-3 cursor-pointer" onClick={() => setVisible(false)}>
              <img src={assets.dropdown_icon} className="h-4 rotate-180" />
              <p>Back</p>
            </div>
            <MenuLink handleOnClick={() => setVisible(false)} href="/"> HOME</MenuLink>
            <MenuLink handleOnClick={() => setVisible(false)} href="/collection"> COLLECTION</MenuLink>
            <MenuLink handleOnClick={() => setVisible(false)} href="/about"> ABOUT</MenuLink>
            <MenuLink handleOnClick={() => setVisible(false)} href="/contact"> CONTACT</MenuLink>
          </div>
        </div>
      }
    </div >
  )
}

