export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

export const formatDate = (dateString: string | number): string => {
  if (typeof dateString === 'number') {
    return new Date(dateString).toLocaleDateString()
  }
  return dateString
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validateForm = (data: Record<string, any>): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {}

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Email tidak valid'
  }

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Nama minimal 2 karakter'
  }

  if (!data.message || data.message.trim().length < 5) {
    errors.message = 'Pesan minimal 5 karakter'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const classNames = (...classes: (string | boolean | undefined)[]): string => {
  return classes.filter(Boolean).join(' ')
}
