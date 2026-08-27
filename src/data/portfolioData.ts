import { ProjectDemo } from '../types';

export const PORTFOLIO_DEMOS: ProjectDemo[] = [
  {
    id: 'local-bakery',
    title: 'Local Bakery & Café Gourmet',
    category: 'Gastronomía & Panadería',
    tagline: 'Pedidos online y catálogo de panes artesanales',
    description: 'Landing page de alta conversión para panadería artesanal con menú interactivo categorizado, galería de productos y botón de reserva directa por WhatsApp.',
    previewUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFzi-CZFe_y9npmSdX9ZdGNKg2uRkC97AoGgtaMPoIH8FX6-emXe6va_NmZZE7Fn_5ZzdYbRUIv5cGz6cNTO_Co3GM-unNvQrAuJ_yCo7BUlHjOqqDl9LDU98v_6FlrP5W-Gaj5JxUaXvn-kvMVcn1WF0sbierSRBF65bJs0B6agw-TEculXvh7uVphD0m8_p8tEOaUaNa4WPztTwUgAu5MLzoJeoVebb_GOVkcvXjDcvlNjbItiy2',
    demoType: 'bakery',
    badge: 'Caso Destacado',
    metrics: [
      { label: 'Aumento en pedidos', value: '+185%' },
      { label: 'Tiempo de carga', value: '0.8s' },
      { label: 'Calificación', value: '4.9/5' }
    ],
    features: [
      'Menú digital con fotos y precios actualizables',
      'Integración con WhatsApp Business para pedidos',
      'Ubicación en Google Maps y horarios en tiempo real',
      'Diseño 100% responsivo para celulares'
    ]
  },
  {
    id: 'dental-clinic',
    title: 'Clínica Dental Sonrisas',
    category: 'Salud & Especialidades',
    tagline: 'Agendamiento de citas y confianza médica',
    description: 'Diseño clínico limpio que transmite seguridad y pulcritud. Incluye calculador de tratamientos, testimonios de pacientes y selector de cita rápida.',
    previewUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    demoType: 'dental',
    badge: 'Alta Conversión',
    metrics: [
      { label: 'Pacientes nuevos/mes', value: '+65' },
      { label: 'Reducción de cancelaciones', value: '-40%' },
      { label: 'Conversión móvil', value: '14.2%' }
    ],
    features: [
      'Formulario de agendamiento sincronizado con WhatsApp',
      'Sección de antes/después de casos clínicos',
      'Perfil del equipo médico y certificaciones',
      'Botón de llamada de emergencia'
    ]
  },
  {
    id: 'consulting-firm',
    title: 'Consultora & Asesoría Legal / Tributaria',
    category: 'Servicios Profesionales',
    tagline: 'Generación de leads B2B calificados',
    description: 'Estructura corporativa enfocada en captar empresas y clientes premium mediante propuestas de valor claras, casos de éxito y diagnóstico gratuito.',
    previewUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    demoType: 'consulting',
    badge: 'B2B Corporativo',
    metrics: [
      { label: 'Leads calificados', value: '3.4x' },
      { label: 'Ticket promedio', value: '+50%' },
      { label: 'SEO Google', value: 'Top 3' }
    ],
    features: [
      'Calculadora de diagnóstico previo',
      'Descargable de guía / lead magnet',
      'Casos de estudio detallados con ROI',
      'Integración con Calendly y WhatsApp'
    ]
  },
  {
    id: 'boutique-fashion',
    title: 'Moda & Calzado Urbano',
    category: 'Ecommerce & Retail',
    tagline: 'Catálogo visual con compra instantánea por chat',
    description: 'Showcase visual interactivo que permite ver prendas con zoom, variantes de tallas y realizar el pedido directo al WhatsApp de la tienda.',
    previewUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    demoType: 'boutique',
    badge: 'Tendencia 2026',
    metrics: [
      { label: 'Ventas directas', value: '+210%' },
      { label: 'Tasa de rebote', value: '< 22%' },
      { label: 'Ticket de recompra', value: '38%' }
    ],
    features: [
      'Galería tipo lookbook con alta resolución',
      'Filtros por categoría, colección y temporada',
      'Carrito simple con resumen automático a WhatsApp',
      'Integración con Instagram Feed en vivo'
    ]
  },
  {
    id: 'fitness-center',
    title: 'Iron Fitness & Cross Training',
    category: 'Gimnasio & Deporte',
    tagline: 'Pases de prueba gratuitos y planes de membresía',
    description: 'Landing de alto impacto visual con video de fondo, horarios de clases grupales y formulario para canjear un primer día de entrenamiento gratis.',
    previewUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    demoType: 'gym',
    badge: 'Alto Rendimiento',
    metrics: [
      { label: 'Nuevos socios/mes', value: '+120' },
      { label: 'Costo por lead', value: '-65%' },
      { label: 'Asistencia a prueba', value: '78%' }
    ],
    features: [
      'Tabla comparativa de planes de membresía',
      'Horarios de clases actualizados',
      'Testimonios con fotos reales de transformación',
      'Canje automático de pase gratis por WhatsApp'
    ]
  }
];
