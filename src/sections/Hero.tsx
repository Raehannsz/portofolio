import { motion } from 'framer-motion'
import { heroTitle, heroTitleTransition, heroSubtitle, heroSubtitleTransition, heroCTA, heroCTATransition, bounce, bounceTransition } from '../animations/motionVariants'
import { useScrollToSection } from '../hooks/useScroll'

export const Hero = () => {
  const { scrollToSection } = useScrollToSection()

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-400 rounded-full blur-3xl"
        />

        {/* Main content */}
        <motion.h1
          initial={heroTitle.initial}
          animate={heroTitle.animate}
          transition={heroTitleTransition}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
        >
          Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Developer</span>
        </motion.h1>

        <motion.p
          initial={heroSubtitle.initial}
          animate={heroSubtitle.animate}
          transition={heroSubtitleTransition}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Seorang mahasiswa dengan passion di Web Development. Saya menciptakan website yang tidak hanya fungsional, tetapi juga memiliki pengalaman pengguna yang luar biasa dan desain yang modern.
        </motion.p>

        <motion.div
          initial={heroCTA.initial}
          animate={heroCTA.animate}
          transition={heroCTATransition}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Lihat Portofolio
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
          >
            Hubungi Saya
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={bounce.initial}
          animate={bounce.animate}
          transition={bounceTransition}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-gray-400 text-sm">Scroll untuk lanjut</div>
          <div className="text-2xl">↓</div>
        </motion.div>
      </div>
    </section>
  )
}
