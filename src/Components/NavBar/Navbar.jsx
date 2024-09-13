
import React, { useState } from 'react'
import logo from "../../assets/Logo.svg"
// import menubar from '../../assets/Menubar.svg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <nav className="relative z-20">
      <div className=" flex items-center justify-between py-4 px-4 sm:py-8 sm:px-6 md:py-12 md:px-20">
        <div className="flex items-center">
          {/* <img src={logo} alt="Wedotech" className="h-8 w-auto sm:h-10" /> */}
        </div>
        <div className="hidden md:flex items-center space-x-6 lg:space-x-12 text-black-600">
          <a href="#" className="hover:text-black text-lg lg:text-xl">Services</a>
          <a href="#" className="hover:text-black text-lg lg:text-xl">About</a>
          <a href="#" className="hover:text-black text-lg lg:text-xl">Get in touch</a>
        </div>
        <button onClick={toggleMenu} className="focus:outline-none z-20">
          <img src={menubar} alt="Menu" className="h-6 w-auto" />
        </button>
      </div>
      
      {/* Menu section */}
      <div 
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} 
        onClick={closeMenu}  // Close when clicking outside the menu
      >
        <div 
          className="flex flex-col items-center justify-center h-full space-y-8"
          onClick={stopPropagation}  // Prevent closing when clicking inside the menu
        >
          <a href="#" className="hover:text-black text-xl">Services</a>
          <a href="#" className="hover:text-black text-xl">About</a>
          <a href="#" className="hover:text-black text-xl">Get in touch</a>
        </div>
      </div>
    </nav>
  )
}