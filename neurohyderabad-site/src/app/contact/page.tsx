import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'Book an Appointment – NeuroHyderabad',
  description: 'Schedule a consultation with Dr. Sayuj Krishnan for brain and spine care in Hyderabad. Provide your details and we will get back to you.',
  alternates: {
    canonical: `${BASE_URL}/contact/`,
  },
};

/**
 * Appointment booking page. This form collects basic contact information and the
 * patient’s concern. No PHI is stored on the server; the form merely
 * demonstrates the required fields. For production, connect the action to
 * server logic or third‑party services via server actions.
 */
export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">Book an Appointment</h1>
      <p className="text-gray-700 mb-8">
        To schedule a consultation with Dr. Sayuj Krishnan, please fill out the form
        below. We will contact you to confirm your appointment and answer any
        questions you may have. Alternatively, you can call us at{' '}
        <a href="tel:+919778280044" className="text-primary">+91‑9778280044</a>{' '}
        or message us on{' '}
        <a href="https://wa.me/919778280044" className="text-primary" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>.
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            pattern="[0-9]{10,12}"
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address (optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="concern" className="block text-sm font-medium text-gray-700 mb-1">
            Concern
          </label>
          <select
            id="concern"
            name="concern"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="">Select a concern</option>
            <option value="spine">Spine problem</option>
            <option value="brain">Brain problem</option>
            <option value="epilepsy">Epilepsy</option>
            <option value="pediatric">Pediatric case</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Details (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="consent" name="consent" required className="h-4 w-4 rounded border-gray-300" />
          <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
            I consent to the storage and handling of my data for appointment
            scheduling.
          </label>
        </div>
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="rounded-md bg-primary text-white px-4 py-2"
          >
            Submit
          </button>
          <Link
            href="https://wa.me/919778280044"
            className="rounded-md border border-primary text-primary px-4 py-2"
          >
            WhatsApp
          </Link>
          <Link
            href="tel:+919778280044"
            className="rounded-md border border-primary text-primary px-4 py-2"
          >
            Call
          </Link>
        </div>
      </form>
    </div>
  );
}