import { useState, FormEvent } from 'react'

interface BookingFormProps {
  selectedDate: Date | null
  selectedTime: string
  onTimeChange: (time: string) => void
  onSubmit: (data: BookingFormData) => void
  isSubmitting?: boolean
}

export interface BookingFormData {
  name: string
  phone: string
  email: string
  eventType: string
  location: string
  budgetRange: string
  notes: string
}

const TIME_SLOTS = [
  '08:00', '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
]

const EVENT_TYPES = [
  'Boda',
  '15 Años',
  'Fiesta',
  'Evento Corporativo',
  'Modelaje / Pasarela',
  'Sesión de Fotografía',
  'Otro',
]

const BUDGET_RANGES = [
  '$500 - $1,000',
  '$1,000 - $2,500',
  '$2,500 - $5,000',
  '$5,000 - $10,000',
  '$10,000+',
  'A definir',
]

export default function BookingForm({
  selectedDate,
  selectedTime,
  onTimeChange,
  onSubmit,
  isSubmitting = false,
}: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    location: '',
    budgetRange: '',
    notes: '',
  })

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({})

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Formato de teléfono inválido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Selecciona el tipo de evento'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!selectedDate) {
      alert('Por favor selecciona una fecha')
      return
    }
    if (!selectedTime) {
      alert('Por favor selecciona una hora')
      return
    }
    if (validate()) {
      onSubmit(formData)
    }
  }

  const handleChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {selectedDate && (
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Fecha seleccionada</p>
          <p className="font-semibold text-gray-900">
            {selectedDate.toLocaleDateString('es-CR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Hora <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
          {TIME_SLOTS.map(time => (
            <button
              key={time}
              type="button"
              onClick={() => onTimeChange(time)}
              className={`py-2 px-3 rounded-lg border-2 transition-colors ${
                selectedTime === time
                  ? 'border-gray-900 bg-gray-900 text-white'
                  : 'border-gray-300 text-gray-700 hover:border-gray-400'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
        {!selectedTime && (
          <p className="mt-1 text-sm text-red-500">Selecciona una hora</p>
        )}
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Nombre completo <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border-2 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-gray-900`}
          placeholder="Tu nombre"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            WhatsApp / Teléfono <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border-2 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-gray-900`}
            placeholder="+506 0000-0000"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border-2 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-gray-900`}
            placeholder="tu@email.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
          Tipo de evento <span className="text-red-500">*</span>
        </label>
        <select
          id="eventType"
          value={formData.eventType}
          onChange={(e) => handleChange('eventType', e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border-2 ${
            errors.eventType ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-gray-900`}
        >
          <option value="">Selecciona un tipo</option>
          {EVENT_TYPES.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        {errors.eventType && <p className="mt-1 text-sm text-red-500">{errors.eventType}</p>}
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
          Lugar del evento
        </label>
        <input
          type="text"
          id="location"
          value={formData.location}
          onChange={(e) => handleChange('location', e.target.value)}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
          placeholder="Dirección o nombre del lugar"
        />
      </div>

      <div>
        <label htmlFor="budgetRange" className="block text-sm font-medium text-gray-700 mb-2">
          Presupuesto estimado
        </label>
        <select
          id="budgetRange"
          value={formData.budgetRange}
          onChange={(e) => handleChange('budgetRange', e.target.value)}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
        >
          <option value="">Selecciona un rango</option>
          {BUDGET_RANGES.map(range => (
            <option key={range} value={range}>{range}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje adicional (opcional)
        </label>
        <textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => handleChange('notes', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
          placeholder="Cuéntanos más sobre tu evento, ideas especiales, etc."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !selectedDate || !selectedTime}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Continuar con el Resumen'}
      </button>
    </form>
  )
}
