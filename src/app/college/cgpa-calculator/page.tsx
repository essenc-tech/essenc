"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, RotateCcw, Trash2 } from "lucide-react";

import CalculatorResult from "@/components/calculators/calculator-result";
import Breadcrumbs from "@/components/tools/breadcrumbs";
import RelatedTools from "@/components/tools/related-tools";
import ToolStructuredData from "@/components/seo/tool-structured-data";

interface SemesterRow {
  id: number;
  semester: string;
  sgpa: string;
  credits: string;
}

const faqs = [
  {
    question: "What is CGPA?",
    answer:
      "CGPA stands for Cumulative Grade Point Average. It represents your overall academic performance across multiple semesters.",
  },
  {
    question: "What is the CGPA formula?",
    answer:
      "When semester credits are available, CGPA is calculated by multiplying each semester's SGPA by its credits, adding the results, and dividing by the total credits.",
  },
  {
    question: "Can I calculate CGPA from SGPA?",
    answer:
      "Yes. Enter the SGPA and total credits for each semester. The calculator calculates a credit-weighted cumulative GPA.",
  },
  {
    question: "Can I calculate CGPA without semester credits?",
    answer:
      "You can estimate CGPA by taking the average of your semester SGPAs, but this may not be the official university calculation when semesters have different credit totals.",
  },
  {
    question: "Is CGPA calculated out of 10?",
    answer:
      "Many Indian universities use a 10-point grading system, but grading systems vary between institutions.",
  },
];

const createSemester = (id: number): SemesterRow => ({
  id,
  semester: `Semester ${id}`,
  sgpa: "",
  credits: "",
});

