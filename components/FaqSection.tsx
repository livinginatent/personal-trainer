"use client";

import Link from "next/link";
import { useState } from "react";
import { FaqItem } from "@/components/ui/FaqItem";
import type { LocaleContent } from "@/lib/data";

interface FaqSectionProps {
  content: LocaleContent;
}

export function FaqSection({ content }: FaqSectionProps) {
  const { faqItems, siteContent } = content;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id={siteContent.faq.sectionId}
      className="bg-brand-black px-4 py-20 text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[320px,1fr]">
        <div>
          <h2 className="font-display text-8xl uppercase leading-none text-white">
            {siteContent.faq.title}
          </h2>
          <Link
            href={siteContent.faq.contactHref}
            aria-label={siteContent.faq.contactLabel}
            className="mt-8 inline-flex rounded-full bg-brand-red px-6 py-3 font-body text-sm font-semibold uppercase tracking-wider text-black"
          >
            {siteContent.faq.contactLabel}
          </Link>
        </div>
        <div>
          {faqItems.map((item, itemIndex) => (
            <FaqItem
              key={item.question}
              index={itemIndex}
              question={item.question}
              answer={item.answer}
              expandLabel={siteContent.faq.expandLabel}
              collapseLabel={siteContent.faq.collapseLabel}
              isOpen={openIndex === itemIndex}
              onToggle={() =>
                setOpenIndex((prev) => (prev === itemIndex ? -1 : itemIndex))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
