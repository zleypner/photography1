import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import Calendar from '../components/Calendar'
import BookingForm, { BookingFormData } from '../components/BookingForm'
import BookingSummaryModal from '../components/BookingSummaryModal'
import ToastContainer from '../components/ToastContainer'
import { createBooking, getBookings, type BookingStatus } from '../lib/booking'
import { formatDateISO } from '../lib/dateUtils'

interface Toast {
  id: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
}

export default function Reservar() {
  const navigate = useNavigate()
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [showSummary, setShowSummary] = useState(false)
  const [formData, setFormData] = useState<BookingFormData | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toasts, setToasts] = useState<Toast[]>([])

  const bookings = getBookings()
  const bookedDates = bookings.map(b => ({
    date: b.date,
    status: b.status as BookingStatus,
  }))

  const addToast = (message: string, type: Toast['type']) => {
    const id = Date.now().toString()
    setToasts(prev => [...prev, { id, message, type }])
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  const handleFormSubmit = (data: BookingFormData) => {
    setFormData(data)
    setShowSummary(true)
  }

  const handleConfirmBooking = async () => {
    if (!selectedDate || !selectedTime || !formData) return

    setIsSubmitting(true)

    try {
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1000))

      const booking = createBooking({
        eventType: formData.eventType,
        date: formatDateISO(selectedDate),
        time: selectedTime,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        location: formData.location,
        budgetRange: formData.budgetRange,
        notes: formData.notes,
      })

      addToast('¡Solicitud enviada exitosamente! Te contactaremos pronto.', 'success')
      
      // Reset form
      setSelectedDate(null)
      setSelectedTime('')
      setFormData(null)
      setShowSummary(false)

      // Redirect después de un momento
      setTimeout(() => {
        navigate('/contacto', { state: { bookingId: booking.id } })
      }, 2000)
    } catch (error) {
      addToast('Hubo un error al enviar tu solicitud. Por favor intenta de nuevo.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="section-container bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">Reservar Fecha</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selecciona la fecha y hora de tu preferencia, completa el formulario y te contactaremos 
            en las próximas 24 horas para confirmar tu reserva.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold mb-2">Paso 1: Selecciona una Fecha</h2>
          <p className="text-gray-600 mb-6">
            Elige el día perfecto para tu evento. Las fechas marcadas en rojo ya están reservadas.
          </p>
          <Calendar
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
            bookedDates={bookedDates}
          />
        </div>

        {selectedDate && (
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center space-x-2 mb-6">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-bold">Paso 2: Completa el Formulario</h2>
            </div>
            <BookingForm
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onTimeChange={setSelectedTime}
              onSubmit={handleFormSubmit}
              isSubmitting={isSubmitting}
            />
          </div>
        )}

        {!selectedDate && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-blue-800">
              Por favor selecciona una fecha del calendario para continuar con tu reserva.
            </p>
          </div>
        )}

        {/* Información adicional */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h3 className="text-xl font-bold mb-4">Preguntas Frecuentes sobre Reservas</h3>
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-semibold mb-1">¿Cuánto tiempo de anticipación necesito?</p>
              <p className="text-gray-600">
                Recomiendo reservar con al menos 1-3 meses de anticipación. Para bodas en temporada alta (nov-dic), 
                reserva con 4-6 meses de anticipación.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">¿Necesito pagar algo ahora?</p>
              <p className="text-gray-600">
                No, esta es una solicitud de reserva. Te contactaremos para confirmar disponibilidad y detalles. 
                El depósito se solicita al confirmar.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">¿Qué pasa después de enviar mi solicitud?</p>
              <p className="text-gray-600">
                Te contactaremos por WhatsApp o email en las próximas 24 horas para confirmar la fecha, 
                discutir detalles y enviarte la propuesta personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BookingSummaryModal
        isOpen={showSummary}
        onClose={() => setShowSummary(false)}
        onConfirm={handleConfirmBooking}
        booking={{
          date: selectedDate!,
          time: selectedTime,
          formData: formData!,
        }}
        isSubmitting={isSubmitting}
      />

      <ToastContainer toasts={toasts} onClose={removeToast} />
    </div>
  )
}
