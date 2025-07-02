

import { motion } from "framer-motion"

export default function TextBanner() {
  const marqueeVariants = {
    animate: {
      x: [0, -1400], // adjust -X value based on total width
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  }

  const phrase = "How we deliver steady and reliable growth for you!"

  return (
    <div className="w-full overflow-hidden bg-white ">
      <div className="relative w-full">
        <motion.div
          className="flex space-x-24 whitespace-nowrap text-black font-black text-3xl sm:text-4xl md:text-8xl tracking-tight "
          variants={marqueeVariants}
          animate="animate"
          style={{ width: "fit-content" }}
        >
          {/* Duplicate the phrase for seamless loop */}
          {[...Array(3)].map((_, i) => (
            <span key={i} className="mx-8">
              {phrase}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
