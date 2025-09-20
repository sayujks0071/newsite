import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'Hydrocephalus – Causes, Symptoms & Management | NeuroHyderabad',
  description:
    'Find out about hydrocephalus: causes, symptoms and modern treatment options including endoscopic third ventriculostomy.',
  alternates: {
    canonical: `${BASE_URL}/conditions/hydrocephalus/`,
  },
};

export default function HydrocephalusPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalCondition',
        '@id': `${BASE_URL}/conditions/hydrocephalus#condition`,
        name: 'Hydrocephalus',
        url: `${BASE_URL}/conditions/hydrocephalus`,
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${BASE_URL}/conditions/hydrocephalus`,
        url: `${BASE_URL}/conditions/hydrocephalus`,
        mainEntity: {
          '@id': `${BASE_URL}/conditions/hydrocephalus#condition`,
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
            name: 'Hydrocephalus',
            item: `${BASE_URL}/conditions/hydrocephalus`,
          },
        ],
      },
    ],
  };
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Hydrocephalus</h1>
        <p className="text-gray-700">
          This page will explain hydrocephalus, including its causes, symptoms
          (such as headache and developmental delay) and modern treatments like
          endoscopic third ventriculostomy (ETV). Replace this placeholder text
          with medically reviewed content.
        </p>
        <Link href="/services/pediatric-neurosurgery" className="text-primary underline">
          Learn about pediatric neurosurgery
        </Link>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}