import React from 'react';
import { useTranslation } from 'react-i18next';
import img from '../../assets/mapbackground.png';

export default function Map() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center min-h-screen px-[50px]">
      <div className="relative w-full max-w-[1320px]">
        <img
          src={img}
          alt={t('map_background_alt')}
          className="mx-auto h-auto object-cover"
        />
 
        <div className="absolute inset-0 flex items-start justify-center lg:mt-16 p-4">
          <div className="bg-white p-6 rounded-3xl shadow-md w-full max-w-2xl z-10 mt-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="text-3xl font-bold mb-2">{t('where_to_find_us')}</h2>
                <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-500 transition-colors">
                  {t('location_rabat')}
                </button>
              </div>
              <div className="mt-4 sm:mt-0 text-right">
                <p className="text-gray-600">
                  {t('address_line1')}
                  <br />
                  {t('address_line2')}
                </p>
                <a href="tel:+21277895469" className="text-gray-600 block mt-1">
                  {t('phone_number')}
                </a>
                <button className="bg-black text-white px-6 py-2 rounded-full mt-2 font-semibold hover:bg-gray-800 transition-colors">
                  {t('view_location')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}