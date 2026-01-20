export type BookingStatus = 'disponible' | 'reservado' | 'pendiente'

export interface Booking {
  id: string
  createdAt: string
  eventType: string
  date: string
  time: string
  name: string
  phone: string
  email: string
  location?: string
  budgetRange?: string
  notes?: string
  status: BookingStatus
}

const STORAGE_KEY = 'photography_bookings'

// Obtener todas las reservas
export function getBookings(): Booking[] {
  if (typeof window === 'undefined') return []
  
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return []
  
  try {
    return JSON.parse(stored)
  } catch {
    return []
  }
}

// Crear una nueva reserva
export function createBooking(booking: Omit<Booking, 'id' | 'createdAt' | 'status'>): Booking {
  const bookings = getBookings()
  
  const newBooking: Booking = {
    ...booking,
    id: `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    status: 'pendiente',
  }
  
  bookings.push(newBooking)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings))
  
  return newBooking
}

// Actualizar el estado de una reserva
export function updateBookingStatus(id: string, status: BookingStatus): boolean {
  const bookings = getBookings()
  const index = bookings.findIndex(b => b.id === id)
  
  if (index === -1) return false
  
  bookings[index].status = status
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings))
  
  return true
}

// Verificar si una fecha está disponible
export function isDateAvailable(date: string, time?: string): boolean {
  const bookings = getBookings()
  const targetDate = new Date(date).toISOString().split('T')[0]
  
  const conflictingBookings = bookings.filter(booking => {
    const bookingDate = new Date(booking.date).toISOString().split('T')[0]
    if (bookingDate !== targetDate) return false
    
    if (booking.status === 'reservado') return true
    
    if (time && booking.time === time && booking.status === 'pendiente') {
      return true
    }
    
    return false
  })
  
  return conflictingBookings.length === 0
}

// Obtener reservas por fecha
export function getBookingsByDate(date: string): Booking[] {
  const bookings = getBookings()
  const targetDate = new Date(date).toISOString().split('T')[0]
  
  return bookings.filter(booking => {
    const bookingDate = new Date(booking.date).toISOString().split('T')[0]
    return bookingDate === targetDate
  })
}

// Eliminar una reserva (para admin)
export function deleteBooking(id: string): boolean {
  const bookings = getBookings()
  const filtered = bookings.filter(b => b.id !== id)
  
  if (filtered.length === bookings.length) return false
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
  return true
}
