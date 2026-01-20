export interface Service {
  id: string
  title: string
  slug: string
  description: string
  shortDescription: string
  image?: string
  gallery: Array<{ id: string; src?: string; alt: string }>
  packages: Array<{
    name: string
    price: string
    features: string[]
  }>
  process: Array<{
    step: number
    title: string
    description: string
  }>
  faq: Array<{
    question: string
    answer: string
  }>
}

export const services: Service[] = [
  {
    id: 'bodas',
    title: 'Bodas',
    slug: 'bodas',
    description: 'Capturo la magia de tu día más especial con un enfoque artístico y emocional. Cada boda es única, y mi objetivo es contar tu historia a través de imágenes que perdurarán para siempre.',
    shortDescription: 'El día más importante de tu vida, capturado con arte y emoción.',
    gallery: Array.from({ length: 12 }, (_, i) => ({
      id: `boda-${i + 1}`,
      alt: `Foto de boda ${i + 1}`,
    })),
    packages: [
      {
        name: 'Esencial',
        price: '$1,500',
        features: [
          '6 horas de cobertura',
          'Hasta 400 fotos editadas',
          'Álbum digital en alta resolución',
          'Sesión de prueba previa',
          'Entrega en 4-6 semanas',
        ],
      },
      {
        name: 'Premium',
        price: '$2,500',
        features: [
          '10 horas de cobertura',
          'Hasta 600 fotos editadas',
          'Álbum digital + álbum físico premium',
          'Segundo fotógrafo',
          'Sesión de prueba previa',
          'Sesión de engagement incluida',
          'Entrega en 4-6 semanas',
        ],
      },
      {
        name: 'Editorial',
        price: '$4,000',
        features: [
          'Cobertura completa (ceremonia + recepción)',
          'Hasta 800 fotos editadas profesionalmente',
          'Álbum digital + álbum físico de lujo',
          'Segundo fotógrafo + asistente',
          'Sesión de prueba previa',
          'Sesión de engagement',
          'Videografía básica incluida',
          'Libro de boda personalizado',
          'Entrega en 4-6 semanas',
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: 'Consulta Inicial',
        description: 'Conversamos sobre tu visión, estilo y expectativas. Revisamos fechas disponibles y diseñamos un paquete a tu medida.',
      },
      {
        step: 2,
        title: 'Sesión de Prueba',
        description: 'Realizamos una sesión previa para conocernos mejor y que te sientas cómodo/a frente a la cámara.',
      },
      {
        step: 3,
        title: 'El Gran Día',
        description: 'Capturo cada momento importante, desde los preparativos hasta la última pista de baile, de manera discreta y profesional.',
      },
      {
        step: 4,
        title: 'Entrega Premium',
        description: 'Recibes tus fotos editadas profesionalmente en un álbum digital de alta calidad. Opción de álbum físico premium disponible.',
      },
    ],
    faq: [
      {
        question: '¿Cuánto tiempo antes debo reservar?',
        answer: 'Recomiendo reservar con al menos 3-6 meses de anticipación, especialmente en temporada alta (noviembre-febrero). Las fechas populares se agotan rápidamente.',
      },
      {
        question: '¿Qué incluye la edición?',
        answer: 'Todas las fotos pasan por un proceso de edición profesional: corrección de color, exposición, contraste y retoque básico. La edición avanzada (como retoque de piel) se aplica a las fotos seleccionadas para el álbum.',
      },
      {
        question: '¿Puedo obtener todas las fotos sin editar?',
        answer: 'Por la calidad y consistencia del trabajo, solo entregamos fotos editadas. Sin embargo, podemos ajustar el estilo de edición según tus preferencias.',
      },
      {
        question: '¿Qué pasa si hay mal tiempo?',
        answer: 'Tengo experiencia trabajando en diversas condiciones. Siempre tenemos un plan B. Si las condiciones son extremas, podemos reprogramar siguiendo nuestras políticas de cancelación.',
      },
    ],
  },
  {
    id: 'quince-anios',
    title: '15 Años',
    slug: '15-anios',
    description: 'Celebra esta etapa única con una sesión que refleja tu personalidad y estilo. Capturo la elegancia, la emoción y la juventud de este momento especial.',
    shortDescription: 'Celebra tus 15 años con elegancia y estilo único.',
    gallery: Array.from({ length: 10 }, (_, i) => ({
      id: `quince-${i + 1}`,
      alt: `Foto de 15 años ${i + 1}`,
    })),
    packages: [
      {
        name: 'Clásico',
        price: '$800',
        features: [
          '4 horas de cobertura',
          'Hasta 250 fotos editadas',
          'Sesión previa de prueba',
          'Álbum digital',
          'Entrega en 3-4 semanas',
        ],
      },
      {
        name: 'Premium',
        price: '$1,200',
        features: [
          '6 horas de cobertura',
          'Hasta 350 fotos editadas',
          'Sesión previa de prueba',
          'Álbum digital + álbum físico',
          'Sesión individual previa incluida',
          'Entrega en 3-4 semanas',
        ],
      },
      {
        name: 'Deluxe',
        price: '$1,800',
        features: [
          '8 horas de cobertura completa',
          'Hasta 500 fotos editadas',
          'Sesión previa de prueba',
          'Álbum digital + álbum físico premium',
          'Sesión individual + sesión con familia',
          'Video highlights incluido',
          'Entrega en 3-4 semanas',
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: 'Consulta de Estilo',
        description: 'Hablamos sobre tu visión: vestido, locación, tema y estilo. Te ayudo a planificar cada detalle.',
      },
      {
        step: 2,
        title: 'Sesión Previa',
        description: 'Realizamos una sesión individual para que te sientas cómoda y conozcamos tu mejor ángulo.',
      },
      {
        step: 3,
        title: 'La Celebración',
        description: 'Capturo cada momento: ceremonia, entrada, baile, cortes, y todos los momentos especiales con familia y amigos.',
      },
      {
        step: 4,
        title: 'Álbum Personalizado',
        description: 'Recibes un álbum digital hermoso y, en paquetes premium, un álbum físico que será un tesoro familiar.',
      },
    ],
    faq: [
      {
        question: '¿Hago sesión previa al evento?',
        answer: 'Sí, todos los paquetes incluyen una sesión previa donde trabajamos juntas para definir el estilo, las poses y la locación perfecta.',
      },
      {
        question: '¿Cuántas personas pueden aparecer en las fotos?',
        answer: 'No hay límite. Capturo tanto sesiones individuales como con familia completa, padrinos, damas y amigos.',
      },
      {
        question: '¿Puedo elegir la locación?',
        answer: '¡Absolutamente! Te ayudo a elegir la mejor locación según tu estilo y presupuesto. Tengo experiencia en diferentes espacios.',
      },
    ],
  },
  {
    id: 'fiestas',
    title: 'Fiestas',
    slug: 'fiestas',
    description: 'Desde cumpleaños hasta graduaciones, capturo la energía y alegría de tus celebraciones. Fotos espontáneas y naturales que muestran la verdadera esencia del momento.',
    shortDescription: 'Celebraciones llenas de vida y momentos espontáneos.',
    gallery: Array.from({ length: 9 }, (_, i) => ({
      id: `fiesta-${i + 1}`,
      alt: `Foto de fiesta ${i + 1}`,
    })),
    packages: [
      {
        name: 'Básico',
        price: '$400',
        features: [
          '3 horas de cobertura',
          'Hasta 150 fotos editadas',
          'Álbum digital',
          'Entrega en 2-3 semanas',
        ],
      },
      {
        name: 'Completo',
        price: '$600',
        features: [
          '5 horas de cobertura',
          'Hasta 250 fotos editadas',
          'Álbum digital',
          'Fotos instantáneas durante el evento',
          'Entrega en 2-3 semanas',
        ],
      },
      {
        name: 'Premium',
        price: '$900',
        features: [
          '8 horas de cobertura',
          'Hasta 400 fotos editadas',
          'Álbum digital + álbum físico',
          'Fotos instantáneas durante el evento',
          'Video highlights',
          'Entrega en 2-3 semanas',
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: 'Planificación',
        description: 'Definimos el tipo de evento, duración, número de invitados y momentos clave que quieres capturar.',
      },
      {
        step: 2,
        title: 'El Evento',
        description: 'Trabajo de manera discreta capturando momentos naturales y espontáneos, además de las poses grupales que solicitas.',
      },
      {
        step: 3,
        title: 'Entrega Rápida',
        description: 'Recibes tus fotos en un tiempo corto para que puedas compartirlas con tus invitados mientras el evento está fresco en la memoria.',
      },
    ],
    faq: [
      {
        question: '¿Qué tipo de fiestas cubren?',
        answer: 'Cumpleaños, graduaciones, aniversarios, fiestas temáticas, despedidas, y cualquier celebración especial. Si no está en la lista, consulta conmigo.',
      },
      {
        question: '¿Puedo obtener fotos el mismo día?',
        answer: 'En paquetes completos y premium, proporciono una selección de fotos instantáneas durante el evento. La entrega completa es en 2-3 semanas.',
      },
      {
        question: '¿Necesito proporcionar el lugar?',
        answer: 'Puedo trabajar en cualquier espacio: hogares, salones, exteriores. Si necesitas recomendaciones de locaciones, puedo ayudarte.',
      },
    ],
  },
  {
    id: 'corporativo',
    title: 'Eventos Corporativos',
    slug: 'corporativo',
    description: 'Profesionalismo y calidad para tus eventos empresariales. Conferencias, lanzamientos, team building, y más. Capturo la esencia de tu marca y la dinámica de tu equipo.',
    shortDescription: 'Eventos empresariales con calidad profesional y servicio impecable.',
    gallery: Array.from({ length: 8 }, (_, i) => ({
      id: `corp-${i + 1}`,
      alt: `Foto corporativa ${i + 1}`,
    })),
    packages: [
      {
        name: 'Esencial',
        price: '$500',
        features: [
          '4 horas de cobertura',
          'Hasta 200 fotos editadas',
          'Álbum digital para uso corporativo',
          'Entrega en 1-2 semanas',
        ],
      },
      {
        name: 'Profesional',
        price: '$800',
        features: [
          '6 horas de cobertura',
          'Hasta 350 fotos editadas',
          'Álbum digital + galería web privada',
          'Fotos para redes sociales incluidas',
          'Entrega en 1-2 semanas',
        ],
      },
      {
        name: 'Empresarial',
        price: '$1,200',
        features: [
          '8 horas de cobertura',
          'Hasta 500 fotos editadas',
          'Álbum digital + galería web privada',
          'Fotos para redes sociales + marketing',
          'Video highlights corporativo',
          'Entrega prioritaria (1 semana)',
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: 'Briefing Corporativo',
        description: 'Revisamos objetivos del evento, identidad de marca, puntos clave a capturar y uso previsto de las imágenes.',
      },
      {
        step: 2,
        title: 'Cobertura Profesional',
        description: 'Trabajo de manera profesional y discreta, capturando sesiones, networking, presentaciones y momentos clave.',
      },
      {
        step: 3,
        title: 'Edición Corporativa',
        description: 'Edición que respeta la identidad de tu marca, con formato para diferentes usos (web, impresión, redes sociales).',
      },
      {
        step: 4,
        title: 'Entrega y Licencias',
        description: 'Recibes todas las fotos con licencias de uso apropiadas para tu empresa, listas para marketing y comunicación.',
      },
    ],
    faq: [
      {
        question: '¿Ofrecen servicios para empresas?',
        answer: 'Sí, tengo experiencia trabajando con empresas de diferentes tamaños. Desde eventos pequeños hasta conferencias grandes.',
      },
      {
        question: '¿Las fotos pueden usarse para marketing?',
        answer: 'Sí, todos los paquetes incluyen licencias de uso para marketing y comunicación corporativa. Los detalles se especifican en el contrato.',
      },
      {
        question: '¿Pueden hacer fotos de producto también?',
        answer: 'Sí, aunque mi especialidad son eventos, también hago sesiones de producto. Consulta para más detalles.',
      },
    ],
  },
  {
    id: 'modelaje-pasarela',
    title: 'Modelaje / Pasarela',
    slug: 'modelaje-pasarela',
    description: 'Fotografía de moda y pasarela con enfoque editorial. Portafolios profesionales, lookbooks, eventos de moda y sesiones creativas que destacan la elegancia y el estilo.',
    shortDescription: 'Fotografía editorial de moda y portafolios profesionales.',
    gallery: Array.from({ length: 10 }, (_, i) => ({
      id: `moda-${i + 1}`,
      alt: `Foto de moda ${i + 1}`,
    })),
    packages: [
      {
        name: 'Portafolio Básico',
        price: '$600',
        features: [
          '3 horas de sesión',
          'Hasta 30 fotos editadas profesionalmente',
          '2 cambios de outfit',
          'Edición profesional',
          'Entrega en 2-3 semanas',
        ],
      },
      {
        name: 'Portafolio Premium',
        price: '$1,000',
        features: [
          '5 horas de sesión',
          'Hasta 50 fotos editadas profesionalmente',
          '4 cambios de outfit',
          'Múltiples locaciones',
          'Edición profesional avanzada',
          'Entrega en 2-3 semanas',
        ],
      },
      {
        name: 'Editorial / Pasarela',
        price: '$1,500',
        features: [
          'Cobertura completa de evento',
          'Hasta 100 fotos editadas profesionalmente',
          'Edición editorial de alta calidad',
          'Fotos para portada/publicación',
          'Múltiples formatos (web + impresión)',
          'Entrega en 2-3 semanas',
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: 'Concepto y Estilo',
        description: 'Desarrollamos el concepto visual: estilo, locación, outfits, iluminación y mood. Todo alineado con tu objetivo.',
      },
      {
        step: 2,
        title: 'Sesión',
        description: 'Trabajamos juntos para lograr las mejores tomas. Guío en poses naturales y expresiones auténticas.',
      },
      {
        step: 3,
        title: 'Edición Editorial',
        description: 'Edición profesional de nivel editorial: color grading, retoque fino, y estilización según el concepto.',
      },
      {
        step: 4,
        title: 'Entrega Profesional',
        description: 'Recibes fotos en alta resolución listas para portafolio, redes sociales y uso profesional.',
      },
    ],
    faq: [
      {
        question: '¿Necesito traer mi propio maquillador/estilista?',
        answer: 'Puedo trabajar con tu equipo o recomendarte profesionales. Para sesiones editoriales, generalmente trabajamos con equipo completo.',
      },
      {
        question: '¿Dónde se realizan las sesiones?',
        answer: 'Studio, exteriores, o locaciones específicas según el concepto. Tengo acceso a estudios y conozco excelentes locaciones.',
      },
      {
        question: '¿Puedo usar las fotos para mi portafolio?',
        answer: 'Sí, todas las fotos vienen con licencia de uso personal y profesional para portafolio y redes sociales.',
      },
    ],
  },
]
