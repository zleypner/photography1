import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  title: string
  subtitle?: string
  image?: string
  ctaText?: string
  ctaLink?: string
  showSecondaryCta?: boolean
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export default function Hero({
  title,
  subtitle,
  image,
  ctaText = 'Reservar Fecha',
  ctaLink = '/reservar',
  showSecondaryCta = true,
  secondaryCtaText = 'Ver Portafolio',
  secondaryCtaLink = '/portafolio',
}: HeroProps) {
  return (
    <div className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        style={{
          backgroundImage: image ? `url(${image})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {!image && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="heading-1 mb-6 text-white drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-100 mb-8 drop-shadow-md">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to={ctaLink}
            className="btn-primary bg-white text-gray-900 hover:bg-gray-100 inline-flex items-center space-x-2 group"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          {showSecondaryCta && (
            <Link
              to={secondaryCtaLink}
              className="btn-secondary bg-transparent border-white text-white hover:bg-white/10 inline-flex items-center"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
