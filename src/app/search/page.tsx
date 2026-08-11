"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Search,
  Wrench,
  X,
} from "lucide-react";

import { tools, categoryInfo } from "@/lib/tools";

const popularSearches = [
  "attendance",
  "SGPA",
  "CGPA",
  "percentage",
  "marks",
  "JSON",
  "electricity",
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const params =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;

  const initialQuery = params?.get("q") ?? "";

  const [searchValue, setSearchValue] = useState(initialQuery);

  const normalizedQuery = searchValue.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }

    return tools
      .filter((tool) => {
        const searchableText = [
          tool.title,
          tool.description,
          tool.category,
          ...tool.keywords,
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(normalizedQuery);
      })
      .sort((a, b) => {
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();

        const aExact = aTitle === normalizedQuery;
        const bExact = bTitle === normalizedQuery;

        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;

        const aStarts = aTitle.startsWith(normalizedQuery);
        const bStarts = bTitle.startsWith(normalizedQuery);

        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;

        return a.title.localeCompare(b.title);
      });
  }, [normalizedQuery]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = searchValue.trim();

    if (!trimmed) {
      window.history.replaceState({}, "", "/search");
      return;
    }

    window.history.replaceState(
      {},
      "",
      `/search?q=${encodeURIComponent(trimmed)}`
    );

    setQuery(trimmed);
  }

  function handleClear() {
    setSearchValue("");
    setQuery("");

    window.history.replaceState({}, "", "/search");
  }

  function handlePopularSearch(value: string) {
    setSearchValue(value);

    window.history.replaceState(
      {},
      "",
      `/search?q=${encodeURIComponent(value)}`
    );

    setQuery(value);
  }

  const activeQuery = query || initialQuery;
  const displayedQuery = activeQuery.trim();

  return (
    <main>
      {/* Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="container-shell py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-teal-700">
              Search Essenc
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-950 sm:text-4xl">
              Find a tool
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              Search calculators and utilities by name, category or keyword.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7"
              role="search"
            >
              <div className="flex min-h-14 border border-gray-300 bg-white shadow-sm transition-colors focus-within:border-gray-500">
                <Search
                  className="ml-4 shrink-0 self-center text-gray-400"
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <input
                  type="search"
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  placeholder="Search for a tool..."
                  aria-label="Search for a tool"
                  autoComplete="off"
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 sm:text-base"
                />

                {searchValue && (
                  <button
                    type="button"
                    onClick={handleClear}
                    aria-label="Clear search"
                    className="mr-1 flex h-12 w-10 shrink-0 items-center justify-center self-center text-gray-400 transition-colors hover:text-gray-900"
                  >
                    <X size={18} strokeWidth={1.8} />
                  </button>
                )}

                <button
                  type="submit"
                  className="my-1 mr-1 hidden bg-gray-950 px-6 text-sm font-semibold text-white transition-colors hover:bg-gray-800 sm:block"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-gray-500">
              <span>Popular searches:</span>

              {popularSearches.map((item, index) => (
                <span key={item}>
                  <button
                    type="button"
                    onClick={() => handlePopularSearch(item)}
                    className="font-medium text-gray-600 underline-offset-4 hover:text-gray-950 hover:underline"
                  >
                    {item}
                  </button>

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

      {/* Results */}
      <section className="bg-gray-50">
        <div className="container-shell py-10 sm:py-14">
          {!displayedQuery ? (
            <div className="border border-gray-200 bg-white px-6 py-12 text-center sm:px-10">
              <div className="mx-auto flex h-12 w-12 items-center justify-center border border-gray-200 bg-gray-50 text-gray-600">
                <Search size={21} strokeWidth={1.7} />
              </div>

              <h2 className="mt-5 text-lg font-semibold text-gray-950">
                Search Essenc tools
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-600">
                Enter a tool name, category or keyword above to find what you
                need.
              </p>
            </div>
          ) : results.length > 0 ? (
            <>
              <div className="flex flex-col gap-2 border-b border-gray-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-teal-700">
                    Search results
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-gray-950">
                    Results for &ldquo;{displayedQuery}&rdquo;
                  </h2>
                </div>

                <p className="text-sm text-gray-500">
                  {results.length}{" "}
                  {results.length === 1 ? "tool" : "tools"} found
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                {results.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="group border border-gray-200 bg-white p-5 transition-colors hover:border-gray-400 sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gray-200 bg-gray-50 text-gray-700">
                        <Wrench
                          size={18}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h3 className="text-base font-semibold text-gray-950">
                            {tool.title}
                          </h3>

                          <span className="text-xs font-medium text-gray-500">
                            {tool.category}
                          </span>

                          {tool.status === "coming-soon" && (
                            <span className="text-xs font-medium text-gray-400">
                              Coming soon
                            </span>
                          )}
                        </div>

                        <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
                          {tool.description}
                        </p>

                        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-700">
                          {tool.status === "available"
                            ? "Open tool"
                            : "View tool"}
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
            </>
          ) : (
            <div className="border border-gray-200 bg-white px-6 py-12 sm:px-10">
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-gray-500">
                  No results
                </p>

                <h2 className="mt-2 text-xl font-bold text-gray-950">
                  No tools found for &ldquo;{displayedQuery}&rdquo;
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Try a different search term, or browse the available tools
                  by category.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {popularSearches.slice(0, 5).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handlePopularSearch(item)}
                      className="border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-950"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Category links */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-gray-500">
                Browse by category
              </p>

              <h2 className="mt-2 text-lg font-semibold text-gray-950">
                Explore Essenc
              </h2>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {Object.entries(categoryInfo).map(
                ([category, information]) => {
                  const href =
                    category === "College"
                      ? "/college"
                      : category === "Technology"
                        ? "/technology"
                        : "/home";

                  return (
                    <Link
                      key={category}
                      href={href}
                      className="border border-gray-200 bg-white p-4 transition-colors hover:border-gray-400"
                    >
                      <h3 className="text-sm font-semibold text-gray-950">
                        {information.title}
                      </h3>

                      <p className="mt-1.5 text-xs leading-5 text-gray-600">
                        {information.description}
                      </p>

                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-700">
                        Browse
                        <ArrowRight
                          size={13}
                          strokeWidth={1.8}
                        />
                      </span>
                    </Link>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}