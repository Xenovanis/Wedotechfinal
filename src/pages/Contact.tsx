import React from "react";
import logocercle from "../assets/logo/logo_cercle.png";
import patternMobile from "../assets/patterns/mobileHomePattern.svg";

import Navbar from "../components/Layout/Navbar.jsx";
import ContactHero from "../components/contact/ContactHero.jsx"
import ContactForm from "../components/contact/ContactForm.jsx"
import ContactMap from "../components/contact/ContactMap.jsx"
import ContactBeware from "../components/contact/ContactBeware.jsx"
import ContactExplore from "../components/contact/ContactExplore.jsx"
import Footer from "../components/Layout/Footer.jsx";

const Home = () => {
  // Navigation items

  return (
    
      <div className="bg-[#f4f4f4] overflow-hidden w-full  relative">
        <div className="bg-white relative ">
        {/* desktop logo animate */}
        <Navbar />
        <ContactHero/>
        <ContactForm/>
        <ContactMap/></div>
        <ContactBeware/>
        <ContactExplore/>
        <Footer />
      </div>
   
  );
};

export default Home;
