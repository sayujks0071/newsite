import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'Epilepsy Surgery Evaluation – NeuroHyderabad',
  description: 'Discover how comprehensive evaluation for drug-resistant epilepsy can lead to surgical management and seizure freedom.',
  alternates: {
    canonical: `${BASE_URL}/services/epilepsy-surgery-evaluation/`,
  },
};

export default function EpilepsyEvaluationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Epilepsy Surgery Evaluation',
    areaServed: ['Hyderabad', 'Secunderabad'],
    provider: { '@id': `${BASE_URL}/#physician` },
    url: `${BASE_URL}/services/epilepsy-surgery-evaluation/`,
  };
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Epilepsy Surgery Evaluation
        </h1>
        <p className="text-gray-700">
          This page will explain the evaluation process for patients with
          drug-resistant epilepsy, including investigations, multidisciplinary
          assessment and surgical options. Replace this placeholder text with
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