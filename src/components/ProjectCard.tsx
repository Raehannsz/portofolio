import React, { useState } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../types/Project'
import { fadeUp, hoverLift } from '../animations/motionVariants'

interface ProjectCardProps {
  project: Project
  onEdit?: (proj: Project) => void
  onDelete?: (id: string) => void
  isEditable?: boolean
}

export const ProjectCard = ({
  project,
  onEdit,
  onDelete,
  isEditable = false
}: ProjectCardProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(project)

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

  const handleSave = () => {
    if (onEdit) {
      onEdit(formData)
      setIsEditing(false)
    }
  }

  const handleDelete = () => {
    if (onDelete && window.confirm('Yakin ingin menghapus project?')) {
      onDelete(project.id)
    }
  }

  if (isEditing) {
    return (
      <motion.div
        {...fadeUp}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
      >
        <div className="space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Judul project"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Deskripsi"
            rows={3}
          />
          <input
            type="text"
            name="techStack"
            value={formData.techStack.join(', ')}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tech stack (pisahkan dengan koma)"
          />
          <input
            type="text"
            name="githubUrl"
            value={formData.githubUrl || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="URL GitHub"
          />
          <input
            type="text"
            name="liveUrl"
            value={formData.liveUrl || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="URL Live"
          />
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tahun"
          />
          <label className="flex items-center">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured || false}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Tampilkan di featured</span>
          </label>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Simpan
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="flex-1 px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition"
            >
              Batal
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      {...fadeUp}
      {...hoverLift}
      className="group bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
    >
      {formData.featured && (
        <div className="mb-3 px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-bold rounded-full w-fit">
          ⭐ Featured
        </div>
      )}

      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{formData.title}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{formData.year}</p>
        </div>
        {isEditable && (
          <div className="flex gap-2 ml-4">
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition opacity-0 group-hover:opacity-100"
              title="Edit"
            >
              ✏️
            </button>
            <button
              onClick={handleDelete}
              className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition opacity-0 group-hover:opacity-100"
              title="Hapus"
            >
              🗑️
            </button>
          </div>
        )}
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4">{formData.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {formData.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        {formData.githubUrl && (
          <a
            href={formData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            GitHub →
          </a>
        )}
        {formData.liveUrl && (
          <a
            href={formData.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Live Demo →
          </a>
        )}
      </div>
    </motion.div>
  )
}
