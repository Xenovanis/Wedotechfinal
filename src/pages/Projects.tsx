import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { Button } from "../components/ui/button";
import { MoveUpRight } from "lucide-react";

import bean1 from '../assets/Projects/full-images-br.png';
import perfume from '../assets/Projects/fullmonfleurysection.png';
import gootoapp from '../assets/Projects/full-images-gooto.png';
import heritage from '../assets/Projects/fullimagesheritage.png';
import sofunmart from '../assets/Projects/fullsofunmart-images.png';

import brandingbrownarabica from '../assets/Projects/branding-brownarabica.png';
import parfumebranding from '../assets/Projects/brandingmonfleury.png';
import gootobranding from '../assets/Projects/brandinggooto.png';
import heritagebranding from '../assets/Projects/branding-heritage.png';
import sofunmartbranding from '../assets/Projects/sofunmart-branding.png';

function Projects() {
  return (
    <div>
      <Navbar bgColor="bg-white" textColor="text-black"/>

      {/* Hero Section */}
      <section className="relative max-w-[1073px] px-4 mx-auto mt-[100px] text-center">
        <h1 className="font-mallanna font-bold text-[30px] sm:text-[48px] md:text-[80px] leading-tight md:leading-[108px] text-black tracking-[0]">
          Discover the Masterpieces
          <br />
          We've Created
        </h1>

        <p className="font-[League_Spartan] font-normal text-black text-base sm:text-lg leading-6 sm:leading-7 mt-6 sm:mt-10">
        Each masterpiece we created tells a story of innovation and dedication, showcasing our passion for
          <br className="hidden sm:block" />
          turning ideas into exceptional results.
        </p>

        <div className="relative mt-10 flex justify-center">
          <Button className="relative flex items-center justify-between w-[175px] h-[58px] bg-[#232323] rounded-full border border-black shadow-[0px_4px_4px_#00000040] font-normal text-white text-xl font-[League_Spartan] px-5">
            Let&apos;s Talk
            <div className="absolute top-2 right-2 w-[41px] h-[41px] bg-[#7e84ff] rounded-full flex items-center justify-center">
              <MoveUpRight className="w-7 h-7 text-white" />
            </div>
          </Button>
        </div>
      </section>

      {/* Brown Arabica */}
      <div className="relative mt-64 z-10">
        <div className="rounded-xl overflow-hidden w-full">
          <img src={bean1} alt="Bean 1" className="w-full h-auto object-cover" />
        </div>
        <div className="hidden sm:block bean rounded-xl overflow-hidden w-80 z-10 ml-16 -mt-96">
          <img src={brandingbrownarabica} alt="Branding" className="w-full h-auto object-cover" />
        </div>
        <div className="hidden sm:block titles -mt-[1100px] ml-[650px] z-20 relative font-[katibeh]">
          <h1 className="text-4xl font-bold">Brown arabica</h1>
          <h3 className="mt-[20px]">
            Each masterpiece we created tells a story of innovation and dedication, showcasing <br />
            our passion for turning ideas intEach masterpiece we created tells a story of <br />
            innovation and dedication, showcasing our passion
          </h3>
        </div>
        <div className="block sm:hidden mt-10 px-4 text-center font-[katibeh]">
          <h1 className="text-2xl font-bold">Brown arabica</h1>
          <div className="w-[250px] mx-auto mt-4">
            <img src={brandingbrownarabica} alt="Branding" className="w-full h-auto object-cover" />
          </div>
          <h3 className="mt-4 text-sm leading-snug">
            Each masterpiece we created tells a story of innovation and dedication, showcasing
            our passion for turning ideas into reality.
          </h3>
        </div>
      </div>

      {/* Monfleury Parfum */}
      <div className="relative mt-[300px] sm:mt-[1200px] z-10">
        <div className="rounded-xl overflow-hidden w-full">
          <img src={perfume} alt="Bean 1" className="w-full h-auto object-cover" />
        </div>
        <div className="hidden sm:block bean rounded-xl overflow-hidden w-80 z-10 ml-16 -mt-96">
          <img src={parfumebranding} alt="Branding" className="w-full h-auto object-cover" />
        </div>
        <div className="hidden sm:block titles -mt-[1030px] ml-[650px] z-20 relative font-[katibeh]">
          <h1 className="text-4xl font-bold">Monfleury parfum</h1>
          <h3 className="mt-[20px]">
            Each masterpiece we created tells a story of innovation and dedication, showcasing <br />
            our passion for turning ideas intEach masterpiece we created tells a story of <br />
            innovation and dedication, showcasing our passion
          </h3>
        </div>
        <div className="block sm:hidden mt-10 px-4 text-center font-[katibeh]">
          <h1 className="text-2xl font-bold">Monfleury parfum</h1>
          <div className="w-[250px] mx-auto mt-4">
            <img src={parfumebranding} alt="Branding" className="w-full h-auto object-cover" />
          </div>
          <h3 className="mt-4 text-sm leading-snug">
            Each masterpiece we created tells a story of innovation and dedication, showcasing
            our passion for turning ideas into reality.
          </h3>
        </div>
      </div>

      {/* Gooto App */}
      <div className="relative mt-[300px] sm:mt-[1200px] z-10">
        <div className="rounded-xl overflow-hidden w-full">
          <img src={gootoapp} alt="Bean 1" className="w-full h-auto object-cover" />
        </div>
        <div className="hidden sm:block bean rounded-xl overflow-hidden w-80 z-10 ml-16 -mt-96">
          <img src={gootobranding} alt="Branding" className="w-full h-auto object-cover" />
        </div>
        <div className="hidden sm:block titles -mt-[1030px] ml-[650px] z-20 relative font-[katibeh]">
          <h1 className="text-4xl font-bold">Gooto app</h1>
          <h3 className="mt-[20px]">
            Each masterpiece we created tells a story of innovation and dedication, showcasing <br />
            our passion for turning ideas intEach masterpiece we created tells a story of <br />
            innovation and dedication, showcasing our passion
          </h3>
        </div>
        <div className="block sm:hidden mt-10 px-4 text-center font-[katibeh]">
          <h1 className="text-2xl font-bold">Gooto app</h1>
          <div className="w-[250px] mx-auto mt-4">
            <img src={gootobranding} alt="Branding" className="w-full h-auto object-cover" />
          </div>
          <h3 className="mt-4 text-sm leading-snug">
            Each masterpiece we created tells a story of innovation and dedication, showcasing
            our passion for turning ideas into reality.
          </h3>
        </div>
      </div>

      {/* Heritage */}
      <div className="relative mt-[300px] sm:mt-[1200px] z-10">
        <div className="rounded-xl overflow-hidden w-full">
          <img src={heritage} alt="Bean 1" className="w-full h-auto object-cover" />
        </div>
        <div className="hidden sm:block bean rounded-xl overflow-hidden w-80 z-10 ml-16 -mt-96">
          <img src={heritagebranding} alt="Branding" className="w-full h-auto object-cover" />
        </div>
        <div className="hidden sm:block titles -mt-[1030px] ml-[650px] z-20 relative font-[katibeh]">
          <h1 className="text-4xl font-bold">Heritage</h1>
          <h3 className="mt-[20px]">
            Each masterpiece we created tells a story of innovation and dedication, showcasing <br />
            our passion for turning ideas intEach masterpiece we created tells a story of <br />
            innovation and dedication, showcasing our passion
          </h3>
        </div>
        <div className="block sm:hidden mt-10 px-4 text-center font-[katibeh]">
          <h1 className="text-2xl font-bold">Heritage</h1>
          <div className="w-[250px] mx-auto mt-4">
            <img src={heritagebranding} alt="Branding" className="w-full h-auto object-cover" />
          </div>
          <h3 className="mt-4 text-sm leading-snug">
            Each masterpiece we created tells a story of innovation and dedication, showcasing
            our passion for turning ideas into reality.
          </h3>
        </div>
      </div>

      {/* Sofunmart */}
      <div className="relative mt-[300px] sm:mt-[1200px] z-10">
        <div className="rounded-xl overflow-hidden w-full">
          <img src={sofunmart} alt="Bean 1" className="w-full h-auto object-cover" />
        </div>
        <div className="hidden sm:block bean rounded-xl overflow-hidden w-80 z-10 ml-16 -mt-96">
          <img src={sofunmartbranding} alt="Branding" className="w-full h-auto object-cover" />
        </div>
        <div className="hidden sm:block titles -mt-[1030px] ml-[650px] z-20 relative font-[katibeh]">
          <h1 className="text-4xl font-bold">Sofunmart crafting</h1>
          <h3 className="mt-[20px]">
            Each masterpiece we created tells a story of innovation and dedication, showcasing <br />
            our passion for turning ideas intEach masterpiece we created tells a story of <br />
            innovation and dedication, showcasing our passion
          </h3>
        </div>
        <div className="block sm:hidden mt-10 px-4 text-center font-[katibeh]">
          <h1 className="text-2xl font-bold">Sofunmart crafting</h1>
          <div className="w-[250px] mx-auto mt-4">
            <img src={sofunmartbranding} alt="Branding" className="w-full h-auto object-cover" />
          </div>
          <h3 className="mt-4 text-sm leading-snug">
            Each masterpiece we created tells a story of innovation and dedication, showcasing
            our passion for turning ideas into reality.
          </h3>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-[400px] sm:mt-[1000px]">
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
