import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem } from '../animations/motionVariants'

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          {...fadeUp}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Tentang Saya
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={staggerItem} className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Saya adalah seorang mahasiswa yang passionate tentang Web Development dan IT. Dengan pengalaman dalam membangun aplikasi web modern, saya percaya bahwa desain yang baik dan kode yang bersih adalah kunci kesuksesan.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Saya terus belajar dan berkembang, dengan fokus pada teknologi terbaru seperti React, TypeScript, dan tools modern lainnya. Setiap project adalah kesempatan untuk meningkatkan skills dan menciptakan sesuatu yang bermakna.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Di luar coding, saya menyukai brainstorming tentang UX/UI design, mengikuti perkembangan web trends, dan berkolaborasi dengan orang-orang kreatif untuk menghasilkan solusi terbaik.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg p-1 shadow-lg">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">👨‍💻</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Web Developer</h3>
                <p className="text-gray-600 dark:text-gray-400">Mahasiswa | Learner | Problem Solver</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
