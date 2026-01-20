import TestimonialCard from '../components/TestimonialCard'
import { testimonials } from '../data/testimonials'

export default function Testimonios() {
  return (
    <div className="section-container bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">Testimonios</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Las palabras de mis clientes son el mejor reflejo de mi trabajo. 
            Cada proyecto es una oportunidad de crear algo especial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        {/* Estadísticas */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mt-16">
          <h2 className="heading-2 mb-8 text-center">Números que Hablan</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-gray-900 mb-2">200+</p>
              <p className="text-gray-600">Eventos Capturados</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900 mb-2">98%</p>
              <p className="text-gray-600">Clientes Satisfechos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900 mb-2">10+</p>
              <p className="text-gray-600">Años de Experiencia</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900 mb-2">5.0</p>
              <p className="text-gray-600">Calificación Promedio</p>
            </div>
          </div>
        </div>

        {/* Mensaje final */}
        <div className="mt-12 text-center bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-12">
          <h2 className="heading-2 mb-4 text-white">Sé Parte de Esta Historia</h2>
          <p className="text-xl text-gray-300">
            Únete a las más de 200 familias y empresas que confían en mí para capturar sus momentos especiales.
          </p>
        </div>
      </div>
    </div>
  )
}
