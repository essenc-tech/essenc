"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, RotateCcw } from "lucide-react";

import CalculatorResult from "@/components/calculators/calculator-result";
import Breadcrumbs from "@/components/tools/breadcrumbs";
import RelatedTools from "@/components/tools/related-tools";
import ToolStructuredData from "@/components/seo/tool-structured-data";

const faqs = [
  {
    question: "How many hours should I study each day?",
    answer:
      "There is no single ideal number of study hours for every student. Your available time, subjects, difficulty, academic goals and exam date should all be considered.",
  },
  {
    question: "How do I calculate daily study hours?",
    answer:
      "Divide your total planned study time by the number of available study days. For example, 30 total study hours over 10 days requires an average of 3 hours per day.",
  },
  {
    question: "Should I study every day before an exam?",
    answer:
      "Consistent study sessions are generally easier to manage than trying to complete a large amount of work at the last minute. Include breaks and adequate sleep in your schedule.",
  },
  {
    question: "Can I use this calculator for multiple subjects?",
    answer:
      "Yes. Enter your total required study hours across all subjects. You can then divide the recommended daily time between subjects according to their difficulty and priority.",
  },
];

export default function StudyHoursCalculatorPage() {
  const [totalHours, setTotalHours] = useState("");
  const [days, setDays] = useState("");
  const [availableHours, setAvailableHours] = useState("");
  const [breakMinutes, setBreakMinutes] = useState("15");

  const totalStudyHours = Number(totalHours);
  const studyDays = Number(days);
  const dailyAvailableHours = Number(availableHours);
  const dailyBreakMinutes = Number(breakMinutes);

  const valid =
    totalHours !== "" &&
    days !== "" &&
    Number.isFinite(totalStudyHours) &&
    Number.isFinite(studyDays) &&
    totalStudyHours > 0 &&
    studyDays > 0;

  const result = useMemo(() => {
    if (!valid) {
      return null;
    }

    const dailyHours = totalStudyHours / studyDays;

    const available =
      availableHours !== "" &&
      Number.isFinite(dailyAvailableHours) &&
      dailyAvailableHours > 0;

    const canFit =
      !available || dailyHours <= dailyAvailableHours;

    const studyMinutes = Math.round(dailyHours * 60);

    const sessions =
      dailyBreakMinutes >= 0
        ? Math.max(
            1,
            Math.ceil(
              studyMinutes / 60
            )
          )
        : 1;

    return {
      dailyHours,
      studyMinutes,
      canFit,
      sessions,
      remainingHours: available
        ? Math.max(0, dailyHours - dailyAvailableHours)
        : 0,
    };
  }, [
    valid,
    totalStudyHours,
    studyDays,
    availableHours,
    dailyAvailableHours,
    dailyBreakMinutes,
  ]);

  const reset = () => {
    setTotalHours("");
    setDays("");
    setAvailableHours("");
    setBreakMinutes("15");
  };

  const formatHours = (hours: number) => {
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * 60);

    if (wholeHours === 0) {
      return `${minutes} min`;
    }

    if (minutes === 0) {
      return `${wholeHours} hr`;
    }

    return `${wholeHours} hr ${minutes} min`;
  };

  return (
    <>
      <ToolStructuredData
        name="Study Hours Calculator"
        description="Calculate recommended daily study time based on total study hours and available study days."
        url="https://essenc.tech/college/study-hours-calculator"
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
                label: "Study Hours Calculator",
              },
            ]}
          />

          <div className="mt-7 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              College Calculator
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-950 sm:text-4xl">
              Study Hours Calculator
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Calculate how much time you need to study each day to
              complete your target study hours before your exam or
              academic deadline.
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
                  Plan your study time
                </h2>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Enter your total study target and the number of days
                  available.
                </p>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="total-hours"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Total study hours needed
                  </label>

                  <input
                    id="total-hours"
                    type="number"
                    min="0"
                    step="0.5"
                    inputMode="decimal"
                    value={totalHours}
                    onChange={(event) =>
                      setTotalHours(event.target.value)
                    }
                    placeholder="e.g. 40"
                    className="h-12 w-full border border-gray-300 bg-white px-4 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="study-days"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Available study days
                  </label>

                  <input
                    id="study-days"
                    type="number"
                    min="1"
                    step="1"
                    inputMode="numeric"
                    value={days}
                    onChange={(event) =>
                      setDays(event.target.value)
                    }
                    placeholder="e.g. 14"
                    className="h-12 w-full border border-gray-300 bg-white px-4 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="available-hours"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Maximum study time per day
                    <span className="ml-1 font-normal text-gray-500">
                      (optional)
                    </span>
                  </label>

                  <input
                    id="available-hours"
                    type="number"
                    min="0"
                    step="0.5"
                    inputMode="decimal"
                    value={availableHours}
                    onChange={(event) =>
                      setAvailableHours(event.target.value)
                    }
                    placeholder="e.g. 4"
                    className="h-12 w-full border border-gray-300 bg-white px-4 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="break-minutes"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Break time per study hour
                  </label>

                  <input
                    id="break-minutes"
                    type="number"
                    min="0"
                    step="5"
                    inputMode="numeric"
                    value={breakMinutes}
                    onChange={(event) =>
                      setBreakMinutes(event.target.value)
                    }
                    placeholder="e.g. 15"
                    className="h-12 w-full border border-gray-300 bg-white px-4 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                  />

                  <p className="mt-2 text-xs text-gray-500">
                    Used only as a planning reference.
                  </p>
                </div>
              </div>

              {totalHours !== "" &&
                days !== "" &&
                (!valid ||
                  (availableHours !== "" &&
                    (!Number.isFinite(dailyAvailableHours) ||
                      dailyAvailableHours <= 0))) && (
                  <div
                    role="alert"
                    className="mt-5 border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800"
                  >
                    Please enter valid positive values for your study
                    target and available days.
                  </div>
                )}

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

              {result && (
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <CalculatorResult
                    label="Recommended Daily Study Time"
                    value={formatHours(result.dailyHours)}
                    description={`You need approximately ${result.dailyHours.toFixed(
                      2
                    )} study hours per day.`}
                  />

                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Daily Time
                      </p>

                      <p className="mt-1 text-xl font-bold text-gray-950">
                        {result.dailyHours.toFixed(2)} hr
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Study Days
                      </p>

                      <p className="mt-1 text-xl font-bold text-gray-950">
                        {studyDays}
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Total Target
                      </p>

                      <p className="mt-1 text-xl font-bold text-gray-950">
                        {totalStudyHours} hr
                      </p>
                    </div>
                  </div>

                  {availableHours !== "" &&
                    result.canFit && (
                      <div className="mt-5 border border-green-200 bg-green-50 p-4">
                        <p className="text-sm font-semibold text-gray-900">
                          Your target fits your available time.
                        </p>

                        <p className="mt-1 text-sm leading-6 text-gray-700">
                          Your required daily study time is within
                          your stated daily limit.
                        </p>
                      </div>
                    )}

                  {availableHours !== "" &&
                    !result.canFit && (
                      <div className="mt-5 border border-amber-200 bg-amber-50 p-4">
                        <p className="text-sm font-semibold text-gray-900">
                          Your target may require more daily time.
                        </p>

                        <p className="mt-1 text-sm leading-6 text-gray-700">
                          You need about{" "}
                          {result.remainingHours.toFixed(2)} additional
                          hours per day beyond your stated limit.
                        </p>
                      </div>
                    )}
                </div>
              )}

              <div className="mt-8 border border-blue-200 bg-blue-50 p-4">
                <p className="text-sm font-semibold text-gray-900">
                  Study planning tip
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-700">
                  Use the result as a planning estimate rather than a
                  fixed rule. Break larger study targets into smaller
                  sessions and leave enough time for sleep, meals and
                  other responsibilities.
                </p>
              </div>
            </section>

            <aside className="h-fit border border-gray-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-gray-950">
                Daily study formula
              </h2>

              <div className="mt-4 border border-gray-200 bg-gray-50 p-4">
                <p className="font-mono text-sm leading-7 text-gray-900">
                  Daily Study Time
                  <br />
                  = Total Study Hours
                  <br />
                  ÷ Study Days
                </p>
              </div>

              <p className="mt-4 text-xs leading-5 text-gray-500">
                Example: 40 hours over 10 days requires an average of
                4 hours of study per day.
              </p>
            </aside>
          </div>

          <article className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-950">
              How to calculate daily study hours
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              A simple way to plan study time is to estimate how many
              total hours you need and divide that amount by the number
              of days available.
            </p>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                Daily Study Hours = Total Study Hours ÷ Study Days
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Example study plan
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              If you estimate that you need 40 hours to revise your
              subjects and have 10 days available:
            </p>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                40 ÷ 10 = 4 hours per day
              </p>
            </div>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              This means you would need to average approximately four
              hours of focused study each day to reach the 40-hour
              target.
            </p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              How to divide study hours between subjects
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              You do not necessarily need to spend the same amount of
              time on every subject. A difficult subject or an upcoming
              examination can receive a larger share of your available
              study time.
            </p>

            <div className="mt-5 overflow-x-auto border border-gray-200 bg-white">
              <table className="w-full min-w-[500px] text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold">
                      Subject
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      Priority
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      Suggested focus
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["Difficult subject", "High", "More study time"],
                    ["Average subject", "Medium", "Regular sessions"],
                    ["Strong subject", "Low", "Revision"],
                  ].map(([subject, priority, focus]) => (
                    <tr
                      key={subject}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <td className="px-4 py-3">
                        {subject}
                      </td>

                      <td className="px-4 py-3">
                        {priority}
                      </td>

                      <td className="px-4 py-3">
                        {focus}
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
                "/college/exam-countdown",
                "/college/attendance-calculator",
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