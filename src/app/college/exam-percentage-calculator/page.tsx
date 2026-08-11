"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, RotateCcw } from "lucide-react";

import CalculatorResult from "@/components/calculators/calculator-result";
import Breadcrumbs from "@/components/tools/breadcrumbs";
import RelatedTools from "@/components/tools/related-tools";
import ToolStructuredData from "@/components/seo/tool-structured-data";

const faqs = [
  {
    question: "How do I calculate exam percentage?",
    answer:
      "Divide the marks obtained by the total marks and multiply the result by 100. For example, if you score 420 out of 500, your percentage is 84%.",
  },
  {
    question: "What is the formula for calculating percentage?",
    answer:
      "The percentage formula is: Percentage = (Marks Obtained ÷ Total Marks) × 100.",
  },
  {
    question: "Can I calculate percentage for any total marks?",
    answer:
      "Yes. You can use this calculator for exams with any total marks, such as 100, 500, 600, 1000, or other totals.",
  },
  {
    question: "What percentage is 450 out of 500?",
    answer:
      "450 out of 500 is 90%.",
  },
];

export default function ExamPercentageCalculatorPage() {
  const [obtained, setObtained] = useState("");
  const [total, setTotal] = useState("");

  const obtainedMarks = Number(obtained);
  const totalMarks = Number(total);

  const valid =
    obtained !== "" &&
    total !== "" &&
    Number.isFinite(obtainedMarks) &&
    Number.isFinite(totalMarks) &&
    totalMarks > 0 &&
    obtainedMarks >= 0 &&
    obtainedMarks <= totalMarks;

  const percentage = valid
    ? (obtainedMarks / totalMarks) * 100
    : null;

  const reset = () => {
    setObtained("");
    setTotal("");
  };

  return (
    <>
      <ToolStructuredData
        name="Exam Percentage Calculator"
        description="Calculate exam percentage from marks obtained and total marks."
        url="https://essenc.tech/college/exam-percentage-calculator"
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
                label: "Exam Percentage Calculator",
              },
            ]}
          />

          <div className="mt-7 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              College Calculator
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-950 sm:text-4xl">
              Exam Percentage Calculator
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Calculate your exam percentage quickly using your marks
              obtained and the total marks.
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
                  Calculate your percentage
                </h2>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Enter your marks and the maximum marks for the exam.
                </p>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="marks-obtained"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Marks obtained
                  </label>

                  <input
                    id="marks-obtained"
                    type="number"
                    min="0"
                    step="any"
                    inputMode="decimal"
                    value={obtained}
                    onChange={(event) =>
                      setObtained(event.target.value)
                    }
                    placeholder="e.g. 420"
                    className="h-12 w-full border border-gray-300 bg-white px-4 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="total-marks"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Total marks
                  </label>

                  <input
                    id="total-marks"
                    type="number"
                    min="1"
                    step="any"
                    inputMode="decimal"
                    value={total}
                    onChange={(event) =>
                      setTotal(event.target.value)
                    }
                    placeholder="e.g. 500"
                    className="h-12 w-full border border-gray-300 bg-white px-4 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                  />
                </div>
              </div>

              {obtained !== "" &&
                total !== "" &&
                !valid && (
                  <div
                    role="alert"
                    className="mt-5 border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800"
                  >
                    Marks obtained must be greater than or equal to
                    zero and cannot be greater than the total marks.
                  </div>
                )}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex h-11 items-center justify-center gap-2 border border-gray-300 bg-white px-5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                >
                  <RotateCcw size={15} />
                  Reset
                </button>
              </div>

              {percentage !== null && (
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <CalculatorResult
                    label="Your Exam Percentage"
                    value={`${percentage.toFixed(2)}%`}
                    description="Your percentage is calculated from the marks obtained and total marks."
                  />

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Marks obtained
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {obtainedMarks}
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Total marks
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {totalMarks}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            <aside className="h-fit border border-gray-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-gray-950">
                Percentage formula
              </h2>

              <div className="mt-4 border border-gray-200 bg-gray-50 p-4">
                <p className="font-mono text-sm leading-7 text-gray-900">
                  Percentage =
                  <br />
                  (Marks Obtained ÷ Total Marks) × 100
                </p>
              </div>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                Enter your actual marks and maximum possible marks to
                get the percentage instantly.
              </p>
            </aside>
          </div>

          <article className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-950">
              How to calculate exam percentage
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              To calculate your exam percentage, divide the marks you
              obtained by the total possible marks and multiply the
              result by 100.
            </p>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                Percentage = (Marks Obtained ÷ Total Marks) × 100
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Example
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Suppose you scored 420 marks out of a total of 500 marks.
            </p>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                Percentage = (420 ÷ 500) × 100
              </p>

              <p className="mt-2 font-mono text-sm leading-7 text-gray-900">
                Percentage = 0.84 × 100
              </p>

              <p className="mt-2 font-mono text-sm font-semibold leading-7 text-gray-900">
                Percentage = 84%
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Common exam percentage calculations
            </h2>

            <div className="mt-5 overflow-x-auto border border-gray-200 bg-white">
              <table className="w-full min-w-[500px] text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold">
                      Marks
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      Total
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      Percentage
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["45", "50", "90%"],
                    ["80", "100", "80%"],
                    ["420", "500", "84%"],
                    ["540", "600", "90%"],
                    ["850", "1000", "85%"],
                  ].map(([marks, max, result]) => (
                    <tr
                      key={`${marks}-${max}`}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <td className="px-4 py-3">{marks}</td>
                      <td className="px-4 py-3">{max}</td>
                      <td className="px-4 py-3 font-semibold">
                        {result}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

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
                "/college/marks-percentage-calculator",
                "/college/required-marks-calculator",
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