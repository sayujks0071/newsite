import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'For Doctors – Referrals and Collaborations',
  description: 'Refer your patients to NeuroHyderabad for advanced neurosurgical care or collaborate with us on complex cases.',
  alternates: {
    canonical: `${BASE_URL}/for-doctors/`,
  },
};

export default function ForDoctorsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold text-primary mb-4">For Doctors</h1>
      <p className="text-gray-700">
        We value collaborations with fellow physicians and welcome referrals for
        patients requiring advanced neurosurgical care. Our team works closely
        with referring doctors to ensure seamless communication and shared
        decision-making.
      </p>
      <p className="text-gray-700">
        To refer a patient, please contact us at{' '}
        <a href="tel:+919778280044" className="text-primary">+91‑9778280044</a>{' '}
        or email{' '}
        <a href="mailto:dr.sayujkrishnan@gmail.com" className="text-primary">
          dr.sayujkrishnan@gmail.com
        </a>. Include relevant clinical details and imaging where available.
      </p>
      <p className="text-gray-700">
        We strive to provide timely evaluations and will update you on your
        patient’s progress. Thank you for trusting us with your referrals.
      </p>
      <p className="text-gray-700">
        <Link href="/contact" className="text-primary underline">
          Book an appointment
        </Link>{' '}
        or visit our {' '}
        <Link href="/locations/hyderabad" className="text-primary underline">
          clinic
        </Link>
        for directions and hours.
      </p>
    </div>
  );
}