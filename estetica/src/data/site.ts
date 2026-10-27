/**
 * Todo el contenido de la web vive en este fichero.
 * Para adaptar la web a otro negocio, cambia estos datos y las fotos de src/assets/fotos.
 */
import type { ImageMetadata } from 'astro';

import fotoPortada from '../assets/fotos/portada.jpg';
import fotoMarta from '../assets/fotos/equipo-marta.jpg';
import fotoElena from '../assets/fotos/equipo-elena.jpg';
import fotoFacial from '../assets/fotos/tratamiento-facial.jpg';
import fotoCorporal from '../assets/fotos/tratamiento-corporal.jpg';
import fotoManosPies from '../assets/fotos/tratamiento-manos-pies.jpg';
import fotoLocal from '../assets/fotos/galeria-local.jpg';
import fotoCabina from '../assets/fotos/galeria-cabina.jpg';
import fotoProductos from '../assets/fotos/galeria-productos.jpg';
import fotoManos from '../assets/fotos/galeria-manos.jpg';
import fotoGaleriaFacial from '../assets/fotos/galeria-facial.jpg';
import fotoDetalle from '../assets/fotos/galeria-detalle.jpg';
import fotoCompartir from '../assets/fotos/compartir.jpg';
import imagenMapa from '../assets/mapa.svg';

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

/* ------------------------------------------------------------------ */
/* Negocio y contacto                                                  */
/* ------------------------------------------------------------------ */

/** Mientras sea true, la web no se indexa (meta robots noindex y robots.txt bloqueado). */
export const demo = true;

export const business = {
  name: 'Lumen Estética',
  logo: 'Lumen',
  /** URL pública definitiva. Se usa en el sitemap, en Open Graph y en los datos estructurados. */
  url: 'https://lumen-estetica.pages.dev',
  lang: 'es',
  locale: 'es_ES',
  description:
    'Centro de estética en Madrid: tratamientos faciales, corporales y de manos y pies con productos dermatológicos y un trato cercano.',
  priceRange: '25 € – 180 €',
  foundingYear: 2014,
};

export const address = {
  street: 'Calle de Fuencarral, 48',
  postalCode: '28004',
  city: 'Madrid',
  region: 'Comunidad de Madrid',
  country: 'ES',
  /** Texto en una línea, tal como se muestra en la web. */
  display: 'Calle de Fuencarral, 48 · 28004 Madrid',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+de+Fuencarral+Madrid',
  mapImage: {
    src: imagenMapa,
    alt: 'Plano ilustrado de la zona de Fuencarral con la ubicación de Lumen Estética marcada. Abre Google Maps.',
  },
};

export const contact = {
  phoneDisplay: '622 836 359',
  phoneHref: 'tel:+34622836359',
  /** Número internacional sin espacios ni «+», para WhatsApp y los datos estructurados. */
  phoneInternational: '34622836359',
  /** Email que se ve en la web. */
  emailDisplay: 'hola@lumenestetica.es',
  /** Email al que llegan realmente los mensajes. */
  emailHref: 'mailto:demosproyectosweb@gmail.com',
  /** Déjalo vacío para que no se muestre. */
  instagram: '',
};

export const whatsapp = {
  /** Mensaje general (botones «Reservar»). */
  message: 'Hola, Lumen 👋 Me gustaría reservar una cita. ¿Qué disponibilidad tenéis?',
  /** Mensaje desde un tratamiento: {tratamiento} se sustituye por su nombre. */
  treatmentMessage:
    'Hola, Lumen 👋 Me gustaría reservar una cita de {tratamiento}. ¿Qué disponibilidad tenéis?',
};

/** Días en formato schema.org: Monday, Tuesday… */
export const hours = [
  { label: 'Lunes a viernes', value: '10:00 – 20:00', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '20:00' },
  { label: 'Sábados', value: '10:00 – 14:00', days: ['Saturday'], opens: '10:00', closes: '14:00' },
  { label: 'Domingos', value: 'Cerrado', days: [], opens: '', closes: '' },
];

/* ------------------------------------------------------------------ */
/* SEO                                                                 */
/* ------------------------------------------------------------------ */

export const seo = {
  title: 'Lumen Estética · Centro de estética en Madrid (Fuencarral)',
  description:
    'Limpieza facial, masajes, presoterapia, manicura y pedicura en Calle de Fuencarral, Madrid. Productos dermatológicos y trato cercano. Reserva por WhatsApp en un minuto.',
  image: {
    src: fotoCompartir,
    alt: 'Cabina de Lumen Estética con luz natural y tonos cálidos',
  },
};

