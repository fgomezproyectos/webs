/**
 * Todo el contenido de la web vive en este fichero.
 * Para adaptar la web a otro centro, cambia estos datos y las fotos de src/assets/fotos.
 */
import type { ImageMetadata } from 'astro';

import fotoPortada from '../assets/fotos/portada.jpg';
import fotoJavier from '../assets/fotos/equipo-javier.jpg';
import fotoLaura from '../assets/fotos/equipo-laura.jpg';
import fotoSergio from '../assets/fotos/equipo-sergio.jpg';
import fotoManual from '../assets/fotos/tratamiento-manual.jpg';
import fotoPuncion from '../assets/fotos/tratamiento-puncion.jpg';
import fotoEjercicio from '../assets/fotos/tratamiento-ejercicio.jpg';
import fotoReadaptacion from '../assets/fotos/tratamiento-readaptacion.jpg';
import fotoSuelo from '../assets/fotos/tratamiento-suelo.jpg';
import fotoPilates from '../assets/fotos/tratamiento-pilates.jpg';
import fotoCompartir from '../assets/fotos/compartir.jpg';
import imagenMapa from '../assets/mapa.svg';

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

/* ------------------------------------------------------------------ */
/* Centro y contacto                                                   */
/* ------------------------------------------------------------------ */

/** Mientras sea true, la web no se indexa (meta robots noindex y robots.txt bloqueado). */
export const demo = true;

export const business = {
  name: 'Axis Fisioterapia',
  /** Texto del logo. */
  logo: 'Axis',
  /** Nombre corto que se usa en los mensajes de WhatsApp. */
  shortName: 'Axis',
  /** URL pública definitiva. Se usa en el sitemap, en Open Graph y en los datos estructurados. */
  url: 'https://axis-fisioterapia.pages.dev',
  lang: 'es',
  locale: 'es_ES',
  description:
    'Centro de fisioterapia en Madrid: dolor de espalda y cuello, lesiones deportivas, suelo pélvico, punción seca y pilates terapéutico con fisioterapeutas colegiados.',
  priceRange: '45 € – 200 €',
};

export const address = {
  street: 'Calle de Alcalá, 210',
  postalCode: '28028',
  city: 'Madrid',
  region: 'Comunidad de Madrid',
  country: 'ES',
  /** Texto en una línea, tal como se muestra en la web. */
  display: 'Calle de Alcalá, 210 · 28028 Madrid',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+de+Alcala+Madrid',
  mapImage: {
    src: imagenMapa,
    alt: 'Plano ilustrado de la Calle de Alcalá con la ubicación de Axis Fisioterapia marcada',
  } satisfies Foto,
};

export const contact = {
  phoneDisplay: '622 836 359',
  phoneHref: 'tel:+34622836359',
  /** Número internacional sin espacios ni «+», para WhatsApp y los datos estructurados. */
  phoneInternational: '34622836359',
  /** Email que se ve en la web. */
  emailDisplay: 'hola@axisfisio.es',
  /** Email al que llegan realmente los mensajes. */
  emailHref: 'mailto:demosproyectosweb@gmail.com',
  /** Déjalo vacío para que no se muestre. */
  instagram: '',
};

export const whatsapp = {
  /** Mensaje general (botones «Pedir cita»). */
  message: 'Hola, Axis 👋 Me gustaría pedir cita. ¿Qué disponibilidad tenéis?',
  /** Mensaje desde una zona de dolor o un tratamiento: {motivo} se sustituye por su nombre. */
  reasonMessage: 'Hola, Axis 👋 Me gustaría pedir cita por {motivo}. ¿Qué disponibilidad tenéis?',
};

/** Enlace a WhatsApp con el mensaje ya escrito. Con `motivo`, usa el mensaje de zona o tratamiento. */
export function whatsappUrl(motivo?: string) {
  const text = motivo ? whatsapp.reasonMessage.replace('{motivo}', motivo.toLowerCase()) : whatsapp.message;
  return `https://wa.me/${contact.phoneInternational}?text=${encodeURIComponent(text)}`;
}

/** Días en formato schema.org: Monday, Tuesday… */
export const hours = [
  { label: 'Lunes a viernes', value: '9:00 – 21:00', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '21:00' },
  { label: 'Sábados', value: '9:00 – 14:00', days: ['Saturday'], opens: '09:00', closes: '14:00' },
  { label: 'Domingos', value: 'Cerrado', days: [] as string[], opens: '', closes: '' },
];

/* ------------------------------------------------------------------ */
/* SEO                                                                 */
/* ------------------------------------------------------------------ */

