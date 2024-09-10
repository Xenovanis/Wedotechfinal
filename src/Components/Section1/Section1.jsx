import React from 'react';
import herologo from "../../assets/Group 1.png";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-16 lg:py-24 lg:mb-35 px-6 lg:px-16">
    
      <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
          Let us help your Business
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We are a global, full-service media agency that grows ambitious brands through reinvention.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">
          Get in touch
        </button>
      </div>

     
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
        <img src={herologo} alt="Wedotech" className="max-w-full h-auto" />
      </div>
    </div>
  );
}

export default Hero;
