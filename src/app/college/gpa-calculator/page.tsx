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

interface Course {
  id: number;
  name: string;
  grade: string;
  credits: string;
}

const gradePoints: Record<string, number> = {
  A: 4,
  "A-": 3.7,
  "B+": 3.3,
  B: 3,
  "B-": 2.7,
  "C+": 2.3,
  C: 2,
  "C-": 1.7,
  "D+": 1.3,
  D: 1,
  F: 0,
};

const faqs = [
  {
    question: "How is GPA calculated?",
    answer:
      "GPA is calculated by multiplying each course's grade point by its credit hours, adding those values together, and dividing the total by the number of credit hours.",
  },
  {
    question: "What GPA scale does this calculator use?",
    answer:
      "This calculator uses the commonly used 4.0 GPA scale, with grades ranging from A to F.",
  },
  {
    question: "Why are credit hours important when calculating GPA?",
    answer:
      "Credit hours determine how much weight each course has in your GPA. A course with more credits has a larger effect on your overall GPA.",
  },
  {
    question: "Does an F count toward GPA?",
    answer:
      "Yes. An F is assigned 0 grade points and is included in the GPA calculation when entered as a course.",
  },
];

const createCourse = (id: number): Course => ({
  id,
  name: "",
  grade: "",
  credits: "",
});

