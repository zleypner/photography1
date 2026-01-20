import { Link } from 'react-router-dom'
import FAQAccordion from '../components/FAQAccordion'
import { faqs } from '../data/faq'

export default function FAQ() {
  const categories = ['reservas', 'entrega', 'edicion', 'reprogramaciones', 'general'] as const
  const categoryNames = {
    reservas: 'Reservas y Cotizaciones',
    entrega: 'Entrega de Fotos',
    edicion: 'Edición y Procesamiento',
    reprogramaciones: 'Reprogramaciones y Cancelaciones',
    general: 'Preguntas Generales',
  }

  return (
    <div className="section-container bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">Preguntas Frecuentes</h1>
          <p className="text-xl text-gray-600">
            Aquí encontrarás respuestas a las preguntas más comunes. 
            Si no encuentras lo que buscas, no dudes en contactarme.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => {
            const categoryFaqs = faqs.filter(faq => faq.category === category)
            if (categoryFaqs.length === 0) return null

            return (
              <div key={category}>
                <h2 className="heading-3 mb-6">{categoryNames[category]}</h2>
                <FAQAccordion items={categoryFaqs.map(faq => ({ question: faq.question, answer: faq.answer }))} />
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿No Encontraste tu Respuesta?</h2>
          <p className="text-gray-600 mb-6">
            Estoy aquí para ayudarte. Contáctame y responderé todas tus preguntas.
          </p>
          <Link to="/contacto" className="btn-primary inline-block">
            Contactar
          </Link>
        </div>
      </div>
    </div>
  )
}
