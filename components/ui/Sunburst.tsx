import { cn } from "@/lib/utils";

interface SunburstProps {
  className?: string;
}

export function Sunburst({ className }: SunburstProps) {
  return (
    <svg
      className={cn("text-brand-red", className)}
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="140" cy="140" r="56" fill="currentColor" />
      <path
        d="M140 8V56M140 224V272M272 140H224M56 140H8M233.3 46.7L199.4 80.6M80.6 199.4L46.7 233.3M233.3 233.3L199.4 199.4M80.6 80.6L46.7 46.7M195 24.9L173 67.5M107 212.5L85 255.1M255.1 85L212.5 107M67.5 173L24.9 195M255.1 195L212.5 173M67.5 107L24.9 85M195 255.1L173 212.5M107 67.5L85 24.9"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
