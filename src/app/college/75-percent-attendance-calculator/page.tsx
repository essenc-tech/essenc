"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, RotateCcw } from "lucide-react";
import Link from "next/link";

import NumberInput from "@/components/calculators/number-input";
import CalculatorResult from "@/components/calculators/calculator-result";
import Breadcrumbs from "@/components/tools/breadcrumbs";
import RelatedTools from "@/components/tools/related-tools";
import ToolStructuredData from "@/components/seo/tool-structured-data";

const faqs = [
  {
    question: "How do I maintain 75% attendance?",
    answer:
      "To maintain 75% attendance, at least three out of every four classes must be attended. Use the calculator to determine how many classes you can miss based on your current attendance.",
  },
  {
    question: "How many classes do I need to attend to reach 75%?",
    answer:
      "Enter the number of classes you have attended and the total classes conducted. The calculator will determine how many consecutive classes you need to attend to reach 75%.",
  },
  {
    question: "How many classes can I miss with 75% attendance?",
    answer:
      "The number of classes you can miss depends on your current attendance and total classes. Enter your current numbers into the calculator to get the exact result.",
  },
  {
    question: "What happens if my attendance is already above 75%?",
    answer:
      "If your current attendance is above 75%, the calculator shows how many additional classes you can miss while remaining at or above 75%.",
  },
];

export default function SeventyFiveAttendanceCalculator() {
  const [attended, setAttended] = useState("");
  const [total, setTotal] = useState("");

  const result = useMemo(() => {
    if (attended === "" || total === "") {
      return null;
    }

    const attendedNumber = Number(attended);
    const totalNumber = Number(total);

    if (
      !Number.isFinite(attendedNumber) ||
      !Number.isFinite(totalNumber) ||
      totalNumber <= 0 ||
      attendedNumber < 0 ||
      attendedNumber > totalNumber
    ) {
      return {
        error: "Please enter valid attendance numbers.",
      };
    }

    const percentage = (attendedNumber / totalNumber) * 100;

    let classesToAttend = 0;
    let classesCanMiss = 0;

    if (percentage < 75) {
      classesToAttend = Math.ceil(
        (75 * totalNumber - 100 * attendedNumber) / 25
      );
    } else {
      classesCanMiss = Math.floor(
        (100 * attendedNumber - 75 * totalNumber) / 75
      );
    }

    return {
      percentage,
      classesToAttend,
      classesCanMiss,
    };
  }, [attended, total]);

  const reset = () => {
    setAttended("");
    setTotal("");
  };

  const validResult = result && !("error" in result);

  return (
    <>
      <ToolStructuredData
        name="75% Attendance Calculator"
        description="Calculate how many classes you need to attend or can miss to maintain 75% attendance."
        url="https://essenc.tech/college/75-percent-attendance-calculator"
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
                label: "75% Attendance Calculator",
              },
            ]}
          />

          <div className="mt-7 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              College Calculator
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-950 sm:text-4xl">
              75% Attendance Calculator
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Find out how many classes you need to attend to reach 75%
              attendance or how many classes you can miss while staying
              above 75%.
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
                  Calculate 75% attendance
                </h2>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Enter your current attendance details.
                </p>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <NumberInput
                  label="Classes attended"
                  value={attended}
                  onChange={setAttended}
                  placeholder="e.g. 42"
                  min={0}
                  helpText="Number of classes you attended."
                />

                <NumberInput
                  label="Total classes"
                  value={total}
                  onChange={setTotal}
                  placeholder="e.g. 58"
                  min={1}
                  helpText="Total classes conducted."
                />
              </div>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex h-12 items-center justify-center gap-2 border border-gray-300 bg-white px-5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
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

              {validResult && (
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <CalculatorResult
                    label="Current attendance"
                    value={`${result.percentage.toFixed(2)}%`}
                    description={
                      result.percentage >= 75
                        ? "Your current attendance is at or above 75%."
                        : "Your current attendance is below 75%."
                    }
                  />

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Classes to attend
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {result.classesToAttend}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Classes you need to attend consecutively to reach
                        75%.
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Classes you can miss
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {result.classesCanMiss}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Classes you can miss while remaining at or above
                        75%.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            <aside className="h-fit border border-gray-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-gray-950">
                75% attendance guide
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
                <div>
                  <p className="font-medium text-gray-900">
                    What does 75% mean?
                  </p>

                  <p className="mt-1">
                    You need to attend at least 75 classes out of every
                    100 classes conducted.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-medium text-gray-900">
                    Example
                  </p>

                  <p className="mt-1">
                    If 40 classes are conducted, you need to attend at
                    least 30.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-medium text-gray-900">
                    Free to use
                  </p>

                  <p className="mt-1">
                    No account or registration is required.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <article className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-950">
              What is 75% attendance?
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              75% attendance means attending three out of every four
              classes conducted. For example, if your college conducts
              100 classes, you need to attend at least 75 of them.
            </p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              75% attendance formula
            </h2>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-6 text-gray-900">
                Attendance % = (Classes Attended ÷ Total Classes) × 100
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Example: 42 out of 58 classes
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              If you attended 42 out of 58 classes, your current
              attendance is:
            </p>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-6 text-gray-900">
                (42 ÷ 58) × 100 = 72.41%
              </p>
            </div>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              To reach 75%, you would need to attend 6 additional
              classes without missing another class.
            </p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              How many classes can I miss?
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              If your current attendance is already above 75%, the
              calculator determines how many additional classes you can
              miss before your attendance falls below the target.
            </p>

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
                "/college/sgpa-calculator",
                "/college/cgpa-calculator",
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