/* ------------------------------------------------------------------ */
/* Textos de interfaz                                                  */
/* ------------------------------------------------------------------ */

export const ui = {
  skipLink: 'Saltar al contenido',
  homeLabel: 'Lumen Estética, ir al inicio',
  menuOpen: 'Abrir menú',
  menuClose: 'Cerrar menú',
  navLabel: 'Menú principal',
  book: 'Reservar',
  bookAria: 'Reservar cita por WhatsApp',
  bookTreatment: 'Reservar',
  bookTreatmentAria: 'Reservar {tratamiento} por WhatsApp',
  offerAria: '{accion}: {oferta}, por WhatsApp',
  callAria: 'Llamar al {telefono}',
  emailAria: 'Escribir un email a {email}',
  legalNavLabel: 'Información legal',
  whatsappFloat: 'Escríbenos por WhatsApp',
  newTab: '(se abre en una pestaña nueva)',
  minutes: 'min',
  durationLabel: 'Duración',
  priceLabel: 'Precio',
  previousPrice: 'Antes',
  stars: '{n} de 5 estrellas',
};

/* ------------------------------------------------------------------ */
/* Menú                                                                */
/* ------------------------------------------------------------------ */

export const nav = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Bonos', href: '#bonos' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
];

/* ------------------------------------------------------------------ */
/* Secciones                                                           */
/* ------------------------------------------------------------------ */

export const hero = {
  title: 'Tu piel, en buenas manos',
  subtitle:
    'Tratamientos faciales, corporales y de manos y pies con productos dermatológicos y un trato cercano. Reserva en un minuto por WhatsApp.',
  primaryCta: 'Reservar cita',
  secondaryCta: { label: 'Ver tratamientos', href: '#tratamientos' },
  image: {
    src: fotoPortada,
    alt: 'Esteticista aplicando un tratamiento facial a una clienta tumbada en una cabina luminosa',
  } satisfies Foto,
};

export const trust = {
  label: 'Por qué confiar en nosotras',
  items: ['4,9 ★ en Google', '12 años cuidando pieles', 'Productos dermatológicos'],
  note: 'Datos de ejemplo',
};

export interface Treatment {
  name: string;
  duration: number;
  price: number;
  benefit: string;
}

export interface TreatmentCategory {
  id: string;
  label: string;
  image: Foto;
  items: Treatment[];
}

export const treatments = {
  id: 'tratamientos',
  eyebrow: 'Tratamientos',
  title: 'Elige lo que tu piel necesita',
  intro: 'Precios claros y sin sorpresas. Si dudas, te ayudamos a elegir.',
  note: 'Precios con IVA incluido.',
  categories: [
    {
      id: 'facial',
      label: 'Facial',
      image: {
        src: fotoFacial,
        alt: 'Clienta con los ojos cerrados durante una limpieza facial, con la piel recién hidratada',
      },
      items: [
        { name: 'Limpieza facial profunda', duration: 60, price: 50, benefit: 'Piel limpia, poros afinados y luminosidad' },
        { name: 'Hidratación intensiva', duration: 50, price: 55, benefit: 'Para pieles secas o apagadas' },
        { name: 'Peeling renovador', duration: 45, price: 65, benefit: 'Unifica el tono y suaviza marcas' },
        { name: 'Radiofrecuencia facial', duration: 45, price: 60, benefit: 'Efecto tensor y firmeza' },
      ],
    },
    {
      id: 'corporal',
      label: 'Corporal',
      image: {
        src: fotoCorporal,
        alt: 'Manos de una esteticista dando un masaje relajante en la espalda',
      },
      items: [
        { name: 'Masaje relajante', duration: 60, price: 50, benefit: 'Desconectar y soltar tensiones' },
        { name: 'Drenaje linfático', duration: 60, price: 55, benefit: 'Piernas ligeras, menos retención' },
        { name: 'Presoterapia', duration: 40, price: 30, benefit: 'Circulación y sensación de ligereza' },
      ],
    },
    {
      id: 'manos-pies',
      label: 'Manos y pies',
      image: {
        src: fotoManosPies,
        alt: 'Manicura en curso: manos cuidadas con uñas en tono nude sobre una toalla clara',
      },
      items: [
        { name: 'Manicura semipermanente', duration: 45, price: 25, benefit: 'Uñas perfectas durante 2–3 semanas' },
        { name: 'Pedicura completa', duration: 60, price: 35, benefit: 'Pies cuidados de verdad' },
        { name: 'Manicura rusa', duration: 75, price: 35, benefit: 'Acabado impecable y duradero' },
      ],
    },
  ] satisfies TreatmentCategory[],
};

