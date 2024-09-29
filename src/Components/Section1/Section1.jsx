import React from 'react';
import TypingAnimation from '../../animation/typinganimation';
import logocercle from '../../assets/logo_cercle.png'
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="relative h-screen flex  flex-col items-center justify-center px-6 lg:px-16 bg-transparent">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight leading-tight mb-10"> 
          {t("welcomingHeader")} <br /> 
          <TypingAnimation/>
        </h1>
        <p className="text-lg md:text-xl text-black-300 mb-20">
          {t("agencyDescription")}
        </p>
        <p className='text-lg md:text-xl text-black-300 mb-20'>
          {t('wetakecare')}
        </p>
        <a href="/service"> 
          <button className="border border-black px-8 py-3 bg-black text-white mb-40 rounded-full hover:bg-gray-200 hover:text-black transition duration-300">
            {t("ourService")}
          </button> 
        </a>
      </div>
      <img
  src={logocercle}
  alt={t("logoCircle")}
  className="h-90 hidden md:block lg:block absolute right-20 bottom-0 h-36 w-auto mb-8 mr-8 lg:mb-16 lg:mr-16 xl:h-40 xl:mb-12 xl:mr-12 shadow- animate-spin-slow"
/>

    </div>
  );
}

export default Hero;