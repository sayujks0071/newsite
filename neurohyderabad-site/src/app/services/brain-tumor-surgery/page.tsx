import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'Brain Tumor Surgery – NeuroHyderabad',
  description: 'Learn about maximal safe brain tumor resection using neuronavigation and neuromonitoring techniques in Hyderabad.',
  alternates: {
    canonical: `${BASE_URL}/services/brain-tumor-surgery/`,
  },
};

export default function BrainTumorSurgeryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Brain Tumor Surgery',
    areaServed: ['Hyderabad', 'Secunderabad'],
    provider: { '@id': `${BASE_URL}/#physician` },
    url: `${BASE_URL}/services/brain-tumor-surgery/`,
  };
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Brain Tumor Surgery</h1>
        <p className="text-gray-700">
          This page will detail the indications, techniques, risks and recovery for
          brain tumor surgery. Neuronavigation and neuromonitoring enable maximal
          safe resection while preserving function. Replace this placeholder
          content with medically reviewed material.
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