import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  {
    label: "All Tools",
    href: "/tools",
  },
  {
    label: "College",
    href: "/college",
  },
  {
    label: "Technology",
    href: "/technology",
  },
  {
    label: "Home",
    href: "/home",
  },
];

const popularLinks = [
  {
    label: "Attendance Calculator",
    href: "/college/attendance-calculator",
  },
  {
    label: "75% Attendance Calculator",
    href: "/college/75-percent-attendance-calculator",
  },
  {
    label: "SGPA Calculator",
    href: "/college/sgpa-calculator",
  },
  {
    label: "CGPA Calculator",
    href: "/college/cgpa-calculator",
  },
  {
    label: "Marks Percentage Calculator",
    href: "/college/marks-percentage-calculator",
  },
];

const essencLinks = [
  {
    label: "Guides",
    href: "/guides",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Privacy",
    href: "/privacy",
  },
  {
    label: "Terms",
    href: "/terms",
  },
];

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-gray-50">
      <div className="container-shell">
        {/* Main Footer */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12 lg:py-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Essenc home"
            >
              <Image
                src="/essenc-logo.svg"
                alt="Essenc"
                width={112}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-gray-600">
              Free, practical online tools for students, developers and
              everyday problems. Simple tools, useful results and no account
              required.
            </p>

            <p className="mt-5 text-xs leading-5 text-gray-500">
              Built to make everyday calculations and technical tasks
              simpler.
            </p>

            <a
              href="https://github.com/essenc-tech/essenc"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-100 hover:text-gray-950"
            >
              View on GitHub
            </a>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-gray-950">
              Explore
            </h2>

            <nav
              className="mt-4 space-y-3"
              aria-label="Explore"
            >
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-600 transition-colors hover:text-gray-950"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Popular */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold text-gray-950">
              Popular Tools
            </h2>

            <nav
              className="mt-4 space-y-3"
              aria-label="Popular tools"
            >
              {popularLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm leading-5 text-gray-600 transition-colors hover:text-gray-950"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Essenc */}
          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-gray-950">
              Essenc
            </h2>

            <nav
              className="mt-4 space-y-3"
              aria-label="Essenc"
            >
              {essencLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-600 transition-colors hover:text-gray-950"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 border-t border-gray-200 py-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Essenc. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="transition-colors hover:text-gray-900"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-gray-900"
            >
              Terms
            </Link>

            <a
              href="https://github.com/essenc-tech/essenc"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-900"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}