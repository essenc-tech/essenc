"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, RotateCcw } from "lucide-react";

import SubjectTable, {
  type SubjectRow,
} from "@/components/calculators/subject-table";
import CalculatorResult from "@/components/calculators/calculator-result";
import Breadcrumbs from "@/components/tools/breadcrumbs";
import RelatedTools from "@/components/tools/related-tools";
import ToolStructuredData from "@/components/seo/tool-structured-data";

const faqs = [
  {
    question: "What is SGPA?",
    answer:
      "SGPA stands for Semester Grade Point Average. It represents your academic performance for a particular semester based on subject credits and grade points.",
  },
  {
    question: "What is the SGPA formula?",
    answer:
      "SGPA is calculated by dividing the sum of credit multiplied by grade point for every subject by the total credits.",
  },
  {
    question: "How is SGPA calculated?",
    answer:
      "For each subject, multiply its credits by the corresponding grade point. Add all the resulting values and divide the total by the sum of all subject credits.",
  },
  {
    question: "Is SGPA calculated out of 10?",
    answer:
      "Many Indian universities use a 10-point grading system, but grading scales can vary between institutions. This calculator uses a common 10-point system.",
  },
];

const gradePoints: Record<string, number> = {
  O: 10,
  "A+": 9,
  A: 8,
  "B+": 7,
  B: 6,
  C: 5,
  P: 4,
  F: 0,
};

const createSubject = (id: number): SubjectRow => ({
  id,
  name: "",
  credits: "",
  grade: "",
});

export default function SGPACalculatorPage() {
  const [subjects, setSubjects] = useState<SubjectRow[]>([
    createSubject(1),
    createSubject(2),
    createSubject(3),
  ]);

  const result = useMemo(() => {
    const validSubjects = subjects.filter(
      (subject) =>
        subject.credits.trim() !== "" &&
        subject.grade !== ""
    );

    if (validSubjects.length === 0) {
      return null;
    }

    const hasInvalidCredits = validSubjects.some((subject) => {
      const credits = Number(subject.credits);

      return (
        !Number.isFinite(credits) ||
        credits <= 0
      );
    });

    if (hasInvalidCredits) {
      return {
        error: "Enter valid credit values for your subjects.",
      };
    }

    let totalCredits = 0;
    let totalGradePoints = 0;

    for (const subject of validSubjects) {
      const credits = Number(subject.credits);
      const point = gradePoints[subject.grade];

      if (point === undefined) {
        continue;
      }

      totalCredits += credits;
      totalGradePoints += credits * point;
    }

    if (totalCredits <= 0) {
      return null;
    }

    return {
      sgpa: totalGradePoints / totalCredits,
      totalCredits,
      totalGradePoints,
      completedSubjects: validSubjects.length,
      totalSubjects: subjects.length,
    };
  }, [subjects]);

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
        name="SGPA Calculator"
        description="Calculate your Semester Grade Point Average using subject credits and grades."
        url="https://essenc.tech/college/sgpa-calculator"
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
                label: "SGPA Calculator",
              },
            ]}
          />

          <div className="mt-7 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              College Calculator
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-950 sm:text-4xl">
              SGPA Calculator
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Calculate your Semester Grade Point Average using subject
              credits and grades. Add your subjects to get your semester
              SGPA instantly.
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
                  Enter your subjects
                </h2>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Add each subject&apos;s credits and grade.
                </p>
              </div>

              <div className="mt-7">
                <SubjectTable
                  subjects={subjects}
                  onUpdate={updateSubject}
                  onRemove={removeSubject}
                />
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
                    label="Your SGPA"
                    value={result.sgpa.toFixed(2)}
                    description="Calculated from the completed subjects entered above."
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
                        Grade points
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {result.totalGradePoints.toFixed(2)}
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
                SGPA guide
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
                <div>
                  <p className="font-medium text-gray-900">
                    Common scale
                  </p>

                  <p className="mt-1">
                    This calculator uses a common 10-point grading
                    system.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-medium text-gray-900">
                    Credits matter
                  </p>

                  <p className="mt-1">
                    Subjects with more credits have a greater effect on
                    your SGPA.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-medium text-gray-900">
                    No account
                  </p>

                  <p className="mt-1">
                    Calculate your SGPA without creating an account.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <article className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-950">
              What is SGPA?
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              SGPA stands for Semester Grade Point Average. It measures
              your academic performance for one semester using the grade
              points earned in each subject and the credits assigned to
              those subjects.
            </p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              SGPA formula
            </h2>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-6 text-gray-900">
                SGPA = Σ(Credit × Grade Point) ÷ Σ(Credits)
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              SGPA calculation example
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Suppose a semester has the following three subjects:
            </p>

            <div className="mt-5 overflow-x-auto border border-gray-200 bg-white">
              <table className="w-full min-w-[480px] text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold">
                      Subject
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      Credits
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      Grade Point
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">
                      Mathematics
                    </td>

                    <td className="px-4 py-3">
                      4
                    </td>

                    <td className="px-4 py-3">
                      9
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">
                      Programming
                    </td>

                    <td className="px-4 py-3">
                      3
                    </td>

                    <td className="px-4 py-3">
                      8
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3">
                      Physics
                    </td>

                    <td className="px-4 py-3">
                      3
                    </td>

                    <td className="px-4 py-3">
                      7
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                SGPA = ((4 × 9) + (3 × 8) + (3 × 7)) ÷ 10
              </p>

              <p className="mt-2 font-mono text-sm leading-7 text-gray-900">
                SGPA = 81 ÷ 10 = 8.10
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Common SGPA grade points
            </h2>

            <div className="mt-5 overflow-x-auto border border-gray-200 bg-white">
              <table className="w-full min-w-[420px] text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold">
                      Grade
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      Grade Point
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {Object.entries(gradePoints).map(
                    ([grade, point]) => (
                      <tr
                        key={grade}
                        className="border-b border-gray-100 last:border-0"
                      >
                        <td className="px-4 py-3 font-medium">
                          {grade}
                        </td>

                        <td className="px-4 py-3">
                          {point}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs leading-5 text-gray-500">
              Grade-point scales can differ between universities.
              Verify your institution&apos;s grading regulations before
              using the result for official purposes.
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