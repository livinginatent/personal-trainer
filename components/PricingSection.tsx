import { PricingCard } from "@/components/ui/PricingCard";
import { pricingPlans, siteContent } from "@/lib/data";

export function PricingSection() {
  return (
    <section
      id={siteContent.pricing.sectionId}
      className="bg-brand-red px-4 py-20 text-black"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-center font-display text-6xl uppercase leading-none sm:text-7xl">
          {siteContent.pricing.title}
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} featured={plan.featured} />
          ))}
        </div>
      </div>
    </section>
  );
}
