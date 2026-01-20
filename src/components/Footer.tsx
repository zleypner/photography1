import { Link } from 'react-router-dom'
import { Camera, Instagram, Facebook, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Camera className="w-8 h-8" />
              <span className="text-xl font-bold">Fotografía Profesional</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Capturando momentos inolvidables con arte y profesionalismo. 
              Especializados en bodas, eventos, corporativo y más.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/portafolio" className="text-gray-400 hover:text-white transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link to="/paquetes" className="text-gray-400 hover:text-white transition-colors">
                  Paquetes
                </Link>
              </li>
              <li>
                <Link to="/sobre-mi" className="text-gray-400 hover:text-white transition-colors">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link to="/testimonios" className="text-gray-400 hover:text-white transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <a href="tel:+50600000000" className="hover:text-white transition-colors">
                  +506 0000-0000
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:contacto@fotografia.com" className="hover:text-white transition-colors">
                  contacto@fotografia.com
                </a>
              </li>
            </ul>
            <Link
              to="/reservar"
              className="mt-6 inline-block btn-secondary bg-white text-gray-900 hover:bg-gray-100"
            >
              Reservar Fecha
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Fotografía Profesional. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