export const seo = {
  title: 'Axis Fisioterapia · Fisioterapeutas en Madrid (Calle de Alcalá)',
  description:
    'Fisioterapia en Madrid para dolor de espalda y cuello, lesiones deportivas y suelo pélvico. Primera valoración con tratamiento por 50 €. Pide cita por WhatsApp.',
  image: {
    src: fotoCompartir,
    alt: 'Axis Fisioterapia: vuelve a moverte sin dolor. Fisioterapeuta movilizando el hombro de una paciente.',
  } satisfies Foto,
};

/* ------------------------------------------------------------------ */
/* Textos de interfaz                                                  */
/* ------------------------------------------------------------------ */

export const ui = {
  skipLink: 'Saltar al contenido',
  homeLabel: 'Axis Fisioterapia, ir al inicio',
  menuOpen: 'Abrir menú',
  menuClose: 'Cerrar menú',
  navLabel: 'Menú principal',
  book: 'Pedir cita',
  bookAria: 'Pedir cita por WhatsApp',
  bookReasonAria: 'Pedir cita por {motivo} por WhatsApp',
  callLabel: 'Llamar',
  callAria: 'Llamar al {telefono}',
  whatsappLabel: 'WhatsApp',
  emailLabel: 'Email',
  emailAria: 'Escribir un email a {email}',
  instagramLabel: 'Instagram',
  mapAria: 'Cómo llegar: ver la ubicación en Google Maps',
  mapCta: 'Cómo llegar',
  legalNavLabel: 'Información legal',
  whatsappFloat: 'Pedir cita por WhatsApp',
  newTab: '(se abre en una pestaña nueva)',
  stars: '{n} de 5 estrellas',
};

/* ------------------------------------------------------------------ */
/* Menú                                                                */
/* ------------------------------------------------------------------ */

export const nav = [
  { label: 'Dolencias', href: '#dolencias' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Tarifas', href: '#tarifas' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
];

/* ------------------------------------------------------------------ */
/* Secciones                                                           */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: 'Fisioterapia en Madrid',
  title: 'Vuelve a moverte sin dolor',
  subtitle:
    'Fisioterapia personalizada para dolor de espalda, lesiones deportivas, suelo pélvico y mucho más. Te valoramos, te explicamos qué te pasa y trabajamos contigo para que no vuelva.',
  primaryCta: 'Pedir cita',
  secondaryCta: { label: '¿Dónde te duele?', href: '#dolencias' },
  image: {
    src: fotoPortada,
    alt: 'Fisioterapeuta con polo blanco movilizando el hombro y la espalda de una paciente tumbada de lado en la camilla',
  } satisfies Foto,
};

export const stats = {
  label: 'Axis en datos',
  items: [
    { value: '4,9 ★', label: 'en Google' },
    { value: '+2.000', label: 'pacientes' },
    { value: '100 %', label: 'Fisioterapeutas colegiados' },
  ],
  note: 'Datos de ejemplo',
};

export type IconName =
  | 'espalda'
  | 'hombro'
  | 'rodilla'
  | 'deporte'
  | 'pelvis'
  | 'cabeza'
  | 'whatsapp'
  | 'phone'
  | 'mail'
  | 'menu'
  | 'close'
  | 'pin'
  | 'clock'
  | 'arrow'
  | 'external'
  | 'instagram'
  | 'star'
  | 'plus';

export const painAreas = {
  id: 'dolencias',
  eyebrow: 'Dolencias',
  title: '¿Dónde te duele?',
  intro: 'Elige la zona y escríbenos. Te decimos cómo podemos ayudarte.',
  cta: 'Pedir cita',
  items: [
    { name: 'Espalda y cuello', icon: 'espalda', text: 'Lumbalgia, ciática, cervicalgia y contracturas.' },
    { name: 'Hombro', icon: 'hombro', text: 'Tendinitis, hombro congelado y dolor al levantar el brazo.' },
    { name: 'Rodilla y tobillo', icon: 'rodilla', text: 'Esguinces, dolor de rodilla y recuperación tras cirugía.' },
    { name: 'Lesión deportiva', icon: 'deporte', text: 'Roturas, sobrecargas y vuelta segura a tu deporte.' },
    { name: 'Suelo pélvico', icon: 'pelvis', text: 'Embarazo, posparto, incontinencia y dolor pélvico.' },
    { name: 'Dolor de cabeza y mandíbula', icon: 'cabeza', text: 'Cefaleas tensionales y dolor en la articulación de la mandíbula.' },
  ] satisfies { name: string; icon: IconName; text: string }[],
};

