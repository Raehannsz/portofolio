import { Navbar } from './Navbar'
import { Footer } from '../sections/Footer'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
