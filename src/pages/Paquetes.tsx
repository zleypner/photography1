import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PricingCard from '../components/PricingCard'
import { services } from '../data/services'

export default function Paquetes() {
  // Combinar todos los paquetes de todos los servicios con sus nombres de servicio
  const allPackages = services.flatMap(service =>
    service.packages.map((pkg, index) => ({
      ...pkg,
      serviceName: service.title,
      serviceSlug: service.slug,
      isPopular: index === 1, // El segundo paquete es el popular por defecto
    }))
  )

  return (
    <div className="section-container bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">Paquetes y Precios</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Opciones diseñadas para diferentes necesidades y presupuestos. 
            Cada paquete incluye fotografía profesional y edición de alta calidad.
          </p>
        </div>

        {/* Paquetes por servicio */}
        {services.map((service) => (
          <div key={service.id} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="heading-2 mb-2">{service.title}</h2>
              <Link
                to={`/${service.slug}`}
                className="text-gray-600 hover:text-gray-900 inline-flex items-center space-x-1"
              >
                <span>Ver detalles completos del servicio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.packages.map((pkg, index) => (
                <PricingCard
                  key={index}
                  name={pkg.name}
                  price={pkg.price}
                  description={`Paquete ${pkg.name} para ${service.title}`}
                  features={pkg.features}
                  popular={index === 1}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Comparación general */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mt-16">
          <h2 className="heading-2 mb-8 text-center">¿Qué Incluyen Todos los Paquetes?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Fotografía Profesional</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Equipamiento de última generación</li>
                <li>• Experiencia y técnica probada</li>
                <li>• Enfoque artístico y profesional</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Edición de Calidad</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Corrección de color profesional</li>
                <li>• Retoque y optimización</li>
                <li>• Estilo consistente y elegante</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Entrega Premium</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Álbum digital en alta resolución</li>
                <li>• Formato listo para imprimir</li>
                <li>• Acceso permanente online</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mt-8">
          <h2 className="heading-2 mb-8 text-center">Servicios Adicionales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold mb-2">Horas Adicionales</h3>
              <p className="text-gray-600 text-sm mb-4">$150/hora</p>
              <p className="text-sm text-gray-600">
                Extiende la cobertura de tu evento cuando lo necesites.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold mb-2">Álbum Físico Premium</h3>
              <p className="text-gray-600 text-sm mb-4">Desde $300</p>
              <p className="text-sm text-gray-600">
                Álbum físico de lujo con diseño personalizado.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold mb-2">Sesiones Adicionales</h3>
              <p className="text-gray-600 text-sm mb-4">Desde $400</p>
              <p className="text-sm text-gray-600">
                Engagement, trash the dress, sesiones familiares.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold mb-2">Video Highlights</h3>
              <p className="text-gray-600 text-sm mb-4">Desde $500</p>
              <p className="text-sm text-gray-600">
                Video corto con lo mejor del evento.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-12">
          <h2 className="heading-2 mb-4 text-white">¿Necesitas un Paquete Personalizado?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Trabajemos juntos para crear un paquete que se ajuste perfectamente a tus necesidades.
          </p>
          <Link
            to="/contacto"
            className="btn-primary bg-white text-gray-900 hover:bg-gray-100 inline-flex items-center space-x-2 text-lg px-8 py-4"
          >
            <span>Contactar para Cotización Personalizada</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}
