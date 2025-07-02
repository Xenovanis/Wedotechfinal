"use client"

import { useTranslation } from "react-i18next"
import logocercle from "../../assets/logo_cercle.png"
import { motion } from "framer-motion"
import sec4 from '../../assets/SEC4.png';

export default function Section4() {
  const { t } = useTranslation()

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <motion.div
      className="mt-20 relative h-[80vh] rounded-3xl overflow-hidden "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
       <img src={sec4} alt="Sec4" className="w-full h-full object-cover" />
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 lg:p-16"
        variants={fadeIn}
      >
        <motion.div
          className="font-passion text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight tracking-tight mb-6 md:mb-8 lg:mb-10 max-w-3xl"
          variants={fadeIn}
        >
          {t("weDoTechBetter")}
          <br />
          {t("makeBusinessGrow")}
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4"
          variants={fadeIn}
        >
          <motion.button
            className="bg-yellow-400 text-black font-medium text-sm sm:text-base md:text-lg py-2.5 px-8 md:py-3 md:px-10 rounded-full hover:bg-yellow-500 transition duration-300"
            variants={fadeIn}
          >
            Find More
          </motion.button>

          <motion.img
            src={logocercle}
            alt="Logo Circle"
            className="h-14 w-14 absolute right-8 bottom-8 md:h-16 md:w-16 lg:h-20 lg:w-20"
            variants={fadeIn}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
