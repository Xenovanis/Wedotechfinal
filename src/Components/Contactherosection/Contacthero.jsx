import React from 'react'
import img from '../../assets/contact_logo.png'

export default function Contacthero() {
  return (
    <div className='bg-contactcolor'>
      <div className="container ">
      <div className=" h-screen flex flex-col  justify-center px-6 lg:px-16 bg-transparent">
     
     <div className="">
       <h1 className="text-6xl md:text-7xl ml-50 font-bold  text-black tracking-tight leading-tight mb-6">
         Contact us <br /> 
        
       </h1>
       <p className="text-lg mx-50 md:text-xl text-black-300 mb-8">
       Get in touch with the Croud team - we'd love to hear from you
       </p><img
  src={img}
  alt=""
  className="hidden xl:block lg:block absolute lg:ml-200 lg:mt-3000 xl:ml-200 xl:mt-3000"
/>

       <p className="text-lg mx-50 md:text-xl text-black-300 mb-8">
       Whether you’re looking for a digital marketing partner, or simply keen to find out more about Wedotech,<br></br> drop us a line
       </p>
       
     </div>
     
   </div>
      </div>
    </div>
  )
}
