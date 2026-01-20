import { useState, useEffect } from 'react'
import { Trash2, Check, X } from 'lucide-react'
import { getBookings, updateBookingStatus, deleteBooking, type Booking, type BookingStatus } from '../lib/booking'
import { formatDateTime } from '../lib/dateUtils'

export default function AdminReservas() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [filter, setFilter] = useState<BookingStatus | 'todos'>('todos')

  useEffect(() => {
    loadBookings()
  }, [])

  const loadBookings = () => {
    const allBookings = getBookings()
    setBookings(allBookings.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ))
  }

  const filteredBookings = filter === 'todos' 
    ? bookings 
    : bookings.filter(b => b.status === filter)

  const handleStatusChange = (id: string, newStatus: BookingStatus) => {
    if (updateBookingStatus(id, newStatus)) {
      loadBookings()
    }
  }

  const handleDelete = (id: string) => {
    if (confirm('¿Estás seguro de eliminar esta reserva?')) {
      if (deleteBooking(id)) {
        loadBookings()
      }
    }
  }

  const getStatusColor = (status: BookingStatus) => {
    switch (status) {
      case 'reservado':
        return 'bg-red-100 text-red-800'
      case 'pendiente':
        return 'bg-yellow-100 text-yellow-800'
      case 'disponible':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="section-container bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="heading-1 mb-4">Administración de Reservas</h1>
          <p className="text-gray-600">
            Panel de administración para gestionar solicitudes de reserva. (Frontend-only, usa localStorage)
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('todos')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'todos' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos ({bookings.length})
            </button>
            <button
              onClick={() => setFilter('pendiente')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'pendiente' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pendientes ({bookings.filter(b => b.status === 'pendiente').length})
            </button>
            <button
              onClick={() => setFilter('reservado')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'reservado' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Reservados ({bookings.filter(b => b.status === 'reservado').length})
            </button>
          </div>
        </div>

        {/* Lista de reservas */}
        {filteredBookings.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <p className="text-gray-600 text-lg">No hay reservas para mostrar.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold">{booking.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                      <div>
                        <p className="font-semibold mb-1">Evento</p>
                        <p>{booking.eventType}</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Fecha y Hora</p>
                        <p>{formatDateTime(booking.date, booking.time)}</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Contacto</p>
                        <p>{booking.email}</p>
                        <p>{booking.phone}</p>
                      </div>
                      {booking.location && (
                        <div>
                          <p className="font-semibold mb-1">Lugar</p>
                          <p>{booking.location}</p>
                        </div>
                      )}
                      {booking.budgetRange && (
                        <div>
                          <p className="font-semibold mb-1">Presupuesto</p>
                          <p>{booking.budgetRange}</p>
                        </div>
                      )}
                      <div>
                        <p className="font-semibold mb-1">Solicitud creada</p>
                        <p>{new Date(booking.createdAt).toLocaleDateString('es-CR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}</p>
                      </div>
                    </div>

                    {booking.notes && (
                      <div className="mt-4">
                        <p className="font-semibold mb-1">Mensaje adicional</p>
                        <p className="text-gray-600 italic">{booking.notes}</p>
                      </div>
                    )}

                    <div className="mt-4">
                      <p className="text-sm text-gray-500">ID: {booking.id}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    {booking.status === 'pendiente' && (
                      <>
                        <button
                          onClick={() => handleStatusChange(booking.id, 'reservado')}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                        >
                          <Check className="w-4 h-4" />
                          <span>Confirmar</span>
                        </button>
                        <button
                          onClick={() => handleStatusChange(booking.id, 'disponible')}
                          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2"
                        >
                          <X className="w-4 h-4" />
                          <span>Rechazar</span>
                        </button>
                      </>
                    )}
                    {booking.status === 'reservado' && (
                      <button
                        onClick={() => handleStatusChange(booking.id, 'pendiente')}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                      >
                        Marcar Pendiente
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(booking.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Eliminar</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
