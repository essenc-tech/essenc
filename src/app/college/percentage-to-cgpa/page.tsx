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
    question: "How do I convert percentage to CGPA?",
    answer:
      "Percentage can be converted to an approximate CGPA by reversing a commonly used CGPA-to-percentage formula. The correct conversion method depends on your institution.",
  },
  {
    question: "How do I convert percentage to CGPA using 9.5?",
    answer:
      "If the CGPA-to-percentage formula is Percentage = CGPA × 9.5, then CGPA can be estimated as Percentage ÷ 9.5.",
  },
  {
    question: "How do I convert percentage to CGPA using the 0.5 formula?",
    answer:
      "If the conversion formula is Percentage = (CGPA − 0.5) × 10, then the approximate CGPA is calculated as (Percentage ÷ 10) + 0.5.",
  },
  {
    question: "Is percentage to CGPA conversion the same for every university?",
    answer:
      "No. Universities and education boards can use different grading and conversion systems. Always check your institution's official conversion rules.",
  },
];

export default function PercentageToCGPAPage() {
  const [percentage, setPercentage] = useState("");
  const [method, setMethod] =
    useState<ConversionMethod>("9.5");

  const percentageValue = Number(percentage);

  const valid =
    percentage !== "" &&
    Number.isFinite(percentageValue) &&
    percentageValue >= 0 &&
    percentageValue <= 100;

  let cgpa: number | null = null;

  if (valid) {
    cgpa =
      method === "9.5"
        ? percentageValue / 9.5
        : percentageValue / 10 + 0.5;

    cgpa = Math.min(10, Math.max(0, cgpa));
  }

  const reset = () => {
    setPercentage("");
    setMethod("9.5");
  };

  const formula =
    method === "9.5"
      ? "CGPA = Percentage ÷ 9.5"
      : "CGPA = (Percentage ÷ 10) + 0.5";

  return (
    <>
      <ToolStructuredData
        name="Percentage to CGPA Calculator"
        description="Convert percentage into an approximate CGPA using a selected conversion method."
        url="https://essenc.tech/college/percentage-to-cgpa"
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
                label: "Percentage to CGPA",
              },
            ]}
          />

          <div className="mt-7 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              College Calculator
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-950 sm:text-4xl">
              Percentage to CGPA Calculator
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Convert your percentage into an approximate CGPA using
              a common conversion method. Select the formula that
              matches your institutions grading system.
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
                  Convert percentage to CGPA
                </h2>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Enter your percentage and select the conversion
                  method.
                </p>
              </div>

              <div className="mt-7">
                <label
                  htmlFor="percentage"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Percentage
                </label>

                <input
                  id="percentage"
                  type="number"
                  min="0"
                  max="100"
                  step="0.01"
                  inputMode="decimal"
                  value={percentage}
                  onChange={(event) =>
                    setPercentage(event.target.value)
                  }
                  placeholder="e.g. 85"
                  className="h-12 w-full border border-gray-300 bg-white px-4 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700"
                />

                <p className="mt-2 text-xs text-gray-500">
                  Enter a percentage between 0 and 100.
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
                    CGPA = Percentage ÷ 9.5
                  </option>

                  <option value="10">
                    CGPA = (Percentage ÷ 10) + 0.5
                  </option>
                </select>
              </div>

              {percentage !== "" && !valid && (
                <div
                  role="alert"
                  className="mt-5 border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800"
                >
                  Please enter a valid percentage between 0 and 100.
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

              {cgpa !== null && (
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <CalculatorResult
                    label="Equivalent CGPA"
                    value={cgpa.toFixed(2)}
                    description={`Calculated using ${formula}.`}
                  />

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Percentage
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-950">
                        {percentageValue.toFixed(2)}%
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5">
                      <p className="text-sm font-medium text-gray-700">
                        Formula
                      </p>

                      <p className="mt-1 text-sm font-semibold leading-6 text-gray-950">
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
                  Percentage-to-CGPA conversion is an estimate unless
                  your institution officially specifies the formula.
                  Always follow your university or education boards
                  grading rules for academic applications.
                </p>
              </div>
            </section>

            <aside className="h-fit border border-gray-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-gray-950">
                Conversion formulas
              </h2>

              <div className="mt-4 space-y-4">
                <div className="border border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Method 1
                  </p>

                  <p className="mt-2 font-mono text-sm text-gray-900">
                    CGPA = Percentage ÷ 9.5
                  </p>
                </div>

                <div className="border border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Method 2
                  </p>

                  <p className="mt-2 font-mono text-sm text-gray-900">
                    CGPA = (Percentage ÷ 10) + 0.5
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <article className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-950">
              How to convert percentage to CGPA
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Percentage and CGPA are two different ways of representing
              academic performance. When you need to convert between
              them, the correct formula depends on the grading system
              used by your institution.
            </p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Percentage ÷ 9.5 method
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              If your institution uses the formula Percentage = CGPA ×
              9.5, you can reverse the formula to estimate CGPA.
            </p>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                CGPA = Percentage ÷ 9.5
              </p>

              <p className="mt-3 font-mono text-sm leading-7 text-gray-900">
                Example: 85 ÷ 9.5 = 8.95
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              (Percentage ÷ 10) + 0.5 method
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              If your institution uses Percentage = (CGPA − 0.5) × 10,
              the reverse calculation is:
            </p>

            <div className="mt-5 border border-gray-200 bg-white p-5">
              <p className="font-mono text-sm leading-7 text-gray-900">
                CGPA = (Percentage ÷ 10) + 0.5
              </p>

              <p className="mt-3 font-mono text-sm leading-7 text-gray-900">
                Example: (85 ÷ 10) + 0.5 = 9.00
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-950">
              Percentage to CGPA examples
            </h2>

            <div className="mt-5 overflow-x-auto border border-gray-200 bg-white">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold">
                      Percentage
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      ÷ 9.5
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      ÷ 10 + 0.5
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["60%", "6.32", "6.50"],
                    ["70%", "7.37", "7.50"],
                    ["75%", "7.89", "8.00"],
                    ["80%", "8.42", "8.50"],
                    ["85%", "8.95", "9.00"],
                    ["90%", "9.47", "9.50"],
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
              Which conversion method should you use?
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              There is no universal percentage-to-CGPA formula for all
              universities. Different institutions may use different
              grading scales and conversion rules.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              If the conversion is required for an official application,
              examination, scholarship or transcript, use the method
              provided by your institution rather than relying only on
              an approximate online conversion.
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
                "/college/cgpa-to-percentage",
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