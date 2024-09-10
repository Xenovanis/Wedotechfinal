import React from 'react';
import './Home.css'
import Navbar from './Components/NavBar/Navbar'
import Hero from '../../Components/Section1/Section1';
import Section2 from '../../Components/Section2/Section2';
import Section3 from '../../Components/Section3/Section3';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Section2></Section2>
      <Section3></Section3>
    </div>
  )
}
export default Home
