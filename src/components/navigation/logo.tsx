import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 shrink-0"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400">
        <span className="text-black text-xl font-bold">E</span>
      </div>

      <span className="text-[28px] font-semibold tracking-[-0.03em] whitespace-nowrap">
        Essenc
      </span>
    </Link>
  );
}