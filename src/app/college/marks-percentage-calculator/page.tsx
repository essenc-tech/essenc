"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  RotateCcw,
  Trash2,
} from "lucide-react";

import CalculatorResult from "@/components/calculators/calculator-result";
import Breadcrumbs from "@/components/tools/breadcrumbs";
import RelatedTools from "@/components/tools/related-tools";
import ToolStructuredData from "@/components/seo/tool-structured-data";

interface SubjectRow {
  id: number;
  name: string;
  obtained: string;
  total: string;
}

const faqs = [
  {
    question: "How do I calculate percentage from marks?",
    answer:
      "Add your obtained marks, add the maximum possible marks, and divide the obtained marks by the total marks. Multiply the result by 100 to get the percentage.",
  },
  {
    question: "What is the formula for calculating percentage?",
    answer:
      "Percentage = (Obtained Marks ÷ Total Marks) × 100.",
  },
  {
    question: "Can I calculate percentage for multiple subjects?",
    answer:
      "Yes. Add each subject with its obtained marks and maximum marks. The calculator automatically calculates the combined percentage.",
  },
  {
    question: "Can I calculate percentage when subjects have different maximum marks?",
    answer:
      "Yes. You can enter a different maximum mark for each subject. The calculator uses the combined obtained marks and combined maximum marks.",
  },
];

const createSubject = (id: number): SubjectRow => ({
  id,
  name: "",
  obtained: "",
  total: "",
});

