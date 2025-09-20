import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'Conditions We Treat – NeuroHyderabad',
  description:
    'Learn about neurological conditions such as disc herniation, spinal stenosis, trigeminal neuralgia, brain tumors, pituitary tumors and hydrocephalus. Understand symptoms, diagnosis and when to see a neurosurgeon.',
  alternates: {
    canonical: `${BASE_URL}/conditions/`,
  },
};

/**
 * Conditions hub page. Lists common neurological conditions with brief
 * explanations and links to dedicated pages. This page helps patients
 * understand the symptoms and treatment options before exploring service
 * pages or booking a consultation.
 */
export default function ConditionsIndexPage() {
  const base = BASE_URL;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${base}/conditions/`,
        url: `${base}/conditions/`,
        name: 'Conditions We Treat – NeuroHyderabad',
        description:
          'Learn about neurological conditions such as disc herniation, spinal stenosis, trigeminal neuralgia, brain tumors, pituitary tumors and hydrocephalus.',
        isPartOf: { '@id': `${base}/#website` },
        breadcrumb: { '@id': `${base}/conditions/#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${base}/conditions/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
          { '@type': 'ListItem', position: 2, name: 'Conditions', item: `${base}/conditions/` },
        ],
      },
    ],
  };
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-primary">Conditions We Treat</h1>
      <p className="text-gray-700">
        Understanding your condition is the first step toward effective treatment.
        Explore common neurological conditions below to learn about symptoms,
        diagnosis, conservative care and surgical options. For personalised
        advice, please book an appointment.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <ConditionListItem
          href="/conditions/disc-herniation"
          title="Disc Herniation"
          description="Bulging or ruptured spinal discs causing back pain and nerve compression."
        />
        <ConditionListItem
          href="/conditions/spinal-stenosis"
          title="Spinal Stenosis"
          description="Narrowing of the spinal canal leading to leg pain and walking difficulty."
        />
        <ConditionListItem
          href="/conditions/trigeminal-neuralgia"
          title="Trigeminal Neuralgia"
          description="Sudden, severe facial pain due to trigeminal nerve irritation."
        />
        <ConditionListItem
          href="/conditions/brain-tumors"
          title="Brain Tumors"
          description="Benign and malignant growths requiring expert diagnosis and management."
        />
        <ConditionListItem
          href="/conditions/pituitary-tumors"
          title="Pituitary Tumors"
          description="Tumors affecting hormonal balance, vision and growth."
        />
        <ConditionListItem
          href="/conditions/hydrocephalus"
          title="Hydrocephalus"
          description="Accumulation of cerebrospinal fluid causing increased pressure in the brain."
        />
      </div>
      <div className="mt-8">
        <p className="text-gray-700">
          Many conditions can be managed with lifestyle modifications and
          physiotherapy. If symptoms persist or worsen, early referral to a
          neurosurgeon improves outcomes. Learn more about our{' '}
          <Link href="/services/endoscopic-spine-surgery" className="text-primary underline">
            endoscopic and minimally invasive surgeries
          </Link>{' '}
          or{' '}
          <Link href="/contact" className="text-primary underline">
            schedule a consultation
          </Link>
          .
        </p>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}

function ConditionListItem({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition">
      <h2 className="font-semibold text-primary mb-1">
        <Link href={href} className="hover:underline">
          {title}
        </Link>
      </h2>
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      <Link href={href} className="text-sm text-primary underline">
        Learn more
      </Link>
    </div>
  );
}