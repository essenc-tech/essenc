"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Calculator,
  Code2,
  GraduationCap,
  Home,
  Search,
  Zap,
} from "lucide-react";

const categories = [
  {
    title: "College",
    description:
      "Calculators for attendance, marks, grades, GPA and everyday academic work.",
    href: "/college",
    icon: GraduationCap,
    count: "14+ tools",
  },
  {
    title: "Technology",
    description:
      "Practical utilities for developers, computers, internet and technical tasks.",
    href: "/technology",
    icon: Code2,
    count: "Coming soon",
  },
  {
    title: "Home",
    description:
      "Useful calculators for electricity, construction and everyday household tasks.",
    href: "/home",
    icon: Home,
    count: "Coming soon",
  },
];

const popularTools = [
  {
    title: "Attendance Calculator",
    description:
      "Calculate your current attendance and find how many classes you need to attend to reach your target.",
    href: "/college/attendance-calculator",
    category: "College",
  },
  {
    title: "75% Attendance Calculator",
    description:
      "Find out how many classes you can miss or need to attend while maintaining 75% attendance.",
    href: "/college/75-percent-attendance-calculator",
    category: "College",
  },
  {
    title: "SGPA Calculator",
    description:
      "Calculate your semester grade point average using credits and grade points.",
    href: "/college/sgpa-calculator",
    category: "College",
  },
  {
    title: "CGPA Calculator",
    description:
      "Calculate your cumulative grade point average across multiple semesters.",
    href: "/college/cgpa-calculator",
    category: "College",
  },
  {
    title: "Marks Percentage Calculator",
    description:
      "Calculate your percentage from obtained marks and total marks across subjects.",
    href: "/college/marks-percentage-calculator",
    category: "College",
  },
  {
    title: "Required Marks Calculator",
    description:
      "Calculate the marks you need in your remaining exam to achieve your target percentage.",
    href: "/college/required-marks-calculator",
    category: "College",
  },
];

const popularSearches = [
  {
    label: "Attendance",
    href: "/college/attendance-calculator",
  },
  {
    label: "SGPA",
    href: "/college/sgpa-calculator",
  },
  {
    label: "CGPA",
    href: "/college/cgpa-calculator",
  },
  {
    label: "Percentage",
    href: "/college/marks-percentage-calculator",
  },
  {
    label: "Required Marks",
    href: "/college/required-marks-calculator",
  },
];

const searchPlaceholders = [
  "CGPA to Percentage",
  "Attendance Calculator",
  "Required Marks Calculator",
  "PC Power Calculator",
  "Electricity Cost Calculator",
  "JSON Formatter",
  "Download Time Calculator",
];

function AnimatedSearchPlaceholder() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeTimer = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((current) => (current + 1) % searchPlaceholders.length);
        setVisible(true);
      }, 350);
    }, 2600);

    return () => clearInterval(fadeTimer);
  }, []);

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 text-sm text-gray-400 transition-opacity duration-300 sm:text-base ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {searchPlaceholders[index]}
    </span>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="border-b border-gray-200 bg-white">
        <div className="container-shell">
          <div className="max-w-4xl py-16 sm:py-20 lg:py-24">
            <div className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600">
              <Zap
                size={13}
                strokeWidth={1.8}
                aria-hidden="true"
              />
              Free tools. No account required.
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-gray-950 sm:text-5xl lg:text-[60px]">
              Free online tools for everyday problems.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Essenc provides simple calculators and practical utilities for
              students, developers and everyday tasks. Get useful results
              without unnecessary sign-ups or complicated interfaces.
            </p>

            {/* Search */}
            <form
              action="/search"
              method="GET"
              className="mt-8 max-w-2xl"
            >
              <div className="flex min-h-14 border border-gray-300 bg-white shadow-sm transition-colors focus-within:border-gray-500">
                <Search
                  className="ml-4 shrink-0 self-center text-gray-400"
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <div className="relative min-w-0 flex-1">
  <AnimatedSearchPlaceholder />

  <input
    type="search"
    name="q"
    aria-label="Search for a tool"
    autoComplete="off"
    className="relative z-10 h-14 w-full bg-transparent px-3 text-sm text-gray-900 outline-none sm:text-base"
  />
