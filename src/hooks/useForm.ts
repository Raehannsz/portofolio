import { useState } from 'react'

export interface FormState {
  [key: string]: string | string[] | boolean
}

export const useForm = (initialState: FormState, onSubmit?: (data: FormState) => void) => {
  const [formData, setFormData] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checkboxElement = e.target as HTMLInputElement
      setFormData(prev => ({
        ...prev,
        [name]: checkboxElement.checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleReset = () => {
    setFormData(initialState)
    setErrors({})
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      if (onSubmit) {
        await onSubmit(formData)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
    handleReset,
    isSubmitting
  }
}
