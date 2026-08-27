import { FaqItem, Testimonial } from '../types';

export const FAQS: FaqItem[] = [
  {
    category: 'Tiempos y Entregas',
    question: '¿En cuánto tiempo estará lista mi página web?',
    answer: 'Generalmente entregamos una versión preliminar funcional en solo 3 a 5 días hábiles después de recibir la información básica de tu negocio. Una vez revisada y aprobada por ti, realizamos el lanzamiento de inmediato.'
  },
  {
    category: 'Costos y Mensualidades',
    question: '¿Debo pagar mensualidades obligatorias?',
    answer: 'No cobramos mensualidades obligatorias por el desarrollo. Tu pago inicial incluye el diseño, desarrollo, el dominio (.com o .pe) y el hosting de alta velocidad durante todo el primer año. A partir del segundo año, solo renuevas tu dominio y hosting a un costo muy accesible.'
  },
  {
    category: 'Contenidos y Fotos',
    question: '¿Qué pasa si no tengo fotos profesionales o textos listos?',
    answer: '¡No te preocupes! Nuestro equipo se encarga de redactar los textos persuasivos enfocados en ventas para tu sector y seleccionamos recursos visuales y fotografías de alta calidad que representen fielmente tu negocio.'
  },
  {
    category: 'WhatsApp y Clientes',
    question: '¿Cómo me llegan los contactos y pedidos de los clientes?',
    answer: 'Integramos botones inteligentes y formularios directos a tu WhatsApp con mensajes precargados (por ejemplo: "Hola, vi su servicio de X en la web y deseo una cotización"). También puedes recibir los mensajes en tu correo electrónico o Google Sheets.'
  },
  {
    category: 'Actualizaciones',
    question: '¿Podré cambiar precios, fotos o textos más adelante?',
    answer: 'Sí. Diseñamos nuestras páginas para que sean fáciles de mantener. Además, te entregamos una guía rápida en video y ofrecemos planes de soporte continuo para que nunca te preocupes por la parte técnica.'
  },
  {
    category: 'Inteligencia Artificial',
    question: '¿Cómo funciona la automatización con IA de SoftIA?',
    answer: 'Creamos asistentes inteligentes capaces de responder dudas frecuentes de tus clientes las 24 horas del día, cotizar según reglas fijas, filtrar prospectos e incluso agendar citas en tu calendario automáticamente.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendoza',
    role: 'Propietario',
    business: 'Panadería & Pastelería Delipán',
    businessType: 'Gastronomía',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    quote: 'Antes solo teníamos Instagram y la gente nos preguntaba los mismos precios 50 veces al día. Con la Landing de SoftIA, los clientes ven el menú completo y hacen su pedido directo al WhatsApp listos para pagar. ¡Nuestras ventas subieron más de un 140%!',
    rating: 5,
    results: '+140% ventas por WhatsApp'
  },
  {
    id: '2',
    name: 'Dra. Patricia Arévalo',
    role: 'Directora Médica',
    business: 'Centro Odontológico San Lucas',
    businessType: 'Salud',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'La presencia formal que nos dio la página web fue inmediata. Los pacientes nuevos nos dicen que les generó muchísima confianza ver los casos clínicos y los convenios. Agendamos un 60% más de consultas el primer mes.',
    rating: 5,
    results: '60+ nuevas citas mensuales'
  },
  {
    id: '3',
    name: 'Renzo Valdivia',
    role: 'Fundador & CEO',
    business: 'Valdivia & Asociados Consultores',
    businessType: 'Servicios B2B',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    quote: 'Excelente trabajo técnico y estético. La automatización del formulario con WhatsApp y correo nos permite responder en menos de 2 minutos a cualquier empresa interesada en nuestros servicios.',
    rating: 5,
    results: 'Tiempo de respuesta: < 2 min'
  }
];