export const treatments = {
  id: 'tratamientos',
  eyebrow: 'Tratamientos',
  title: 'Cómo te ayudamos',
  intro: 'Combinamos técnicas según tu caso. Siempre con un objetivo: que te muevas mejor y el dolor no vuelva.',
  cta: 'Pedir cita',
  items: [
    {
      name: 'Terapia manual',
      text: 'Técnicas con las manos para aliviar el dolor y recuperar movilidad.',
      image: {
        src: fotoManual,
        alt: 'Manos de un fisioterapeuta trabajando la musculatura del hombro y el cuello de una paciente tumbada',
      },
    },
    {
      name: 'Punción seca',
      text: 'Para desactivar puntos gatillo y contracturas que no se van.',
      image: {
        src: fotoPuncion,
        alt: 'Primer plano de unas manos colocando agujas finas de punción en la piel de la espalda',
      },
    },
    {
      name: 'Ejercicio terapéutico',
      text: 'Ejercicios pautados para que el dolor no vuelva.',
      image: {
        src: fotoEjercicio,
        alt: 'Fisioterapeuta corrigiendo la postura del brazo de una paciente que levanta mancuernas ligeras',
      },
    },
    {
      name: 'Readaptación deportiva',
      text: 'Del alta a la pista, paso a paso y sin recaídas.',
      image: {
        src: fotoReadaptacion,
        alt: 'Fisioterapeuta flexionando y explorando la rodilla de un deportista tumbado en la camilla',
      },
    },
    {
      name: 'Fisioterapia de suelo pélvico',
      text: 'Valoración y tratamiento en un espacio privado y tranquilo.',
      image: {
        src: fotoSuelo,
        alt: 'Mujer embarazada de perfil, de pie y relajada, respirando con los ojos cerrados',
      },
    },
    {
      name: 'Pilates terapéutico',
      text: 'Grupos reducidos guiados por fisioterapeutas.',
      image: {
        src: fotoPilates,
        alt: 'Fisioterapeuta guiando a dos pacientes que hacen ejercicios de pilates en colchoneta con una pelota',
      },
    },
  ] satisfies { name: string; text: string; image: Foto }[],
};

export const firstVisit = {
  id: 'primera-visita',
  eyebrow: 'Tu primera visita',
  title: 'Paso a paso, sin sorpresas',
  /** Texto oculto para lectores de pantalla antes de cada paso. */
  stepLabel: 'Paso {n}:',
  steps: [
    { title: 'Valoración', text: 'Te escuchamos y exploramos tu movilidad y tu dolor.' },
    { title: 'Diagnóstico', text: 'Te explicamos qué te pasa, sin tecnicismos.' },
    { title: 'Tratamiento', text: 'Empezamos a trabajar en la primera sesión.' },
    { title: 'Plan para casa', text: 'Te llevas ejercicios y pautas para avanzar entre sesiones.' },
  ],
};

export const pricing = {
  id: 'tarifas',
  eyebrow: 'Tarifas',
  title: 'Precios claros',
  caption: 'Tarifas de Axis Fisioterapia (IVA incluido)',
  columns: { service: 'Servicio', price: 'Precio' },
  items: [
    { name: 'Primera valoración con tratamiento', detail: '60 min', price: '50 €', highlight: true },
    { name: 'Sesión de fisioterapia', detail: '45–50 min', price: '45 €' },
    { name: 'Bono de 5 sesiones', detail: 'Ahorras 25 €', price: '200 €' },
    { name: 'Pilates terapéutico', detail: '1 día a la semana, grupos reducidos', price: '60 €/mes' },
  ],
  vatNote: 'Precios con IVA incluido.',
  insurance: {
    text: '¿Tienes mutua?',
    linkLabel: 'Consúltanos si trabajamos con la tuya.',
    /** Motivo que se añade al mensaje de WhatsApp. */
    whatsappReason: 'mi mutua',
  },
};

