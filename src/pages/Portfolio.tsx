import { useState } from 'react'
import { Link } from 'react-router-dom'
import GalleryGrid from '../components/GalleryGrid'
import { services } from '../data/services'

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos')

  const categories = [
    { id: 'todos', name: 'Todos' },
    ...services.map(s => ({ id: s.id, name: s.title })),
  ]

  // Combinar todas las imágenes de todos los servicios
  const allImages = services.flatMap(service =>
    service.gallery.map(img => ({
      ...img,
      category: service.id,
    }))
  ) as Array<{ id: string; src?: string; alt: string; category: string }>

  const filteredImages =
    selectedCategory === 'todos'
      ? allImages.map(({ category, ...img }) => img)
      : allImages.filter(img => img.category === selectedCategory).map(({ category, ...img }) => img)

  return (
    <div className="section-container bg-white min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="heading-1 mb-4">Portafolio</h1>
        <p className="text-xl text-gray-600">
          Una colección de momentos especiales capturados con arte y profesionalismo. 
          Explora diferentes categorías o navega por todo el trabajo.
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Galería */}
      {filteredImages.length > 0 ? (
        <GalleryGrid images={filteredImages} columns={3} />
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg">No hay imágenes en esta categoría aún.</p>
        </div>
      )}

      {/* Info adicional */}
      <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">¿Interesado en Ver Más?</h2>
        <p className="text-gray-600 mb-6">
          Si quieres ver ejemplos específicos de un tipo de evento o tienes preguntas 
          sobre mi estilo, no dudes en contactarme.
        </p>
        <Link
          to="/contacto"
          className="btn-primary inline-block"
        >
          Contactar
        </Link>
      </div>
    </div>
  )
}
