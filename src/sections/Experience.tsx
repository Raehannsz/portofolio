import { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem } from '../animations/motionVariants'
import { ExperienceCard } from '../components/ExperienceCard'
import { PortfolioContext } from '../context/PortfolioContext'
import type { Experience as ExperienceType } from '../types/Experience'

export const Experience = () => {
  const { experiences, addExperience, updateExperience, deleteExperience } = useContext(PortfolioContext)
  const [isAdding, setIsAdding] = useState(false)
  const [formData, setFormData] = useState<Partial<ExperienceType>>({
    title: '',
    company: '',
    description: '',
    techStack: [],
    year: new Date().getFullYear().toString()
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === 'techStack') {
      setFormData(prev => ({
        ...prev,
        techStack: value.split(',').map(tech => tech.trim())
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.title && formData.company) {
      addExperience({
        id: Date.now().toString(),
        title: formData.title,
        company: formData.company,
        description: formData.description || '',
        techStack: formData.techStack || [],
        year: formData.year || new Date().getFullYear().toString()
      })
      setFormData({
        title: '',
        company: '',
        description: '',
        techStack: [],
        year: new Date().getFullYear().toString()
      })
      setIsAdding(false)
    }
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          {...fadeUp}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center"
        >
          Pengalaman Kerja
        </motion.h2>

        <motion.p
          {...fadeUp}
          className="text-center text-gray-600 dark:text-gray-400 mb-12"
        >
          Pengalaman profesional dan proyek yang telah saya kerjakan
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          onClick={() => setIsAdding(!isAdding)}
          className="mb-8 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
        >
          {isAdding ? '✕ Batal' : '+ Tambah Pengalaman'}
        </motion.button>

        {isAdding && (
          <motion.form
            {...fadeUp}
            onSubmit={handleAdd}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-700"
          >
            <div className="space-y-4">
              <input
                type="text"
                name="title"
                value={formData.title || ''}
                onChange={handleChange}
                placeholder="Judul pekerjaan"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="company"
                value={formData.company || ''}
                onChange={handleChange}
                placeholder="Nama perusahaan"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="description"
                value={formData.description || ''}
                onChange={handleChange}
                placeholder="Deskripsi singkat"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="techStack"
                value={formData.techStack?.join(', ') || ''}
                onChange={handleChange}
                placeholder="Tech stack (pisahkan dengan koma)"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="year"
                value={formData.year || ''}
                onChange={handleChange}
                placeholder="Tahun"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Simpan Pengalaman
              </button>
            </div>
          </motion.form>
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="space-y-6"
        >
          {experiences.length > 0 ? (
            experiences.map((exp) => (
              <motion.div key={exp.id} variants={staggerItem}>
                <ExperienceCard
                  experience={exp}
                  onEdit={updateExperience}
                  onDelete={deleteExperience}
                  isEditable={true}
                />
              </motion.div>
            ))
          ) : (
            <motion.p
              variants={staggerItem}
              className="text-center text-gray-600 dark:text-gray-400 py-12"
            >
              Belum ada pengalaman. Mulai tambahkan pengalaman Anda!
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
