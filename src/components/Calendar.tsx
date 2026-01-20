import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getDaysInMonth, getFirstDayOfMonth, isToday, isPast, formatDateISO } from '../lib/dateUtils'
import { isDateAvailable, type BookingStatus } from '../lib/booking'

interface CalendarProps {
  selectedDate: Date | null
  onDateSelect: (date: Date) => void
  bookedDates?: Array<{ date: string; status: BookingStatus }>
}

export default function Calendar({ selectedDate, onDateSelect, bookedDates = [] }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ]

  const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth)

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const getDateStatus = (day: number): BookingStatus | 'past' => {
    const date = new Date(currentYear, currentMonth, day)
    if (isPast(date)) return 'past'
    
    const dateISO = formatDateISO(date)
    const booked = bookedDates.find(b => b.date === dateISO)
    
    if (booked) return booked.status
    
    // Si está disponible según el servicio, retornar 'disponible'
    if (isDateAvailable(dateISO)) return 'disponible'
    
    // Por defecto, considerar disponible
    return 'disponible'
  }

  const handleDateClick = (day: number) => {
    const date = new Date(currentYear, currentMonth, day)
    const status = getDateStatus(day)
    
    if (status !== 'past' && status !== 'reservado') {
      onDateSelect(date)
    }
  }

  const renderDays = () => {
    const days = []
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="aspect-square" />)
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day)
      const status = getDateStatus(day)
      const isSelected = selectedDate && 
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === currentMonth &&
        selectedDate.getFullYear() === currentYear
      const isTodayDate = isToday(date)
      
      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          disabled={status === 'past' || status === 'reservado'}
          className={`aspect-square rounded-lg font-medium transition-all relative ${
            isSelected
              ? 'bg-gray-900 text-white'
              : status === 'past'
              ? 'text-gray-300 cursor-not-allowed'
              : status === 'reservado'
              ? 'bg-red-100 text-red-600 cursor-not-allowed'
              : status === 'pendiente'
              ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
              : 'text-gray-700 hover:bg-gray-100'
          } ${isTodayDate && !isSelected ? 'ring-2 ring-gray-900' : ''}`}
        >
          {day}
          {status === 'reservado' && (
            <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs">✕</span>
          )}
          {status === 'pendiente' && (
            <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs">⏳</span>
          )}
        </button>
      )
    }
    
    return days
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={goToPreviousMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Mes anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="text-xl font-bold">
          {monthNames[currentMonth]} {currentYear}
        </h3>
        <button
          onClick={goToNextMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Mes siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {dayNames.map(day => (
          <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {renderDays()}
      </div>

      <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-lg bg-gray-100" />
              <span>Disponible</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-lg bg-yellow-100" />
              <span>Pendiente</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-lg bg-red-100" />
              <span>Reservado</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-lg bg-gray-300" />
              <span>Pasado</span>
            </div>
      </div>
    </div>
  )
}
