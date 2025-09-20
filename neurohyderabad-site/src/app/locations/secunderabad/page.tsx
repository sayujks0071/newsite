import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'Neurosurgeon in Secunderabad – Clinic Location & Directions | NeuroHyderabad',
  description:
    'Information for patients from Secunderabad: clinic directions, address and hours for consulting Dr. Sayuj Krishnan.',
  alternates: {
    canonical: `${BASE_URL}/locations/secunderabad/`,
  },
};

export default function SecunderabadLocationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic',
        '@id': `${BASE_URL}/locations/secunderabad/#clinic`,
        name: 'NeuroHyderabad Brain & Spine Clinic – Secunderabad',
        url: `${BASE_URL}/locations/secunderabad/`,
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
            name: 'Secunderabad Clinic',
            item: `${BASE_URL}/locations/secunderabad/`,
          },
        ],
      },
    ],
  };
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Secunderabad Clinic</h1>
        <p className="text-gray-700">
          Patients from Secunderabad are welcome to visit our Malakpet clinic. Here
          are the address and hours. Please note travel time across the city.
        </p>
        <div className="space-y-2 text-gray-700 text-sm">
          <p>
            <strong>Address:</strong> Room 317, OPD Block, Yashoda Hospital,
            Malakpet, near New Market Metro Station, Hyderabad, Telangana, India
          </p>
          <p>
            <strong>Hours:</strong> Mon–Sat 09:00–18:00; Emergency via hospital
            24×7
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+919778280044" className="text-primary">+91‑9778280044</a>
          </p>
        </div>
        <div className="mt-6">
          <img
            src="/assets/map-placeholder.webp"
            alt="Stylised map of Hyderabad with clinic location pin"
            className="w-full h-auto rounded-md"
          />
        </div>
        <p className="text-gray-700">
          Serving patients from Secunderabad. Search “Yashoda Hospital Malakpet”
          on Google Maps for directions.
        </p>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}