import { X } from 'lucide-react'
import { formatDateTime } from '../lib/dateUtils'
import { BookingFormData } from './BookingForm'

interface BookingSummaryModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  booking: {
    date: Date
    time: string
    formData: BookingFormData
  }
  isSubmitting?: boolean
}

export default function BookingSummaryModal({
  isOpen,
  onClose,
  onConfirm,
  booking,
  isSubmitting = false,
}: BookingSummaryModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Resumen de tu Solicitud</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Fecha y Hora</h3>
            <p className="text-gray-700">
              {formatDateTime(booking.date, booking.time)}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Información de Contacto</h3>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-medium">Nombre:</span> {booking.formData.name}</p>
              <p><span className="font-medium">Teléfono:</span> {booking.formData.phone}</p>
              <p><span className="font-medium">Email:</span> {booking.formData.email}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Detalles del Evento</h3>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-medium">Tipo:</span> {booking.formData.eventType}</p>
              {booking.formData.location && (
                <p><span className="font-medium">Lugar:</span> {booking.formData.location}</p>
              )}
              {booking.formData.budgetRange && (
                <p><span className="font-medium">Presupuesto:</span> {booking.formData.budgetRange}</p>
              )}
              {booking.formData.notes && (
                <div>
                  <p className="font-medium mb-1">Mensaje:</p>
                  <p className="text-gray-600 italic">{booking.formData.notes}</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Importante:</strong> Esta es una solicitud de reserva. Te contactaremos en las próximas 24 horas 
              para confirmar la disponibilidad y los detalles finales.
            </p>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 btn-secondary"
            disabled={isSubmitting}
          >
            Modificar
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Confirmando...' : 'Confirmar Solicitud'}
          </button>
        </div>
      </div>
    </div>
  )
}
