"use client"
import { useTranslation } from "react-i18next"
import img from "../../assets/transform-the-purple-color-to--53a178-color.png"
import "./Section3.css"
import { motion } from "framer-motion"

export default function Section3() {
  const { t } = useTranslation()

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <motion.div
      className="mt-20 mx-auto lg:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="relative lg:flex lg:items-center lg:gap-8">
        <motion.div
          className="relative aspect-square w-full lg:w-1/2 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
        >
          <img
            src={img || "/placeholder.svg"}
            alt="Transform Image"  className="brightness-50 lg:brightness-100"
            
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center lg:static lg:inset-auto lg:w-1/2 lg:pl-4"
          variants={fadeIn}
        >
          <h2 className="font-passion text-white lg:text-custom-gray text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-tiny2 leading-tight text-center lg:text-left">
            {t("findUs")}
          </h2>
        </motion.div>
      </div>
    </motion.div>
  )
}
