"use client";

import { useId, useMemo, useState } from "react";
import type { ProteinLevelId, ProteinPageContent } from "@/lib/types";
import { cn } from "@/lib/utils";

const LEVEL_ORDER: ProteinLevelId[] = [
  "sedentary",
  "light",
  "moderate",
  "active",
  "athlete",
];

const G_PER_KG: Record<ProteinLevelId, { min: number; max: number }> = {
  sedentary: { min: 1.2, max: 1.4 },
  light: { min: 1.4, max: 1.6 },
  moderate: { min: 1.6, max: 1.8 },
  active: { min: 1.8, max: 2.0 },
  athlete: { min: 2.0, max: 2.2 },
};

const MEALS = 3;

interface ProteinCalculatorProps {
  copy: ProteinPageContent;
}

export function ProteinCalculator({ copy }: ProteinCalculatorProps) {
  const weightFieldId = useId();
  const [weightRaw, setWeightRaw] = useState("");
  const [level, setLevel] = useState<ProteinLevelId>("moderate");

  const parsedWeight = useMemo(() => {
    if (weightRaw.trim() === "") return { ok: null as boolean | null, value: 0 };
    const n = Number(weightRaw.replace(",", "."));
    if (!Number.isFinite(n)) return { ok: false, value: 0 };
    if (n < 30 || n > 250) return { ok: false, value: n };
    return { ok: true, value: n };
  }, [weightRaw]);

  const band = G_PER_KG[level];
  const totals =
    parsedWeight.ok === true
      ? {
          minG: Math.round(parsedWeight.value * band.min),
          maxG: Math.round(parsedWeight.value * band.max),
        }
      : null;

  const perMeal =
    totals !== null
      ? {
          minG: Math.round(totals.minG / MEALS),
          maxG: Math.round(totals.maxG / MEALS),
        }
      : null;

  const weightError =
    parsedWeight.ok === false ? copy.validation.weightRange : null;

  const handleClear = () => {
    setWeightRaw("");
    setLevel("moderate");
  };

  const gPerKgLabel = `${band.min}–${band.max}`;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
      <div className="rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-brand-red">
          {copy.calculateLabel}
        </p>
        <p className="mt-3 font-body text-sm text-white/70">{copy.optionalHint}</p>

        <div className="mt-6">
          <label
            htmlFor={weightFieldId}
            className="font-display text-lg uppercase tracking-wide text-white"
          >
            {copy.weightLabel}
          </label>
          <input
            id={weightFieldId}
            type="text"
            inputMode="decimal"
            autoComplete="off"
            value={weightRaw}
            onChange={(e) => setWeightRaw(e.target.value)}
            aria-invalid={weightError ? true : undefined}
            aria-describedby={weightError ? `${weightFieldId}-err` : undefined}
            className={cn(
              "mt-2 w-full rounded-2xl border bg-brand-black px-4 py-3 font-body text-lg text-white outline-none transition-[box-shadow,border-color]",
              "placeholder:text-white/35 focus:border-brand-red focus:ring-2 focus:ring-brand-red/40",
              weightError ? "border-brand-red/80" : "border-white/25"
            )}
            placeholder="75"
          />
          {weightError ? (
            <p
              id={`${weightFieldId}-err`}
              className="mt-2 font-body text-sm text-brand-red"
              role="alert"
            >
              {weightError}
            </p>
          ) : null}
        </div>

        <fieldset className="mt-8 min-w-0 border-0 p-0">
          <legend className="font-display text-lg uppercase tracking-wide text-white">
            {copy.activityLabel}
          </legend>
          <p className="mt-2 font-body text-sm text-white/65">{copy.activityHint}</p>
          <div className="mt-4 space-y-3">
            {LEVEL_ORDER.map((id) => {
              const item = copy.levels[id];
              const selected = level === id;
              return (
                <label
                  key={id}
                  className={cn(
                    "block cursor-pointer rounded-2xl border px-4 py-3 transition-colors",
                    selected
                      ? "border-brand-red bg-brand-red/10"
                      : "border-white/20 bg-brand-black/40 hover:border-white/35"
                  )}
                >
                  <span className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="protein-activity"
                      value={id}
                      checked={selected}
                      onChange={() => setLevel(id)}
                      className="mt-1 h-4 w-4 shrink-0 accent-brand-red"
                    />
                    <span className="min-w-0">
                      <span className="font-display text-sm uppercase tracking-wide text-white">
                        {item.label}
                      </span>
                      <span className="mt-1 block font-body text-sm leading-snug text-white/65">
                        {item.description}
                      </span>
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-8">
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

        {totals !== null && perMeal !== null ? (
          <div className="mt-6 space-y-6">
            <div>
              <p className="font-body text-xs uppercase tracking-wider text-white/55">
                {copy.dailyTargetLabel}
              </p>
              <p className="mt-2 font-display text-5xl leading-none text-emerald-400 sm:text-6xl">
                {totals.minG}
                <span className="mx-1 text-white/50">–</span>
                {totals.maxG}
                <span className="ml-2 font-body text-sm font-normal uppercase tracking-wider text-white/50">
                  g
                </span>
              </p>
              <p className="mt-3 font-body text-sm text-white/60">
                <span className="text-white/80">{gPerKgLabel}</span>
                {" · "}
                {copy.perKgCaption}
              </p>
              <p className="mt-1 font-body text-sm text-white/50">
                {copy.levels[level].label}
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-4">
              <p className="font-body text-xs uppercase tracking-wider text-white/55">
                {copy.perMealTitle}
              </p>
              <p className="mt-2 font-display text-2xl text-white">
                {perMeal.minG}
                <span className="mx-1 text-white/45">–</span>
                {perMeal.maxG}
                <span className="ml-2 font-body text-sm font-normal text-white/55">
                  g
                </span>
              </p>
              <p className="mt-2 font-body text-sm text-white/55">
                {copy.perMealMealsNote}
              </p>
            </div>
          </div>
        ) : (
          <p className="mt-6 font-body text-base leading-relaxed text-white/70">
            {copy.resultEmpty}
          </p>
        )}
      </div>
    </div>
  );
}
