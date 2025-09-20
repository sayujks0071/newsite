import Link from 'next/link';

/**
 * Custom 404 page. This component is rendered when a route cannot be
 * matched. It provides helpful links to get users back on track. The
 * rendering is server‑side to ensure the full HTML is delivered to the
 * crawler.
 */
export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">Page Not Found</h1>
      <p className="text-gray-700 mb-8">
        Sorry, the page you are looking for doesn’t exist. It may have been moved or
        deleted. Please use the links below to find what you are looking for.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <Link href="/" className="rounded-md bg-primary text-white px-5 py-3">
          Home
        </Link>
        <Link href="/services/endoscopic-spine-surgery" className="rounded-md border border-primary text-primary px-5 py-3">
          Endoscopic Spine Surgery
        </Link>
        <Link href="/blog" className="rounded-md border border-primary text-primary px-5 py-3">
          Blog
        </Link>
      </div>
      <p className="text-sm text-gray-600">If you believe this is an error, please contact us at <a href="tel:+919778280044" className="text-primary">+91‑9778280044</a>.</p>
    </div>
  );
}