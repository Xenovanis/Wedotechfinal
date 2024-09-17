
import React from 'react';
import logo from "../../assets/Logo.svg";
import menubar from "../../assets/Menubar.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-12 px-20  ">
      <div className="flex items-center">
        <img src={logo} alt="Wedotech" className="h-10 w-auto" />
      </div>
      <div className="flex items-center space-x-12 text-black-600">
        <a href="#" className="hover:text-black text-xl">Services</a>
        <a href="#" className="hover:text-black text-xl">About</a>
        <a href="#" className="hover:text-black text-xl">Get in touch</a>
        <div>
          <img src={menubar} alt="Menu" className="h-5 w-auto" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


