import React from 'react';

export default function Section2() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 md:p-8 lg:p-12 bg-white shadow-2xl rounded-3xl " >
      <div className="flex flex-col justify-center text-black col-span-1 md:col-span-1 
                      items-center sm:items-start sm:justify-start sm:text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
          Let's grow together!
        </h1>
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light mb-4 sm:mb-6 lg:mb-8 leading-relaxed text-center sm:text-left">
           WeDoTech is a full-service media agency that helps businesses 
           drive sustainable growth in the new world of marketing. With 
           a rich heritage in performance, we apply that mindset to 
           everything we do; brand planning, strategy, integrated 
           media, social, creative, and data.
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 col-span-1 md:col-span-1">
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">2K</h1>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg">Global Happy Clients</span>
          </div>
          <div className="flex items-center space-x-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">3K</h1>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg">Global Happy Clients</span>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">4K</h1>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg">Global Happy Clients</span>
          </div>
          <div className="flex items-center space-x-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">2K</h1>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg">Global Happy Clients</span>
          </div>
        </div>
      </div>
    </div>
  );
}