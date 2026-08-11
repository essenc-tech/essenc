import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-gray-50">
      <div className="container-shell py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-extrabold tracking-[-0.04em] text-gray-950"
            >
              ESSENC
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-600">
              Free, practical online tools for students, developers and
              everyday problems. Simple tools, clear results and no account
              required.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-950">Explore</h2>

            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <Link className="block hover:text-gray-950" href="/college">
                College
              </Link>
              <Link className="block hover:text-gray-950" href="/technology">
                Technology
              </Link>
              <Link className="block hover:text-gray-950" href="/home">
                Home
              </Link>
              <Link className="block hover:text-gray-950" href="/guides">
                Guides
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-950">Essenc</h2>

            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <Link className="block hover:text-gray-950" href="/about">
                About
              </Link>
              <Link className="block hover:text-gray-950" href="/contact">
                Contact
              </Link>
              <Link className="block hover:text-gray-950" href="/privacy">
                Privacy
              </Link>
              <Link className="block hover:text-gray-950" href="/terms">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Essenc. All rights reserved.</p>

          <a
            href="https://github.com/essenc-tech/essenc"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900"
          >
            Open source on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}