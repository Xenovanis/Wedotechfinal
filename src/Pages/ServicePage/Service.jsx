import React from 'react'
import Heroservice from '../../Components/heroservice/Heroservice'
import Navbar from '../../Components/NavBar/Navbar'
import Section3 from '../../Components/Section3/Section3'
import Servicesdescription from '../../Components/Servicesdescription/Servicesdescription'
const Service = () => {
  return (
    <div className="bg-creamy"> 
      <Navbar/>
      <Heroservice/>
      
      <Servicesdescription />
   
       </div>
  )
}

export default Service