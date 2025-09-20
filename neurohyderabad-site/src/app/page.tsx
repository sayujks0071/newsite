import type { Metadata } from 'next';
import Link from 'next/link';

// Base URL for constructing absolute canonical URLs. Falls back to neurohyderabad.org.
const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

// Page metadata defines unique title, description, canonical and social tags.
export const metadata: Metadata = {
  title: 'Best Neurosurgeon in Hyderabad | Brain & Spine Care',
  description:
    'Endoscopic/minimally invasive brain & spine surgery at Yashoda Hospital, Malakpet, Hyderabad. Neuronavigation & neuromonitoring. Book: +91‑9778280044',
  alternates: {
    canonical: `${BASE_URL}/`,
  },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/`,
    title: 'Best Neurosurgeon in Hyderabad | Brain & Spine Care',
    description:
      'Endoscopic/minimally invasive brain & spine surgery at Yashoda Hospital, Malakpet, Hyderabad. Neuronavigation & neuromonitoring.',
    images: [
      {
        url: `${BASE_URL}/assets/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: 'NeuroHyderabad Brain & Spine Clinic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Neurosurgeon in Hyderabad | Brain & Spine Care',
    description:
      'Endoscopic/minimally invasive brain & spine surgery at Yashoda Hospital, Malakpet, Hyderabad.',
    images: [`${BASE_URL}/assets/og-default.jpg`],
  },
};

/**
 * The homepage presents a comprehensive overview of the clinic and its services. It
 * is entirely server‑rendered to ensure the full HTML is available to search
 * engines, with structured data inlined for SEO. The content is organised into
 * distinct sections: hero, why choose, featured services, conditions, outcomes,
 * locations, referrals, FAQs, latest insights, and a final call‑to‑action.
 */
