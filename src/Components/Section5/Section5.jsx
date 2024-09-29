import React from 'react'
import img from "../../assets/whatwedo.png"

export default function Section5() {
  return (
<div className='mt-12'>
  <div className="  pt-10 bg-whatwedo_color h-auto rounded-xl flex flex-col items-center justify-start">
    <img src={img} alt="" className='mt-16' />
    <div className='text-white mt-10  text-center text-md lg:text-start xl:text-start xl:max-w-2xl lg:text-2xl font-semibold xl-text-2xl lg:max-w-2xl '>
      Our mission is to help brands grow through a differentiated model and a performance mindset.
    </div>
    <div className='text-white mt-10 mb-32 text-center text-xl mx-4 xl-text-xl lg:max-w-xl xl:text-start lg:text-start xl:max-w-2xl '>
    WeDoTech is a full-service media agency that helps businesses drive sustainable growth in the new world of marketing. With a rich heritage in performance, we apply that mindset to everything we do; brand planning, strategy, integrated media, social, creative, and data.    </div>
  
  <button className="bg-yellow-500 place-items-end mb-14 text-black  text-md sm:text-md md:text-2xl py-2  px-6 md:py-3 md:px-8  rounded-full hover:bg-yellow-600 transition duration-300">
            Explore Now
          </button></div>
</div>

  )
}
