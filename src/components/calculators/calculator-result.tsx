interface CalculatorResultProps {
  label: string;
  value: string;
  description?: string;
}

export default function CalculatorResult({
  label,
  value,
  description,
}: CalculatorResultProps) {
  return (
    <div className="border border-teal-200 bg-teal-50 p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
        Result
      </p>

      <p className="mt-2 text-sm font-medium text-gray-700">
        {label}
      </p>

      <p className="mt-1 text-3xl font-bold tracking-tight text-gray-950">
        {value}
      </p>

      {description && (
        <p className="mt-2 text-sm leading-6 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}