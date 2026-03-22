import { cn } from "@/lib/utils";

interface StatBadgeProps {
  value: string;
  label: string;
  className?: string;
}

export function StatBadge({ value, label, className }: StatBadgeProps) {
  return (
    <div
      className={cn(
        "rounded-full border border-brand-red bg-brand-black px-4 py-2 text-white",
        className
      )}
    >
      <p className="font-display text-2xl leading-none">{value}</p>
      <p className="font-body text-xs uppercase tracking-wide">{label}</p>
    </div>
  );
}
