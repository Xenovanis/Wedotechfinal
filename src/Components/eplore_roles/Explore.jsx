import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Explore() {
  const { t } = useTranslation()

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <div className="bg-yellow-400 rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-4xl md:text-3xl lg:text-7xl font-black text-black max-w-2xl mb-4 md:mb-0">
          {t('explore_roles')}
          <br />
          {t('at_we_do_tech')}
        </h2>
        <button className="bg-black text-white text-sm md:text-base font-semibold py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300">
          {t('find_out_more')}
        </button>
      </div>
    </div>
  )
}