import Hero from '../../Components/Section1/Section1';
import Section5 from '../../Components/Section5/Section5';
import Usedtechs from '../../Components/Usedtechs/Usedtechs';
import Section2 from '../../Components/Section2/Section2';
import Section3 from '../../Components/Section3/Section3';
import Blogpost from '../../Components/Blogpost/blogpost';
import Footer from '../../Components/Footer/footer';
import Section4 from '../../Components/Section4/Section4';
import Navbardark from '../../Components/NavBar/Navbar-dark';
import Movingbanner from '../../Components/Movingbanner/Movingbanner';
import SetpsSection from '../../Components/Steps-section/StepsSection';
import Wedotechwhy from '../../Components/Whyus/Whyus';
import TeamSection from '../../Components/TeamSection/TeamSection';
import './home.css'


const Home = () => {
  return (

    
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    <div className='global-padding'>
   
     <Navbardark/>
      <Hero />
     
      <Section2></Section2>
      <Section4></Section4>
      
      </div>
      
    
      <Usedtechs></Usedtechs>
      <Section5></Section5>
      <Movingbanner></Movingbanner>
      <SetpsSection></SetpsSection>
      <Wedotechwhy/>
      <TeamSection/>
      <div className='global-padding'>
      <Section3></Section3>
     <Blogpost />
     <Footer/>
    </div></div>
  );
}

export default Home;