"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, RotateCcw } from "lucide-react";
import NumberInput from "@/components/calculators/number-input";
import CalculatorResult from "@/components/calculators/calculator-result";

const TARGET_ATTENDANCE = 75;

export default function AttendanceCalculatorPage() {
  const [attended, setAttended] = useState("");
  const [total, setTotal] = useState("");
  const [target, setTarget] = useState("75");

  const result = useMemo(() => {
    const attendedNumber = Number(attended);
    const totalNumber = Number(total);
    const targetNumber = Number(target);

    if (
      !Number.isFinite(attendedNumber) ||
      !Number.isFinite(totalNumber) ||
      !Number.isFinite(targetNumber)
    ) {
      return null;
    }

    if (
      attendedNumber < 0 ||
      totalNumber <= 0 ||
      attendedNumber > totalNumber ||
      targetNumber <= 0 ||
      targetNumber > 100
    ) {
      return null;
    }

    const percentage = (attendedNumber / totalNumber) * 100;

    let classesToAttend = 0;
    let classesCanMiss = 0;

    if (percentage < targetNumber) {
      const required = Math.ceil(
        (targetNumber * totalNumber - 100 * attendedNumber) /
          (100 - targetNumber),
      );

      classesToAttend = Math.max(0, required);
    } else {
      classesCanMiss = Math.floor(
        (100 * attendedNumber - targetNumber * totalNumber) / targetNumber,
      );
    }

    return {
      percentage,
      classesToAttend,
      classesCanMiss,
    };
  }, [attended, total, target]);

  const reset = () => {
    setAttended("");
    setTotal("");
    setTarget(String(TARGET_ATTENDANCE));
  };

  return (
    <>
      <section className="border-b border-gray-200 bg-white">
        <div className="container-shell py-10 sm:py-14">
          <Link
            href="/college"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-900"
          >
            <ArrowLeft size={14} />
            College tools
          </Link>

          <div className="mt-7 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              College Calculator
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-950 sm:text-4xl">
              Attendance Calculator
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Calculate your current attendance percentage and find out how many
              classes you need to attend to reach your target.
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
                  Calculate your attendance
                </h2>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Enter your classes attended, total classes and target
                  attendance.
                </p>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <NumberInput
                  label="Classes attended"
                  value={attended}
                  onChange={setAttended}
                  placeholder="e.g. 42"
                  min={0}
                  helpText="Number of classes you have attended."
                />

                <NumberInput
                  label="Total classes conducted"
                  value={total}
                  onChange={setTotal}
                  placeholder="e.g. 58"
                  min={1}
                  helpText="Total classes conducted so far."
                />

                <NumberInput
                  label="Target attendance (%)"
                  value={target}
                  onChange={setTarget}
                  placeholder="75"
                  min={1}
                  max={100}
                  step={0.1}
                  helpText="For example, 75%."
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

              {result && (
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <CalculatorResult
                    label="Current attendance"
                    value={`${result.percentage.toFixed(2)}%`}
                    description={
                      result.percentage >= Number(target)
                        ? `You are currently above your ${target}% target.`
                        : `You are currently below your ${target}% target.`
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
                        Additional consecutive classes required to reach the
                        target.
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
                        Approximate classes you can miss while maintaining the
                        target.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            <aside className="h-fit border border-gray-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-gray-950">
                Quick information
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
                <div>
                  <p className="font-medium text-gray-900">Common target</p>

                  <p className="mt-1">
                    Many colleges use 75% as a minimum attendance requirement,
                    but your institution may have different rules.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-medium text-gray-900">
                    No account required
                  </p>

                  <p className="mt-1">
                    Your calculation happens directly in your browser.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <article className="mt-12 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-950">
              How to calculate attendance percentage
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Attendance percentage is calculated by dividing the number of
              classes attended by the total number of classes conducted and
              multiplying the result by 100.
            </p>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-6 text-gray-900">
                Attendance % = (Classes Attended ÷ Total Classes) × 100
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Example
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              If you attended 42 classes out of 58 conducted classes, your
              attendance is approximately 72.41%.
            </p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              How many classes do I need to attend?
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              If your current attendance is below your target, the calculator
              estimates how many consecutive classes you need to attend without
              missing another class to reach that target.
            </p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Frequently asked questions
            </h2>

            <div className="mt-5 divide-y divide-gray-200 border-y border-gray-200">
              <details className="py-5">
                <summary className="cursor-pointer text-sm font-semibold text-gray-900">
                  What is the formula for attendance percentage?
                </summary>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Divide classes attended by total classes conducted and
                  multiply the result by 100.
                </p>
              </details>

              <details className="py-5">
                <summary className="cursor-pointer text-sm font-semibold text-gray-900">
                  Can I calculate 75% attendance?
                </summary>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Yes. Enter your current classes attended and total classes,
                  then keep the target at 75%.
                </p>
              </details>

              <details className="py-5">
                <summary className="cursor-pointer text-sm font-semibold text-gray-900">
                  Does this calculator store my data?
                </summary>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  No account or server submission is required for the
                  calculation.
                </p>
              </details>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
