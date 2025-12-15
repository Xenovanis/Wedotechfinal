import React from "react";
import arowRightUp from "../../assets/others/arowRightUp.svg";
import fleuryImg from "../../assets/Home/fleuryImg.png";
import sofumartImg from "../../assets/Home/sofumartImg.png";
import heritageLogo from "../../assets/Home/heritageLogo.png";
import keonixLogo from "../../assets/Home/keonixLogo.png";
import GootoLoo from "../../assets/Home/GootoLoo.png";
import { Button } from "../../components/ui/button";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import logocercle from "../../assets/logo/logo_cercle.png";
import patternMobile from "../../assets/patterns/mobileHomePattern.svg";

const Hero = () => {
  const logos = [
    { src: fleuryImg, alt: "Fleury", height: "37px" },
    { src: sofumartImg, alt: "Sofumart", height: "5px" },
    { src: heritageLogo, alt: "Heritage", height: "47px" },
    { src: keonixLogo, alt: "Keonix", height: "74px" },
    { src: GootoLoo, alt: "Component", height: "60px" },
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1400],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 35,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative">
      {/* Desktop logo */}
      <img
        src={logocercle}
        alt="logoCircle"
        className="hidden md:block absolute right-4 bottom-52 h-32 w-auto mb-8 mr-8 lg:mb-16 lg:mr-16 xl:h-40 xl:mb-12 xl:mr-12 animate-spin-slow"
      />

      <img
        src={patternMobile}
        alt="patternMobile"
        className="hidden md:block h-24 absolute left-2 top-[45%] ms-4"
      />

      {/* Mobile logo */}
      <img
        src={logocercle}
        alt="logoCircle"
        className="block md:hidden absolute right-1 top-[40%] h-20 mb-8 mr-8 animate-spin-slow"
      />

      <img
        src={patternMobile}
        alt="patternMobile"
        className="block md:hidden absolute left-2 top-[40%] ms-4"
      />

      {/* Hero Section */}
      <section className="relative max-w-[1073px] px-4 mx-auto mt-[100px] text-center">
        <div className="relative">
          <h1 className="text-[36px] sm:text-[48px] md:text-[118px] md:font-normal font-thin leading-tight md:leading-[108px] [-webkit-text-stroke:2px_#000000] text-black">
            We drive growth to
            <br />
            your Business
          </h1>

          <div className="md:hidden absolute top-[65%] right-[9%]">
            <img src={arowRightUp} alt="Arrow" className="w-6" />
          </div>

          <div className="hidden md:flex absolute top-[65%] right-[7%]">
            <img src={arowRightUp} alt="Arrow" />
          </div>
        </div>

        <p className="font-normal text-black text-base sm:text-lg leading-6 sm:leading-7 mt-6 sm:mt-10">
          We are a global, full-service media agency that grows
          <br className="hidden sm:block" />
          ambitious brands through reinvention.
        </p>

        <div className="relative mt-[40px] flex justify-center">
          <a
            href="https://calendly.com/wedotechagency/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="relative flex items-center justify-between w-[175px] h-[58px] bg-[#232323] rounded-full border border-black shadow-[0px_4px_4px_#00000040] text-white text-xl px-5">
              Let&apos;s Talk
              <div className="absolute top-2 right-2 w-[41px] h-[41px] bg-[#7e84ff] rounded-full flex items-center justify-center">
                <MoveUpRight className="w-7 h-7 text-white" />
              </div>
            </Button>
          </a>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="w-full flex justify-center mt-[150px]">
        <motion.div
          className="overflow-hidden py-10"
          variants={marqueeVariants}
          animate="animate"
          style={{ width: "fit-content" }}
        >
          <motion.div className="flex items-center space-x-24">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="object-cover"
                style={{ height: logo.height }}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
