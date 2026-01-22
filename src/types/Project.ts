export interface Project {
  id: string
  title: string
  description: string
  image?: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  year: string
  featured?: boolean
}
