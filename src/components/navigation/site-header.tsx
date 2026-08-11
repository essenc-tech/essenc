"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";

const primaryNavigation = [
  {
    label: "College",
    items: [
      {
        title: "Attendance",
        description: "Attendance and class planning tools",
        href: "/college/attendance-calculator",
      },
      {
        title: "Academic",
        description: "SGPA, CGPA and academic calculators",
        href: "/college/sgpa-calculator",
      },
      {
        title: "Marks & Grades",
        description: "Calculate marks, percentages and grades",
        href: "/college/marks-percentage-calculator",
      },
    ],
  },
  {
    label: "Technology",
    items: [
      {
        title: "Developer",
        description: "Useful tools for developers",
        href: "/technology/json-formatter",
      },
      {
        title: "PC & Laptop",
        description: "Power, hardware and cost calculators",
        href: "/technology/pc-power-calculator",
      },
      {
        title: "Internet & Data",
        description: "Speed, download and data utilities",
        href: "/technology/download-time-calculator",
      },
    ],
  },
  {
    label: "Home",
    items: [
      {
        title: "Electricity",
        description: "Estimate appliance electricity costs",
        href: "/home/electricity-cost-calculator",
      },
      {
        title: "Construction",
        description: "Practical home and construction calculators",
        href: "/home/tile-calculator",
      },
      {
        title: "Everyday",
        description: "Useful calculators for daily problems",
        href: "/home",
      },
    ],
  },
];

const secondaryNavigation = [
  {
    label: "ALL TOOLS",
    href: "/tools",
  },
  {
    label: "POPULAR",
    href: "/popular",
  },
  {
    label: "COLLEGE",
    href: "/college",
  },
  {
    label: "TECHNOLOGY",
    href: "/technology",
  },
  {
    label: "HOME",
    href: "/home",
  },
  {
    label: "GUIDES",
    href: "/guides",
  },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-100 border-b border-gray-200 bg-white">
      {/* =====================================================
          MAIN HEADER
      ====================================================== */}
      <div className="container-shell">
        <div className="flex min-h-16 items-center gap-4 lg:gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Essenc home"
            onClick={closeMobileMenu}
          >
            <Image
              src="/essenc-logo.svg"
              alt="Essenc"
              width={112}
              height={32}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Primary Navigation */}
          <nav
            className="hidden h-16 items-center gap-1 lg:flex"
            aria-label="Primary navigation"
          >
            <Link
              href="/tools"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-950"
            >
              All Tools
            </Link>

            {primaryNavigation.map((section) => (
              <div
                key={section.label}
                className="group relative flex h-full items-center"
              >
                <button
                  type="button"
                  className="flex h-10 items-center gap-1 rounded-md px-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-950"
                  aria-haspopup="true"
                >
                  {section.label}

                  <ChevronDown
                    size={15}
                    strokeWidth={1.8}
                    className="transition-transform duration-150 group-hover:rotate-180"
                    aria-hidden="true"
                  />
                </button>

                {/* Desktop Dropdown */}
                <div className="pointer-events-none absolute left-1/2 top-full z-[110] w-[340px] -translate-x-1/2 translate-y-1 pt-1 opacity-0 transition-all duration-150 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="border border-gray-200 bg-white p-2 shadow-[0_12px_35px_rgba(15,23,42,0.12)]">
                    {section.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block rounded-md px-4 py-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="text-sm font-semibold text-gray-900">
                          {item.title}
                        </div>

                        <div className="mt-0.5 text-xs leading-5 text-gray-500">
                          {item.description}
                        </div>
                      </Link>
                    ))}

                    <div className="mt-1 border-t border-gray-100 pt-1">
                      <Link
                        href={`/${section.label.toLowerCase()}`}
                        className="block rounded-md px-4 py-2.5 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50"
                      >
                        View all {section.label} tools →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/guides"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-950"
            >
              Guides
            </Link>
          </nav>

          {/* Right Side */}
          <div className="ml-auto flex items-center gap-1.5">
            {/* Search */}
            <Link
              href="/search"
              className="hidden h-10 w-10 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-950 sm:flex"
              aria-label="Search Essenc"
            >
              <Search size={19} strokeWidth={1.8} aria-hidden="true" />
            </Link>

            {/* GitHub */}
            <a
              href="https://github.com/essenc-tech/essenc"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-950 md:block"
            >
              GitHub
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-md text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-950 lg:hidden"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? (
                <X size={21} strokeWidth={1.8} aria-hidden="true" />
              ) : (
                <Menu size={21} strokeWidth={1.8} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          SECONDARY DESKTOP NAVIGATION
      ====================================================== */}
      <div className="hidden border-t border-gray-100 lg:block">
        <div className="container-shell flex h-10 items-center gap-1 overflow-x-auto">
          {secondaryNavigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap px-3 text-xs font-semibold tracking-wide text-gray-600 transition-colors hover:text-gray-950"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-16 z-[90] overflow-hidden border-t border-gray-200 bg-white lg:hidden"
        >
          <nav
            className="container-shell h-full overflow-y-auto overscroll-contain py-3 pb-8"
            aria-label="Mobile navigation"
          >
            {/* All Tools */}
            <Link
              href="/tools"
              onClick={closeMobileMenu}
              className="block border-b border-gray-100 px-2 py-3.5 text-sm font-semibold text-gray-950"
            >
              All Tools
            </Link>

            {/* Categories */}
            {primaryNavigation.map((section) => (
              <div
                key={section.label}
                className="border-b border-gray-100 py-4"
              >
                <div className="px-2 pb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                  {section.label}
                </div>

                <div>
                  {section.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block rounded-md px-2 py-3 transition-colors hover:bg-gray-50 active:bg-gray-100"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        {item.title}
                      </div>

                      <div className="mt-0.5 text-xs leading-5 text-gray-500">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>

                <Link
                  href={`/${section.label.toLowerCase()}`}
                  onClick={closeMobileMenu}
                  className="mt-1 block px-2 py-2 text-sm font-semibold text-teal-700"
                >
                  View all {section.label} tools →
                </Link>
              </div>
            ))}

            {/* Guides */}
            <Link
              href="/guides"
              onClick={closeMobileMenu}
              className="block border-b border-gray-100 px-2 py-3.5 text-sm font-semibold text-gray-950"
            >
              Guides
            </Link>

            {/* Search */}
            <Link
              href="/search"
              onClick={closeMobileMenu}
              className="mt-4 flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
            >
              <Search size={17} strokeWidth={1.8} aria-hidden="true" />
              Search Essenc
            </Link>

            {/* GitHub */}
            <a
              href="https://github.com/essenc-tech/essenc"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="mt-2 block rounded-md px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              GitHub
            </a>

            {/* Mobile Category Shortcuts */}
            <div className="mt-5 border-t border-gray-100 pt-4">
              <div className="px-2 text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                Browse
              </div>

              <div className="mt-2 grid grid-cols-2 gap-1">
                {secondaryNavigation
                  .filter((item) => item.label !== "ALL TOOLS")
                  .map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="rounded-md px-2 py-2.5 text-xs font-semibold text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-950"
                    >
                      {item.label}
                    </Link>
                  ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
