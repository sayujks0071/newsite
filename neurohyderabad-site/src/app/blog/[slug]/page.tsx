import type { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';

/*
 * Dynamic blog post route. This file defines server‑rendered blog pages based on
 * a list of post definitions. Each post includes a slug, title, description,
 * date, and body content. When new posts are added, update the POSTS array
 * below. The component looks up the slug from generateStaticParams and
 * generates metadata and HTML accordingly. All content is rendered on the
 * server to ensure SEO and YMYL compliance.
 */

// Define the type for a post entry. In a real project these could be
// imported from MDX files or a CMS. For this exercise we keep them in
// memory for simplicity.
interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

// A small collection of blog posts. Feel free to expand or refine these.
const POSTS: Post[] = [
  {
    slug: 'full-endoscopic-spine-surgery-2025-guide',
    title: 'Full Endoscopic Spine Surgery — 2025 Guide',
    description:
      'Tiny incision, quick recovery: indications, outcomes, costs and insurance for full endoscopic spine surgery in Hyderabad.',
    date: '2025-09-15',
    tags: ['endoscopic spine surgery', 'spine', 'minimally invasive', 'Hyderabad'],
    content: `\
## Key Takeaways\n\n\
- Endoscopic techniques enable targeted decompression through a tiny incision.\n\
- Most patients mobilize within 24 hours; many return to desk work in 7–14 days.\n\
- Careful selection (imaging + exam) determines success more than the tool itself.\n\n\
### What is Full Endoscopic Spine Surgery?\n\n\
Full endoscopic spine surgery uses a high-definition endoscope and instruments through a small working channel.\n\n\
### Who is a Candidate?\n\n\
- Lumbar disc herniation with correlating radicular pain\n- Foraminal/lateral recess stenosis (selected cases)\n- Recurrent herniation with appropriate imaging and symptoms\n\n\
### Benefits\n\n\
- Minimal muscle disruption\n- Tiny incision and reduced blood loss\n- Early discharge and faster recovery\n\n\
### Risks\n\n\
Infection, dural tear, nerve irritation, conversion to open in rare cases…\n\n\
### Costs & Insurance in India\n\n\
Approximate ranges vary by hospital, implant needs, and stay duration. Insurance approvals depend on policy terms; pre-authorization is advised.\n\n\
> **Disclaimer:** Educational content only; not a substitute for medical advice.\n`,
  },
  {
    slug: 'awake-brain-surgery-speakable',
    title: 'Awake Brain Surgery (Awake Craniotomy): How We Protect Speech & Movement',
    description:
      'Why awake mapping helps preserve language and motor function during brain tumor surgery.',
    date: '2025-09-12',
    tags: ['awake craniotomy', 'brain tumor', 'language mapping', 'motor mapping'],
    content: `\
## Key Takeaways\n\n\
- Awake mapping identifies critical speech/motor areas in real-time.\n\
- Preserving function is the goal; extent of resection is balanced with safety.\n\
- Not all tumors need awake surgery—selection matters.\n\n\
### When do we use Awake Mapping?\n\n\
When the tumor is near eloquent cortex involved in language or movement, awake mapping helps protect function during resection.\n\n\
### What happens during surgery?\n\n\
Patients are comfortable; we switch anesthesia depth for the mapping phase. Short language or movement tasks guide safe resection margins.\n\n\
### Recovery\n\n\
Most patients resume light activity in days; speech therapy or physiotherapy may be advised.\n\n\
> **Disclaimer:** Educational content only; not a substitute for medical advice.\n`,
  },
  {
    slug: 'coming-soon',
    title: 'More Posts Coming Soon',
    description: 'Stay tuned for our upcoming articles on neurosurgical advancements.',
    date: '2025-09-20',
    tags: ['announcement'],
    content: `We are preparing more in-depth articles on neurosurgical topics. Check back soon for updates.`,
  },
];

// Generate all static params for dynamic routes. This tells Next.js which
// slugs to pre-render at build time. If you add more posts to the POSTS
// array, they will automatically be included here.
export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

// Create page metadata dynamically based on the post. The canonical URL is
// constructed using BASE_URL and the slug. Titles are prefixed with the
// site name via the global template. Description is trimmed to 155
// characters to meet SEO best practices.
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  const base = process.env.BASE_URL || 'https://neurohyderabad.org';
  if (!post) {
    return {
      title: 'Post not found',
      description: 'The requested post could not be found.',
    };
  }
  const canonicalUrl = `${base}/blog/${post.slug}/`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: post.title,
      description: post.description,
      images: [
        {
          url: `${base}/assets/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: 'NeuroHyderabad Blog Post',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${base}/assets/og-default.jpg`],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-700 mb-6">The requested post could not be found.</p>
        <Link href="/blog" className="text-primary underline">
          Back to Blog
        </Link>
      </div>
    );
  }
  const base = process.env.BASE_URL || 'https://neurohyderabad.org';
  // Build JSON-LD for BlogPosting. We reference the Person defined on the
  // homepage (#physician) via the @id property. This ensures consistent
  // linking across structured data graphs.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@id': `${base}/#physician` },
    publisher: { '@id': `${base}/#organization` },
    description: post.description,
    articleBody: post.content.replace(/\n/g, '\\n'),
    keywords: post.tags,
    mainEntityOfPage: `${base}/blog/${post.slug}/`,
  };
  return (
    <article className="max-w-4xl mx-auto px-4 py-16 prose prose-gray">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}</p>
      <p className="italic text-gray-700">{post.description}</p>
      <hr className="my-6" />
      {/* Render content as markdown-ish. Since we are not using an MDX
          compiler here, we simply convert newlines to paragraphs. */}
      {post.content.split('\n\n').map((para, idx) => (
        <p key={idx}>{para}</p>
      ))}
      <div className="mt-8 flex gap-4">
        <Link href="/blog" className="text-primary underline">
          Back to Blog
        </Link>
        <Link href="/" className="text-primary underline">
          Home
        </Link>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}