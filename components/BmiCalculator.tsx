"use client";

import { useId, useMemo, useState } from "react";
import type { BmiPageContent } from "@/lib/types";
import { cn } from "@/lib/utils";

type BmiBand = "underweight" | "normal" | "overweight" | "obese";

function categoryFromBmi(bmi: number): BmiBand {
  if (bmi < 18.5) return "underweight";
  if (bmi < 25) return "normal";
  if (bmi < 30) return "overweight";
  return "obese";
}

const GAUGE_MIN = 15;
const GAUGE_MAX = 40;

function bmiToGaugePercent(bmi: number): number {
  const clamped = Math.min(Math.max(bmi, GAUGE_MIN), GAUGE_MAX);
  return ((clamped - GAUGE_MIN) / (GAUGE_MAX - GAUGE_MIN)) * 100;
}

const bandStyles: Record<
  BmiBand,
  { text: string; border: string; bgSoft: string }
> = {
  underweight: {
    text: "text-sky-300",
    border: "border-sky-400/60",
    bgSoft: "bg-sky-500/15",
  },
  normal: {
    text: "text-emerald-400",
    border: "border-emerald-400/60",
    bgSoft: "bg-emerald-500/15",
  },
  overweight: {
    text: "text-amber-300",
    border: "border-amber-400/60",
    bgSoft: "bg-amber-500/15",
  },
  obese: {
    text: "text-brand-red",
    border: "border-brand-red/70",
    bgSoft: "bg-brand-red/15",
  },
};

interface BmiCalculatorProps {
  copy: BmiPageContent;
}

