import { siteContent } from "@/lib/data";
import { cn } from "@/lib/utils";

interface FaqItemProps {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqItem({
  index,
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItemProps) {
  const itemNumber = String(index + 1).padStart(2, "0");
  const buttonLabel = isOpen
    ? siteContent.faq.collapseLabel
    : siteContent.faq.expandLabel;

  return (
    <article className="border-b border-brand-red py-6">
      <button
        type="button"
        onClick={onToggle}
        aria-label={`${buttonLabel}: ${question}`}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <div className="flex items-start gap-4">
          <span className="font-display text-5xl leading-none text-brand-red">
            {itemNumber}
          </span>
          <h3 className="pt-2 font-body text-xl font-bold text-white">{question}</h3>
        </div>
        <span
          className={cn(
            "pt-2 font-display text-3xl leading-none text-brand-red transition-transform",
            isOpen ? "rotate-45" : "rotate-0"
          )}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <p
        className={cn(
          "overflow-hidden font-body text-sm text-white transition-all duration-300",
          isOpen ? "mt-4 max-h-40 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        {answer}
      </p>
    </article>
  );
}
