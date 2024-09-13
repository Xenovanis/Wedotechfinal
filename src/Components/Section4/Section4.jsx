

import React from 'react';
import sec4 from '../../assets/SEC4.png';
import logocercle from '../../assets/logo_cercle.png';

export default function Section4() {
  return (
    <div className="relative w-full h-screen overflow-hidden ">
      <img
        src={sec4}
        alt="Sec4"
        className="w-full h-full object-cover  "
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start ">
        <div className="font-passion text-white font-extrabold text-extrasmall sm:text-tiny md:text-tiny2 lg:text-extratiny xl:text-extrasemihuge leading-snug tracking-tight mb-6 md:mb-8 lg:mb-10">
          WE DO TECH BETTER<br />
          WE MAKE YOUR BUSINESS <br />
          GROW
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-yellow-500 text-black font-bold text-lg sm:text-xl md:text-2xl py-2 px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 rounded-full hover:bg-yellow-600 transition duration-300">
            Get in touch
          </button>
          <img
            src={logocercle}
            alt="Logo Circle"
            className=" h-90  lg:block absolute right-20 bottom-0 h-36 w-auto mb-8 mr-8 lg:mb-16 lg:mr-16 xl:h-40 xl:mb-12 xl:mr-12"
          />
        </div>
      </div>
    </div>
  );
}

