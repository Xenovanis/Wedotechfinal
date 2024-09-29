import React from 'react'
import { useTranslation } from 'react-i18next';
import img from '../../assets/contact_logo.png'

export default function Contacthero() {
  const { t } = useTranslation();

  return (
    <div className='bg-contactcolor'>
      <div className="container ">
        <div className=" h-screen flex flex-col  justify-center px-6 lg:px-16 bg-transparent">
          <div className="">
            <h1 className="text-6xl md:text-7xl ml-50 font-bold  text-black tracking-tight leading-tight mb-6">
              {t('get_in_touch')}
            </h1>
            <p className="text-lg mx-50 md:text-xl text-black-300 mb-8">
              {t('contact_description')}
            </p>
            <p className="text-lg mx-50 md:text-xl text-black-300 mb-8">
              {t('digital_partner')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}