import React from 'react';
import TypingAnimation from '../../animation/typinganimation';

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center px-6 lg:px-16 bg-transparent">
     
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight leading-tight mb-6">
          Let us help your <br /> 
          <TypingAnimation/>
        </h1>
        <p className="text-lg md:text-xl text-black-300 mb-8">
          We are a global, full-service media agency that grows ambitious brands through reinvention.
        </p>
        <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">
          Get in touch
        </button>
      </div>
    </div>
  );
}

export default Hero;