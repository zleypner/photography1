import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Camera } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/portafolio', label: 'Portafolio' },
    { path: '/paquetes', label: 'Paquetes' },
    { path: '/sobre-mi', label: 'Sobre mí' },
    { path: '/testimonios', label: 'Testimonios' },
    { path: '/contacto', label: 'Contacto' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <Camera className="w-6 h-6 md:w-8 md:h-8 text-gray-900 group-hover:text-gray-700 transition-colors" />
            <span className="text-lg md:text-xl font-bold text-gray-900">Fotografía</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/reservar"
              className="btn-primary text-sm"
            >
              Reservar Fecha
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-900"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/reservar"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-4 btn-primary text-center"
            >
              Reservar Fecha
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
