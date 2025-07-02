
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Section2() {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="global-padding grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 md:p-8 lg:p-12 bg-white shadow-2xl rounded-3xl"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
    >
      {/* Left Section */}
      <motion.div
        className="flex flex-col justify-center text-black col-span-1 md:col-span-1 items-center sm:items-start sm:justify-start sm:text-center"
        variants={fadeIn}
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
          {t('growTogether')}
        </h1>

        {/* Paragraph with Animation */}
        <motion.h3
          className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light mb-4 sm:mb-6 lg:mb-8 leading-relaxed text-center sm:text-left"
          variants={fadeIn}
        >
          {t('companyDescription')}
        </motion.h3>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 col-span-1 md:col-span-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        {[
          { number: '+6', label: 'Skilled Employees' },
          { number: '+9', label: 'Current Projects' },
          { number: '+7', label: 'Global Clients' },
          { number: '+14', label: 'Satisfied Clients' },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-6 md:space-y-8"
            variants={fadeIn}
          >
            <div className="flex items-center space-x-2">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">
                {item.number}
              </h1>
              <span className="text-xs sm:text-sm md:text-base lg:text-lg">{item.label}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
