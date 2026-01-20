import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  event: string
  rating: number
  text: string
  image?: string
}

export default function TestimonialCard({
  name,
  event,
  rating,
  text,
  image,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic leading-relaxed">"{text}"</p>
      <div className="flex items-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 mr-4 flex items-center justify-center text-gray-600 font-semibold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{event}</p>
        </div>
      </div>
    </div>
  )
}
