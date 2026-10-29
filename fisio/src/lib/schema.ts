import { address, business, contact, hours, painAreas, pricing, team, treatments } from '../data/site';

/** Datos estructurados schema.org (Physiotherapy, un tipo de MedicalBusiness) generados a partir de site.ts. */
export function physiotherapySchema(imageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physiotherapy',
    name: business.name,
    description: business.description,
    url: business.url,
    image: imageUrl,
    telephone: `+${contact.phoneInternational}`,
    priceRange: business.priceRange,
    currenciesAccepted: 'EUR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      postalCode: address.postalCode,
      addressLocality: address.city,
      addressRegion: address.region,
      addressCountry: address.country,
    },
    hasMap: address.mapUrl,
    openingHoursSpecification: hours
      .filter((row) => row.days.length > 0)
      .map((row) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: row.days,
        opens: row.opens,
        closes: row.closes,
      })),
    medicalSpecialty: 'Physiotherapy',
    knowsAbout: [...painAreas.items.map((area) => area.name), ...treatments.items.map((item) => item.name)],
    availableService: treatments.items.map((item) => ({
      '@type': 'MedicalTherapy',
      name: item.name,
      description: item.text,
    })),
    makesOffer: pricing.items.map((item) => ({
      '@type': 'Offer',
      name: item.name,
      description: item.detail,
      price: item.price.replace(/[^\d,]/g, '').replace(',', '.'),
      priceCurrency: 'EUR',
    })),
    employee: team.members.map((member) => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
      description: member.specialty,
    })),
  };
}