export default function HomePage() {
  // Schema definition for structured data. This must be inlined in a single
  // script tag to comply with Google’s best practices. We construct it here
  // within the component so that environment variables are available.
  const base = BASE_URL;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${base}/#organization`,
        name: 'NeuroHyderabad',
        url: `${base}/`,
        logo: {
          '@type': 'ImageObject',
          url: `${base}/assets/og-default.jpg`,
        },
        sameAs: [
          'https://www.instagram.com/TheSpineDoc/',
          'https://www.youtube.com/@drsayujneurohyd',
          'https://in.linkedin.com/in/dr-sayuj-krishnan-s-275baa66',
          'https://x.com/drsayuj',
          'https://www.facebook.com/drsayuj/',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'appointment',
          telephone: '+91-9778280044',
          areaServed: 'IN',
        },
        availableLanguage: ['en', 'hi', 'te'],
      },
      {
        '@type': 'Person',
        '@id': `${base}/#physician`,
        name: 'Dr. Sayuj Krishnan',
        jobTitle: 'Consultant Neurosurgeon & Spine Surgeon',
        worksFor: { '@id': `${base}/#organization` },
        medicalSpecialty: [
          'Neurosurgery',
          'SpineSurgery',
          'MinimallyInvasiveNeurosurgery',
          'PediatricNeurosurgery',
          'EpilepsySurgery',
        ],
        affiliation: {
          '@type': 'Hospital',
          name: 'Yashoda Hospital, Malakpet',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            'Room 317, OPD Block, Yashoda Hospital, Malakpet, near New Market Metro Station',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500036',
          addressCountry: 'IN',
        },
        telephone: '+91-9778280044',
      },
      {
        '@type': 'MedicalClinic',
        '@id': `${base}/#clinic`,
        name: 'NeuroHyderabad Brain & Spine Clinic',
        url: `${base}/`,
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            'Room 317, OPD Block, Yashoda Hospital, Malakpet, near New Market Metro Station',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500036',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 17.374958,
          longitude: 78.500239,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            opens: '09:00',
            closes: '18:00',
          },
        ],
        areaServed: ['Hyderabad', 'Secunderabad'],
        priceRange: '$$$',
        telephone: '+91-9778280044',
        sameAs: [
          'https://www.instagram.com/TheSpineDoc/',
          'https://www.youtube.com/@drsayujneurohyd',
          'https://in.linkedin.com/in/dr-sayuj-krishnan-s-275baa66',
          'https://x.com/drsayuj',
          'https://www.facebook.com/drsayuj/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${base}/#website`,
        url: `${base}/`,
        name: 'NeuroHyderabad',
        publisher: { '@id': `${base}/#organization` },
        inLanguage: 'en',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${base}/?s={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${base}/`,
        url: `${base}/`,
        name: 'Best Neurosurgeon in Hyderabad for Brain & Spine Care',
        isPartOf: { '@id': `${base}/#website` },
        about: { '@id': `${base}/#organization` },
        description:
          'Endoscopic and minimally invasive brain & spine surgery at Yashoda Hospital, Malakpet, Hyderabad. Neuronavigation & neuromonitoring.',
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${base}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${base}/`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${base}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is full endoscopic spine surgery safe?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes—when performed by an experienced surgeon for the right indication. Safety comes from careful selection, precise technique, and hospital systems that support rapid recovery.',
            },
          },
          {
            '@type': 'Question',
            name: 'When is awake brain surgery recommended?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'When a tumor lies near speech or motor pathways, awake mapping helps protect function while enabling maximal safe resection.',
            },
          },
          {
            '@type': 'Question',
            name: 'How soon can I return to work after minimally invasive spine surgery?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most desk workers can return within 7–14 days; individual recovery varies based on procedure and patient factors.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you accept insurance/TPA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, we work with major insurance providers. Pre-authorization is recommended to ensure coverage.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are red‑flag symptoms needing urgent care?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Symptoms like sudden weakness, loss of bladder/bowel control, severe headaches, or seizures require immediate evaluation.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <div className="space-y-16">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-4">
                Best Neurosurgeon in Hyderabad for Brain & Spine Care
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Advanced endoscopic and minimally invasive brain & spine surgery with neuronavigation and neuromonitoring. Evidence‑based care focused on preserving function and accelerating safe recovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="rounded-md bg-primary text-white px-5 py-3 text-center"
                >
                  Book Appointment
                </Link>
                <Link
                  href="https://wa.me/919778280044"
                  className="rounded-md border border-primary text-primary px-5 py-3 text-center"
                >
                  WhatsApp
                </Link>
                <Link
                  href="tel:+919778280044"
                  className="rounded-md border border-primary text-primary px-5 py-3 text-center"
                >
                  Call
                </Link>
              </div>
              <ul className="mt-6 space-y-1 text-gray-700 text-sm">
                <li>• Fellowship‑trained minimally invasive & endoscopic neurosurgery</li>
                <li>• Multidisciplinary tumor board and enhanced recovery pathways</li>
                <li>• Insurance/TPA support and transparent pricing</li>
              </ul>
            </div>
            <div className="flex justify-center items-start">
              <img
                src="/assets/hero.webp"
                alt="Abstract illustration of brain and spine"
                className="w-full h-auto rounded-xl shadow-lg object-cover"
                loading="eager"
                // @ts-ignore fetchpriority is allowed on <img>
                fetchpriority="high"
                width={600}
                height={400}
              />
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Why Choose Dr. Sayuj
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Expertise:</strong> MBBS, DNB Neurosurgery (Direct 6 years); Fellowship in
                Minimally Invasive & Advanced Spine Surgery; Observership in Full Endoscopic Spine Surgery (Germany).
              </li>
              <li>
                <strong>Approach:</strong> Maximal safe resection/decompression; shared decision‑making;
                evidence‑based protocols; multidisciplinary tumor board involvement.
              </li>
              <li>
                <strong>Experience:</strong> Extensive experience with endoscopic and minimally invasive
                techniques, neuronavigation, neuromonitoring, and pediatric neurosurgery.
              </li>
            </ul>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Featured Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                href="/services/endoscopic-spine-surgery"
                title="Endoscopic Spine Surgery in Hyderabad"
                description="Tiny incision, quick recovery. Indications, benefits, recovery, FAQs."
              />
              <ServiceCard
                href="/services/minimally-invasive-spine-surgery"
                title="Minimally Invasive Spine Surgery"
                description="Preserve stability and accelerate recovery with smaller incisions."
              />
              <ServiceCard
                href="/services/brain-tumor-surgery"
                title="Brain Tumor Surgery"
                description="Maximal safe tumor resection using neuronavigation & neuromonitoring."
              />
              <ServiceCard
                href="/services/epilepsy-surgery-evaluation"
                title="Epilepsy Surgery Evaluation"
                description="Comprehensive evaluation and surgical management of drug-resistant epilepsy."
              />
              <ServiceCard
                href="/services/pediatric-neurosurgery"
                title="Pediatric Neurosurgery"
                description="Hydrocephalus, tumors, congenital anomalies with compassionate care."
              />
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Conditions Treated
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ConditionCard href="/conditions/disc-herniation" title="Disc Herniation" />
              <ConditionCard href="/conditions/spinal-stenosis" title="Spinal Stenosis" />
              <ConditionCard href="/conditions/trigeminal-neuralgia" title="Trigeminal Neuralgia" />
              <ConditionCard href="/conditions/brain-tumors" title="Brain Tumors" />
              <ConditionCard href="/conditions/pituitary-tumors" title="Pituitary Tumors" />
              <ConditionCard href="/conditions/hydrocephalus" title="Hydrocephalus" />
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Outcomes &amp; Patient Stories
            </h2>
            <p className="text-gray-700 mb-4">
              The following vignettes illustrate how advanced neurosurgical techniques
              improve outcomes. Individual results may vary, and no guarantees are
              made.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <StoryCard
                title="Day‑Care Endoscopic Discectomy"
                description="A young office worker with lumbar disc herniation returned to desk work within 10 days after a tiny incision endoscopic discectomy."
              />
              <StoryCard
                title="Awake Craniotomy Mapping"
                description="During awake brain surgery, language and movement were preserved while removing a complex tumor near speech areas."
              />
              <StoryCard
                title="Pediatric Hydrocephalus ETV"
                description="A child with hydrocephalus underwent endoscopic third ventriculostomy, avoiding permanent shunt placement."
              />
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Locations & Access
            </h2>
            <p className="text-gray-700 mb-4">
              Conveniently located at Yashoda Hospital, Malakpet. Serving patients
              across Hyderabad & Secunderabad.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <LocationCard href="/locations/hyderabad" title="Hyderabad" />
              <LocationCard href="/locations/malakpet" title="Malakpet" />
              <LocationCard href="/locations/secunderabad" title="Secunderabad" />
            </div>
            <div className="mt-6">
              {/* Replace this with an interactive map on the location page to avoid LCP impact */}
              <img
                src="/assets/map-placeholder.webp"
                alt="Stylised map of Hyderabad with clinic location pin"
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </section>

        {/* For Doctors */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              For Doctors
            </h2>
            <p className="text-gray-700 mb-4">
              We welcome referrals and collaborations. Our multidisciplinary approach
              ensures comprehensive evaluation and evidence-based care.
            </p>
            <Link href="/for-doctors" className="text-primary underline">
              Refer a patient
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              FAQs
            </h2>
            <div className="space-y-4">
              <FaqItem
                question="Is full endoscopic spine surgery safe?"
                answer="Yes—when performed by an experienced surgeon for the right indication. Safety comes from careful selection, precise technique, and hospital systems that support rapid recovery."
              />
              <FaqItem
                question="When is awake brain surgery recommended?"
                answer="When a tumor lies near speech or motor pathways, awake mapping helps protect function while enabling maximal safe resection."
              />
              <FaqItem
                question="How soon can I return to work after minimally invasive spine surgery?"
                answer="Most desk workers can return within 7–14 days; individual recovery varies based on procedure and patient factors."
              />
              <FaqItem
                question="Do you accept insurance/TPA?"
                answer="Yes, we work with major insurance providers. Pre-authorization is recommended to ensure coverage."
              />
              <FaqItem
                question="What are red‑flag symptoms needing urgent care?"
                answer="Symptoms like sudden weakness, loss of bladder/bowel control, severe headaches, or seizures require immediate evaluation."
              />
            </div>
          </div>
        </section>

        {/* Latest Insights */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Latest Insights
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <BlogCard
                href="/blog/full-endoscopic-spine-surgery-2025-guide"
                title="Full Endoscopic Spine Surgery — 2025 Guide"
                excerpt="Tiny incision, quick recovery: indications, outcomes, costs and insurance."
              />
              <BlogCard
                href="/blog/awake-brain-surgery-speakable"
                title="Awake Brain Surgery: How We Protect Speech & Movement"
                excerpt="Why awake mapping helps preserve language and motor function during surgery."
              />
              <BlogCard
                href="/blog/coming-soon"
                title="More Posts Coming Soon"
                excerpt="Stay tuned for our upcoming articles on neurosurgical advancements."
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Ready to Consult the Best Neurosurgeon in Hyderabad?
            </h2>
            <p className="mb-6">
              Bring your MRI/CT scans, medical records, and list of medications to your
              appointment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-white text-primary px-6 py-3 font-semibold"
              >
                Book Appointment
              </Link>
              <Link
                href="https://wa.me/919778280044"
                className="rounded-md border border-white text-white px-6 py-3"
              >
                WhatsApp
              </Link>
              <Link
                href="tel:+919778280044"
                className="rounded-md border border-white text-white px-6 py-3"
              >
                Call
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

// Reusable card components for the homepage
function ServiceCard({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link
      href={href}
      className="block rounded-lg border border-gray-200 p-4 hover:shadow-lg transition"
    >
      <h3 className="font-medium text-primary mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
      <span className="mt-2 inline-block text-sm text-primary underline">Learn more</span>
    </Link>
  );
}

function ConditionCard({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="block rounded-lg border border-gray-200 p-4 hover:shadow-lg transition"
    >
      <h3 className="font-medium text-primary mb-2">{title}</h3>
      <span className="inline-block text-sm text-primary underline">Learn more</span>
    </Link>
  );
}

function StoryCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="font-medium text-primary mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}

function LocationCard({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="block rounded-lg border border-gray-200 p-4 hover:shadow-lg transition"
    >
      <h3 className="font-medium text-primary mb-2">{title}</h3>
      <span className="inline-block text-sm text-primary underline">Get directions</span>
    </Link>
  );
}

function BlogCard({ href, title, excerpt }: { href: string; title: string; excerpt: string }) {
  return (
    <Link
      href={href}
      className="block rounded-lg border border-gray-200 p-4 hover:shadow-lg transition"
    >
      <h3 className="font-medium text-primary mb-2">{title}</h3>
      <p className="text-sm text-gray-700 mb-2">{excerpt}</p>
      <span className="inline-block text-sm text-primary underline">Read more</span>
    </Link>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="border border-gray-200 rounded-md p-4">
      <summary className="font-medium text-primary cursor-pointer">{question}</summary>
      <p className="mt-2 text-gray-700 text-sm">{answer}</p>
    </details>
  );
}