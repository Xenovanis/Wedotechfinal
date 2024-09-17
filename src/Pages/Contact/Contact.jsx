import React from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import Contactinputs from '../../Components/Contactinputs/Contactinputs'
import Contacthero from '../../Components/Contactherosection/Contacthero'
import Map from '../../Components/Map/Map'
import Scam from '../../Components/Scamsalert/Scam'
import Explore from '../../Components/eplore_roles/Explore'
export default function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      <Contacthero/>
      <Contactinputs></Contactinputs>
      <Map></Map>
      <Scam></Scam>
      <Explore></Explore>
    </div>
  )
}
