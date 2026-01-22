import type { Project } from '../types/Project'

export const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Interactive Portfolio Website',
    description: 'A modern, minimalist portfolio website with smooth animations and interactive CRUD features for managing projects and experiences.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    year: '2024',
    featured: true,
    githubUrl: 'https://github.com/yourusername/portfolio'
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with product management, cart functionality, and payment integration.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    year: '2024',
    featured: true,
    githubUrl: 'https://github.com/yourusername/ecommerce'
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team collaboration features.',
    techStack: ['React', 'Firebase', 'Tailwind CSS', 'React Query'],
    year: '2023',
    featured: false,
    githubUrl: 'https://github.com/yourusername/taskapp'
  }
]
