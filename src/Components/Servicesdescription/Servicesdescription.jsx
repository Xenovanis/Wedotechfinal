"use client"
import { useTranslation } from 'react-i18next'
import SectionList from './SectionList'
import SectionContent from './SectionContent'
import { useState,useRef } from 'react'
export default function Component() {
  const { t } = useTranslation()

  const sections = [
    { id: 1,title: t('socialMediaAdvertising'),  heading: t('socialMediaAdvertisingTitle'), content: t('socialMediaAdvertisingDescription') },
    { id: 2, title: t('socialMediaManagement'), heading: t('socialMediaManagementTitle'), content: t('socialMediaManagementDescription') },
    { id: 3, title: t('contentCreation'),heading: t('contentCreationTitle'), content: t('contentCreationDescription') },
    { id: 4, title: t('Branding'),  heading: t('BrandingTitle'), content: t('BrandingDescription') },
    { id: 5, title: t('websiteCreation'), heading: t('websiteCreationTitle'), content: t('websiteCreationDescription') },
    { id: 6, title: t('seo'), heading: t('seoTitle'), content: t('seoDescription') },
  ]

  const [activeSection, setActiveSection] = useState(sections[0])
  const contentRef = useRef(null)

  const handleSectionClick = (section) => {
    setActiveSection(section)
    contentRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-screen-lg mx-auto mt-20">
      <SectionList
        sections={sections}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      
      <div className="mt-24 lg:ml-16 w-full lg:w-2/3" ref={contentRef}>
        <SectionContent activeSection={activeSection} />
      </div>
    </div>
  )
}