import React, { createContext, useState } from "react"
import type { Experience } from "../types/Experience"
import { initialExperience } from "../data/experienceData"

interface ExperienceContextType {
  experiences: Experience[]
  addExperience: (exp: Experience) => void
  updateExperience: (exp: Experience) => void
  deleteExperience: (id: string) => void
}

export const ExperienceContext = createContext<ExperienceContextType>(
  {} as ExperienceContextType
)

export const ExperienceProvider = ({ children }: { children: any }) => {
  const [experiences, setExperiences] = useState<Experience[]>(initialExperience)

  const addExperience = (exp: Experience) => {
    setExperiences(prev => [...prev, exp])
  }

  const updateExperience = (updated: Experience) => {
    setExperiences(prev =>
      prev.map(exp => exp.id === updated.id ? updated : exp)
    )
  }

  const deleteExperience = (id: string) => {
    setExperiences(prev => prev.filter(exp => exp.id !== id))
  }

  return React.createElement(
    ExperienceContext.Provider,
    { value: { experiences, addExperience, updateExperience, deleteExperience } },
    children
  )
}