interface NumberInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  helpText?: string;
}

export default function NumberInput({
  label,
  value,
  onChange,
  placeholder,
  min,
  max,
  step = 1,
  helpText,
}: NumberInputProps) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-800">
        {label}
      </span>

      <input
        type="number"
        inputMode="decimal"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        className="mt-2 h-12 w-full border border-gray-300 bg-white px-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-700"
      />

      {helpText && (
        <span className="mt-1.5 block text-xs leading-5 text-gray-500">
          {helpText}
        </span>
      )}
    </label>
  );
}