export const team = {
  id: 'equipo',
  eyebrow: 'Equipo',
  title: 'Fisioterapeutas que te explican lo que hacen',
  experienceLabel: '{n} años de experiencia',
  members: [
    {
      name: 'Javier Molina',
      role: 'Fundador y fisioterapeuta',
      specialty: 'Fisioterapia deportiva y readaptación de lesiones',
      years: 14,
      license: 'Nº col. 00000 (ejemplo)',
      quote: 'Mi objetivo es que vuelvas a hacer lo que te gusta, y que no te vuelva a pasar.',
      image: { src: fotoJavier, alt: 'Retrato de Javier Molina, fisioterapeuta con gafas y barba, sonriente y con los brazos cruzados' },
    },
    {
      name: 'Laura Ortega',
      role: 'Fisioterapeuta',
      specialty: 'Suelo pélvico y fisioterapia obstétrica',
      years: 9,
      license: 'Nº col. 00000 (ejemplo)',
      quote: 'Hablar de suelo pélvico es salud. Aquí lo hacemos con naturalidad.',
      image: { src: fotoLaura, alt: 'Retrato de Laura Ortega, fisioterapeuta con gafas y pelo recogido, sentada en su consulta' },
    },
    {
      name: 'Sergio Peña',
      role: 'Fisioterapeuta',
      specialty: 'Dolor de espalda y cuello, terapia manual y punción seca',
      years: 7,
      license: 'Nº col. 00000 (ejemplo)',
      quote: 'Entender tu dolor es el primer paso para quitártelo.',
      image: { src: fotoSergio, alt: 'Retrato de Sergio Peña, fisioterapeuta con barba y bata blanca, revisando una tableta' },
    },
  ] satisfies { name: string; role: string; specialty: string; years: number; license: string; quote: string; image: Foto }[],
};

export const reviews = {
  id: 'opiniones',
  eyebrow: 'Opiniones',
  title: 'Lo que dicen nuestros pacientes',
  label: 'Reseñas de ejemplo',
  cta: 'Ver en Google',
  items: [
    { rating: 5, text: 'Llevaba meses con dolor lumbar y en tres sesiones noté el cambio. Te explican todo.', author: 'Marta L.' },
    { rating: 5, text: 'Javier me preparó para volver a correr tras el esguince. Profesional de verdad.', author: 'Daniel P.' },
    { rating: 5, text: 'Laura me ayudó muchísimo en el posparto. Trato cercano y mucha confianza.', author: 'Cristina V.' },
  ],
};

export const faq = {
  id: 'preguntas',
  eyebrow: 'Preguntas frecuentes',
  title: 'Antes de venir',
  items: [
    { q: '¿Necesito receta o derivación médica?', a: 'No. Puedes venir directamente; si hace falta, te derivamos al especialista.' },
    { q: '¿Qué ropa llevo?', a: 'Ropa cómoda que permita mover y descubrir la zona a tratar.' },
    { q: '¿Cuántas sesiones necesitaré?', a: 'Depende de cada caso. En la primera valoración te damos una estimación y un plan.' },
    { q: '¿Trabajáis con mutuas?', a: 'Consúltanos por WhatsApp con el nombre de tu mutua.' },
    { q: '¿Puedo cancelar?', a: 'Sí, avisando con 24 horas de antelación.' },
  ],
};

export const contactSection = {
  id: 'contacto',
  eyebrow: 'Contacto',
  title: 'Ven a vernos',
  intro: 'Escríbenos por WhatsApp y te damos cita en el horario que mejor te venga.',
  addressLabel: 'Dirección',
  hoursLabel: 'Horario',
  channelsLabel: 'Pide cita',
};

export const footer = {
  tagline: 'Fisioterapia en Madrid',
  copyright: '© 2026 Axis Fisioterapia · Proyecto demostrativo de diseño web',
  legalLinks: [
    { label: 'Aviso legal', href: '/aviso-legal' },
    { label: 'Privacidad', href: '/privacidad' },
    { label: 'Cookies', href: '/cookies' },
  ],
};

/* ------------------------------------------------------------------ */
/* Legal                                                               */
/* ------------------------------------------------------------------ */

export const legal = {
  lastUpdated: '29 de octubre de 2026',
  backLabel: 'Volver al inicio',
  /** Datos que faltan: se muestran marcados como dato de ejemplo. */
  owner: '[DATO DE EJEMPLO] Nombre y apellidos o razón social del titular',
  taxId: '[DATO DE EJEMPLO] 00000000X',
  registry: '[DATO DE EJEMPLO] Inscrita en el Registro Mercantil de Madrid, tomo 0000, folio 00, hoja M-000000',
  healthRegistry: '[DATO DE EJEMPLO] Centro sanitario autorizado por la Comunidad de Madrid con el n.º CS0000',
  professionalBody: {
    name: 'Colegio Profesional de Fisioterapeutas de la Comunidad de Madrid',
    url: 'https://www.cfisiomad.com',
  },
  professionalTitle: 'Graduado/a o Diplomado/a en Fisioterapia, título oficial expedido en España',
  /** Número de colegiado de cada profesional (se completa con el equipo). */
  memberLicense: '[DATO DE EJEMPLO] 00000',
  authority: { name: 'Agencia Española de Protección de Datos (AEPD)', url: 'https://www.aepd.es' },
};
