import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'Locations – NeuroHyderabad Clinics in Hyderabad & Secunderabad',
  description:
    'Find our neurosurgery clinic locations in Hyderabad, Malakpet and Secunderabad. Get directions, hours and contact information.',
  alternates: {
    canonical: `${BASE_URL}/locations/`,
  },
};

/**
 * Locations hub page. Provides an overview of our clinic locations with links
 * to individual pages. This helps users quickly navigate to their nearest
 * branch. Structured data includes breadcrumb navigation.
 */
export default function LocationsIndexPage() {
  const base = BASE_URL;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${base}/locations/`,
        url: `${base}/locations/`,
        name: 'Locations – NeuroHyderabad Clinics in Hyderabad & Secunderabad',
        description: 'Find our neurosurgery clinic locations in Hyderabad, Malakpet and Secunderabad.',
        isPartOf: { '@id': `${base}/#website` },
        breadcrumb: { '@id': `${base}/locations/#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${base}/locations/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: `${base}/locations/` },
        ],
      },
    ],
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-primary">Our Locations</h1>
      <p className="text-gray-700">
        We serve patients from across Hyderabad and Secunderabad. Visit our clinic
        pages below for detailed addresses, hours and directions.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <LocationListItem
          href="/locations/hyderabad"
          title="Hyderabad"
          description="Main neurosurgery clinic at Yashoda Hospital, Malakpet serving Hyderabad."
        />
        <LocationListItem
          href="/locations/malakpet"
          title="Malakpet"
          description="Our clinic inside Yashoda Hospital Malakpet with full facilities."
        />
        <LocationListItem
          href="/locations/secunderabad"
          title="Secunderabad"
          description="Satellite clinic for consultations and follow-ups in Secunderabad."
        />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}

function LocationListItem({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition">
      <h2 className="font-semibold text-primary mb-1">
        <Link href={href} className="hover:underline">
          {title}
        </Link>
      </h2>
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      <Link href={href} className="text-sm text-primary underline">
        Get directions
      </Link>
    </div>
  );
}