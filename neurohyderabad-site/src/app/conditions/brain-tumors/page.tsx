import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'Brain Tumors – Symptoms, Diagnosis & Treatment | NeuroHyderabad',
  description:
    'Understand brain tumors: types, symptoms, diagnostic imaging and treatment options including maximal safe surgery.',
  alternates: {
    canonical: `${BASE_URL}/conditions/brain-tumors/`,
  },
};

export default function BrainTumorsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalCondition',
        '@id': `${BASE_URL}/conditions/brain-tumors#condition`,
        name: 'Brain Tumors',
        url: `${BASE_URL}/conditions/brain-tumors`,
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${BASE_URL}/conditions/brain-tumors`,
        url: `${BASE_URL}/conditions/brain-tumors`,
        mainEntity: {
          '@id': `${BASE_URL}/conditions/brain-tumors#condition`,
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
            name: 'Brain Tumors',
            item: `${BASE_URL}/conditions/brain-tumors`,
          },
        ],
      },
    ],
  };
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Brain Tumors</h1>
        <p className="text-gray-700">
          This page will outline the various types of brain tumors, common
          symptoms, diagnostic workup and available treatment modalities. Replace
          this placeholder copy with medically reviewed content.
        </p>
        <Link href="/services/brain-tumor-surgery" className="text-primary underline">
          Learn about brain tumor surgery
        </Link>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}