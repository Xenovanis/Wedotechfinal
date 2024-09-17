import  { useState } from 'react'
import { useTranslation } from 'react-i18next'
import logo from "../../assets/Logo.svg"
import menubar from "../../assets/Menubar.svg"

export default function Navbaryellow() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const toggleMenu = () => { setIsMenuOpen(!isMenuOpen) }
  const closeMenu = () => { setIsMenuOpen(false) }
  const stopPropagation = (e) => { e.stopPropagation() }

  return (
    <nav className="relative z-20 bg-contactcolor">
      <div className="container mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 px-4 sm:px-0">
          <div className="flex-shrink-0">
            <a href='/home'>
              <img src={logo} alt="Wedotech" className="h-8 w-auto sm:h-10" />
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/service" className="text-black hover:text-gray-600 text-lg transition-colors duration-200">{t('services')}</a>
            <a href="#" className="text-black hover:text-gray-600 text-lg transition-colors duration-200">{t('about')}</a>
            <a href="/contact" className="text-black hover:text-gray-600 text-lg transition-colors duration-200">{t('getInTouchLink')}</a>
          </div>
          <button 
            onClick={toggleMenu} 
            className="focus:outline-none z-20 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <img src={menubar} alt="Menu" className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Full-screen menu overlay */}
      <div 
        className={`fixed inset-0 bg-white bg-opacity-95 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={closeMenu}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center py-4 sm:py-6 md:py-8">
            <a href='/home' className="flex-shrink-0">
              <img src={logo} alt="Wedotech" className="h-8 w-auto sm:h-10" />
            </a>
            <button 
              onClick={closeMenu} 
              className="focus:outline-none z-20 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div 
            className="flex flex-col items-center justify-center h-full space-y-8"
            onClick={stopPropagation}
          >
            <a href="/home" className="text-black hover:text-gray-600 text-2xl font-medium transition-colors duration-200">{t('Home')}</a>
            <a href="/service" className="text-black hover:text-gray-600 text-2xl font-medium transition-colors duration-200">{t('Services')}</a>
            <a href="#" className="text-black hover:text-gray-600 text-2xl font-medium transition-colors duration-200">{t('About')}</a>
            <a href="/contact" className="text-black hover:text-gray-600 text-2xl font-medium transition-colors duration-200">{t('getInTouchLink')}</a>
          </div>
        </div>
      </div>
    </nav>
  )
}