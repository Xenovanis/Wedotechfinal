import React, { useState, useRef } from "react"
import { useTranslation } from 'react-i18next'
import SectionList from './SectionList'
import SectionContent from './SectionContent'

export default function Component() {
  const { t } = useTranslation()

  const sections = [
    { id: 1, title: t('strategyAndPlanning'), heading: t('frameworkForGrowth'), content: t('socialMediaContent') },
    { id: 2, title: t('socialMediaManagement'), heading: t('fullFunnelStrategy'), content: t('socialMediaContent') },
    { id: 3, title: t('socialMediaAdvertising'), heading: t('preciseRecommendations'), content: t('socialMediaContent') },
    { id: 4, title: t('influencerMarketing'), heading: t('frameworkForGrowth'), content: t('socialMediaContent') },
    { id: 5, title: t('websiteDevelopmentAndDesigning'), heading: t('frameworkForGrowth'), content: t('socialMediaContent') },
    { id: 6, title: t('trainingAndConsulting'), heading: t('frameworkForGrowth'), content: t('socialMediaContent') },
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