import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Code2,
  Home,
  GraduationCap,
  Search,
  Zap,
} from "lucide-react";

const categories = [
  {
    title: "College",
    description:
      "Calculators and planning tools for attendance, marks, grades and academic work.",
    href: "/college",
    icon: GraduationCap,
  },
  {
    title: "Technology",
    description:
      "Practical tools for developers, computers, laptops, internet and data.",
    href: "/technology",
    icon: Code2,
  },
  {
    title: "Home",
    description:
      "Useful calculators for electricity, construction and everyday household problems.",
    href: "/home",
    icon: Home,
  },
];

const popularTools = [
  {
    title: "Attendance Calculator",
    description: "Calculate your current attendance and target requirements.",
    href: "/college/attendance-calculator",
    category: "College",
  },
  {
    title: "SGPA Calculator",
    description: "Calculate your semester grade point average.",
    href: "/college/sgpa-calculator",
    category: "College",
  },
  {
    title: "CGPA Calculator",
    description: "Calculate your cumulative grade point average.",
    href: "/college/cgpa-calculator",
    category: "College",
  },
  {
    title: "PC Power Calculator",
    description: "Estimate computer power consumption and running cost.",
    href: "/technology/pc-power-calculator",
    category: "Technology",
  },
  {
    title: "Electricity Cost Calculator",
    description: "Estimate the electricity cost of appliances and devices.",
    href: "/home/electricity-cost-calculator",
    category: "Home",
  },
  {
    title: "Download Time Calculator",
    description: "Estimate how long a file will take to download.",
    href: "/technology/download-time-calculator",
    category: "Technology",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-gray-200 bg-white">
        <div className="container-shell py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600">
              <Zap size={14} />
              Free tools. No account required.
            </div>

            <h1 className="max-w-3xl text-4xl font-bold tracking-[-0.035em] text-gray-950 sm:text-5xl lg:text-6xl">
              Useful tools for real-world problems.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Essenc provides simple, fast and free online tools for students,
              developers and everyday tasks.
            </p>

            <div className="mt-8 flex max-w-2xl items-center border border-gray-300 bg-white shadow-sm transition-shadow focus-within:border-gray-500 focus-within:shadow-md">
              <Search
                className="ml-4 shrink-0 text-gray-400"
                size={20}
                strokeWidth={1.8}
              />

              <input
                type="search"
                placeholder="Search for a tool..."
                aria-label="Search for a tool"
                className="h-14 min-w-0 flex-1 bg-transparent px-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 sm:text-base"
              />

              <button
                type="button"
                className="mr-1 hidden h-12 bg-gray-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 sm:block"
              >
                Search
              </button>
            </div>

            <p className="mt-3 text-xs text-gray-500">
              Try: attendance, SGPA, electricity, PC power
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-gray-50">
        <div className="container-shell py-14 sm:py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Explore
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-950">
                Browse tools by category
              </h2>
            </div>

            <Link
              href="/tools"
              className="inline-flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-gray-950"
            >
              View all tools
              <ArrowRight size={16} />
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
                  <Icon
                    size={24}
                    strokeWidth={1.7}
                    className="text-gray-700"
                  />

                  <h3 className="mt-5 text-lg font-semibold text-gray-950">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {category.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
                    Explore
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-shell py-14 sm:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Popular
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-950">
              Frequently used tools
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
              Start with one of Essenc&apos;s most useful calculators and
              utilities.
            </p>
          </div>

          <div className="mt-8 grid border-t border-gray-200 sm:grid-cols-2 lg:grid-cols-3">
            {popularTools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group border-b border-gray-200 p-5 transition-colors hover:bg-gray-50 sm:border-r lg:nth-[3n]:border-r-0"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-gray-100 text-gray-700">
                    <Calculator size={19} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium text-gray-500">
                      {tool.category}
                    </p>

                    <h3 className="mt-1 font-semibold text-gray-950">
                      {tool.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-5 text-gray-600">
                      {tool.description}
                    </p>

                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-700">
                      Open tool
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50">
        <div className="container-shell py-14 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-950">
              Built to be simple.
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Essenc tools are designed to give you the answer you need
              without unnecessary sign-ups, complicated interfaces or
              distractions.
            </p>
          </div>

          <div className="mt-8 grid gap-6 border-t border-gray-200 pt-8 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-gray-950">Free to use</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Core tools remain accessible without creating an account.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-950">Fast by design</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Lightweight pages built to work well on phones and desktops.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-950">Made for real tasks</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Every tool is focused on solving a specific problem clearly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}