"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, RotateCcw, Trash2 } from "lucide-react";

import CalculatorResult from "@/components/calculators/calculator-result";
import Breadcrumbs from "@/components/tools/breadcrumbs";
import RelatedTools from "@/components/tools/related-tools";
import ToolStructuredData from "@/components/seo/tool-structured-data";

interface Semester {
  id: number;
  sgpa: string;
  credits: string;
}

const faqs = [
  {
    question: "How is CGPA calculated from multiple SGPAs?",
    answer:
      "When semester credit information is available, CGPA can be calculated as the total of each semester's SGPA multiplied by its credits, divided by the total credits.",
  },
  {
    question: "Can I calculate CGPA without semester credits?",
    answer:
      "If every semester has the same number of credits, an average of the semester SGPAs can be used. When semester credits differ, a weighted calculation is more appropriate.",
  },
  {
    question: "What is the formula for weighted CGPA?",
    answer:
      "Weighted CGPA is calculated as the sum of (SGPA × semester credits) divided by the total semester credits.",
  },
  {
    question: "Is SGPA the same as CGPA?",
    answer:
      "No. SGPA represents performance for one semester, while CGPA represents cumulative academic performance across multiple semesters.",
  },
];

const createSemester = (id: number): Semester => ({
  id,
  sgpa: "",
  credits: "",
});

