export interface Testimonial {
  id: string
  name: string
  event: string
  rating: number
  text: string
  image?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María y Carlos',
    event: 'Boda - San José',
    rating: 5,
    text: 'No podríamos estar más felices con nuestro álbum. Capturó cada momento especial de nuestro día, desde los nervios de la mañana hasta la última canción. Las fotos son arte puro. Gracias por hacer nuestro día aún más memorable.',
    image: undefined,
  },
  {
    id: '2',
    event: '15 Años - Cartago',
    name: 'Sofía Rodríguez',
    rating: 5,
    text: 'Mi sesión de 15 años fue increíble. Me ayudó a sentirme cómoda y las fotos quedaron hermosas. El álbum físico es un tesoro que guardaré para siempre. Profesional, paciente y con un ojo increíble para los detalles.',
    image: undefined,
  },
  {
    id: '3',
    name: 'Tecnología Innovadora S.A.',
    event: 'Evento Corporativo',
    rating: 5,
    text: 'Contratamos sus servicios para nuestro lanzamiento de producto y quedamos impresionados. Las fotos fueron perfectas para nuestro marketing y la entrega fue puntual. Profesionalismo de primer nivel.',
    image: undefined,
  },
  {
    id: '4',
    name: 'Roberto y Ana',
    event: 'Boda - Puntarenas',
    rating: 5,
    text: 'Elegimos este fotógrafo por su portafolio y no nos equivocamos. Trabajó de manera discreta pero capturó cada emoción. El proceso de edición y entrega fue impecable. Lo recomiendo 100%.',
    image: undefined,
  },
  {
    id: '5',
    event: 'Fiesta de Cumpleaños',
    name: 'Laura Martínez',
    rating: 5,
    text: 'Contratamos para el cumpleaños de mi hijo y las fotos fueron perfectas. Capturó todos los momentos divertidos y espontáneos. Las fotos instantáneas durante el evento fueron un hit. Excelente servicio.',
    image: undefined,
  },
  {
    id: '6',
    name: 'Valentina García',
    event: 'Sesión de Modelaje',
    rating: 5,
    text: 'Necesitaba un portafolio profesional y las fotos superaron mis expectativas. El estilo editorial y la edición son de nivel internacional. Ahora tengo un portafolio que realmente representa mi trabajo.',
    image: undefined,
  },
  {
    id: '7',
    name: 'Família Jiménez',
    event: 'Boda - Heredia',
    rating: 5,
    text: 'Desde la consulta inicial hasta la entrega final, todo fue perfecto. Nos hizo sentir cómodos y las fotos reflejan nuestra personalidad como pareja. El álbum físico es simplemente hermoso.',
    image: undefined,
  },
  {
    id: '8',
    name: 'Costa Rica Events',
    event: 'Evento Corporativo',
    rating: 5,
    text: 'Hemos trabajado juntos en múltiples eventos y siempre entrega resultados excepcionales. Confiable, profesional y creativo. Las fotos siempre destacan la identidad de nuestros clientes.',
    image: undefined,
  },
]