export default function GPACalculatorPage() {
  const [courses, setCourses] = useState<Course[]>([
    createCourse(1),
    createCourse(2),
    createCourse(3),
  ]);

  const result = (() => {
    const completed = courses.filter(
      (course) =>
        course.grade.trim() !== "" &&
        course.credits.trim() !== ""
    );

    if (completed.length === 0) {
      return null;
    }

    let totalQualityPoints = 0;
    let totalCredits = 0;

    for (const course of completed) {
      const grade = course.grade.trim();

      const gradePoint = gradePoints[grade];

      const credits = Number(course.credits);

      if (gradePoint === undefined) {
        return {
          error: `Invalid grade "${grade}". Please select a valid grade.`,
        };
      }

      if (!Number.isFinite(credits) || credits <= 0) {
        return {
          error: "Credit hours must be greater than zero.",
        };
      }

      totalQualityPoints += gradePoint * credits;
      totalCredits += credits;
    }

    if (totalCredits <= 0) {
      return null;
    }

    return {
      gpa: totalQualityPoints / totalCredits,
      totalCredits,
      totalQualityPoints,
      completedCourses: completed.length,
      totalCourses: courses.length,
    };
  })();

  const updateCourse = (
    id: number,
    field: keyof Omit<Course, "id">,
    value: string
  ) => {
    setCourses((current) =>
      current.map((course) =>
        course.id === id
          ? {
              ...course,
              [field]: value,
            }
          : course
      )
    );
  };

  const addCourse = () => {
    setCourses((current) => {
      const nextId =
        Math.max(
          ...current.map((course) => course.id),
          0
        ) + 1;

      return [...current, createCourse(nextId)];
    });
  };

  const removeCourse = (id: number) => {
    setCourses((current) => {
      if (current.length <= 1) {
        return current;
      }

      return current.filter(
        (course) => course.id !== id
      );
    });
  };

  const reset = () => {
    setCourses([
      createCourse(1),
      createCourse(2),
      createCourse(3),
    ]);
  };

  const hasResult =
    result !== null &&
    !("error" in result);

  return (
    <>
      <ToolStructuredData
        name="GPA Calculator"
        description="Calculate GPA using course grades and credit hours."
        url="https://essenc.tech/college/gpa-calculator"
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
                label: "GPA Calculator",
              },
            ]}
          />

          <div className="mt-7 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              College Calculator
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-950 sm:text-4xl">
              GPA Calculator
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Calculate your Grade Point Average using your course
              grades and credit hours. This calculator uses a standard
              4.0 GPA scale.
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
                  Enter your courses
                </h2>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Select the grade and enter the credit hours for each
                  course.
                </p>
              </div>

              <div className="mt-7 overflow-x-auto border border-gray-200">
                <table className="w-full min-w-[700px] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 text-left">
                      <th className="px-4 py-3 font-semibold text-gray-700">
                        Course
                      </th>

                      <th className="w-48 px-4 py-3 font-semibold text-gray-700">
                        Grade
                      </th>

                      <th className="w-40 px-4 py-3 font-semibold text-gray-700">
                        Credit Hours
                      </th>

                      <th className="w-24 px-4 py-3 text-right font-semibold text-gray-700">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {courses.map((course) => (
                      <tr
                        key={course.id}
                        className="border-b border-gray-100 last:border-b-0"
                      >
                        <td className="px-4 py-3">
                          <input
                            type="text"
                            value={course.name}
                            onChange={(event) =>
                              updateCourse(
                                course.id,
                                "name",
                                event.target.value
                              )
                            }
                            placeholder="e.g. Mathematics"
                            className="h-11 w-full border border-gray-300 bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                          />
                        </td>

                        <td className="px-4 py-3">
                          <select
                            value={course.grade}
                            onChange={(event) =>
                              updateCourse(
                                course.id,
                                "grade",
                                event.target.value
                              )
                            }
                            className="h-11 w-full border border-gray-300 bg-white px-3 text-sm outline-none focus:border-gray-700"
                          >
                            <option value="">
                              Select grade
                            </option>

                            {Object.entries(
                              gradePoints
                            ).map(
                              ([grade, points]) => (
                                <option
                                  key={grade}
                                  value={grade}
                                >
                                  {grade} — {points.toFixed(
                                    1
                                  )}
                                </option>
                              )
                            )}
                          </select>
                        </td>

                        <td className="px-4 py-3">
                          <input
                            type="number"
                            min="0"
                            step="0.5"
                            inputMode="decimal"
                            value={course.credits}
                            onChange={(event) =>
                              updateCourse(
                                course.id,
                                "credits",
                                event.target.value
                              )
                            }
                            placeholder="3"
                            className="h-11 w-full border border-gray-300 bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                          />
                        </td>

                        <td className="px-4 py-3 text-right">
                          <button
                            type="button"
                            onClick={() =>
                              removeCourse(course.id)
                            }
                            disabled={courses.length <= 1}
                            aria-label={`Remove ${
                              course.name || "course"
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
                  onClick={addCourse}
                  className="inline-flex h-11 items-center justify-center gap-2 bg-gray-950 px-5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  <Plus size={16} />
                  Add course
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
                    label="Your GPA"
                    value={result.gpa.toFixed(2)}
                    description="Calculated using the entered course grades and credit hours on a 4.0 scale."
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
                        Quality points
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {result.totalQualityPoints.toFixed(2)}
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Courses
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {result.completedCourses}/
                        {result.totalCourses}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            <aside className="h-fit border border-gray-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-gray-950">
                GPA calculation
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
                <div>
                  <p className="font-medium text-gray-900">
                    Enter each course
                  </p>

                  <p className="mt-1">
                    Add your courses and select the grade received in
                    each one.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-medium text-gray-900">
                    Add credit hours
                  </p>

                  <p className="mt-1">
                    Courses with more credit hours have a greater effect
                    on your GPA.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-medium text-gray-900">
                    Get your GPA
                  </p>

                  <p className="mt-1">
                    Your GPA is calculated automatically from the
                    entered grades and credits.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <article className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-950">
              How to calculate GPA
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              GPA, or Grade Point Average, represents the average grade
              performance across your courses. When courses have
              different credit values, the GPA is calculated using a
              weighted average.
            </p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              GPA formula
            </h2>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                GPA = Total Quality Points ÷ Total Credit Hours
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Example GPA calculation
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Suppose you have three courses:
            </p>

            <div className="mt-5 overflow-x-auto border border-gray-200 bg-white">
              <table className="w-full min-w-[500px] text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold">
                      Course
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      Grade
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      Grade Points
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      Credits
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">
                      Mathematics
                    </td>

                    <td className="px-4 py-3">
                      A
                    </td>

                    <td className="px-4 py-3">
                      4.0
                    </td>

                    <td className="px-4 py-3">
                      3
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">
                      Physics
                    </td>

                    <td className="px-4 py-3">
                      B
                    </td>

                    <td className="px-4 py-3">
                      3.0
                    </td>

                    <td className="px-4 py-3">
                      3
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3">
                      Programming
                    </td>

                    <td className="px-4 py-3">
                      A-
                    </td>

                    <td className="px-4 py-3">
                      3.7
                    </td>

                    <td className="px-4 py-3">
                      4
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                Mathematics: 4.0 × 3 = 12.0
              </p>

              <p className="mt-2 font-mono text-sm leading-7 text-gray-900">
                Physics: 3.0 × 3 = 9.0
              </p>

              <p className="mt-2 font-mono text-sm leading-7 text-gray-900">
                Programming: 3.7 × 4 = 14.8
              </p>

              <p className="mt-2 font-mono text-sm leading-7 text-gray-900">
                Total Quality Points = 35.8
              </p>

              <p className="mt-2 font-mono text-sm leading-7 text-gray-900">
                Total Credits = 10
              </p>

              <p className="mt-2 font-mono text-sm leading-7 text-gray-900">
                GPA = 35.8 ÷ 10 = 3.58
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              4.0 GPA scale
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              The following grade points are used by this calculator:
            </p>

            <div className="mt-5 grid grid-cols-2 border border-gray-200 bg-white text-sm sm:grid-cols-4">
              {Object.entries(gradePoints).map(
                ([grade, points]) => (
                  <div
                    key={grade}
                    className="border-b border-r border-gray-100 px-4 py-3"
                  >
                    <span className="font-semibold text-gray-900">
                      {grade}
                    </span>

                    <span className="ml-2 text-gray-500">
                      {points.toFixed(1)}
                    </span>
                  </div>
                )
              )}
            </div>

            <p className="mt-4 text-xs leading-6 text-gray-500">
              GPA grading systems can vary between institutions.
              Always check your college or universitys official grading
              policy when an institution-specific conversion is required.
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
                "/college/marks-percentage-calculator",
                "/college/required-marks-calculator",
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