export default function CGPACalculatorPage() {
  const [semesters, setSemesters] = useState<SemesterRow[]>([
    createSemester(1),
    createSemester(2),
  ]);

  const result = (() => {
    const completed = semesters.filter(
      (semester) =>
        semester.sgpa.trim() !== "" && semester.credits.trim() !== "",
    );

    if (completed.length === 0) {
      return null;
    }

    for (const semester of completed) {
      const sgpa = Number(semester.sgpa);
      const credits = Number(semester.credits);

      if (!Number.isFinite(sgpa) || sgpa < 0 || sgpa > 10) {
        return {
          error: "SGPA must be between 0 and 10.",
        };
      }

      if (!Number.isFinite(credits) || credits <= 0) {
        return {
          error: "Enter valid credits for every completed semester.",
        };
      }
    }

    let totalCredits = 0;
    let weightedPoints = 0;

    for (const semester of completed) {
      const sgpa = Number(semester.sgpa);
      const credits = Number(semester.credits);

      totalCredits += credits;
      weightedPoints += sgpa * credits;
    }

    if (totalCredits <= 0) {
      return null;
    }

    return {
      cgpa: weightedPoints / totalCredits,
      totalCredits,
      weightedPoints,
      completedSemesters: completed.length,
      totalSemesters: semesters.length,
    };
  })();

  const updateSemester = (
    id: number,
    field: keyof Omit<SemesterRow, "id">,
    value: string,
  ) => {
    setSemesters((current) =>
      current.map((semester) =>
        semester.id === id
          ? {
              ...semester,
              [field]: value,
            }
          : semester,
      ),
    );
  };

  const addSemester = () => {
    setSemesters((current) => {
      const nextId = Math.max(...current.map((semester) => semester.id), 0) + 1;

      return [...current, createSemester(nextId)];
    });
  };

  const removeSemester = (id: number) => {
    setSemesters((current) => {
      if (current.length <= 1) {
        return current;
      }

      return current.filter((semester) => semester.id !== id);
    });
  };

  const reset = () => {
    setSemesters([createSemester(1), createSemester(2)]);
  };

  const hasResult = result !== null && !("error" in result);

  return (
    <>
      <ToolStructuredData
        name="CGPA Calculator"
        description="Calculate cumulative GPA from semester SGPA and credits."
        url="https://essenc.tech/college/cgpa-calculator"
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
                label: "CGPA Calculator",
              },
            ]}
          />

          <div className="mt-7 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              College Calculator
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-950 sm:text-4xl">
              CGPA Calculator
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Calculate your cumulative grade point average using your semester
              SGPA and total semester credits.
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
                  Enter the SGPA and total credits for each completed semester.
                </p>
              </div>

              <div className="mt-7 overflow-x-auto border border-gray-200">
                <table className="w-full min-w-[650px] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 text-left">
                      <th className="px-4 py-3 font-semibold text-gray-700">
                        Semester
                      </th>

                      <th className="w-40 px-4 py-3 font-semibold text-gray-700">
                        SGPA
                      </th>

                      <th className="w-40 px-4 py-3 font-semibold text-gray-700">
                        Credits
                      </th>

                      <th className="w-24 px-4 py-3 text-right font-semibold text-gray-700">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {semesters.map((semester) => (
                      <tr
                        key={semester.id}
                        className="border-b border-gray-100 last:border-b-0"
                      >
                        <td className="px-4 py-3">
                          <input
                            type="text"
                            value={semester.semester}
                            onChange={(event) =>
                              updateSemester(
                                semester.id,
                                "semester",
                                event.target.value,
                              )
                            }
                            className="h-11 w-full border border-gray-300 bg-white px-3 text-sm outline-none focus:border-gray-700"
                          />
                        </td>

                        <td className="px-4 py-3">
                          <input
                            type="number"
                            inputMode="decimal"
                            min="0"
                            max="10"
                            step="0.01"
                            value={semester.sgpa}
                            onChange={(event) =>
                              updateSemester(
                                semester.id,
                                "sgpa",
                                event.target.value,
                              )
                            }
                            placeholder="8.50"
                            className="h-11 w-full border border-gray-300 bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                          />
                        </td>

                        <td className="px-4 py-3">
                          <input
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="0.5"
                            value={semester.credits}
                            onChange={(event) =>
                              updateSemester(
                                semester.id,
                                "credits",
                                event.target.value,
                              )
                            }
                            placeholder="24"
                            className="h-11 w-full border border-gray-300 bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                          />
                        </td>

                        <td className="px-4 py-3 text-right">
                          <button
                            type="button"
                            onClick={() => removeSemester(semester.id)}
                            disabled={semesters.length <= 1}
                            aria-label={`Remove ${semester.semester}`}
                            className="inline-flex h-10 w-10 items-center justify-center border border-gray-300 text-gray-600 transition-colors hover:border-red-300 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={addSemester}
                  className="inline-flex h-11 items-center justify-center gap-2 bg-gray-950 px-5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  <Plus size={16} />
                  Add semester
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

              {result && "error" in result && (
                <div
                  role="alert"
                  className="mt-8 border border-red-200 bg-red-50 p-4 text-sm text-red-800"
                >
                  {result.error}
                </div>
              )}

              {hasResult && (
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <CalculatorResult
                    label="Your CGPA"
                    value={result.cgpa.toFixed(2)}
                    description="Calculated using the credit-weighted SGPA of your completed semesters."
                  />

                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Total credits
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {result.totalCredits}
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Weighted points
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {result.weightedPoints.toFixed(2)}
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Semesters
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {result.completedSemesters}/{result.totalSemesters}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            <aside className="h-fit border border-gray-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-gray-950">
                CGPA guide
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
                <div>
                  <p className="font-medium text-gray-900">Enter SGPA</p>

                  <p className="mt-1">
                    Enter the SGPA earned in each completed semester.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-medium text-gray-900">Add credits</p>

                  <p className="mt-1">
                    Enter the total academic credits for each semester for a
                    weighted result.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-medium text-gray-900">
                    Check university rules
                  </p>

                  <p className="mt-1">
                    Universities may use different methods for official CGPA
                    calculation.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <article className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-950">
              What is CGPA?
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              CGPA stands for Cumulative Grade Point Average. It is used to
              represent your overall academic performance across multiple
              semesters.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Unlike SGPA, which represents one semester, CGPA combines results
              from several semesters.
            </p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              CGPA formula
            </h2>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                CGPA = Σ(SGPA × Semester Credits) ÷ Σ(Semester Credits)
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              CGPA calculation example
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Suppose a student has completed three semesters:
            </p>

            <div className="mt-5 overflow-x-auto border border-gray-200 bg-white">
              <table className="w-full min-w-[500px] text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold">Semester</th>

                    <th className="px-4 py-3 font-semibold">SGPA</th>

                    <th className="px-4 py-3 font-semibold">Credits</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Semester 1</td>

                    <td className="px-4 py-3">8.00</td>

                    <td className="px-4 py-3">20</td>
                  </tr>

                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Semester 2</td>

                    <td className="px-4 py-3">8.50</td>

                    <td className="px-4 py-3">22</td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3">Semester 3</td>

                    <td className="px-4 py-3">9.00</td>

                    <td className="px-4 py-3">24</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                CGPA = ((8 × 20) + (8.5 × 22) + (9 × 24)) ÷ 66
              </p>

              <p className="mt-2 font-mono text-sm leading-7 text-gray-900">
                CGPA = 561 ÷ 66 = 8.50
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              CGPA vs SGPA
            </h2>

            <div className="mt-5 overflow-x-auto border border-gray-200 bg-white">
              <table className="w-full min-w-[500px] text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold">SGPA</th>

                    <th className="px-4 py-3 font-semibold">CGPA</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Measures one semester</td>

                    <td className="px-4 py-3">Measures multiple semesters</td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3">Semester performance</td>

                    <td className="px-4 py-3">Overall academic performance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Frequently asked questions
            </h2>

            <div className="mt-5 divide-y divide-gray-200 border-y border-gray-200">
              {faqs.map((faq) => (
                <details key={faq.question} className="py-5">
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
                "/college/attendance-calculator",
                "/college/75-percent-attendance-calculator",
                "/college/sgpa-calculator",
                "/college/marks-percentage-calculator",
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
