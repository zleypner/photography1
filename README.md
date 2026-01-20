# Portafolio de Fotografía Profesional

Sitio web completo para un fotógrafo profesional, desarrollado con React + TypeScript + Tailwind CSS. Incluye sistema de reservas, portafolio visual, múltiples servicios y contenido 100% en español.

## 🚀 Características

- **Portafolio Visual**: Galerías interactivas con lightbox
- **Sistema de Reservas**: Calendario interactivo + formulario completo
- **Múltiples Servicios**: Bodas, 15 Años, Fiestas, Corporativo, Modelaje/Pasarela
- **Copy Persuasivo**: Contenido optimizado para conversión
- **100% Responsive**: Diseño adaptado para todos los dispositivos
- **Diseño Premium**: Minimalista, elegante y rápido

## 📦 Stack Tecnológico

- **React 18** + **TypeScript**
- **Vite** (Build tool)
- **React Router** (Routing)
- **Tailwind CSS** (Estilos)
- **lucide-react** (Íconos)
- **localStorage** (Persistencia de reservas)

## 🏗️ Estructura del Proyecto

```
photography1/
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── GalleryGrid.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── PricingCard.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── Calendar.tsx
│   │   ├── BookingForm.tsx
│   │   ├── BookingSummaryModal.tsx
│   │   └── Toast.tsx
│   ├── pages/           # Páginas de la aplicación
│   │   ├── Home.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Paquetes.tsx
│   │   ├── SobreMi.tsx
│   │   ├── Testimonios.tsx
│   │   ├── Reservar.tsx
│   │   ├── Contacto.tsx
│   │   ├── FAQ.tsx
│   │   ├── AdminReservas.tsx
│   │   └── services/
│   │       ├── Bodas.tsx
│   │       ├── QuinceAnios.tsx
│   │       ├── Fiestas.tsx
│   │       ├── Corporativo.tsx
│   │       └── ModelajePasarela.tsx
│   ├── lib/             # Utilidades y servicios
│   │   ├── booking.ts   # Servicio de reservas (localStorage)
│   │   └── dateUtils.ts # Utilidades de fechas
│   ├── data/            # Datos mock
│   │   ├── services.ts
│   │   ├── testimonials.ts
│   │   └── faq.ts
│   ├── App.tsx          # Componente principal con routing
│   ├── main.tsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── public/              # Archivos estáticos
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Compilar para producción:**
   ```bash
   npm run build
   ```

4. **Previsualizar build de producción:**
   ```bash
   npm run preview
   ```

## 📍 Rutas Disponibles

- `/` - Inicio
- `/portafolio` - Galería de fotos con filtros
- `/bodas` - Servicio de bodas
- `/15-anios` - Servicio de 15 años
- `/fiestas` - Servicio de fiestas
- `/corporativo` - Servicio corporativo
- `/modelaje-pasarela` - Servicio de moda/modelaje
- `/paquetes` - Comparación de paquetes
- `/sobre-mi` - Información del fotógrafo
- `/testimonios` - Testimonios de clientes
- `/reservar` - Sistema de reservas
- `/contacto` - Formulario de contacto
- `/faq` - Preguntas frecuentes
- `/admin-reservas` - Panel de administración de reservas (frontend-only)

## 🎨 Cómo Reemplazar Imágenes

Las imágenes actualmente son placeholders (gradientes). Para reemplazarlas:

1. **Para imágenes del Hero:**
   - Edita los componentes `Hero` en cada página
   - Reemplaza la prop `image` con la ruta a tu imagen
   - Ejemplo: `<Hero image="/images/bodas-hero.jpg" />`

2. **Para galerías:**
   - Edita los archivos en `src/data/services.ts`
   - En el array `gallery` de cada servicio, agrega la propiedad `src`:
   ```typescript
   gallery: [
     { id: '1', src: '/images/boda-1.jpg', alt: 'Descripción' },
     // ...
   ]
   ```

3. **Estructura recomendada de carpetas:**
   ```
   public/
   ├── images/
   │   ├── services/
   │   │   ├── bodas/
   │   │   ├── quince-anios/
   │   │   └── ...
   │   ├── testimonials/
   │   └── portfolio/
   ```

## 💾 Sistema de Reservas

El sistema de reservas usa **localStorage** para persistencia (frontend-only). Para conectar con un backend:

1. Reemplaza las funciones en `src/lib/booking.ts`
2. Cambia las llamadas de `localStorage` por llamadas API
3. Las interfaces ya están preparadas para esto

### Funciones principales:
- `createBooking()` - Crear nueva reserva
- `getBookings()` - Obtener todas las reservas
- `updateBookingStatus()` - Actualizar estado
- `isDateAvailable()` - Verificar disponibilidad
- `deleteBooking()` - Eliminar reserva

## 🔧 Personalización

### Colores y Estilos
- Edita `tailwind.config.js` para cambiar colores principales
- Los estilos están en `src/index.css`

### Contenido
- **Servicios**: `src/data/services.ts`
- **Testimonios**: `src/data/testimonials.ts`
- **FAQs**: `src/data/faq.ts`

### Copy (Textos)
Todo el contenido está directamente en los componentes. Busca y reemplaza según necesites.

## 📱 Características del Sistema de Reservas

- ✅ Calendario mensual interactivo
- ✅ Selección de fecha y hora
- ✅ Formulario completo de datos
- ✅ Validación de campos
- ✅ Resumen antes de confirmar
- ✅ Persistencia en localStorage
- ✅ Panel de administración (`/admin-reservas`)
- ✅ Estados: Disponible, Pendiente, Reservado

## 🚀 Próximos Pasos (Para Producción)

1. **Backend:**
   - Implementar API REST para reservas
   - Base de datos para almacenar reservas
   - Autenticación para panel admin

2. **Imágenes:**
   - Reemplazar placeholders con fotos reales
   - Optimizar imágenes (WebP, lazy loading)
   - CDN para imágenes

3. **SEO:**
   - Meta tags dinámicos
   - Sitemap.xml
   - Structured data

4. **Analytics:**
   - Google Analytics
   - Event tracking para conversiones

5. **Email:**
   - Integración de email service
   - Confirmaciones automáticas
   - Notificaciones

## 📝 Notas

- El proyecto está completamente funcional en frontend
- Todos los textos están en español (Costa Rica / LATAM)
- El diseño es completamente responsive
- No se requieren librerías externas pesadas

## 📄 Licencia

Este proyecto es de uso personal/profesional. Puedes modificarlo libremente.

---

**Desarrollado con ❤️ usando React + TypeScript + Tailwind CSS**
