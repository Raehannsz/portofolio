import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem } from '../animations/motionVariants'
import { skillsData } from '../constants/skillsData'

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          {...fadeUp}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Skills & Tech Stack
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillsData.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, itemIdx) => (
                  <div key={itemIdx} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