export interface Offer {
  title: string;
  description: string;
  price: number;
  previousPrice?: number;
  savings?: string;
  featured?: boolean;
  badge?: string;
  cta: string;
  /** Mensaje de WhatsApp de esta oferta. */
  whatsappMessage: string;
}

export const offers = {
  id: 'bonos',
  eyebrow: 'Primera visita y bonos',
  title: 'Empieza con buen pie',
  intro: 'Prueba sin compromiso y, si repites, ahorra con un bono.',
  items: [
    {
      title: 'Primera limpieza facial',
      description: 'Incluye diagnóstico de tu piel para saber qué necesita.',
      price: 35,
      previousPrice: 50,
      featured: true,
      badge: 'Primera visita',
      cta: 'Reservar primera visita',
      whatsappMessage:
        'Hola, Lumen 👋 Me gustaría reservar mi primera limpieza facial (oferta de 35 €). ¿Qué disponibilidad tenéis?',
    },
    {
      title: 'Bono facial de 4 sesiones',
      description: 'Limpieza o hidratación, a elegir en cada sesión.',
      price: 180,
      savings: 'Ahorras 20 €',
      cta: 'Reservar bono',
      whatsappMessage:
        'Hola, Lumen 👋 Me interesa el bono facial de 4 sesiones. ¿Qué disponibilidad tenéis?',
    },
    {
      title: 'Bono presoterapia de 5 sesiones',
      description: 'Piernas ligeras de forma constante.',
      price: 125,
      savings: 'Ahorras 25 €',
      cta: 'Reservar bono',
      whatsappMessage:
        'Hola, Lumen 👋 Me interesa el bono de presoterapia de 5 sesiones. ¿Qué disponibilidad tenéis?',
    },
  ] satisfies Offer[],
};

export const whyUs = {
  id: 'por-que-lumen',
  eyebrow: 'Por qué Lumen',
  title: 'Cuidarte bien, sin prisas',
  items: [
    { icon: 'diagnostico', title: 'Diagnóstico antes de empezar', text: 'Analizamos tu piel y te recomendamos solo lo que necesitas.' },
    { icon: 'calidad', title: 'Productos de calidad', text: 'Trabajamos con marcas dermatológicas, testadas y respetuosas con tu piel.' },
    { icon: 'tiempo', title: 'Sin prisas', text: 'Una cita a la vez. Tu tiempo es solo tuyo.' },
  ] as const,
};

export const team = {
  id: 'equipo',
  eyebrow: 'Equipo',
  title: 'Manos expertas, trato de siempre',
  members: [
    {
      name: 'Marta Ruiz',
      role: 'Fundadora y esteticista',
      specialty: 'Tratamientos faciales y aparatología',
      experience: '12 años de experiencia',
      quote: 'Cada piel tiene su historia. Mi trabajo es escucharla.',
      photo: {
        src: fotoMarta,
        alt: 'Retrato de Marta Ruiz, fundadora de Lumen, sonriendo en el centro',
      },
    },
    {
      name: 'Elena Sanz',
      role: 'Esteticista',
      specialty: 'Manicura, pedicura y tratamientos corporales',
      experience: '6 años de experiencia',
      quote: 'Los detalles marcan la diferencia.',
      photo: {
        src: fotoElena,
        alt: 'Retrato de Elena Sanz, esteticista de Lumen, con una sonrisa tranquila',
      },
    },
  ] satisfies { name: string; role: string; specialty: string; experience: string; quote: string; photo: Foto }[],
};

export const reviews = {
  id: 'opiniones',
  eyebrow: 'Opiniones',
  title: 'Lo que dicen de nosotras',
  label: 'Reseñas de ejemplo',
  cta: 'Ver en Google',
  ctaUrl: address.mapUrl,
  items: [
    { rating: 5, text: 'Salí con la piel como nunca. Marta te explica todo y no te vende nada que no necesites.', author: 'Laura G.' },
    { rating: 5, text: 'La manicura rusa de Elena me dura semanas. Muy limpio y muy agradable.', author: 'Patricia M.' },
    { rating: 5, text: 'Fui por un masaje y repetí con el bono. Trato de diez.', author: 'Javier R.' },
  ],
};

