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
    question: "How is the exam countdown calculated?",
    answer:
      "The calculator compares today's date with your selected exam date and calculates the remaining calendar days.",
  },
  {
    question: "Does the calculator include the exam day?",
    answer:
      "The main countdown shows the number of full calendar days between today and the exam date. The exam date itself is displayed separately.",
  },
  {
    question: "What if my exam is today?",
    answer:
      "The calculator shows that the exam is today and does not report negative remaining days.",
  },
  {
    question: "Can I use this for an assignment or project deadline?",
    answer:
      "Yes. Although it is called an exam countdown, the same calculation can be used for assignments, submissions, tests and other academic deadlines.",
  },
];

function getToday() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatDate(dateString: string) {
  const date = new Date(`${dateString}T00:00:00`);

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ExamCountdownPage() {
  const [examDate, setExamDate] = useState("");

  const today = getToday();

  const result = useMemo(() => {
    if (!examDate) {
      return null;
    }

    const todayDate = new Date(`${today}T00:00:00`);
    const targetDate = new Date(`${examDate}T00:00:00`);

    const difference =
      targetDate.getTime() - todayDate.getTime();

    const days = Math.round(
      difference / (1000 * 60 * 60 * 24)
    );

    return {
      days,
      isToday: days === 0,
      isPast: days < 0,
    };
  }, [examDate, today]);

  const reset = () => {
    setExamDate("");
  };

  return (
    <>
      <ToolStructuredData
        name="Exam Countdown Calculator"
        description="Calculate the number of days remaining until an examination date."
        url="https://essenc.tech/college/exam-countdown"
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
                label: "Exam Countdown",
              },
            ]}
          />

          <div className="mt-7 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              College Calculator
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-950 sm:text-4xl">
              Exam Countdown Calculator
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Find out exactly how many days are remaining until your
              exam and use the countdown to plan your preparation.
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
                  Select your exam date
                </h2>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Choose the date of your upcoming examination.
                </p>
              </div>

              <div className="mt-7 max-w-md">
                <label
                  htmlFor="exam-date"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Exam date
                </label>

                <input
                  id="exam-date"
                  type="date"
                  min={today}
                  value={examDate}
                  onChange={(event) =>
                    setExamDate(event.target.value)
                  }
                  className="h-12 w-full border border-gray-300 bg-white px-4 text-sm outline-none focus:border-gray-700"
                />

                <p className="mt-2 text-xs text-gray-500">
                  Today: {formatDate(today)}
                </p>
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

              {result && !result.isPast && (
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <CalculatorResult
                    label={
                      result.isToday
                        ? "Your exam is today"
                        : "Days Remaining"
                    }
                    value={
                      result.isToday
                        ? "Today"
                        : `${result.days} ${
                            result.days === 1
                              ? "day"
                              : "days"
                          }`
                    }
                    description={`Exam date: ${formatDate(
                      examDate
                    )}`}
                  />

                  {!result.isToday && (
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div className="border border-gray-200 p-5">
                        <p className="text-sm font-medium text-gray-700">
                          Exam Date
                        </p>

                        <p className="mt-1 text-lg font-bold text-gray-950">
                          {formatDate(examDate)}
                        </p>
                      </div>

                      <div className="border border-gray-200 p-5">
                        <p className="text-sm font-medium text-gray-700">
                          Preparation Days
                        </p>

                        <p className="mt-1 text-lg font-bold text-gray-950">
                          {result.days}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="mt-5 border border-blue-200 bg-blue-50 p-4">
                    <p className="text-sm font-semibold text-gray-900">
                      Plan your preparation
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-700">
                      Divide your remaining syllabus and revision
                      workload across the available preparation days.
                    </p>
                  </div>
                </div>
              )}

              {result?.isPast && (
                <div
                  role="alert"
                  className="mt-8 border border-red-200 bg-red-50 p-4"
                >
                  <p className="text-sm font-semibold text-red-900">
                    This date has already passed.
                  </p>

                  <p className="mt-1 text-sm leading-6 text-red-800">
                    Please select an upcoming exam date.
                  </p>
                </div>
              )}
            </section>

            <aside className="h-fit border border-gray-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-gray-950">
                Countdown calculation
              </h2>

              <div className="mt-4 border border-gray-200 bg-gray-50 p-4">
                <p className="font-mono text-sm leading-7 text-gray-900">
                  Days Remaining
                  <br />
                  = Exam Date − Today
                </p>
              </div>

              <p className="mt-4 text-xs leading-5 text-gray-500">
                The countdown uses calendar days between todays date
                and your selected exam date.
              </p>
            </aside>
          </div>

          <article className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-950">
              How does an exam countdown work?
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              An exam countdown calculates the amount of time between
              the current date and your examination date. This gives
              you a simple way to understand how much preparation time
              remains.
            </p>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                Days Remaining = Exam Date − Current Date
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              How to use the remaining days effectively
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Once you know how many days are left, divide your
              remaining work into manageable sections. Give difficult
              subjects additional time and leave some time for revision
              before the exam.
            </p>

            <div className="mt-5 overflow-x-auto border border-gray-200 bg-white">
              <table className="w-full min-w-[500px] text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold">
                      Preparation stage
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      Suggested focus
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    [
                      "Early preparation",
                      "Learn concepts and complete syllabus",
                    ],
                    [
                      "Mid preparation",
                      "Practice questions and weak topics",
                    ],
                    [
                      "Final days",
                      "Revision, practice tests and important topics",
                    ],
                  ].map(([stage, focus]) => (
                    <tr
                      key={stage}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <td className="px-4 py-3 font-medium">
                        {stage}
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
                "/college/study-hours-calculator",
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