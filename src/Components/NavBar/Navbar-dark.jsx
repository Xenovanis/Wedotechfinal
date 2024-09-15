import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import logo from "../../assets/Logo.svg"
import menubar from '../../assets/Menubar.svg'

export default function Navbardark() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const toggleMenu = () => { setIsMenuOpen(!isMenuOpen) }
  const closeMenu = () => { setIsMenuOpen(false) }
  const stopPropagation = (e) => { e.stopPropagation() }

  return (
    <nav className="relative global-padding z-20 bg-transparent"> 
      <div className="flex items-center justify-between py-4 px-4 sm:py-8 sm:px-6 md:py-12 md:px-20"> 
        <div className="flex items-center"> 
          <a href='/home'><img src={logo} alt="Wedotech" className="h-8 w-auto sm:h-10" /></a>
        </div> 
        <div className="hidden md:flex items-center space-x-6 lg:space-x-12 text-black-600"> 
          <a href="/service" className="hover:text-black text-lg lg:text-xl">{t('services')}</a> 
          <a href="#" className="hover:text-black text-lg lg:text-xl">{t('about')}</a> 
          <a href="#" className="hover:text-black text-lg lg:text-xl">{t('getInTouchLink')}</a> 
        </div>
        <button onClick={toggleMenu} className="focus:outline-none z-20"> 
          <img src={menubar} alt="Menu" className="h-6 w-auto" /> 
        </button> 
      </div>
      {/* Menu section */}
      <div 
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} 
        onClick={closeMenu} 
      >
        <div 
          className="flex flex-col items-center justify-center h-full space-y-8"
          onClick={stopPropagation}  
        >
          <a href="/service" className="hover:text-black text-xl">{t('services')}</a>
          <a href="#" className="hover:text-black text-xl">{t('about')}</a>
          <a href="#" className="hover:text-black text-xl">{t('getInTouchLink')}</a>
        </div>
      </div>
    </nav>
  )
}