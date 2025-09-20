import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'Pituitary Tumors – Symptoms, Diagnosis & Treatment | NeuroHyderabad',
  description:
    'Learn about pituitary tumors: hormonal effects, vision problems, imaging and surgical/endoscopic treatment options in Hyderabad.',
  alternates: {
    canonical: `${BASE_URL}/conditions/pituitary-tumors/`,
  },
};

export default function PituitaryTumorsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalCondition',
        '@id': `${BASE_URL}/conditions/pituitary-tumors#condition`,
        name: 'Pituitary Tumors',
        url: `${BASE_URL}/conditions/pituitary-tumors`,
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${BASE_URL}/conditions/pituitary-tumors`,
        url: `${BASE_URL}/conditions/pituitary-tumors`,
        mainEntity: {
          '@id': `${BASE_URL}/conditions/pituitary-tumors#condition`,
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
            name: 'Pituitary Tumors',
            item: `${BASE_URL}/conditions/pituitary-tumors`,
          },
        ],
      },
    ],
  };
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Pituitary Tumors</h1>
        <p className="text-gray-700">
          This page will discuss pituitary adenomas and other tumors of the
          pituitary gland, their hormonal and mass effect symptoms, diagnosis and
          surgical/endoscopic management. Replace this placeholder text with
          medically reviewed material.
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