export const gallery = {
  id: 'galeria',
  eyebrow: 'Galería',
  title: 'Así es Lumen por dentro',
  images: [
    { src: fotoLocal, alt: 'Recepción de Lumen con luz natural, plantas y tonos beige' },
    { src: fotoCabina, alt: 'Cabina de tratamientos con camilla preparada y toallas blancas' },
    { src: fotoProductos, alt: 'Productos de cuidado facial en frascos de cristal sobre una superficie clara' },
    { src: fotoManos, alt: 'Manos con manicura natural y uñas bien cuidadas' },
    { src: fotoGaleriaFacial, alt: 'Esteticista aplicando una mascarilla facial con pincel' },
    { src: fotoDetalle, alt: 'Detalle de toallas enrolladas y una rama seca sobre una bandeja' },
  ] satisfies Foto[],
};

export const faq = {
  id: 'preguntas-frecuentes',
  eyebrow: 'Preguntas frecuentes',
  title: 'Te lo aclaramos',
  items: [
    { question: '¿Cómo reservo?', answer: 'Por WhatsApp o llamando; te confirmamos la cita en el momento.' },
    { question: '¿Puedo cancelar?', answer: 'Sí, avisando con 24 horas de antelación.' },
    { question: '¿Qué formas de pago aceptáis?', answer: 'Tarjeta, efectivo y Bizum.' },
    { question: 'No sé qué tratamiento necesito.', answer: 'Ven a una primera limpieza facial y te hacemos un diagnóstico sin compromiso.' },
    { question: '¿Los bonos caducan?', answer: 'Tienen una validez de 6 meses desde la compra.' },
  ],
};

export const contactSection = {
  id: 'contacto',
  eyebrow: 'Contacto',
  title: 'Ven a vernos',
  intro: 'Estamos en pleno Fuencarral, en el centro de Madrid. Escríbenos o llámanos y te reservamos hueco.',
  addressLabel: 'Dirección',
  hoursLabel: 'Horario',
  mapCta: 'Cómo llegar',
  buttons: {
    call: 'Llamar',
    whatsapp: 'WhatsApp',
    email: 'Email',
  },
  instagramLabel: 'Instagram',
};

/* ------------------------------------------------------------------ */
/* Pie y páginas legales                                               */
/* ------------------------------------------------------------------ */

export const footer = {
  tagline: 'Cuidado facial y corporal en el centro de Madrid.',
  legalLinks: [
    { label: 'Aviso legal', href: '/aviso-legal' },
    { label: 'Privacidad', href: '/privacidad' },
    { label: 'Cookies', href: '/cookies' },
  ],
  copyright: '© 2026 Lumen Estética · Proyecto demostrativo de diseño web',
};

/** Datos del titular para las páginas legales. Sustituye los marcados como [DATO DE EJEMPLO]. */
export const legal = {
  owner: '[DATO DE EJEMPLO] Nombre y apellidos o razón social del titular',
  taxId: '[DATO DE EJEMPLO] NIF/CIF',
  registry: '[DATO DE EJEMPLO] Datos de inscripción en el Registro Mercantil, si procede',
  lastUpdated: '27 de octubre de 2026',
  backLabel: 'Volver al inicio',
  /** Autoridad de control para reclamaciones de protección de datos. */
  authority: { name: 'Agencia Española de Protección de Datos', url: 'https://www.aepd.es' },
};

/* ------------------------------------------------------------------ */
/* Ayudantes                                                           */
/* ------------------------------------------------------------------ */

export function whatsappUrl(message: string = whatsapp.message): string {
  return `https://wa.me/${contact.phoneInternational}?text=${encodeURIComponent(message)}`;
}

/** Nombre del tratamiento en minúscula inicial para que la frase suene natural. */
export function treatmentWhatsappUrl(treatmentName: string): string {
  const name = treatmentName.charAt(0).toLocaleLowerCase('es') + treatmentName.slice(1);
  return whatsappUrl(whatsapp.treatmentMessage.replace('{tratamiento}', name));
}

export function formatPrice(value: number): string {
  return `${value} €`;
}
