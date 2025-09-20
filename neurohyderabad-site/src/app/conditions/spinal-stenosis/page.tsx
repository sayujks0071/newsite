import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'Spinal Stenosis – Symptoms, Diagnosis & Treatment | NeuroHyderabad',
  description:
    'Understand spinal stenosis: causes, symptoms, diagnostic tests and treatment options including minimally invasive surgery.',
  alternates: {
    canonical: `${BASE_URL}/conditions/spinal-stenosis/`,
  },
};

export default function SpinalStenosisPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalCondition',
        '@id': `${BASE_URL}/conditions/spinal-stenosis#condition`,
        name: 'Spinal Stenosis',
        url: `${BASE_URL}/conditions/spinal-stenosis`,
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${BASE_URL}/conditions/spinal-stenosis`,
        url: `${BASE_URL}/conditions/spinal-stenosis`,
        mainEntity: {
          '@id': `${BASE_URL}/conditions/spinal-stenosis#condition`,
        },
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${BASE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Spinal Stenosis',
            item: `${BASE_URL}/conditions/spinal-stenosis`,
          },
        ],
      },
    ],
  };
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Spinal Stenosis</h1>
        <p className="text-gray-700">
          This page will discuss the causes of spinal canal narrowing, symptom
          progression, conservative therapies and when surgery should be
          considered. Replace this placeholder text with medically reviewed
          content.
        </p>
        <Link href="/services/minimally-invasive-spine-surgery" className="text-primary underline">
          Learn about minimally invasive spine surgery
        </Link>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}