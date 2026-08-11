"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  Menu,
  Search,
  X,
} from "lucide-react";

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
        description: "SGPA, CGPA and marks calculators",
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

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="container-shell">
        <div className="flex h-16 items-center gap-6">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Essenc home"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-[22px] font-extrabold tracking-[-0.04em] text-gray-950">
              ESSENC
            </span>
          </Link>

          <nav
            className="hidden h-full items-center gap-1 lg:flex"
            aria-label="Primary navigation"
          >
            <Link
              href="/tools"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-950"
            >
              All Tools
            </Link>

            {primaryNavigation.map((section) => (
              <div key={section.label} className="group relative h-full">
                <button
                  type="button"
                  className="flex h-full items-center gap-1 rounded-md px-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-950"
                  aria-haspopup="true"
                >
                  {section.label}
                  <ChevronDown
                    size={15}
                    strokeWidth={1.8}
                    className="transition-transform group-hover:rotate-180"
                  />
                </button>

                <div className="pointer-events-none absolute left-1/2 top-full w-[330px] -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-150 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="mt-1 border border-gray-200 bg-white p-2 shadow-[0_12px_35px_rgba(15,23,42,0.10)]">
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
                        className="block rounded-md px-4 py-2.5 text-sm font-semibold text-teal-700 hover:bg-teal-50"
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

          <div className="ml-auto flex items-center gap-2">
            <Link
              href="/search"
              className="hidden h-10 w-10 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-950 sm:flex"
              aria-label="Search Essenc"
            >
              <Search size={19} strokeWidth={1.8} />
            </Link>

            <a
              href="https://github.com/essenc-tech/essenc"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-950 md:block"
            >
              GitHub
            </a>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-md text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="container-shell hidden h-10 items-center gap-1 overflow-x-auto lg:flex">
          <Link
            href="/tools"
            className="whitespace-nowrap px-3 text-xs font-semibold text-gray-600 hover:text-gray-950"
          >
            ALL TOOLS
          </Link>
          <Link
            href="/popular"
            className="whitespace-nowrap px-3 text-xs font-semibold text-gray-600 hover:text-gray-950"
          >
            POPULAR
          </Link>
          <Link
            href="/college"
            className="whitespace-nowrap px-3 text-xs font-semibold text-gray-600 hover:text-gray-950"
          >
            COLLEGE
          </Link>
          <Link
            href="/technology"
            className="whitespace-nowrap px-3 text-xs font-semibold text-gray-600 hover:text-gray-950"
          >
            TECHNOLOGY
          </Link>
          <Link
            href="/home"
            className="whitespace-nowrap px-3 text-xs font-semibold text-gray-600 hover:text-gray-950"
          >
            HOME
          </Link>
          <Link
            href="/guides"
            className="whitespace-nowrap px-3 text-xs font-semibold text-gray-600 hover:text-gray-950"
          >
            GUIDES
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav
            className="container-shell max-h-[calc(100vh-105px)] overflow-y-auto py-4"
            aria-label="Mobile navigation"
          >
            <Link
              href="/tools"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-gray-100 px-2 py-3 text-sm font-semibold text-gray-900"
            >
              All Tools
            </Link>

            {primaryNavigation.map((section) => (
              <div key={section.label} className="border-b border-gray-100 py-3">
                <div className="px-2 pb-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                  {section.label}
                </div>

                <div>
                  {section.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-2 py-2.5 hover:bg-gray-50"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        {item.title}
                      </div>
                      <div className="mt-0.5 text-xs text-gray-500">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link
              href="/guides"
              onClick={() => setMobileOpen(false)}
              className="block px-2 py-3 text-sm font-semibold text-gray-900"
            >
              Guides
            </Link>

            <Link
              href="/search"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center gap-2 rounded-md bg-gray-50 px-3 py-3 text-sm font-medium text-gray-700"
            >
              <Search size={17} />
              Search Essenc
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}