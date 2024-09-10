import React from 'react';
import logo from "../../assets/Logo.png";
import menubar from "../../assets/Menubar.png";

const Navbar = () => { 
  return  (

    


<nav className="flex items-center justify-between p-4 px-6 md:px-16">
   
      <div className="flex items-center">
        <img className="w-8 md:w-16" src={logo} alt="Wedotech" />
      </div>
     
     
 
      <div className="flex items-center space-x-8  text-gray-600">
      <a href="#" className="hover:text-black">Services</a>
      <a href="#" className="hover:text-black">About</a>
      <a href="#" className="hover:text-black">Get in touch</a>
       <div> <img className="w-8 md:w-7" src={menubar} alt="Menu" /> </div>
      </div>
    </nav>


  )
}

export default Navbar;
