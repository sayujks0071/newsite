import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'Minimally Invasive Spine Surgery – NeuroHyderabad',
  description: 'Explore how minimally invasive spine surgery preserves stability and accelerates recovery using smaller incisions.',
  alternates: {
    canonical: `${BASE_URL}/services/minimally-invasive-spine-surgery/`,
  },
};

export default function MinimallyInvasiveSpinePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Minimally Invasive Spine Surgery',
    areaServed: ['Hyderabad', 'Secunderabad'],
    provider: { '@id': `${BASE_URL}/#physician` },
    url: `${BASE_URL}/services/minimally-invasive-spine-surgery/`,
  };
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Minimally Invasive Spine Surgery
        </h1>
        <p className="text-gray-700">
          This page will describe minimally invasive spine surgery, including its
          indications, technique, benefits and recovery. Replace this placeholder
          copy with medically reviewed content.
        </p>
        <Link href="/contact" className="text-primary underline">
          Book an appointment
        </Link>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}