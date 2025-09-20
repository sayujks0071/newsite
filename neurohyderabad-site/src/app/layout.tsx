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