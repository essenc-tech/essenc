"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, RotateCcw } from "lucide-react";

import CalculatorResult from "@/components/calculators/calculator-result";
import Breadcrumbs from "@/components/tools/breadcrumbs";
import RelatedTools from "@/components/tools/related-tools";
import ToolStructuredData from "@/components/seo/tool-structured-data";

type ConversionMethod = "9.5" | "10";

const faqs = [
  {
    question: "How do I convert CGPA to percentage?",
    answer:
      "CGPA can be converted to percentage using a formula specified by your university or education board. Two commonly used formulas are CGPA × 9.5 and (CGPA − 0.5) × 10.",
  },
  {
    question: "What is the formula CGPA × 9.5?",
    answer:
      "Under this conversion method, percentage is calculated by multiplying CGPA by 9.5. For example, a CGPA of 8.0 gives 76%.",
  },
  {
    question: "What is the formula (CGPA − 0.5) × 10?",
    answer:
      "Under this conversion method, subtract 0.5 from the CGPA and multiply the result by 10. For example, a CGPA of 8.0 gives 75%.",
  },
  {
    question: "Which CGPA to percentage formula should I use?",
    answer:
      "Use the formula officially specified by your university, college, board or institution. Conversion methods can differ between institutions.",
  },
];

export default function CGPAToPercentagePage() {
  const [cgpa, setCgpa] = useState("");
  const [method, setMethod] =
    useState<ConversionMethod>("9.5");

  const cgpaValue = Number(cgpa);

  const valid =
    cgpa !== "" &&
    Number.isFinite(cgpaValue) &&
    cgpaValue >= 0 &&
    cgpaValue <= 10;

  let percentage: number | null = null;

  if (valid) {
    percentage =
      method === "9.5"
        ? cgpaValue * 9.5
        : (cgpaValue - 0.5) * 10;
  }

  const reset = () => {
    setCgpa("");
    setMethod("9.5");
  };

  const formula =
    method === "9.5"
      ? "Percentage = CGPA × 9.5"
      : "Percentage = (CGPA − 0.5) × 10";

  return (
    <>
      <ToolStructuredData
        name="CGPA to Percentage Calculator"
        description="Convert CGPA into percentage using a selected conversion method."
        url="https://essenc.tech/college/cgpa-to-percentage"
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
                label: "CGPA to Percentage",
              },
            ]}
          />

          <div className="mt-7 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              College Calculator
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-950 sm:text-4xl">
              CGPA to Percentage Calculator
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Convert your CGPA into percentage using a common
              conversion formula. Select the method used by your
              institution and calculate your percentage instantly.
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
                  Convert CGPA to percentage
                </h2>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Enter your CGPA and select the conversion formula.
                </p>
              </div>

              <div className="mt-7">
                <label
                  htmlFor="cgpa"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  CGPA
                </label>

                <input
                  id="cgpa"
                  type="number"
                  min="0"
                  max="10"
                  step="0.01"
                  inputMode="decimal"
                  value={cgpa}
                  onChange={(event) =>
                    setCgpa(event.target.value)
                  }
                  placeholder="e.g. 8.5"
                  className="h-12 w-full border border-gray-300 bg-white px-4 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                />

                <p className="mt-2 text-xs text-gray-500">
                  Enter a CGPA between 0 and 10.
                </p>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="conversion-method"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Conversion method
                </label>

                <select
                  id="conversion-method"
                  value={method}
                  onChange={(event) =>
                    setMethod(
                      event.target.value as ConversionMethod
                    )
                  }
                  className="h-12 w-full border border-gray-300 bg-white px-4 text-sm outline-none focus:border-gray-700"
                >
                  <option value="9.5">
                    CGPA × 9.5
                  </option>

                  <option value="10">
                    (CGPA − 0.5) × 10
                  </option>
                </select>
              </div>

              {cgpa !== "" && !valid && (
                <div
                  role="alert"
                  className="mt-5 border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800"
                >
                  Please enter a valid CGPA between 0 and 10.
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
                    label="Equivalent Percentage"
                    value={`${percentage.toFixed(2)}%`}
                    description={`Calculated using ${formula}.`}
                  />

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        CGPA
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {cgpaValue.toFixed(2)}
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Formula
                      </p>

                      <p className="mt-1 text-base font-semibold text-gray-950">
                        {formula}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-gray-900">
                  Important
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-700">
                  CGPA conversion formulas vary between universities
                  and education boards. Always use the official
                  conversion method specified by your institution when
                  submitting academic documents.
                </p>
              </div>
            </section>

            <aside className="h-fit border border-gray-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-gray-950">
                Conversion formula
              </h2>

              <div className="mt-4 space-y-4">
                <div className="border border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Method 1
                  </p>

                  <p className="mt-2 font-mono text-sm text-gray-900">
                    Percentage = CGPA × 9.5
                  </p>
                </div>

                <div className="border border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Method 2
                  </p>

                  <p className="mt-2 font-mono text-sm text-gray-900">
                    Percentage = (CGPA − 0.5) × 10
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <article className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-950">
              How to convert CGPA to percentage
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              CGPA, or Cumulative Grade Point Average, is commonly
              represented on a 10-point scale. To convert CGPA into a
              percentage, you need to use the conversion formula
              specified by your institution.
            </p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              CGPA × 9.5 formula
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              One commonly used conversion method is to multiply the
              CGPA by 9.5.
            </p>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                Percentage = CGPA × 9.5
              </p>

              <p className="mt-3 font-mono text-sm leading-7 text-gray-900">
                Example: 8.0 × 9.5 = 76%
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              (CGPA − 0.5) × 10 formula
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Another conversion method subtracts 0.5 from the CGPA
              before multiplying the result by 10.
            </p>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                Percentage = (CGPA − 0.5) × 10
              </p>

              <p className="mt-3 font-mono text-sm leading-7 text-gray-900">
                Example: (8.0 − 0.5) × 10 = 75%
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              CGPA to percentage examples
            </h2>

            <div className="mt-5 overflow-x-auto border border-gray-200 bg-white">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold">
                      CGPA
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      CGPA × 9.5
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      (CGPA − 0.5) × 10
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["6.0", "57%", "55%"],
                    ["7.0", "66.5%", "65%"],
                    ["8.0", "76%", "75%"],
                    ["8.5", "80.75%", "80%"],
                    ["9.0", "85.5%", "85%"],
                    ["9.5", "90.25%", "90%"],
                  ].map(([value, first, second]) => (
                    <tr
                      key={value}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <td className="px-4 py-3 font-medium">
                        {value}
                      </td>

                      <td className="px-4 py-3">
                        {first}
                      </td>

                      <td className="px-4 py-3">
                        {second}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Which CGPA conversion formula should you use?
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              There is no single universal CGPA-to-percentage formula
              that applies to every institution. Universities and
              education boards can use different conversion rules.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              If you are converting CGPA for an application, transcript,
              scholarship, examination or job, check the official
              instructions from your institution before selecting a
              formula.
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
                "/college/cgpa-calculator",
                "/college/percentage-to-cgpa",
                "/college/sgpa-to-cgpa",
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