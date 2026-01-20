import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Hero from '../../components/Hero'
import GalleryGrid from '../../components/GalleryGrid'
import PricingCard from '../../components/PricingCard'
import FAQAccordion from '../../components/FAQAccordion'
import { services } from '../../data/services'

export default function QuinceAnios() {
  const service = services.find(s => s.id === 'quince-anios')!

  return (
    <div>
      <Hero
        title="Fotografía de 15 Años"
        subtitle="Celebra esta etapa única con elegancia y estilo."
      />

      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto text-center mb-12">
            <h2 className="heading-2 mb-6">Un Día Especial, Capturado Para Siempre</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {service.description}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tu fiesta de 15 años es un momento único que marca la transición hacia una nueva etapa. 
              Mi trabajo es capturar la elegancia, la emoción y la personalidad de esta celebración 
              especial, creando recuerdos que atesorarás toda la vida.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Galería de 15 Años</h2>
          <p className="text-xl text-gray-600">
            Momentos de elegancia y celebración capturados con arte.
          </p>
        </div>
        <GalleryGrid images={service.gallery} columns={3} />
      </section>

      <section className="section-container bg-white">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Mi Proceso</h2>
          <p className="text-xl text-gray-600">
            Desde la sesión previa hasta la entrega final, cada paso está pensado para ti.
          </p>
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
          <h2 className="heading-2 mb-4 text-white">Paquetes de 15 Años</h2>
          <p className="text-xl text-gray-300">
            Opciones para hacer tu celebración perfecta.
          </p>
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
          <h2 className="heading-2 mb-6 text-white">Celebremos Tus 15 Años</h2>
          <p className="text-xl text-gray-300 mb-8">
            Trabajemos juntos para crear el álbum perfecto de tu celebración.
          </p>
          <Link
            to="/reservar"
            className="btn-primary bg-white text-gray-900 hover:bg-gray-100 inline-flex items-center space-x-2 text-lg px-8 py-4"
          >
            <span>Reservar Fecha</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  )
}
