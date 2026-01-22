import React, { createContext, useState, useEffect } from 'react'
import type { Experience } from '../types/Experience'
import type { Project } from '../types/Project'
import { initialExperience } from '../data/experienceData'
import { initialProjects } from '../data/projectData'

interface PortfolioContextType {
  // Experience
  experiences: Experience[]
  addExperience: (exp: Experience) => void
  updateExperience: (exp: Experience) => void
  deleteExperience: (id: string) => void

  // Projects
  projects: Project[]
  addProject: (project: Project) => void
  updateProject: (project: Project) => void
  deleteProject: (id: string) => void
}

export const PortfolioContext = createContext<PortfolioContextType>(
  {} as PortfolioContextType
)

const STORAGE_KEYS = {
  EXPERIENCES: 'portfolio_experiences',
  PROJECTS: 'portfolio_projects'
}

export const PortfolioProvider = ({ children }: { children: React.ReactNode }) => {
  const [experiences, setExperiences] = useState<Experience[]>(initialExperience)
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [isHydrated, setIsHydrated] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedExperiences = localStorage.getItem(STORAGE_KEYS.EXPERIENCES)
      const savedProjects = localStorage.getItem(STORAGE_KEYS.PROJECTS)

      if (savedExperiences) {
        setExperiences(JSON.parse(savedExperiences))
      }
      if (savedProjects) {
        setProjects(JSON.parse(savedProjects))
      }
    } catch (error) {
      console.error('Failed to load from localStorage:', error)
    }
    setIsHydrated(true)
  }, [])

  // Save experiences to localStorage
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(STORAGE_KEYS.EXPERIENCES, JSON.stringify(experiences))
    }
  }, [experiences, isHydrated])

  // Save projects to localStorage
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects))
    }
  }, [projects, isHydrated])

  const addExperience = (exp: Experience) => {
    setExperiences(prev => [...prev, { ...exp, id: Date.now().toString() }])
  }

  const updateExperience = (updated: Experience) => {
    setExperiences(prev =>
      prev.map(exp => exp.id === updated.id ? updated : exp)
    )
  }

  const deleteExperience = (id: string) => {
    setExperiences(prev => prev.filter(exp => exp.id !== id))
  }

  const addProject = (project: Project) => {
    setProjects(prev => [...prev, { ...project, id: Date.now().toString() }])
  }

  const updateProject = (updated: Project) => {
    setProjects(prev =>
      prev.map(proj => proj.id === updated.id ? updated : proj)
    )
  }

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(proj => proj.id !== id))
  }

  const value: PortfolioContextType = {
    experiences,
    addExperience,
    updateExperience,
    deleteExperience,
    projects,
    addProject,
    updateProject,
    deleteProject
  }

  return React.createElement(
    PortfolioContext.Provider,
    { value },
    children
  )
}
