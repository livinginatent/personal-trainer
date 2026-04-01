import Image from "next/image";
import Link from "next/link";
import type { LocaleContent } from "@/lib/data";
import { Starburst } from "@/components/ui/Starburst";
import { StatBadge } from "@/components/ui/StatBadge";

interface HeroSectionProps {
  content: LocaleContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  const { heroStats, siteContent } = content;
  const headlineSentences =
    siteContent.hero.headline.match(/[^.!?]+[.!?]?/g)?.map((sentence) => sentence.trim()) ??
    [siteContent.hero.headline];

  return (
    <section
      id={siteContent.hero.sectionId}
      className="bg-brand-red px-4 pb-20 pt-32 text-black"
    >
      <div className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-6xl uppercase leading-none text-white sm:text-7xl lg:text-8xl">
            {headlineSentences.map((sentence, index) => (
              <span
                key={`${sentence}-${index}`}
                className={index === 0 ? "block" : "mt-2 block"}
              >
                {sentence}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg">{siteContent.hero.subtext}</p>
          <Link
            href={siteContent.hero.ctaHref}
            className="mt-8 inline-flex rounded-full bg-brand-black px-8 py-4 font-body text-sm font-semibold uppercase tracking-wider text-white"
            aria-label={siteContent.hero.ctaLabel}
          >
            {`${siteContent.hero.ctaLabel} ${siteContent.symbols.arrow}`}
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <Starburst className="absolute -left-10 top-14 h-36 w-36 text-brand-black" />
          <Image
            src={siteContent.hero.imageSrc}
            alt={siteContent.hero.imageAlt}
            width={400}
            height={600}
            priority
            className="relative z-10 h-auto w-full border-4 border-brand-black object-cover"
          />
          <StatBadge
            value={heroStats[0].value}
            label={heroStats[0].label}
            className="absolute -left-6 top-8 z-20"
          />
          <StatBadge
            value={heroStats[1].value}
            label={heroStats[1].label}
            className="absolute -bottom-4 right-0 z-20"
          />
        </div>
      </div>
    </section>
  );
}
