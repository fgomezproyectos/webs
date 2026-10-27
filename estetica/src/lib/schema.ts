import { address, business, contact, hours, treatments } from '../data/site';

/** Datos estructurados schema.org (BeautySalon) generados a partir de site.ts. */
export function beautySalonSchema(imageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: business.name,
    description: business.description,
    url: business.url,
    image: imageUrl,
    telephone: `+${contact.phoneInternational}`,
    priceRange: business.priceRange,
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: treatments.eyebrow,
      itemListElement: treatments.categories.map((category) => ({
        '@type': 'OfferCatalog',
        name: category.label,
        itemListElement: category.items.map((item) => ({
          '@type': 'Offer',
          price: item.price,
          priceCurrency: 'EUR',
          itemOffered: {
            '@type': 'Service',
            name: item.name,
            description: item.benefit,
          },
        })),
      })),
    },
  };
}
