"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  RotateCcw,
} from "lucide-react";

import CalculatorResult from "@/components/calculators/calculator-result";
import Breadcrumbs from "@/components/tools/breadcrumbs";
import RelatedTools from "@/components/tools/related-tools";
import ToolStructuredData from "@/components/seo/tool-structured-data";

const faqs = [
  {
    question: "How do I calculate the marks needed for a target percentage?",
    answer:
      "Multiply your target percentage by the final total marks and divide by 100. Then subtract the marks you have already obtained.",
  },
  {
    question: "Can I use this calculator for an upcoming exam?",
    answer:
      "Yes. Enter your current obtained marks, current total marks, the marks available in the remaining exam, and your target percentage.",
  },
  {
    question: "What if the required marks are more than the remaining marks?",
    answer:
      "The calculator will tell you that the target percentage is not achievable with the available remaining marks.",
  },
  {
    question: "What if I have already achieved my target percentage?",
    answer:
      "The calculator will show that you need 0 additional marks because your current percentage already meets or exceeds your target.",
  },
];

export default function RequiredMarksCalculatorPage() {
  const [obtainedMarks, setObtainedMarks] = useState("");
  const [currentTotalMarks, setCurrentTotalMarks] =
    useState("");
  const [remainingMarks, setRemainingMarks] =
    useState("");
  const [targetPercentage, setTargetPercentage] =
    useState("");

  const result = (() => {
    if (
      obtainedMarks.trim() === "" ||
      currentTotalMarks.trim() === "" ||
      remainingMarks.trim() === "" ||
      targetPercentage.trim() === ""
    ) {
      return null;
    }

    const obtained = Number(obtainedMarks);
    const currentTotal = Number(currentTotalMarks);
    const remaining = Number(remainingMarks);
    const target = Number(targetPercentage);

    if (
      !Number.isFinite(obtained) ||
      !Number.isFinite(currentTotal) ||
      !Number.isFinite(remaining) ||
      !Number.isFinite(target)
    ) {
      return {
        error: "Please enter valid numbers in all fields.",
      };
    }

    if (currentTotal <= 0) {
      return {
        error: "Current total marks must be greater than zero.",
      };
    }

    if (remaining <= 0) {
      return {
        error: "Remaining marks must be greater than zero.",
      };
    }

    if (obtained < 0 || obtained > currentTotal) {
      return {
        error:
          "Obtained marks must be between 0 and the current total marks.",
      };
    }

    if (target < 0 || target > 100) {
      return {
        error: "Target percentage must be between 0 and 100.",
      };
    }

    const finalTotal = currentTotal + remaining;
    const marksRequired =
      (target / 100) * finalTotal - obtained;

    const currentPercentage =
      (obtained / currentTotal) * 100;

    const achievable =
      marksRequired <= remaining;

    return {
      marksRequired: Math.max(0, marksRequired),
      finalTotal,
      currentPercentage,
      target,
      remaining,
      achievable,
    };
  })();

  const reset = () => {
    setObtainedMarks("");
    setCurrentTotalMarks("");
    setRemainingMarks("");
    setTargetPercentage("");
  };

  const hasResult =
    result !== null &&
    !("error" in result);

  return (
    <>
      <ToolStructuredData
        name="Required Marks Calculator"
        description="Calculate the marks needed in a remaining exam to reach a target percentage."
        url="https://essenc.tech/college/required-marks-calculator"
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
                label: "Required Marks Calculator",
              },
            ]}
          />

          <div className="mt-7 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              College Calculator
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-950 sm:text-4xl">
              Required Marks Calculator
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Find out how many marks you need in your remaining exam
              to achieve your target percentage.
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
                  Enter your current marks and the target percentage.
                </p>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="obtained-marks"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Marks obtained so far
                  </label>

                  <input
                    id="obtained-marks"
                    type="number"
                    min="0"
                    step="0.01"
                    inputMode="decimal"
                    value={obtainedMarks}
                    onChange={(event) =>
                      setObtainedMarks(event.target.value)
                    }
                    placeholder="360"
                    className="mt-2 h-11 w-full border border-gray-300 bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="current-total"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Current total marks
                  </label>

                  <input
                    id="current-total"
                    type="number"
                    min="1"
                    step="0.01"
                    inputMode="decimal"
                    value={currentTotalMarks}
                    onChange={(event) =>
                      setCurrentTotalMarks(event.target.value)
                    }
                    placeholder="500"
                    className="mt-2 h-11 w-full border border-gray-300 bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="remaining-marks"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Remaining exam marks
                  </label>

                  <input
                    id="remaining-marks"
                    type="number"
                    min="1"
                    step="0.01"
                    inputMode="decimal"
                    value={remainingMarks}
                    onChange={(event) =>
                      setRemainingMarks(event.target.value)
                    }
                    placeholder="100"
                    className="mt-2 h-11 w-full border border-gray-300 bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="target-percentage"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Target percentage
                  </label>

                  <input
                    id="target-percentage"
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    inputMode="decimal"
                    value={targetPercentage}
                    onChange={(event) =>
                      setTargetPercentage(event.target.value)
                    }
                    placeholder="80"
                    className="mt-2 h-11 w-full border border-gray-300 bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                  />
                </div>
              </div>

              <div className="mt-6">
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
                    label={
                      result.achievable
                        ? "Marks Required"
                        : "Target Not Achievable"
                    }
                    value={
                      result.achievable
                        ? result.marksRequired.toFixed(2)
                        : "Not possible"
                    }
                    description={
                      result.achievable
                        ? `You need approximately ${result.marksRequired.toFixed(
                            2
                          )} marks out of the remaining ${result.remaining} marks to reach ${result.target}%`
                        : `You would need more than the available ${result.remaining} remaining marks to reach ${result.target}%.`
                    }
                  />

                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Current percentage
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {result.currentPercentage.toFixed(2)}%
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Target
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {result.target.toFixed(2)}%
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Final total
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {result.finalTotal}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            <aside className="h-fit border border-gray-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-gray-950">
                How it works
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
                <div>
                  <p className="font-medium text-gray-900">
                    1. Enter current marks
                  </p>

                  <p className="mt-1">
                    Enter the marks you have already earned.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-medium text-gray-900">
                    2. Enter remaining marks
                  </p>

                  <p className="mt-1">
                    Enter the maximum marks available in your remaining
                    examination.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-medium text-gray-900">
                    3. Set your target
                  </p>

                  <p className="mt-1">
                    Enter the overall percentage you want to achieve.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <article className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-950">
              How many marks do I need?
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              The required marks calculator determines how many marks
              you need in your remaining examination to reach a specific
              overall percentage.
            </p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Required marks formula
            </h2>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                Required Marks =
                (Target Percentage × Final Total ÷ 100)
                − Current Obtained Marks
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Example
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Suppose you have scored 360 marks out of 500 and have
              another examination worth 100 marks. You want an overall
              percentage of 80%.
            </p>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                Final Total = 500 + 100 = 600
              </p>

              <p className="mt-2 font-mono text-sm leading-7 text-gray-900">
                Target Marks = 80% × 600 = 480
              </p>

              <p className="mt-2 font-mono text-sm leading-7 text-gray-900">
                Required Marks = 480 − 360 = 120
              </p>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                In this example, 120 marks would be required, but only
                100 marks are available. Therefore, the 80% target is
                not achievable with the remaining examination.
              </p>
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
                "/college/sgpa-calculator",
                "/college/cgpa-calculator",
                "/college/attendance-calculator",
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