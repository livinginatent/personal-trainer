import Image from "next/image";
import { Starburst } from "@/components/ui/Starburst";
import type { LocaleContent } from "@/lib/data";

interface AboutSectionProps {
  content: LocaleContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  const { siteContent } = content;

  return (
    <section
      id={siteContent.about.sectionId}
      className="bg-brand-black px-4 py-20 text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
          <Image
            src={siteContent.about.imageSrc}
            alt={siteContent.about.imageAlt}
            width={560}
            height={560}
            className="aspect-square w-full border-4 border-brand-red object-cover"
          />
          <Starburst className="absolute -bottom-10 -right-10 h-32 w-32" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-6xl uppercase leading-none sm:text-7xl">
            <span className="block text-white">{siteContent.about.headingLines[0]}</span>
            <span className="mt-2 block text-brand-red">
              {siteContent.about.headingLines[1]}
            </span>
            <span className="mt-2 block text-brand-red">
              {siteContent.about.headingLines[2]}
            </span>
          </h2>
          <p className="mt-6 max-w-lg font-body text-lg">{siteContent.about.body}</p>
        </div>
      </div>
    </section>
  );
}
