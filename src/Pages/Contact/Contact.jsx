import React from 'react'
import Navbar from '../../Components/NavBar/Navbar-yellow'
import Contactinputs from '../../Components/Contactinputs/Contactinputs'
import Contacthero from '../../Components/Contactherosection/Contacthero'
import Map from '../../Components/Map/Map'
import Scam from '../../Components/Scamsalert/Scam'
import Explore from '../../Components/eplore_roles/Explore'
import Navbardark from '../../Components/NavBar/Navbar-dark'
import Navbaryellow from '../../Components/NavBar/Navbar-yellow'
import Footer from '../../Components/Footer/footer'
export default function Contact() {
  return (
    <div>
    <Navbaryellow></Navbaryellow>
      <Contacthero/>
      <Contactinputs></Contactinputs>
      <Map></Map>
      <Scam></Scam>
      <Explore></Explore>
      <div className='global-padding'>
      <Footer/> </div>
    </div>
  )
}
