import type { Metadata } from 'next';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'Privacy Policy – NeuroHyderabad',
  description: 'Learn how NeuroHyderabad collects, uses and protects your personal information.',
  alternates: {
    canonical: `${BASE_URL}/privacy/`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold text-primary mb-4">Privacy Policy</h1>
      <p className="text-gray-700">
        This privacy policy describes how we collect, use and protect your personal
        information when you visit our website or use our services. We respect
        your privacy and are committed to protecting your data.
      </p>
      <p className="text-gray-700">
        We collect only the information necessary to schedule appointments and
        respond to inquiries. We do not share your information with third
        parties except as required to provide our services or comply with the
        law.
      </p>
      <p className="text-gray-700">
        By using our website, you consent to the terms of this privacy policy.
        Please contact us if you have any questions about how your data is
        handled.
      </p>
    </div>
  );
}