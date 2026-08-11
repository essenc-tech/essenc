"use client";

import { Trash2 } from "lucide-react";

export interface SubjectRow {
  id: number;
  name: string;
  credits: string;
  grade: string;
}

interface SubjectTableProps {
  subjects: SubjectRow[];
  onUpdate: (
    id: number,
    field: keyof Omit<SubjectRow, "id">,
    value: string
  ) => void;
  onRemove: (id: number) => void;
}

const grades = [
  { label: "O", point: 10 },
  { label: "A+", point: 9 },
  { label: "A", point: 8 },
  { label: "B+", point: 7 },
  { label: "B", point: 6 },
  { label: "C", point: 5 },
  { label: "P", point: 4 },
  { label: "F", point: 0 },
];

export default function SubjectTable({
  subjects,
  onUpdate,
  onRemove,
}: SubjectTableProps) {
  return (
    <div className="overflow-x-auto border border-gray-200">
      <table className="w-full min-w-[680px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50 text-left">
            <th className="px-4 py-3 font-semibold text-gray-700">
              Subject
            </th>

            <th className="w-32 px-4 py-3 font-semibold text-gray-700">
              Credits
            </th>

            <th className="w-48 px-4 py-3 font-semibold text-gray-700">
              Grade
            </th>

            <th className="w-24 px-4 py-3 text-right font-semibold text-gray-700">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {subjects.map((subject) => (
            <tr
              key={subject.id}
              className="border-b border-gray-100 last:border-b-0"
            >
              <td className="px-4 py-3">
                <input
                  type="text"
                  value={subject.name}
                  onChange={(event) =>
                    onUpdate(
                      subject.id,
                      "name",
                      event.target.value
                    )
                  }
                  placeholder="e.g. Mathematics"
                  className="h-11 w-full border border-gray-300 bg-white px-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-gray-700"
                />
              </td>

              <td className="px-4 py-3">
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  step="0.5"
                  value={subject.credits}
                  onChange={(event) =>
                    onUpdate(
                      subject.id,
                      "credits",
                      event.target.value
                    )
                  }
                  placeholder="4"
                  className="h-11 w-full border border-gray-300 bg-white px-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-gray-700"
                />
              </td>

              <td className="px-4 py-3">
                <select
                  value={subject.grade}
                  onChange={(event) =>
                    onUpdate(
                      subject.id,
                      "grade",
                      event.target.value
                    )
                  }
                  className="h-11 w-full border border-gray-300 bg-white px-3 text-sm outline-none focus:border-gray-700"
                >
                  <option value="">Select grade</option>

                  {grades.map((grade) => (
                    <option
                      key={grade.label}
                      value={grade.label}
                    >
                      {grade.label} — {grade.point} points
                    </option>
                  ))}
                </select>
              </td>

              <td className="px-4 py-3 text-right">
                <button
                  type="button"
                  onClick={() => onRemove(subject.id)}
                  disabled={subjects.length === 1}
                  aria-label={`Remove ${subject.name || "subject"}`}
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
  );
}