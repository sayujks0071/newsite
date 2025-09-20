import Link from 'next/link';

/**
 * Global footer component. Displays clinic NAP, credentials, social links and
 * auxiliary navigation. The year is calculated at render time.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="max-w-7xl mx-auto grid gap-8 px-4 py-8 text-sm md:grid-cols-3">
        <div>
          <p className="font-semibold">Dr. Sayuj Krishnan – Consultant Neurosurgeon</p>
          <p>MBBS, DNB Neurosurgery (Direct 6 years)</p>
          <p>Fellowship in Minimally Invasive & Advanced Spine Surgery</p>
          <p>Observership in Full Endoscopic Spine Surgery (Germany)</p>
          <p className="mt-3">
            Room 317, OPD Block, Yashoda Hospital, Malakpet,<br />
            near New Market Metro Station, Hyderabad, Telangana, India
          </p>
          <p>Hours: Mon–Sat 09:00–18:00; Emergency via hospital 24×7</p>
          <p>Service Areas: Hyderabad & Secunderabad</p>
          <p>
            Phone:{' '}
            <a href="tel:+919778280044" className="text-primary">
              +91‑9778280044
            </a>
          </p>
          <p>
            Email:{' '}
            <a href="mailto:dr.sayujkrishnan@gmail.com" className="text-primary">
              dr.sayujkrishnan@gmail.com
            </a>
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Explore</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/conditions">Conditions</Link>
            </li>
            <li>
              <Link href="/locations">Locations</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/for-doctors">For Doctors</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Follow</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.instagram.com/TheSpineDoc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@drsayujneurohyd"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://in.linkedin.com/in/dr-sayuj-krishnan-s-275baa66"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/drsayuj"
                target="_blank"
                rel="noopener noreferrer"
              >
                X / Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/drsayuj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-gray-500">© {year} NeuroHyderabad</p>
        </div>
      </div>
    </footer>
  );
}