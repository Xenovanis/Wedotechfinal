import React from 'react'
import { useTranslation } from 'react-i18next'
import sec4 from '../../assets/SEC4.png'
import logocercle from '../../assets/logo_cercle.png'

export default function Section4() {
  const { t } = useTranslation()

  return (
    <div className="mt-20 relative h-screen">
      <img
        src={sec4}
        alt="Sec4"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start">
        <div className="font-passion text-white ml-2 font-bold text-extrasmall sm:text-tiny md:text-tiny2 lg:text-extratiny xl:text-extrasemihuge leading-snug tracking-tight mb-6 md:mb-8 lg:mb-10">
          {t('weDoTechBetter')}<br />
          {t('makeBusinessGrow')}
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-yellow-500 ml-2 text-black font-bold text-lg sm:text-xl md:text-2xl py-2 px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 rounded-full hover:bg-yellow-600 transition duration-300">
            {t('getInTouch')}
          </button>
          <img
            src={logocercle}
            alt="Logo Circle"
            className="h-90 lg:block absolute right-2 bottom-10 h-32 w-auto mb-8 mr-8 lg:mb-16 lg:mr-16 xl:h-40 xl:mb-12 xl:mr-12"
          />
        </div>
      </div>
    </div>
  )
}