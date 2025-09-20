import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'Endoscopic Spine Surgery – NeuroHyderabad',
  description: 'Learn about indications, benefits, risks and recovery for full endoscopic spine surgery performed in Hyderabad.',
  alternates: {
    canonical: `${BASE_URL}/services/endoscopic-spine-surgery/`,
  },
};

export default function EndoscopicSpineSurgeryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Endoscopic Spine Surgery',
    areaServed: ['Hyderabad', 'Secunderabad'],
    provider: { '@id': `${BASE_URL}/#physician` },
    url: `${BASE_URL}/services/endoscopic-spine-surgery/`,
  };
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Endoscopic Spine Surgery
        </h1>
        <p className="text-gray-700">
          This page will describe the indications, steps, benefits, risks and recovery
          of full endoscopic spine surgery. Replace this placeholder copy with
          medically reviewed content.
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