export default function SGPAToCGPAPage() {
  const [semesters, setSemesters] = useState<Semester[]>([
    createSemester(1),
    createSemester(2),
  ]);

  const result = useMemo(() => {
    const completed = semesters.filter((semester) => {
      const sgpa = Number(semester.sgpa);
      const credits = Number(semester.credits);

      return (
        semester.sgpa !== "" &&
        semester.credits !== "" &&
        Number.isFinite(sgpa) &&
        Number.isFinite(credits) &&
        sgpa >= 0 &&
        sgpa <= 10 &&
        credits > 0
      );
    });

    if (completed.length === 0) {
      return {
        cgpa: null,
        totalCredits: 0,
        totalPoints: 0,
      };
    }

    const totalPoints = completed.reduce(
      (sum, semester) =>
        sum +
        Number(semester.sgpa) * Number(semester.credits),
      0
    );

    const totalCredits = completed.reduce(
      (sum, semester) => sum + Number(semester.credits),
      0
    );

    return {
      cgpa: totalCredits > 0 ? totalPoints / totalCredits : null,
      totalCredits,
      totalPoints,
    };
  }, [semesters]);

  const updateSemester = (
    id: number,
    field: "sgpa" | "credits",
    value: string
  ) => {
    setSemesters((current) =>
      current.map((semester) =>
        semester.id === id
          ? {
              ...semester,
              [field]: value,
            }
          : semester
      )
    );
  };

  const addSemester = () => {
    const nextId =
      semesters.length > 0
        ? Math.max(...semesters.map((semester) => semester.id)) + 1
        : 1;

    setSemesters((current) => [
      ...current,
      createSemester(nextId),
    ]);
  };

  const removeSemester = (id: number) => {
    if (semesters.length <= 2) {
      return;
    }

    setSemesters((current) =>
      current.filter((semester) => semester.id !== id)
    );
  };

  const reset = () => {
    setSemesters([
      createSemester(1),
      createSemester(2),
    ]);
  };

  return (
    <>
      <ToolStructuredData
        name="SGPA to CGPA Calculator"
        description="Calculate cumulative CGPA from multiple semester SGPAs and credits."
        url="https://essenc.tech/college/sgpa-to-cgpa"
        category="EducationalApplication"
        faqs={faqs}
      />

      <section className="border-b border-gray-200 bg-white">
        <div className="container-shell py-6 sm:py-8">
          <Breadcrumbs
            items={[
              {
                label: "College",
                href: "/college",
              },
              {
                label: "SGPA to CGPA",
              },
            ]}
          />

          <div className="mt-7 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              College Calculator
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-950 sm:text-4xl">
              SGPA to CGPA Calculator
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Calculate your cumulative CGPA from multiple semester
              SGPAs using semester credits for a weighted calculation.
            </p>
          </div>
        </div>
      </section>

      <main className="bg-gray-50">
        <div className="container-shell py-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,760px)_300px]">
            <section className="border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
              <div>
                <h2 className="text-lg font-semibold text-gray-950">
                  Enter semester details
                </h2>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Enter the SGPA and total credits for each semester.
                </p>
              </div>

              <div className="mt-7 overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 text-left">
                      <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Semester
                      </th>

                      <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        SGPA
                      </th>

                      <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Credits
                      </th>

                      <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {semesters.map((semester, index) => {
                      const sgpa = Number(semester.sgpa);
                      const credits = Number(semester.credits);

                      const invalidSGPA =
                        semester.sgpa !== "" &&
                        (!Number.isFinite(sgpa) ||
                          sgpa < 0 ||
                          sgpa > 10);

                      const invalidCredits =
                        semester.credits !== "" &&
                        (!Number.isFinite(credits) ||
                          credits <= 0);

                      return (
                        <tr
                          key={semester.id}
                          className="border-b border-gray-100"
                        >
                          <td className="px-3 py-4 text-sm font-semibold text-gray-900">
                            Semester {index + 1}
                          </td>

                          <td className="px-3 py-4">
                            <input
                              type="number"
                              min="0"
                              max="10"
                              step="0.01"
                              inputMode="decimal"
                              value={semester.sgpa}
                              onChange={(event) =>
                                updateSemester(
                                  semester.id,
                                  "sgpa",
                                  event.target.value
                                )
                              }
                              placeholder="e.g. 8.2"
                              aria-label={`Semester ${
                                index + 1
                              } SGPA`}
                              className={`h-11 w-full border bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700 ${
                                invalidSGPA
                                  ? "border-red-400"
                                  : "border-gray-300"
                              }`}
                            />
                          </td>

                          <td className="px-3 py-4">
                            <input
                              type="number"
                              min="0.01"
                              step="0.01"
                              inputMode="decimal"
                              value={semester.credits}
                              onChange={(event) =>
                                updateSemester(
                                  semester.id,
                                  "credits",
                                  event.target.value
                                )
                              }
                              placeholder="e.g. 22"
                              aria-label={`Semester ${
                                index + 1
                              } credits`}
                              className={`h-11 w-full border bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700 ${
                                invalidCredits
                                  ? "border-red-400"
                                  : "border-gray-300"
                              }`}
                            />
                          </td>

                          <td className="px-3 py-4">
                            <button
                              type="button"
                              onClick={() =>
                                removeSemester(semester.id)
                              }
                              disabled={semesters.length <= 2}
                              aria-label={`Remove semester ${
                                index + 1
                              }`}
                              className="inline-flex h-10 w-10 items-center justify-center border border-gray-300 text-gray-600 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
                            >
                              <Trash2 size={15} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={addSemester}
                  className="inline-flex h-11 items-center justify-center gap-2 border border-gray-300 bg-white px-5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                >
                  <Plus size={16} />
                  Add Semester
                </button>

                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex h-11 items-center justify-center gap-2 border border-gray-300 bg-white px-5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                >
                  <RotateCcw size={15} />
                  Reset
                </button>
              </div>

              {result.cgpa !== null && (
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <CalculatorResult
                    label="Cumulative CGPA"
                    value={result.cgpa.toFixed(2)}
                    description="Weighted using the credits entered for each completed semester."
                  />

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Total Credits
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {result.totalCredits.toFixed(2)}
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Total Grade Points
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {result.totalPoints.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 border border-blue-200 bg-blue-50 p-4">
                <p className="text-sm font-semibold text-gray-900">
                  How the calculation works
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-700">
                  CGPA = Σ(SGPA × Semester Credits) ÷
                  Σ(Semester Credits)
                </p>
              </div>
            </section>

            <aside className="h-fit border border-gray-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-gray-950">
                CGPA formula
              </h2>

              <div className="mt-4 border border-gray-200 bg-gray-50 p-4">
                <p className="font-mono text-sm leading-7 text-gray-900">
                  CGPA =
                  <br />
                  Σ(SGPA × Credits)
                  <br />
                  ÷ Σ(Credits)
                </p>
              </div>

              <p className="mt-4 text-xs leading-5 text-gray-500">
                Using credits makes the calculation weighted, which
                is important when different semesters have different
                credit totals.
              </p>
            </aside>
          </div>

          <article className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-950">
              How to calculate CGPA from SGPA
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              SGPA represents your academic performance for an
              individual semester. CGPA represents your cumulative
              performance across multiple semesters.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              When semester credits are available, a weighted
              calculation gives each semester an appropriate influence
              based on its credit load.
            </p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              SGPA to CGPA formula
            </h2>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                CGPA = Σ(SGPA × Credits) ÷ Σ(Credits)
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Example calculation
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Suppose a student has the following semester results:
            </p>

            <div className="mt-5 overflow-x-auto border border-gray-200 bg-white">
              <table className="w-full min-w-[500px] text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold">
                      Semester
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      SGPA
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      Credits
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["1", "8.0", "20"],
                    ["2", "8.5", "22"],
                    ["3", "9.0", "24"],
                  ].map(([semester, sgpa, credits]) => (
                    <tr
                      key={semester}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <td className="px-4 py-3">
                        Semester {semester}
                      </td>

                      <td className="px-4 py-3">
                        {sgpa}
                      </td>

                      <td className="px-4 py-3">
                        {credits}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                CGPA = (8 × 20 + 8.5 × 22 + 9 × 24)
                ÷ (20 + 22 + 24)
              </p>

              <p className="mt-3 font-mono text-sm leading-7 text-gray-900">
                CGPA ≈ 8.52
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Can you calculate CGPA by simply averaging SGPAs?
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              A simple average can be used when all semesters have the
              same credit weight. If semester credits are different,
              however, a weighted calculation is more appropriate.
            </p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Frequently asked questions
            </h2>

            <div className="mt-5 divide-y divide-gray-200 border-y border-gray-200">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="py-5"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-gray-900">
                    {faq.question}
                  </summary>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

            <RelatedTools
              hrefs={[
                "/college/sgpa-calculator",
                "/college/cgpa-calculator",
                "/college/cgpa-to-percentage",
                "/college/percentage-to-cgpa",
              ]}
            />
          </article>

          <div className="mt-10">
            <Link
              href="/college"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-gray-950"
            >
              <ArrowLeft size={15} />
              Back to College tools
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}