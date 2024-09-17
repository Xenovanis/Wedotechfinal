import React from 'react'
import Heroservice from '../../Components/heroservice/Heroservice'
import Navbar from '../../Components/NavBar/Navbar'
import Footer from '../../Components/Footer/footer';
import Servicesdescription from '../../Components/Servicesdescription/Servicesdescription'
import Contactservice from '../../Components/contact-us-service/Contactservice';

const Service = () => {
  return (
    <div className="bg-creamy"> 
      <Navbar/>
      <Heroservice/>
      <Servicesdescription />
      <Contactservice/>
      <div className='mr-50 ml-50 mt-20 mb-20'>
      <Footer/> </div>
       </div>
  )
}

export default Service