export function BmiCalculator({ copy }: BmiCalculatorProps) {
  const heightId = useId();
  const weightId = useId();
  const [heightRaw, setHeightRaw] = useState("");
  const [weightRaw, setWeightRaw] = useState("");

  const parsedHeight = useMemo(() => {
    if (heightRaw.trim() === "") return { ok: null as boolean | null, value: 0 };
    const n = Number(heightRaw.replace(",", "."));
    if (!Number.isFinite(n)) return { ok: false, value: 0 };
    if (n < 50 || n > 250) return { ok: false, value: n };
    return { ok: true, value: n };
  }, [heightRaw]);

  const parsedWeight = useMemo(() => {
    if (weightRaw.trim() === "") return { ok: null as boolean | null, value: 0 };
    const n = Number(weightRaw.replace(",", "."));
    if (!Number.isFinite(n)) return { ok: false, value: 0 };
    if (n < 20 || n > 300) return { ok: false, value: n };
    return { ok: true, value: n };
  }, [weightRaw]);

  const bmi =
    parsedHeight.ok === true && parsedWeight.ok === true
      ? parsedWeight.value / Math.pow(parsedHeight.value / 100, 2)
      : null;

  const band = bmi !== null ? categoryFromBmi(bmi) : null;
  const styles = band ? bandStyles[band] : null;

  const heightError =
    parsedHeight.ok === false ? copy.validation.heightRange : null;
  const weightError =
    parsedWeight.ok === false ? copy.validation.weightRange : null;

  const showPartialHint =
    bmi === null &&
    (parsedHeight.ok === true || parsedWeight.ok === true) &&
    (parsedHeight.ok !== true || parsedWeight.ok !== true);

  const handleClear = () => {
    setHeightRaw("");
    setWeightRaw("");
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
      <div className="rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-brand-red">
          {copy.calculateLabel}
        </p>
        <p className="mt-3 font-body text-sm text-white/70">{copy.optionalHint}</p>
        <div className="mt-6 space-y-6">
          <div>
            <label
              htmlFor={heightId}
              className="font-display text-lg uppercase tracking-wide text-white"
            >
              {copy.heightLabel}
            </label>
            <input
              id={heightId}
              type="text"
              inputMode="decimal"
              autoComplete="off"
              value={heightRaw}
              onChange={(e) => setHeightRaw(e.target.value)}
              aria-invalid={heightError ? true : undefined}
              aria-describedby={heightError ? `${heightId}-err` : undefined}
              className={cn(
                "mt-2 w-full rounded-2xl border bg-brand-black px-4 py-3 font-body text-lg text-white outline-none ring-brand-red/0 transition-[box-shadow,border-color]",
                "placeholder:text-white/35 focus:border-brand-red focus:ring-2 focus:ring-brand-red/40",
                heightError ? "border-brand-red/80" : "border-white/25"
              )}
              placeholder="175"
            />
            {heightError ? (
              <p
                id={`${heightId}-err`}
                className="mt-2 font-body text-sm text-brand-red"
                role="alert"
              >
                {heightError}
              </p>
            ) : null}
          </div>
          <div>
            <label
              htmlFor={weightId}
              className="font-display text-lg uppercase tracking-wide text-white"
            >
              {copy.weightLabel}
            </label>
            <input
              id={weightId}
              type="text"
              inputMode="decimal"
              autoComplete="off"
              value={weightRaw}
              onChange={(e) => setWeightRaw(e.target.value)}
              aria-invalid={weightError ? true : undefined}
              aria-describedby={weightError ? `${weightId}-err` : undefined}
              className={cn(
                "mt-2 w-full rounded-2xl border bg-brand-black px-4 py-3 font-body text-lg text-white outline-none ring-brand-red/0 transition-[box-shadow,border-color]",
                "placeholder:text-white/35 focus:border-brand-red focus:ring-2 focus:ring-brand-red/40",
                weightError ? "border-brand-red/80" : "border-white/25"
              )}
              placeholder="72"
            />
            {weightError ? (
              <p
                id={`${weightId}-err`}
                className="mt-2 font-body text-sm text-brand-red"
                role="alert"
              >
                {weightError}
              </p>
            ) : null}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleClear}
            className="rounded-full border border-white/40 px-6 py-2.5 font-body text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-brand-red hover:text-brand-red"
          >
            {copy.clearLabel}
          </button>
        </div>
      </div>

      <div
        className="rounded-3xl border border-white/15 bg-brand-black p-6 sm:p-8"
        aria-live="polite"
      >
        <h2 className="font-display text-2xl uppercase tracking-wide text-white">
          {copy.resultTitle}
        </h2>

        {bmi !== null && styles && band ? (
          <div className="mt-6 space-y-6">
            <div className="flex flex-wrap items-end gap-3">
              <p
                className={cn(
                  "font-display text-6xl leading-none sm:text-7xl",
                  styles.text
                )}
              >
                {bmi.toFixed(1)}
              </p>
              <span className="pb-1 font-body text-sm uppercase tracking-wider text-white/60">
                {copy.bmiAbbrev}
              </span>
            </div>
            <div
              className={cn(
                "rounded-2xl border px-4 py-4",
                styles.border,
                styles.bgSoft
              )}
            >
              <p className="font-body text-xs uppercase tracking-wider text-white/60">
                {copy.yourCategoryLabel}
              </p>
              <p className={cn("mt-1 font-display text-xl uppercase", styles.text)}>
                {copy.categories[band].label}
              </p>
              <p className="mt-1 font-body text-sm text-white/70">
                {copy.categories[band].rangeLabel}
              </p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-wider text-white/50">
                {copy.gaugeCaption}
              </p>
              <div className="relative mt-3 h-4 overflow-hidden rounded-full bg-white/10">
                <div
                  className="absolute inset-y-0 left-0 w-1/4 bg-sky-500/60"
                  aria-hidden
                />
                <div
                  className="absolute inset-y-0 left-1/4 w-[18%] bg-emerald-500/70"
                  aria-hidden
                />
                <div
                  className="absolute inset-y-0 left-[43%] w-[20%] bg-amber-500/65"
                  aria-hidden
                />
                <div
                  className="absolute inset-y-0 right-0 w-[37%] bg-brand-red/70"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.85)]"
                  style={{ left: `${bmiToGaugePercent(bmi)}%` }}
                  aria-hidden
                />
              </div>
              <div
                className="mt-2 flex justify-between font-body text-[10px] uppercase tracking-wider text-white/45 sm:text-xs"
                aria-hidden
              >
                <span>{GAUGE_MIN}</span>
                <span>{GAUGE_MAX}</span>
              </div>
            </div>
          </div>
        ) : (
          <p className="mt-6 font-body text-base leading-relaxed text-white/70">
            {showPartialHint ? copy.validation.enterBoth : copy.resultEmpty}
          </p>
        )}
      </div>
    </div>
  );
}
