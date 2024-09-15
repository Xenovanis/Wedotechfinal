import React from 'react'
import { useTranslation } from 'react-i18next'
import img from '../../assets/transform-the-purple-color-to--53a178-color.png'
import "./Section3.css"

export default function Section3() {
  const { t } = useTranslation()

  return (
    <div className="mt-20 mx-auto lg:py-16">
      <div className="relative lg:flex lg:items-center">
        <div className="relative aspect-square w-full lg:w-1/2 max-w-2xl mx-auto">
          <img
            src={img}
            alt="Transform Image"
            layout="fill"
            objectFit="cover"
            className="brightness-50 lg:brightness-100"
            priority
          />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center lg:static lg:inset-auto lg:w-1/2">
          <h2 className="font-passion text-white lg:text-custom-gray text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-tiny2 leading-tight text-center lg:text-left">
            {t('findUs')}
          </h2>
        </div>
      </div>
    </div>
  )
}