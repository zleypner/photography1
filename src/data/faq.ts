export interface FAQ {
  question: string
  answer: string
  category: 'reservas' | 'entrega' | 'edicion' | 'reprogramaciones' | 'general'
}

export const faqs: FAQ[] = [
  {
    category: 'reservas',
    question: '¿Cómo reservo una fecha?',
    answer: 'Puedes reservar una fecha directamente desde la sección "Reservar Fecha" en nuestro sitio web. Selecciona la fecha y hora que prefieras, completa el formulario con tus datos y tipo de evento. Te contactaremos en las próximas 24 horas para confirmar y discutir los detalles.',
  },
  {
    category: 'reservas',
    question: '¿Cuánto tiempo de anticipación debo reservar?',
    answer: 'Recomiendo reservar con al menos 1-3 meses de anticipación para eventos generales, y 3-6 meses para bodas, especialmente en temporada alta (noviembre a febrero). Las fechas populares se agotan rápidamente, así que cuanto antes mejor.',
  },
  {
    category: 'reservas',
    question: '¿Necesito pagar un depósito?',
    answer: 'Sí, para confirmar tu reserva se requiere un depósito del 30-50% del total del paquete (dependiendo del tipo de evento). Este depósito es reembolsable según nuestras políticas de cancelación.',
  },
  {
    category: 'reservas',
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos transferencias bancarias, depósitos, y efectivo. Para eventos corporativos también trabajamos con facturación empresarial. Los detalles se discuten durante la confirmación de la reserva.',
  },
  {
    category: 'entrega',
    question: '¿Cuánto tiempo tarda la entrega de fotos?',
    answer: 'El tiempo de entrega varía según el tipo de evento: Fiestas y eventos simples: 2-3 semanas. Bodas y eventos grandes: 4-6 semanas. Sesiones de modelaje: 2-3 semanas. Estos tiempos incluyen edición profesional de todas las fotos.',
  },
  {
    category: 'entrega',
    question: '¿Cómo recibo mis fotos?',
    answer: 'Todas las fotos se entregan en un álbum digital online de alta calidad que puedes descargar. También recibes un enlace permanente. Para paquetes premium, incluye un álbum físico adicional que se envía por correo o se entrega en persona.',
  },
  {
    category: 'entrega',
    question: '¿Puedo obtener fotos el mismo día?',
    answer: 'Para eventos largos (bodas, eventos premium), proporciono una selección de fotos instantáneas el mismo día o al día siguiente. La entrega completa editada es en el tiempo estándar mencionado.',
  },
  {
    category: 'entrega',
    question: '¿En qué formato recibo las fotos?',
    answer: 'Las fotos se entregan en formato JPG de alta resolución, listas para imprimir y compartir. También puedes solicitar formato RAW (sin procesar) por un costo adicional. Todas las fotos tienen marca de agua removida.',
  },
  {
    category: 'edicion',
    question: '¿Qué incluye la edición?',
    answer: 'La edición profesional incluye: corrección de color, exposición y contraste, ajustes de iluminación, eliminación de objetos menores no deseados, y retoque básico. La edición avanzada (retoque de piel extenso, efectos especiales) se aplica a fotos seleccionadas.',
  },
  {
    category: 'edicion',
    question: '¿Puedo pedir cambios en la edición?',
    answer: 'Sí, incluyo una revisión inicial donde puedes solicitar ajustes menores. Cambios mayores o re-ediciones extensas pueden tener un costo adicional dependiendo del alcance.',
  },
  {
    category: 'edicion',
    question: '¿Puedo obtener las fotos sin editar?',
    answer: 'Por mantener la calidad y consistencia de mi trabajo, solo entrego fotos editadas. Sin embargo, puedo ajustar el estilo de edición según tus preferencias (más natural, más estilizado, etc.).',
  },
  {
    category: 'reprogramaciones',
    question: '¿Puedo reprogramar mi evento?',
    answer: 'Sí, las reprogramaciones son posibles dependiendo de disponibilidad. Si la nueva fecha está disponible, no hay costo adicional. Si necesitas cancelar, el depósito es reembolsable según el tiempo de anticipación (más de 30 días: 100%, 15-30 días: 50%, menos de 15 días: no reembolsable).',
  },
  {
    category: 'reprogramaciones',
    question: '¿Qué pasa si hay mal tiempo el día del evento?',
    answer: 'Tengo experiencia trabajando en diversas condiciones climáticas y siempre tenemos un plan B. Si las condiciones son extremas y peligrosas, podemos reprogramar sin costo adicional. Para eventos en exteriores, siempre monitoreamos el clima juntos.',
  },
  {
    category: 'reprogramaciones',
    question: '¿Qué pasa si cancelo mi evento?',
    answer: 'Las políticas de cancelación dependen del tiempo de anticipación: Cancelación con más de 30 días: depósito reembolsable 100%. Cancelación con 15-30 días: depósito reembolsable 50%. Cancelación con menos de 15 días: depósito no reembolsable. En casos excepcionales (emergencias médicas, etc.), se puede negociar.',
  },
  {
    category: 'general',
    question: '¿Trabajan solos o con equipo?',
    answer: 'Depende del paquete. Para eventos pequeños, trabajo solo. Para bodas y eventos grandes, trabajo con un segundo fotógrafo y/o asistente para asegurar cobertura completa. Esto está incluido en paquetes premium.',
  },
  {
    category: 'general',
    question: '¿Tienen seguro?',
    answer: 'Sí, tengo seguro de responsabilidad civil y de equipo. Esto protege tanto a los clientes como al equipo en caso de imprevistos.',
  },
  {
    category: 'general',
    question: '¿Ofrecen videografía también?',
    answer: 'Mi especialidad es fotografía, pero en paquetes premium puedo incluir video highlights básicos. Para videografía completa, trabajo con videógrafos profesionales de confianza que puedo recomendar.',
  },
  {
    category: 'general',
    question: '¿Puedo ver tu trabajo antes de contratar?',
    answer: '¡Absolutamente! Puedes ver mi portafolio completo en la sección "Portafolio" del sitio. También ofrezco consultas sin costo donde podemos revisar ejemplos específicos del tipo de evento que tienes en mente.',
  },
]
