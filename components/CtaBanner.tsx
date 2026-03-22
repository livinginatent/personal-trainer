import Link from "next/link";
import { Sunburst } from "@/components/ui/Sunburst";
import { siteContent } from "@/lib/data";

export function CtaBanner() {
  return (
    <section
      id={siteContent.ctaBanner.sectionId}
      className="bg-brand-black px-4 py-20 text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-6xl uppercase leading-none sm:text-7xl">
            {siteContent.ctaBanner.headline}
          </h2>
          <Link
            href={siteContent.ctaBanner.ctaHref}
            aria-label={siteContent.ctaBanner.ctaLabel}
            className="mt-8 inline-flex rounded-full bg-brand-red px-8 py-4 font-body text-sm font-semibold uppercase tracking-wider text-black"
          >
            {`${siteContent.ctaBanner.ctaLabel} ${siteContent.symbols.arrow}`}
          </Link>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Sunburst className="h-52 w-52" />
        </div>
      </div>
    </section>
  );
}
