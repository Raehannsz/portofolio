import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem } from '../animations/motionVariants'
import { ProjectCard } from '../components/ProjectCard'
import { PortfolioContext } from '../context/PortfolioContext'
import type { Project } from '../types/Project'

export const Projects = () => {
  const { projects, addProject, updateProject, deleteProject } = useContext(PortfolioContext)
  const [isAdding, setIsAdding] = useState(false)
  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    description: '',
    techStack: [],
    year: new Date().getFullYear().toString(),
    featured: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as any
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        featured: (e.target as HTMLInputElement).checked
      }))
    } else if (name === 'techStack') {
      setFormData(prev => ({
        ...prev,
          techStack: value.split(',').map((tech: string) => tech.trim())
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
    if (formData.title && formData.description) {
      addProject({
        id: Date.now().toString(),
        title: formData.title,
        description: formData.description,
        techStack: formData.techStack || [],
        year: formData.year || new Date().getFullYear().toString(),
        liveUrl: formData.liveUrl,
        githubUrl: formData.githubUrl,
        featured: formData.featured || false
      })
      setFormData({
        title: '',
        description: '',
        techStack: [],
        year: new Date().getFullYear().toString(),
        featured: false
      })
      setIsAdding(false)
    }
  }

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          {...fadeUp}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center"
        >
          Portfolio Proyek
        </motion.h2>

        <motion.p
          {...fadeUp}
          className="text-center text-gray-600 dark:text-gray-400 mb-12"
        >
          Kumpulan proyek terbaik yang telah saya kerjakan dengan teknologi modern
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          onClick={() => setIsAdding(!isAdding)}
          className="mb-8 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
        >
          {isAdding ? '✕ Batal' : '+ Tambah Project'}
        </motion.button>

        {isAdding && (
          <motion.form
            {...fadeUp}
            onSubmit={handleAdd}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-600"
          >
            <div className="space-y-4">
              <input
                type="text"
                name="title"
                value={formData.title || ''}
                onChange={handleChange}
                placeholder="Judul project"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="description"
                value={formData.description || ''}
                onChange={handleChange}
                placeholder="Deskripsi project"
                rows={3}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="techStack"
                value={formData.techStack?.join(', ') || ''}
                onChange={handleChange}
                placeholder="Tech stack (pisahkan dengan koma)"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="githubUrl"
                value={formData.githubUrl || ''}
                onChange={handleChange}
                placeholder="URL GitHub (opsional)"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="liveUrl"
                value={formData.liveUrl || ''}
                onChange={handleChange}
                placeholder="URL Live (opsional)"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="year"
                value={formData.year || ''}
                onChange={handleChange}
                placeholder="Tahun"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured || false}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-gray-900 dark:text-white">Jadikan Featured?</span>
              </label>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Simpan Project
              </button>
            </div>
          </motion.form>
        )}

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <motion.h3
              {...fadeUp}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
            >
              ⭐ Featured Projects
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              className="grid md:grid-cols-2 gap-8"
            >
              {featuredProjects.map((project) => (
                <motion.div key={project.id} variants={staggerItem}>
                  <ProjectCard
                    project={project}
                    onEdit={updateProject}
                    onDelete={deleteProject}
                    isEditable={true}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <motion.h3
              {...fadeUp}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
            >
              All Projects
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              className="grid md:grid-cols-2 gap-8"
            >
              {otherProjects.map((project) => (
                <motion.div key={project.id} variants={staggerItem}>
                  <ProjectCard
                    project={project}
                    onEdit={updateProject}
                    onDelete={deleteProject}
                    isEditable={true}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {projects.length === 0 && (
          <motion.p
            {...fadeUp}
            className="text-center text-gray-600 dark:text-gray-400 py-12"
          >
            Belum ada project. Mulai tambahkan project Anda!
          </motion.p>
        )}
      </div>
    </section>
  )
}
