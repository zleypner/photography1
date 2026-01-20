import { Link } from 'react-router-dom'
import { ArrowRight, Award, Camera, Heart } from 'lucide-react'

export default function SobreMi() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-container bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
            <Camera className="w-16 h-16 text-gray-900" />
          </div>
          <h1 className="heading-1 mb-6 text-white">Sobre Mí</h1>
          <p className="text-xl text-gray-300">
            Fotógrafo profesional apasionado por capturar momentos auténticos 
            y crear imágenes que perduran para siempre.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <h2 className="heading-2 mb-6">Mi Historia</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Mi pasión por la fotografía comenzó hace más de 10 años, cuando descubrí que 
              tenía la capacidad de congelar momentos en el tiempo y contar historias a través 
              de imágenes. Lo que empezó como un hobby se convirtió en mi profesión y mi forma 
              de vida.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              He tenido el privilegio de trabajar con más de 200 parejas, familias y empresas, 
              capturando desde bodas íntimas hasta eventos corporativos grandes. Cada proyecto 
              es una oportunidad de crear algo único y significativo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mi enfoque combina técnica profesional con un ojo artístico, siempre buscando 
              capturar la emoción auténtica y los detalles que hacen especial cada momento. 
              Creo que la mejor fotografía no es la más perfecta técnicamente, sino la que 
              mejor transmite una emoción y cuenta una historia.
            </p>
          </div>
        </div>
      </section>

      {/* Credenciales */}
      <section className="section-container bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 mb-12 text-center">Credenciales y Experiencia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <Award className="w-12 h-12 text-gray-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Más de 200 Eventos</h3>
              <p className="text-gray-600">
                Experiencia comprobada en bodas, eventos corporativos, celebraciones y más.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <Camera className="w-12 h-12 text-gray-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Educación Continua</h3>
              <p className="text-gray-600">
                Certificaciones profesionales y constante actualización en técnicas y equipamiento.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <Heart className="w-12 h-12 text-gray-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">100% Comprometido</h3>
              <p className="text-gray-600">
                Cada proyecto recibe la misma atención al detalle y dedicación personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-8 text-center">Mi Filosofía de Trabajo</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Autenticidad por Encima de Todo</h3>
              <p className="text-gray-700">
                Creo que las mejores fotos son las que capturan momentos reales y emociones genuinas. 
                Trabajo de manera discreta para que puedas ser tú mismo/a frente a la cámara, 
                permitiendo que la autenticidad brille.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Atención Personalizada</h3>
              <p className="text-gray-700">
                Cada cliente y cada evento es único. Dedico tiempo a entender tu visión, tus expectativas 
                y tu estilo, para crear un resultado que realmente refleje quién eres y qué es importante 
                para ti.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Calidad Sin Compromisos</h3>
              <p className="text-gray-700">
                Utilizo solo equipamiento profesional de última generación y aplico estándares editoriales 
                en cada foto. La edición es parte integral del proceso, asegurando que cada imagen sea perfecta.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Compromiso a Largo Plazo</h3>
              <p className="text-gray-700">
                Entiendo que estas fotos serán tesoros familiares por generaciones. Mi compromiso es crear 
                imágenes que no solo te gusten hoy, sino que atesores toda la vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantía */}
      <section className="section-container bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6 text-white">Mi Promesa a Ti</h2>
          <p className="text-xl text-gray-300 mb-8">
            Estoy comprometido con tu satisfacción. Si no estás completamente feliz con tus fotos, 
            trabajaré contigo para hacer los ajustes necesarios. Tu felicidad es mi prioridad número uno.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-lg text-gray-200">
              <strong>Garantía de Calidad:</strong> Si hay algún problema técnico o no estás satisfecho 
              con el resultado, revisaré y corregiré sin costo adicional. Tu satisfacción está garantizada.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gray-50 rounded-3xl p-12">
          <h2 className="heading-2 mb-6">Trabajemos Juntos</h2>
          <p className="text-xl text-gray-600 mb-8">
            Si mi estilo y filosofía resuenan contigo, me encantaría ser parte de tu historia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservar" className="btn-primary text-lg px-8 py-4">
              Reservar Fecha
            </Link>
            <Link to="/contacto" className="btn-secondary text-lg px-8 py-4">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
