import React from "react";
import logocercle from "../../assets/logo/logo_cercle.png";
import patternMobile from "../../assets/patterns/mobileHomePattern.svg";
import contact from "../../assets/Contact/contact.png";

const ContactHero = () => {
  return (
    <div className="relative w-full max-w-[1073px] px-4 mx-auto mt-[100px] text-center">
      {/* Contact word image */}
      <img
        src={contact}
        alt="Contact"
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto h-auto"
      />

      {/* Bottom Left Gear Icon (responsive) */}
      <img
        src={patternMobile}
        alt="Gear"
        className="absolute bottom-[10px] left-[20px] w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
      />

      {/* Bottom Right Circle Logo (responsive) */}
      <img
        src={logocercle}
        alt="Logo Circle"
        className="absolute bottom-[10px] right-[20px] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 animate-spin-slow"
      />
    </div>
  );
};

export default ContactHero;
