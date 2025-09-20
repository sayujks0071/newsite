import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'Pediatric Neurosurgery – NeuroHyderabad',
  description: 'Comprehensive neurosurgical care for children, including hydrocephalus, tumors and congenital anomalies.',
  alternates: {
    canonical: `${BASE_URL}/services/pediatric-neurosurgery/`,
  },
};

export default function PediatricNeurosurgeryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Pediatric Neurosurgery',
    areaServed: ['Hyderabad', 'Secunderabad'],
    provider: { '@id': `${BASE_URL}/#physician` },
    url: `${BASE_URL}/services/pediatric-neurosurgery/`,
  };
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Pediatric Neurosurgery
        </h1>
        <p className="text-gray-700">
          This page will discuss neurosurgical conditions affecting children,
          including hydrocephalus, tumors and congenital anomalies, and how we
          approach their management. Replace this placeholder text with
          medically reviewed material.
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