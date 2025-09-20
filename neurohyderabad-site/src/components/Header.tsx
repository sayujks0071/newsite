import Link from 'next/link';

/**
 * Primary site header. Contains brand name, navigation links and call‑to‑action buttons.
 * The header is sticky and slightly translucent, improving readability over hero images.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-primary">
          NeuroHyderabad
        </Link>
        <nav className="hidden md:flex flex-wrap gap-6 text-sm">
          <Link href="/services" className="hover:text-primary">Services</Link>
          <Link href="/conditions" className="hover:text-primary">Conditions</Link>
          <Link href="/locations" className="hover:text-primary">Locations</Link>
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          <Link href="/for-doctors" className="hover:text-primary">For Doctors</Link>
        </nav>
        <div className="flex flex-wrap gap-2 mt-3 md:mt-0">
          <Link
            href="tel:+919778280044"
            className="hidden md:inline-block rounded-md bg-accent text-white px-4 py-2 text-sm"
          >
            Call
          </Link>
          <Link
            href="https://wa.me/919778280044"
            className="hidden md:inline-block rounded-md border border-accent text-accent px-4 py-2 text-sm"
          >
            WhatsApp
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-primary text-primary px-4 py-2 text-sm"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}