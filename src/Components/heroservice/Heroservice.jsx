import React from 'react'
import imglogo from '../../assets/logo-incline.png'

export default function ServicesSection() {
  return (
    <div className="bg-custom-darkgreen text-white min-h-[80vh] relative overflow-hidden flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 sm:space-y-8 z-10 lg:mt-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Services</h1>
            <h2 className=" text-2xl sm:text-2xl text-white">
              Integrated marketing solutions that help brands grow.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Our team is committed to gaining a deep understanding of our clients' business goals. In order to deliver real business impact, whether it's across Strategy & Planning and Media, or Analytics and Organic Performance, we work closely with our clients to develop tailored marketing solutions that set them up for success.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 lg:w-1/3 ">
        <img src={imglogo} alt="" className="w-full h-auto" />
      </div>
    </div>
  )
}