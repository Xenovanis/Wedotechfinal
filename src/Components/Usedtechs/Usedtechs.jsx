import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

export default function TechBanner() {
  const { t } = useTranslation()

  // List of technologies with their logos
  const technologies = [
    {
      name: "Google Analytics",
      logo: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg",
    },
    {
      name: "Figma",
      logo: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
    },
    {
      name: "Google Ads",
      logo: "https://cdn.worldvectorlogo.com/logos/google-ads-2.svg",
    },
    {
      name: "Microsoft",
      logo: "https://cdn.worldvectorlogo.com/logos/microsoft-6.svg",
    },
    {
      name: "Meta",
      logo: "https://cdn.worldvectorlogo.com/logos/meta-3.svg",
    },
    {
      name: "Tiktok",
      logo: "https://cdn.worldvectorlogo.com/logos/tiktok-icon-2.svg",
    },
    {
      name: "Open Ai",
      logo: "https://cdn.worldvectorlogo.com/logos/openai-wordmark.svg",
    },
    {
      name: "Flutter",
      logo: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
    },
    {
      name: "WorldPress",
      logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Marquee animation for continuous scrolling
  const marqueeVariants = {
    animate: {
      x: [0, -1400],
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 35,
          ease: "linear",
        },
      },
    },
  }

  return (
    <motion.div
      className="w-full overflow-hidden bg-white py-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative w-full">
        <motion.div
          className="flex items-center space-x-24"
          variants={marqueeVariants}
          animate="animate"
          style={{ width: "fit-content" }}
        >
          {/* First set of logos */}
          {technologies.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center justify-center min-w-[160px]"
              variants={itemVariants}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <div className="h-24 w-24 flex items-center justify-center">
                <img
                  src={tech.logo || "/placeholder.svg"}
                  alt={t(`tech.${tech.name.toLowerCase()}.alt`, `${tech.name} logo`)}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
            </motion.div>
          ))}

          {/* Duplicate set for seamless looping */}
          {technologies.map((tech, index) => (
            <motion.div
              key={`${tech.name}-duplicate-${index}`}
              className="flex flex-col items-center justify-center min-w-[160px]"
              variants={itemVariants}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <div className="h-24 w-24 flex items-center justify-center">
                <img
                  src={tech.logo || "/placeholder.svg"}
                  alt={t(`tech.${tech.name.toLowerCase()}.alt`, `${tech.name} logo`)}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
             
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

