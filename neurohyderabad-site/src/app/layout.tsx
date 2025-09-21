import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Base metadata applied to every page unless overridden. Provides a fallback
// title and description. metadataBase is required for generating absolute
// OpenGraph URLs.
export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'https://neurohyderabad.org'),
  title: {
    default: 'NeuroHyderabad | Brain & Spine Care',
    template: '%s | NeuroHyderabad',
  },
  description:
    'Best Neurosurgeon in Hyderabad specialising in endoscopic and minimally invasive brain and spine surgery.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://neurohyderabad.org',
    siteName: 'NeuroHyderabad',
    images: [
      {
        url: '/assets/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'NeuroHyderabad - Brain & Spine Care'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/og-default.jpg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
