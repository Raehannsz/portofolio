import React, { useState } from 'react'
import { motion } from 'framer-motion'
import type { Experience } from '../types/Experience'
import { fadeUp, hoverLift } from '../animations/motionVariants'

interface ExperienceCardProps {
  experience: Experience
  onEdit?: (exp: Experience) => void
  onDelete?: (id: string) => void
  isEditable?: boolean
}

export const ExperienceCard = ({
  experience,
  onEdit,
  onDelete,
  isEditable = false
}: ExperienceCardProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(experience)

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

  const handleSave = () => {
    if (onEdit) {
      onEdit(formData)
      setIsEditing(false)
    }
  }

  const handleDelete = () => {
    if (onDelete && window.confirm('Yakin ingin menghapus?')) {
      onDelete(experience.id)
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
            placeholder="Judul pekerjaan"
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nama perusahaan"
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
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tahun"
          />
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
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{formData.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{formData.company}</p>
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

      <div className="flex flex-wrap gap-2">
        {formData.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
