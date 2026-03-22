import { siteContent } from "@/lib/data";
import type { PricingPlan } from "@/lib/types";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  plan: PricingPlan;
  featured?: boolean;
}

export function PricingCard({ plan, featured = false }: PricingCardProps) {
  const isFeatured = featured || Boolean(plan.featured);

  return (
    <article
      className={cn(
        "flex h-full flex-col border bg-brand-black p-8 text-white",
        isFeatured ? "border-black" : "border-brand-red"
      )}
    >
      {isFeatured ? (
        <div className="mb-6 -mt-8 -mx-8 bg-brand-red px-8 py-2 text-center font-body text-sm font-semibold uppercase tracking-widest text-black">
          {siteContent.pricing.featuredLabel}
        </div>
      ) : null}
      <h3 className="font-display text-4xl uppercase tracking-wide">{plan.name}</h3>
      <p className="mt-3 font-body text-sm text-white">{plan.description}</p>
      <p className="mt-6 font-display text-6xl leading-none">
        {siteContent.symbols.currency}
        {plan.price}
      </p>
      <ul className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-red"
              aria-hidden="true"
            />
            <span className="font-body text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        aria-label={`${siteContent.pricing.ctaLabel} ${plan.name}`}
        className="mt-8 rounded-full border border-brand-red px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-brand-red hover:text-black"
      >
        {siteContent.pricing.ctaLabel}
      </button>
    </article>
  );
}
