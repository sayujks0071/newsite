import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL || 'https://neurohyderabad.org';

export const metadata: Metadata = {
  title: 'Blog – Insights & Patient Guides | NeuroHyderabad',
  description:
    'Read our articles on neurosurgical advances, patient guides and more from Dr. Sayuj Krishnan.',
  alternates: {
    canonical: `${BASE_URL}/blog/`,
  },
};

// List of posts surfaced on the blog index. In a real application these would
// be generated from MDX files or a CMS. Each slug corresponds to a dynamic
// route under /blog/[slug].
const posts = [
  {
    slug: 'full-endoscopic-spine-surgery-2025-guide',
    title: 'Full Endoscopic Spine Surgery — 2025 Guide',
    excerpt:
      'Tiny incision, quick recovery: indications, outcomes, costs and insurance.',
  },
  {
    slug: 'awake-brain-surgery-speakable',
    title: 'Awake Brain Surgery: How We Protect Speech & Movement',
    excerpt:
      'Why awake mapping helps preserve language and motor function during surgery.',
  },
];

export default function BlogIndex() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">Blog</h1>
      <p className="text-gray-700 mb-8">
        Explore our articles on neurosurgical innovations, patient stories and
        helpful guides. All posts are medically reviewed for accuracy.
      </p>
      <div className="grid gap-6">
        {posts.map((p) => (
          <Link
            href={`/blog/${p.slug}`}
            key={p.slug}
            className="block border rounded-lg p-4 hover:shadow-md transition"
          >
            <h2 className="font-medium text-primary mb-2">{p.title}</h2>
            <p className="text-gray-700 text-sm">{p.excerpt}</p>
            <span className="text-primary underline text-sm">Read more</span>
          </Link>
        ))}
      </div>
    </div>
  );
}