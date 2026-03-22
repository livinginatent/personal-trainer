"use client";

import { useState } from "react";
import { siteContent, testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeSlide = (direction: "next" | "prev") => {
    if (isFading) {
      return;
    }

    setIsFading(true);
    setTimeout(() => {
      setIndex((prev) => {
        if (direction === "next") {
          return (prev + 1) % testimonials.length;
        }
        return (prev - 1 + testimonials.length) % testimonials.length;
      });
      setIsFading(false);
    }, 300);
  };

  const current = testimonials[index];

  return (
    <section
      id={siteContent.testimonials.sectionId}
      className="bg-brand-black px-4 py-20 text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[260px,1fr]">
        <div className="flex h-64 flex-col justify-between border border-brand-red bg-brand-black p-6">
          <h2 className="font-display text-5xl uppercase leading-none text-brand-red">
            {siteContent.testimonials.title}
          </h2>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => changeSlide("prev")}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-red text-brand-red transition-colors hover:bg-brand-red hover:text-black"
              aria-label={siteContent.testimonials.previousLabel}
            >
              {siteContent.symbols.previous}
            </button>
            <button
              type="button"
              onClick={() => changeSlide("next")}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-red text-brand-red transition-colors hover:bg-brand-red hover:text-black"
              aria-label={siteContent.testimonials.nextLabel}
            >
              {siteContent.symbols.next}
            </button>
          </div>
        </div>

        <article
          className={cn(
            "transition-opacity duration-300",
            isFading ? "opacity-0" : "opacity-100"
          )}
        >
          <p className="font-display text-8xl leading-none text-brand-red">
            {siteContent.testimonials.quoteMark}
          </p>
          <p className="max-w-3xl font-body text-2xl leading-relaxed">{current.quote}</p>
          <div className="mt-8 flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red font-body font-bold text-black">
              {current.avatar ?? current.name.charAt(0)}
            </span>
            <p className="font-body text-lg">{current.name}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
