import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  ctaText?: string
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  popular = false,
  ctaText = 'Reservar',
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${
        popular
          ? 'bg-gray-900 text-white transform scale-105 border-4 border-gray-900'
          : 'bg-white'
      }`}
    >
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-white text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
            Más Popular
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className={`mb-6 ${popular ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check
              className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                popular ? 'text-white' : 'text-gray-900'
              }`}
            />
            <span className={popular ? 'text-gray-100' : 'text-gray-700'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        to="/reservar"
        className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-white text-gray-900 hover:bg-gray-100'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {ctaText}
      </Link>
    </div>
  )
}
