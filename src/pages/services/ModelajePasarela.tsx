import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../../components/Hero'
import GalleryGrid from '../../components/GalleryGrid'
import PricingCard from '../../components/PricingCard'
import FAQAccordion from '../../components/FAQAccordion'
import { services } from '../../data/services'

export default function ModelajePasarela() {
  const service = services.find(s => s.id === 'modelaje-pasarela')!

  return (
    <div>
      <Hero
        title="Fotografía de Moda y Modelaje"
        subtitle="Portafolios profesionales y sesiones editoriales."
      />

      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto text-center mb-12">
            <h2 className="heading-2 mb-6">Fotografía Editorial de Alta Calidad</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {service.description}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Especializado en fotografía de moda y portafolios profesionales. Trabajo 
              con modelos, diseñadores y marcas para crear imágenes impactantes que destacan 
              la elegancia y el estilo.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Galería de Moda</h2>
        </div>
        <GalleryGrid images={service.gallery} columns={3} />
      </section>

      <section className="section-container bg-white">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Proceso Creativo</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.process.map((step) => (
            <div key={step.step} className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">{step.step}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container bg-gray-900 text-white">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4 text-white">Paquetes de Moda</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.packages.map((pkg, index) => (
            <PricingCard
              key={index}
              name={pkg.name}
              price={pkg.price}
              description={`Paquete ${pkg.name}`}
              features={pkg.features}
              popular={index === 1}
            />
          ))}
        </div>
      </section>

      <section className="section-container bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-2 mb-8 text-center">Preguntas Frecuentes</h2>
          <FAQAccordion items={service.faq} />
        </div>
      </section>

      <section className="section-container bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6 text-white">Creemos Algo Increíble</h2>
          <Link
            to="/reservar"
            className="btn-primary bg-white text-gray-900 hover:bg-gray-100 inline-flex items-center space-x-2 text-lg px-8 py-4"
          >
            <span>Reservar Sesión</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  )
}
