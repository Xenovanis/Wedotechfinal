import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Scam() {
  const { t } = useTranslation()

  return (
    <div className='bg-alert'>
      <div className="mt-50 flex flex-col justify-center px-6 lg:px-16 bg-transparent">
        <h1 className="text-4xl mt-50 md:text-7xl ml-50 font-bold text-black tracking-tight leading-tight mb-6">
          {t('scamHeader')} <br />
        </h1>
        <p className="text-lg mt-20 mx-50 mb-50 md:text-xl text-black-300 mb-8">
          {t('scamDescription1')}<br /><br />
          {t('scamDescription2')}<br /><br />
          {t('scamDescription3')}
        </p>
      </div>
    </div>
  )
}
