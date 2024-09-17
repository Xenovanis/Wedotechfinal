import React from 'react'
import { useTranslation } from 'react-i18next'
import sec4 from '../../assets/SEC4.png'
import logocercle from '../../assets/logo_cercle.png'

export default function Section4() {
  const { t } = useTranslation()

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={sec4}
        alt="Sec4"
        className="absolute w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col justify-center items-start p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 w-full max-w-7xl mx-auto">
        <div className="font-passion text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 md:mb-8 lg:mb-10">
          {t('weDoTechBetter')}<br />
          {t('makeBusinessGrow')}
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
          <button className="bg-yellow-500 text-black text-lg sm:text-xl md:text-2xl py-2 px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 rounded-full hover:bg-yellow-600 transition duration-300">
            {t('getInTouch')}
          </button>
          <img
            src={logocercle}
            alt="Logo Circle"
            className="h-16 sm:h-20 md:h-24 w-auto ml-auto sm:ml-0"
          />
        </div>
      </div>
    </div>
  )
}