import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'Disc Herniation – Symptoms, Diagnosis & Treatment | NeuroHyderabad',
  description:
    'Learn about disc herniation: symptoms, diagnosis, conservative care, and when to consider surgery with our neurosurgeon in Hyderabad.',
  alternates: {
    canonical: `${BASE_URL}/conditions/disc-herniation/`,
  },
};

export default function DiscHerniationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalCondition',
        '@id': `${BASE_URL}/conditions/disc-herniation#condition`,
        name: 'Disc Herniation',
        url: `${BASE_URL}/conditions/disc-herniation`,
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${BASE_URL}/conditions/disc-herniation`,
        url: `${BASE_URL}/conditions/disc-herniation`,
        mainEntity: {
          '@id': `${BASE_URL}/conditions/disc-herniation#condition`,
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
            name: 'Disc Herniation',
            item: `${BASE_URL}/conditions/disc-herniation`,
          },
        ],
      },
    ],
  };
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Disc Herniation</h1>
        <p className="text-gray-700">
          This condition page will cover the symptoms, diagnosis, conservative
          management and surgical options for disc herniation. Replace this
          placeholder text with medically reviewed content.
        </p>
        <p className="text-gray-700">
          If you have back pain radiating into your leg or arm, see your doctor.
          Surgery is considered after conservative treatments fail or if there is
          significant weakness.
        </p>
        <Link href="/services/endoscopic-spine-surgery" className="text-primary underline">
          Learn about endoscopic spine surgery
        </Link>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}