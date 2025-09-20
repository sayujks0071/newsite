import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'Neurosurgery Services in Hyderabad – Endoscopic & Minimally Invasive',
  description:
    'Explore our comprehensive neurosurgery services including endoscopic spine surgery, minimally invasive spine surgery, brain tumor surgery, epilepsy surgery evaluation and pediatric neurosurgery in Hyderabad.',
  alternates: {
    canonical: `${BASE_URL}/services/`,
  },
};

/**
 * Services hub page. This page lists all available neurosurgical services with
 * brief descriptions and links to their dedicated pages. The content is
 * server‑rendered for SEO. A breadcrumb and structured data script are
 * included for better discoverability.
 */
export default function ServicesIndexPage() {
  const base = BASE_URL;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${base}/services/`,
        url: `${base}/services/`,
        name: 'Neurosurgery Services in Hyderabad – Endoscopic & Minimally Invasive',
        description:
          'Explore our comprehensive neurosurgery services including endoscopic spine surgery, minimally invasive spine surgery, brain tumor surgery, epilepsy surgery evaluation and pediatric neurosurgery in Hyderabad.',
        isPartOf: { '@id': `${base}/#website` },
        breadcrumb: { '@id': `${base}/services/#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${base}/services/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${base}/services/` },
        ],
      },
    ],
  };
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-primary">Our Neurosurgical Services</h1>
      <p className="text-gray-700">
        We offer a wide range of neurosurgical services tailored to your needs. Learn
        more about each procedure below or contact us if you have questions.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <ServiceListItem
          href="/services/endoscopic-spine-surgery"
          title="Endoscopic Spine Surgery"
          description="Tiny incision, targeted decompression and quick recovery for disc herniation and stenosis."
        />
        <ServiceListItem
          href="/services/minimally-invasive-spine-surgery"
          title="Minimally Invasive Spine Surgery"
          description="Preserve stability and accelerate recovery with smaller incisions and advanced instrumentation."
        />
        <ServiceListItem
          href="/services/brain-tumor-surgery"
          title="Brain Tumor Surgery"
          description="Maximal safe resection of benign and malignant brain tumors using neuronavigation and neuromonitoring."
        />
        <ServiceListItem
          href="/services/epilepsy-surgery-evaluation"
          title="Epilepsy Surgery Evaluation"
          description="Comprehensive work‑up and surgical management for drug-resistant epilepsy."
        />
        <ServiceListItem
          href="/services/pediatric-neurosurgery"
          title="Pediatric Neurosurgery"
          description="Expert care for hydrocephalus, tumors and congenital anomalies in children."
        />
      </div>
      <div className="mt-8">
        <p className="text-gray-700">
          Unsure which service is right for you? Explore our list of{' '}
          <Link href="/conditions/disc-herniation" className="text-primary underline">
            conditions treated
          </Link>{' '}
          or{' '}
          <Link href="/contact" className="text-primary underline">
            book a consultation
          </Link>{' '}
          to discuss your case with Dr. Sayuj.
        </p>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}

function ServiceListItem({ href, title, description }: { href: string; title: string; description: string }) {
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