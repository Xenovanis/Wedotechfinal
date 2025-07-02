import React from 'react'
import { useTranslation } from 'react-i18next'
import footer from '../../assets/footer.svg'
import imglogo from "../../assets/logo_wedotech.png"

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="mt-5 rounded-xl text-white py-16 px-4 md:px-8 relative bg-black h-huge">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              {t('footerDescription')}
            </h2>
            <button className="bg-white text-black px-6 py-2 rounded-full mt-4 hover:bg-gray-200 transition duration-300">
              {t('getInTouch')}
            </button>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:underline">{t('services')}</a></li>
              <li><a href="/our-work" className="hover:underline">{t('ourWork')}</a></li>
              <li><a href="/get-in-touch" className="hover:underline">{t('getInTouchLink')}</a></li>
              <li><a href="/whats-new" className="hover:underline">{t('whatsNew')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('connectWithUs')}</h3>
            <div className="flex space-x-4 mb-4">
              {/* Social media icons (unchanged) */}
            </div>
            <div>
              <h4 className="font-semibold mb-2">{t('callUs')}</h4>
              <p>{'+212 6-97-74-19-37'}</p>
              <p>{'+212 6-19-74-72-55'}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-300 ml-200"><img src={imglogo} alt="" /></div>
      <div className="absolute bottom-4 right-4 text-xs text-gray-500">
        {t('copyright')} <br/>
        {t('allRightsReserved')}
      </div>
    </footer>
  )
}

export default Footer