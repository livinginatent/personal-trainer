import { cn } from "@/lib/utils";

interface StarburstProps {
  className?: string;
}

export function Starburst({ className }: StarburstProps) {
  return (
    <svg
      className={cn("text-brand-red", className)}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M110 10L124 76L172 28L144 90L210 76L152 110L210 144L144 130L172 192L124 144L110 210L96 144L48 192L76 130L10 144L68 110L10 76L76 90L48 28L96 76L110 10Z"
        fill="currentColor"
      />
    </svg>
  );
}
