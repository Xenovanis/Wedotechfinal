"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import logowhatwedo from '../../assets/logowhatwedo.png';
export default function WhatWeDoSection() {
  const { t } = useTranslation()

  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-32 px-6 md:px-12 lg:px-16">
      {/* Background Logo */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-70 pointer-events-none">
        <img
          src={logowhatwedo}
          alt="Background shape"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("whatWeDo", "What we do")}</h2>

          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            {t(
              "ourMission",
              "Our mission is to help brands grow through a differentiated model and a performance mindset.",
            )}
          </h3>

          <p className="text-base md:text-lg opacity-90 leading-relaxed">
            {t(
              "companyDescription",
              "WeDoTech is a full-service media agency that helps businesses drive sustainable growth in the new world of marketing. With a rich heritage in performance, we apply that mindset to everything we do; brand planning, strategy, integrated media, social, creative, and data.",
            )}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

