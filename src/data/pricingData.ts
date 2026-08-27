import { PricingPlan, CalculatorAddon } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-landing-starter',
    name: 'Landing Presencia',
    tagline: 'Ideal para negocios locales que necesitan estar en Internet rápido y profesional',
    price: 199,
    currency: 'USD',
    billingPeriod: 'pago único',
    deliveryDays: '3 a 5 días hábiles',
    features: [
      'Landing page de 1 página con diseño moderno y personalizado',
      '100% Adaptada a móviles, tablets y computadoras',
      'Botón flotante inteligente de WhatsApp directo',
      'Dominio .com o .pe incluido por 1 año',
      'Hosting veloz con certificado de seguridad SSL gratis',
      'Secciones: Inicio, Beneficios, Servicios, Galería y Contacto',
      'Ubicación interactiva con Google Maps',
      'Optimización básica para aparecer en Google (SEO Local)'
    ],
    notIncluded: [
      'Asistente virtual con Inteligencia Artificial',
      'Catálogo con carrito de compras avanzado'
    ],
    ctaText: 'Elegir Plan Presencia',
    whatsappMessage: '¡Hola SoftIA! Me interesa el Plan Landing Presencia (USD $199). Deseo más información para mi negocio.'
  },
  {
    id: 'plan-growth-pro',
    name: 'Landing Pro Negocio',
    tagline: 'Para negocios que buscan maximizar ventas, captar leads y superar a su competencia',
    price: 349,
    currency: 'USD',
    billingPeriod: 'pago único',
    highlighted: true,
    badge: 'MÁS POPULAR',
    deliveryDays: '5 a 7 días hábiles',
    features: [
      'Todo lo del Plan Presencia incluido',
      'Hasta 5 secciones estructuradas de alta conversión',
      'Catálogo digital interactivo de productos o servicios',
      'Formulario de cotizaciones personalizado con envío a WhatsApp y correo',
      'Integración con Pixel de Facebook / Google Analytics 4',
      'Carga ultrarrápida optimizada (< 1 segundo)',
      'Diseño visual exclusivo con animaciones interactivas',
      'Capacitación grabada para editar tus textos e imágenes',
      '30 días de soporte técnico prioritario'
    ],
    ctaText: 'Quiero mi Landing Pro',
    whatsappMessage: '¡Hola SoftIA! Quiero contratar el Plan Landing Pro Negocio (USD $349). ¿Podemos coordinar los detalles?'
  },
  {
    id: 'plan-ai-automated',
    name: 'Landing + Automatización IA',
    tagline: 'La solución completa con Bot inteligente que atiende y agenda clientes en automático 24/7',
    price: 599,
    currency: 'USD',
    billingPeriod: 'pago único',
    badge: 'TECNOLOGÍA IA',
    deliveryDays: '7 a 10 días hábiles',
    features: [
      'Todo lo del Plan Pro Negocio incluido',
      'Asistente Virtual con IA entrenado con la información de tu negocio',
      'Respuestas automáticas inteligentes a preguntas de clientes en la web',
      'Integración del Bot con WhatsApp para calificar prospectos',
      'Sistema de reservas / citas sincronizado en tiempo real con Google Calendar',
      'Integración con CRM o Google Sheets para almacenar prospectos',
      'Dominio, hosting y SSL prémium de alta capacidad',
      'Soporte técnico y ajustes continuos por 60 días'
    ],
    ctaText: 'Solicitar Solución con IA',
    whatsappMessage: '¡Hola SoftIA! Me interesa la solución Landing + Automatización IA (USD $599). Me gustaría ver una demostración.'
  }
];

export const CALCULATOR_ADDONS: CalculatorAddon[] = [
  {
    id: 'addon-ai-bot',
    name: 'Chatbot Inteligente con IA',
    description: 'Atiende consultas frecuentes y captura clientes en automático las 24 horas',
    price: 150,
    category: 'ai',
    recommended: true
  },
  {
    id: 'addon-whatsapp-catalog',
    name: 'Catálogo de Pedidos a WhatsApp',
    description: 'Permite a tus clientes armar su carrito y enviar el pedido listo al chat',
    price: 90,
    category: 'ecommerce',
    recommended: true
  },
  {
    id: 'addon-booking',
    name: 'Sistema de Reservas y Citas',
    description: 'Calendario sincronizado para agendar horas de atención automáticamente',
    price: 100,
    category: 'core'
  },
  {
    id: 'addon-seo-booster',
    name: 'Pack SEO Local Google Maps',
    description: 'Optimización de ficha de Google Business y posicionamiento local',
    price: 80,
    category: 'marketing'
  },
  {
    id: 'addon-multilanguage',
    name: 'Multi-idioma (Español / Inglés)',
    description: 'Traducción completa con selector de idioma para clientes internacionales',
    price: 90,
    category: 'core'
  },
  {
    id: 'addon-crm-sync',
    name: 'Sincronización con CRM / Sheets',
    description: 'Cada contacto se guarda automáticamente en tu base de datos o Excel',
    price: 70,
    category: 'ai'
  }
];
