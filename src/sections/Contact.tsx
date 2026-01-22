import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem } from '../animations/motionVariants'
import { useForm } from '../hooks/useForm'
import { validateEmail } from '../utils/helpers'

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const {
    formData,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
    handleReset,
    isSubmitting
  } = useForm(
    {
      name: '',
      email: '',
      message: ''
    },
    async (data) => {
      // Validate
      const newErrors: Record<string, string> = {}

      if (!data.name || (data.name as string).trim().length < 2) {
        newErrors.name = 'Nama minimal 2 karakter'
      }

      if (!data.email || !validateEmail(data.email as string)) {
        newErrors.email = 'Email tidak valid'
      }

      if (!data.message || (data.message as string).trim().length < 5) {
        newErrors.message = 'Pesan minimal 5 karakter'
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
      }

      // Simulate sending email (in real app, this would call a backend API)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Message sent:', data)
      setSubmitted(true)
      handleReset()

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    }
  )

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          {...fadeUp}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center"
        >
          Hubungi Saya
        </motion.h2>

        <motion.p
          {...fadeUp}
          className="text-center text-gray-600 dark:text-gray-400 mb-12"
        >
          Punya pertanyaan atau proposal? Jangan ragu untuk menghubungi saya!
        </motion.p>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-8 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-800 dark:text-green-200 rounded-lg"
          >
            ✅ Terima kasih! Pesan Anda telah dikirim. Saya akan segera membalas.
          </motion.div>
        )}

        <motion.form
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <motion.div variants={staggerItem}>
            <label className="block text-gray-900 dark:text-white font-semibold mb-2">
              Nama
            </label>
            <input
              type="text"
              name="name"
              value={String(formData.name)}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 ${
                errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
              }`}
              placeholder="Nama lengkap Anda"
            />
            {errors.name && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </motion.div>

          <motion.div variants={staggerItem}>
            <label className="block text-gray-900 dark:text-white font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={String(formData.email)}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
              }`}
              placeholder="email@example.com"
            />
            {errors.email && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </motion.div>

          <motion.div variants={staggerItem}>
            <label className="block text-gray-900 dark:text-white font-semibold mb-2">
              Pesan
            </label>
            <textarea
              name="message"
              value={String(formData.message)}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 resize-none ${
                errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
              }`}
              placeholder="Tuliskan pesan Anda di sini..."
            />
            {errors.message && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </motion.div>

          <motion.button
            variants={staggerItem}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 gap-6 mt-16 pt-12 border-t border-gray-200 dark:border-gray-700"
        >
          <motion.div variants={staggerItem} className="text-center">
            <div className="text-2xl mb-2">📧</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">your.email@example.com</p>
          </motion.div>

          <motion.div variants={staggerItem} className="text-center">
            <div className="text-2xl mb-2">💼</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Social Media</h3>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Twitter</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