</div>

                <button
                  type="submit"
                  className="my-1 mr-1 hidden bg-gray-950 px-6 text-sm font-semibold text-white transition-colors hover:bg-gray-800 sm:block"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Popular searches */}
            <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-gray-500">
              <span>Popular:</span>

              {popularSearches.map((item, index) => (
                <span key={item.href}>
                  <Link
                    href={item.href}
                    className="font-medium text-gray-600 underline-offset-4 hover:text-gray-950 hover:underline"
                  >
                    {item.label}
                  </Link>

                  {index < popularSearches.length - 1 && (
                    <span className="ml-2 text-gray-300">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY NAVIGATION
      ====================================================== */}
      <section
        className="border-b border-gray-200 bg-gray-50"
        aria-labelledby="categories-heading"
      >
        <div className="container-shell py-14 sm:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-teal-700">
                Categories
              </p>

              <h2
                id="categories-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl"
              >
                Find the right tool
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                Browse Essenc tools by the type of problem you need to solve.
              </p>
            </div>

            <Link
              href="/tools"
              className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-gray-700 transition-colors hover:text-gray-950"
            >
              Browse all tools
              <ArrowRight
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group border border-gray-200 bg-white p-6 transition-colors hover:border-gray-400"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center border border-gray-200 bg-gray-50 text-gray-700">
                      <Icon
                        size={22}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="text-xs font-medium text-gray-400">
                      {category.count}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-gray-950">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {category.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
                    Explore
                    <ArrowRight
                      size={15}
                      strokeWidth={1.8}
                      className="transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          POPULAR TOOLS
      ====================================================== */}
      <section
        className="bg-white"
        aria-labelledby="popular-heading"
      >
        <div className="container-shell py-14 sm:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-teal-700">
                Popular tools
              </p>

              <h2
                id="popular-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl"
              >
                Tools people use most
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                Start with some of Essenc&apos;s most useful student
                calculators.
              </p>
            </div>

            <Link
              href="/college"
              className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-gray-700 transition-colors hover:text-gray-950"
            >
              View college tools
              <ArrowRight
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="mt-8 grid border-l border-t border-gray-200 sm:grid-cols-2 lg:grid-cols-3">
            {popularTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group border-b border-r border-gray-200 bg-white p-5 transition-colors hover:bg-gray-50 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gray-200 bg-gray-50 text-gray-700">
                    <Calculator
                      size={18}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium text-gray-500">
                      {tool.category}
                    </p>

                    <h3 className="mt-1 text-base font-semibold text-gray-950">
                      {tool.title}
                    </h3>

                    <p className="mt-2 text-sm leading-5 text-gray-600">
                      {tool.description}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-teal-700">
                      Open calculator
                      <ArrowRight
                        size={13}
                        strokeWidth={1.8}
                        className="transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY ESSENC
      ====================================================== */}
      <section
        className="border-t border-gray-200 bg-gray-50"
        aria-labelledby="about-essenc-heading"
      >
        <div className="container-shell py-14 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-teal-700">
              About Essenc
            </p>

            <h2
              id="about-essenc-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl"
            >
              Useful tools without the unnecessary stuff.
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              Essenc is built around a simple idea: when you need to calculate,
              convert or check something, the tool should be easy to find and
              straightforward to use.
            </p>
          </div>

          <div className="mt-10 grid border-t border-gray-200 sm:grid-cols-3">
            <div className="border-b border-gray-200 py-6 sm:border-b-0 sm:border-r sm:pr-8">
              <h3 className="text-sm font-semibold text-gray-950">
                Free to use
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Core tools are available without creating an account.
              </p>
            </div>

            <div className="border-b border-gray-200 py-6 sm:border-b-0 sm:px-8 sm:border-r">
              <h3 className="text-sm font-semibold text-gray-950">
                Simple by design
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Clear interfaces that focus on the task instead of
                unnecessary features.
              </p>
            </div>

            <div className="py-6 sm:pl-8">
              <h3 className="text-sm font-semibold text-gray-950">
                Works everywhere
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Responsive tools designed for phones, tablets and desktops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL DISCOVERY
      ====================================================== */}
      <section className="border-t border-gray-200 bg-white">
        <div className="container-shell py-12 sm:py-14">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-950">
                Looking for something specific?
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Browse the complete Essenc tool collection.
              </p>
            </div>

            <Link
              href="/tools"
              className="inline-flex w-fit items-center gap-2 border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:border-gray-400 hover:bg-gray-50"
            >
              Explore all tools
              <ArrowRight
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}