import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'Trigeminal Neuralgia – Symptoms & Treatment | NeuroHyderabad',
  description:
    'Learn about trigeminal neuralgia: shock-like facial pain, triggers, diagnosis and surgical treatment options in Hyderabad.',
  alternates: {
    canonical: `${BASE_URL}/conditions/trigeminal-neuralgia/`,
  },
};

export default function TrigeminalNeuralgiaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalCondition',
        '@id': `${BASE_URL}/conditions/trigeminal-neuralgia#condition`,
        name: 'Trigeminal Neuralgia',
        url: `${BASE_URL}/conditions/trigeminal-neuralgia`,
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${BASE_URL}/conditions/trigeminal-neuralgia`,
        url: `${BASE_URL}/conditions/trigeminal-neuralgia`,
        mainEntity: {
          '@id': `${BASE_URL}/conditions/trigeminal-neuralgia#condition`,
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
            name: 'Trigeminal Neuralgia',
            item: `${BASE_URL}/conditions/trigeminal-neuralgia`,
          },
        ],
      },
    ],
  };
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Trigeminal Neuralgia</h1>
        <p className="text-gray-700">
          This page will cover the causes and management of trigeminal neuralgia,
          characterised by severe, shock-like facial pain. Replace this
          placeholder content with medically reviewed information.
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