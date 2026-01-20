import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Hero from '../../components/Hero'
import GalleryGrid from '../../components/GalleryGrid'
import PricingCard from '../../components/PricingCard'
import FAQAccordion from '../../components/FAQAccordion'
import { services } from '../../data/services'

export default function Bodas() {
  const service = services.find(s => s.id === 'bodas')!

  return (
    <div>
      <Hero
        title="Fotografía de Bodas"
        subtitle="El día más importante de tu vida, capturado con arte y emoción."
      />

      {/* Descripción */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto text-center mb-12">
            <h2 className="heading-2 mb-6">Tu Historia de Amor, Contada en Imágenes</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {service.description}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cada boda tiene su propia magia: los nervios de la mañana, la emoción del "sí quiero", 
              las lágrimas de felicidad, las risas en la pista de baile. Mi objetivo es capturar 
              todos estos momentos de manera discreta y artística, creando un álbum que contarás 
              con tus hijos y nietos.
            </p>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Momentos Capturados</h2>
          <p className="text-xl text-gray-600">
            Una muestra del arte y la emoción que traigo a cada boda.
          </p>
        </div>
        <GalleryGrid images={service.gallery} columns={3} />
      </section>

      {/* Proceso */}
      <section className="section-container bg-white">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Cómo Trabajo en tu Boda</h2>
          <p className="text-xl text-gray-600">
            Un proceso probado que asegura que cada momento importante sea capturado.
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

      {/* Paquetes */}
      <section className="section-container bg-gray-900 text-white">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4 text-white">Paquetes de Bodas</h2>
          <p className="text-xl text-gray-300">
            Opciones diseñadas para diferentes necesidades y presupuestos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.packages.map((pkg, index) => (
            <PricingCard
              key={index}
              name={pkg.name}
              price={pkg.price}
              description={`Paquete ${pkg.name} para tu boda perfecta`}
              features={pkg.features}
              popular={index === 1}
            />
          ))}
        </div>
      </section>

      {/* Lo que incluye */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-8 text-center">¿Qué Incluye Cada Paquete?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">En Todos los Paquetes</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gray-900 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Fotografía profesional durante todo el evento</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gray-900 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Edición profesional de todas las fotos</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gray-900 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Álbum digital en alta resolución</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gray-900 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Derechos de uso personal</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">Add-ons Disponibles</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gray-900 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Horas adicionales de cobertura</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gray-900 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Álbum físico premium adicional</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gray-900 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Sesiones adicionales (engagement, trash the dress)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gray-900 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Videografía profesional</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-container bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-2 mb-8 text-center">Preguntas Frecuentes sobre Bodas</h2>
          <FAQAccordion items={service.faq} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6 text-white">¿Lista/o Para Empezar?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Tu boda merece la mejor fotografía. Hablemos sobre cómo puedo hacer tu día aún más especial.
          </p>
          <Link
            to="/reservar"
            className="btn-primary bg-white text-gray-900 hover:bg-gray-100 inline-flex items-center space-x-2 text-lg px-8 py-4"
          >
            <span>Reservar Fecha para Mi Boda</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  )
}
