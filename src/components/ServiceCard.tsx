import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  image?: string
  link: string
  featured?: boolean
}

export default function ServiceCard({
  title,
  description,
  image,
  link,
  featured = false,
}: ServiceCardProps) {
  return (
    <Link
      to={link}
      className={`group block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <div className="relative aspect-[4/3] md:aspect-square overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Foto de {title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
          <p className="text-gray-100 mb-4 line-clamp-2">{description}</p>
          <span className="inline-flex items-center text-white font-medium group-hover:translate-x-2 transition-transform">
            Ver más <ArrowRight className="w-5 h-5 ml-2" />
          </span>
        </div>
      </div>
    </Link>
  )
}