export default function MarksPercentageCalculatorPage() {
  const [subjects, setSubjects] = useState<SubjectRow[]>([
    createSubject(1),
    createSubject(2),
    createSubject(3),
  ]);

  const result = (() => {
    const completed = subjects.filter(
      (subject) =>
        subject.obtained.trim() !== "" &&
        subject.total.trim() !== ""
    );

    if (completed.length === 0) {
      return null;
    }

    let obtainedMarks = 0;
    let totalMarks = 0;

    for (const subject of completed) {
      const obtained = Number(subject.obtained);
      const total = Number(subject.total);

      if (
        !Number.isFinite(obtained) ||
        !Number.isFinite(total)
      ) {
        return {
          error: "Enter valid marks for every completed subject.",
        };
      }

      if (total <= 0) {
        return {
          error: "Total marks must be greater than zero.",
        };
      }

      if (obtained < 0) {
        return {
          error: "Obtained marks cannot be negative.",
        };
      }

      if (obtained > total) {
        return {
          error:
            "Obtained marks cannot be greater than total marks.",
        };
      }

      obtainedMarks += obtained;
      totalMarks += total;
    }

    if (totalMarks <= 0) {
      return null;
    }

    return {
      percentage: (obtainedMarks / totalMarks) * 100,
      obtainedMarks,
      totalMarks,
      completedSubjects: completed.length,
      totalSubjects: subjects.length,
    };
  })();

  const updateSubject = (
    id: number,
    field: keyof Omit<SubjectRow, "id">,
    value: string
  ) => {
    setSubjects((current) =>
      current.map((subject) =>
        subject.id === id
          ? {
              ...subject,
              [field]: value,
            }
          : subject
      )
    );
  };

  const addSubject = () => {
    setSubjects((current) => {
      const nextId =
        Math.max(
          ...current.map((subject) => subject.id),
          0
        ) + 1;

      return [
        ...current,
        createSubject(nextId),
      ];
    });
  };

  const removeSubject = (id: number) => {
    setSubjects((current) => {
      if (current.length <= 1) {
        return current;
      }

      return current.filter(
        (subject) => subject.id !== id
      );
    });
  };

  const reset = () => {
    setSubjects([
      createSubject(1),
      createSubject(2),
      createSubject(3),
    ]);
  };

  const hasResult =
    result !== null &&
    !("error" in result);

  return (
    <>
      <ToolStructuredData
        name="Marks Percentage Calculator"
        description="Calculate percentage from obtained marks and total marks."
        url="https://essenc.tech/college/marks-percentage-calculator"
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
                label: "Marks Percentage Calculator",
              },
            ]}
          />

          <div className="mt-7 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              College Calculator
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-950 sm:text-4xl">
              Marks Percentage Calculator
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Calculate your percentage from obtained marks and total
              marks. Add multiple subjects to calculate your overall
              exam percentage.
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
                  Enter your marks
                </h2>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Enter obtained marks and maximum marks for each
                  subject.
                </p>
              </div>

              <div className="mt-7 overflow-x-auto border border-gray-200">
                <table className="w-full min-w-[700px] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 text-left">
                      <th className="px-4 py-3 font-semibold text-gray-700">
                        Subject
                      </th>

                      <th className="w-40 px-4 py-3 font-semibold text-gray-700">
                        Obtained Marks
                      </th>

                      <th className="w-40 px-4 py-3 font-semibold text-gray-700">
                        Total Marks
                      </th>

                      <th className="w-24 px-4 py-3 text-right font-semibold text-gray-700">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {subjects.map((subject) => (
                      <tr
                        key={subject.id}
                        className="border-b border-gray-100 last:border-b-0"
                      >
                        <td className="px-4 py-3">
                          <input
                            type="text"
                            value={subject.name}
                            onChange={(event) =>
                              updateSubject(
                                subject.id,
                                "name",
                                event.target.value
                              )
                            }
                            placeholder="e.g. Mathematics"
                            className="h-11 w-full border border-gray-300 bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                          />
                        </td>

                        <td className="px-4 py-3">
                          <input
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="0.01"
                            value={subject.obtained}
                            onChange={(event) =>
                              updateSubject(
                                subject.id,
                                "obtained",
                                event.target.value
                              )
                            }
                            placeholder="85"
                            className="h-11 w-full border border-gray-300 bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                          />
                        </td>

                        <td className="px-4 py-3">
                          <input
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="0.01"
                            value={subject.total}
                            onChange={(event) =>
                              updateSubject(
                                subject.id,
                                "total",
                                event.target.value
                              )
                            }
                            placeholder="100"
                            className="h-11 w-full border border-gray-300 bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                          />
                        </td>

                        <td className="px-4 py-3 text-right">
                          <button
                            type="button"
                            onClick={() =>
                              removeSubject(subject.id)
                            }
                            disabled={subjects.length <= 1}
                            aria-label={`Remove ${
                              subject.name || "subject"
                            }`}
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
                  onClick={addSubject}
                  className="inline-flex h-11 items-center justify-center gap-2 bg-gray-950 px-5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  <Plus size={16} />
                  Add subject
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
                    label="Your Percentage"
                    value={`${result.percentage.toFixed(2)}%`}
                    description="Calculated from the combined obtained marks and total marks."
                  />

                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Obtained marks
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {result.obtainedMarks}
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Total marks
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {result.totalMarks}
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Subjects
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {result.completedSubjects}/
                        {result.totalSubjects}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            <aside className="h-fit border border-gray-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-gray-950">
                Percentage guide
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
                <div>
                  <p className="font-medium text-gray-900">
                    Enter obtained marks
                  </p>

                  <p className="mt-1">
                    Enter the marks you received in each subject.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-medium text-gray-900">
                    Enter maximum marks
                  </p>

                  <p className="mt-1">
                    The maximum marks can be different for each subject.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-medium text-gray-900">
                    Automatic calculation
                  </p>

                  <p className="mt-1">
                    Your overall percentage updates automatically as you
                    enter your marks.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <article className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-950">
              How to calculate percentage from marks
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              To calculate your percentage, divide your obtained marks
              by the total possible marks and multiply the result by
              100.
            </p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Percentage formula
            </h2>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                Percentage = (Obtained Marks ÷ Total Marks) × 100
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Percentage calculation example
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Suppose you scored the following marks:
            </p>

            <div className="mt-5 overflow-x-auto border border-gray-200 bg-white">
              <table className="w-full min-w-[500px] text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold">
                      Subject
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      Obtained
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      Maximum
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">
                      Mathematics
                    </td>

                    <td className="px-4 py-3">
                      85
                    </td>

                    <td className="px-4 py-3">
                      100
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">
                      Physics
                    </td>

                    <td className="px-4 py-3">
                      78
                    </td>

                    <td className="px-4 py-3">
                      100
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3">
                      Chemistry
                    </td>

                    <td className="px-4 py-3">
                      92
                    </td>

                    <td className="px-4 py-3">
                      100
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                Obtained Marks = 85 + 78 + 92 = 255
              </p>

              <p className="mt-2 font-mono text-sm leading-7 text-gray-900">
                Total Marks = 100 + 100 + 100 = 300
              </p>

              <p className="mt-2 font-mono text-sm leading-7 text-gray-900">
                Percentage = (255 ÷ 300) × 100 = 85%
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Percentage vs marks
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Marks represent the points earned in an examination,
              while percentage expresses those marks as a proportion of
              the maximum possible marks.
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
                "/college/attendance-calculator",
                "/college/75-percent-attendance-calculator",
                "/college/sgpa-calculator",
                "/college/cgpa-calculator",
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