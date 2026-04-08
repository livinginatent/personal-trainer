"use client";

import { useId, useMemo, useState } from "react";
import type { MacroPageContent, MacroPresetId } from "@/lib/types";
import { cn } from "@/lib/utils";

const PRESET_ORDER: Exclude<MacroPresetId, "custom">[] = [
  "balanced",
  "highProtein",
  "performance",
  "lowerCarb",
];

const PRESET_RATIOS: Record<
  Exclude<MacroPresetId, "custom">,
  { p: number; c: number; f: number }
> = {
  balanced: { p: 30, c: 40, f: 30 },
  highProtein: { p: 35, c: 35, f: 30 },
  performance: { p: 25, c: 45, f: 30 },
  lowerCarb: { p: 35, c: 25, f: 40 },
};

const CAL_MIN = 1000;
const CAL_MAX = 6000;

function parsePercent(raw: string): number | null {
  const n = Number(raw.replace(",", ".").trim());
  if (!Number.isFinite(n)) return null;
  if (n < 0 || n > 100) return null;
  return n;
}

interface MacroCalculatorProps {
  copy: MacroPageContent;
}

export function MacroCalculator({ copy }: MacroCalculatorProps) {
  const caloriesId = useId();
  const pId = useId();
  const cId = useId();
  const fId = useId();

  const [caloriesRaw, setCaloriesRaw] = useState("");
  const [preset, setPreset] = useState<MacroPresetId>("balanced");
  const [customP, setCustomP] = useState("30");
  const [customC, setCustomC] = useState("40");
  const [customF, setCustomF] = useState("30");

  const parsedCalories = useMemo(() => {
    if (caloriesRaw.trim() === "") return { ok: null as boolean | null, value: 0 };
    const n = Number(caloriesRaw.replace(",", "."));
    if (!Number.isFinite(n)) return { ok: false, value: 0 };
    if (n < CAL_MIN || n > CAL_MAX) return { ok: false, value: n };
    return { ok: true, value: n };
  }, [caloriesRaw]);

  const ratios = useMemo(() => {
    if (preset !== "custom") {
      return PRESET_RATIOS[preset] as { p: number; c: number; f: number };
    }
    const p = parsePercent(customP);
    const c = parsePercent(customC);
    const f = parsePercent(customF);
    if (p === null || c === null || f === null) return null;
    const sum = p + c + f;
    if (Math.abs(sum - 100) > 0.5) return null;
    return { p, c, f };
  }, [preset, customP, customC, customF]);

  const grams =
    parsedCalories.ok === true && ratios !== null
      ? {
          p: Math.round((parsedCalories.value * ratios.p) / 100 / 4),
          c: Math.round((parsedCalories.value * ratios.c) / 100 / 4),
          f: Math.round((parsedCalories.value * ratios.f) / 100 / 9),
        }
      : null;

  const caloriesError =
    parsedCalories.ok === false ? copy.validation.caloriesRange : null;

  const customPercentError = useMemo(() => {
    if (preset !== "custom") return null;
    const p = parsePercent(customP);
    const c = parsePercent(customC);
    const f = parsePercent(customF);
    if (p === null || c === null || f === null) return copy.validation.percentInvalid;
    const sum = p + c + f;
    if (Math.abs(sum - 100) > 0.5) return copy.percentSumError;
    return null;
  }, [preset, customP, customC, customF, copy]);

  const kcalFromMacros =
    grams !== null ? 4 * grams.p + 4 * grams.c + 9 * grams.f : null;

  const handleClear = () => {
    setCaloriesRaw("");
    setPreset("balanced");
    setCustomP("30");
    setCustomC("40");
    setCustomF("30");
  };

  const showResult =
    parsedCalories.ok === true && ratios !== null && grams !== null;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
      <div className="rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-brand-red">
          {copy.calculateLabel}
        </p>
        <p className="mt-3 font-body text-sm text-white/70">{copy.optionalHint}</p>

        <div className="mt-6">
          <label
            htmlFor={caloriesId}
            className="font-display text-lg uppercase tracking-wide text-white"
          >
            {copy.caloriesLabel}
          </label>
          <p className="mt-1 font-body text-sm text-white/55">{copy.caloriesHint}</p>
          <input
            id={caloriesId}
            type="text"
            inputMode="numeric"
            autoComplete="off"
            value={caloriesRaw}
            onChange={(e) => setCaloriesRaw(e.target.value)}
            aria-invalid={caloriesError ? true : undefined}
            aria-describedby={caloriesError ? `${caloriesId}-err` : undefined}
            className={cn(
              "mt-2 w-full rounded-2xl border bg-brand-black px-4 py-3 font-body text-lg text-white outline-none transition-[box-shadow,border-color]",
              "placeholder:text-white/35 focus:border-brand-red focus:ring-2 focus:ring-brand-red/40",
              caloriesError ? "border-brand-red/80" : "border-white/25"
            )}
            placeholder="2200"
          />
          {caloriesError ? (
            <p
              id={`${caloriesId}-err`}
              className="mt-2 font-body text-sm text-brand-red"
              role="alert"
            >
              {caloriesError}
            </p>
          ) : null}
        </div>

        <fieldset className="mt-8 min-w-0 border-0 p-0">
          <legend className="font-display text-lg uppercase tracking-wide text-white">
            {copy.splitLabel}
          </legend>
          <p className="mt-2 font-body text-sm text-white/65">{copy.splitHint}</p>
          <div className="mt-4 space-y-3">
            {PRESET_ORDER.map((id) => {
              const item = copy.presets[id];
              const selected = preset === id;
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
                      name="macro-preset"
                      value={id}
                      checked={selected}
                      onChange={() => setPreset(id)}
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
            <label
              className={cn(
                "block cursor-pointer rounded-2xl border px-4 py-3 transition-colors",
                preset === "custom"
                  ? "border-brand-red bg-brand-red/10"
                  : "border-white/20 bg-brand-black/40 hover:border-white/35"
              )}
            >
              <span className="flex items-start gap-3">
                <input
                  type="radio"
                  name="macro-preset"
                  value="custom"
                  checked={preset === "custom"}
                  onChange={() => setPreset("custom")}
                  className="mt-1 h-4 w-4 shrink-0 accent-brand-red"
                />
                <span className="min-w-0 flex-1">
                  <span className="font-display text-sm uppercase tracking-wide text-white">
                    {copy.presets.custom.label}
                  </span>
                  <span className="mt-1 block font-body text-sm leading-snug text-white/65">
                    {copy.presets.custom.description}
                  </span>
                </span>
              </span>
            </label>
          </div>
        </fieldset>

        {preset === "custom" ? (
          <div className="mt-6 rounded-2xl border border-white/15 bg-brand-black/50 p-4">
            <p className="font-body text-sm font-semibold text-white">
              {copy.customSplitLabel}
            </p>
            <p className="mt-1 font-body text-xs text-white/50">{copy.percentHint}</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div>
                <label htmlFor={pId} className="font-body text-xs uppercase text-white/70">
                  {copy.proteinPercentLabel}
                </label>
                <input
                  id={pId}
                  type="text"
                  inputMode="decimal"
                  value={customP}
                  onChange={(e) => setCustomP(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-white/25 bg-brand-black px-3 py-2 font-body text-white outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/40"
                />
              </div>
              <div>
                <label htmlFor={cId} className="font-body text-xs uppercase text-white/70">
                  {copy.carbsPercentLabel}
                </label>
                <input
                  id={cId}
                  type="text"
                  inputMode="decimal"
                  value={customC}
                  onChange={(e) => setCustomC(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-white/25 bg-brand-black px-3 py-2 font-body text-white outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/40"
                />
              </div>
              <div>
                <label htmlFor={fId} className="font-body text-xs uppercase text-white/70">
                  {copy.fatPercentLabel}
                </label>
                <input
                  id={fId}
                  type="text"
                  inputMode="decimal"
                  value={customF}
                  onChange={(e) => setCustomF(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-white/25 bg-brand-black px-3 py-2 font-body text-white outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/40"
                />
              </div>
            </div>
            {customPercentError ? (
              <p className="mt-3 font-body text-sm text-brand-red" role="alert">
                {customPercentError}
              </p>
            ) : null}
          </div>
        ) : null}

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

        {showResult && grams && ratios && parsedCalories.ok === true ? (
          <div className="mt-6 space-y-6">
            <div>
              <p className="font-body text-xs uppercase tracking-wider text-white/55">
                {copy.totalCaloriesLabel}
              </p>
              <p className="mt-1 font-display text-3xl text-white">
                {Math.round(parsedCalories.value)}{" "}
                <span className="font-body text-base font-normal text-white/55">kcal</span>
              </p>
              <p className="mt-3 font-body text-xs uppercase tracking-wider text-white/45">
                {copy.macroBreakdownLabel}
              </p>
              <ul className="mt-3 space-y-3">
                <li className="flex items-baseline justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  <span className="font-body text-sm text-white/80">{copy.proteinG}</span>
                  <span className="font-display text-2xl text-sky-300">
                    {grams.p}{" "}
                    <span className="font-body text-sm font-normal text-white/45">g</span>
                  </span>
                </li>
                <li className="flex items-baseline justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  <span className="font-body text-sm text-white/80">{copy.carbsG}</span>
                  <span className="font-display text-2xl text-amber-200">
                    {grams.c}{" "}
                    <span className="font-body text-sm font-normal text-white/45">g</span>
                  </span>
                </li>
                <li className="flex items-baseline justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  <span className="font-body text-sm text-white/80">{copy.fatG}</span>
                  <span className="font-display text-2xl text-brand-red">
                    {grams.f}{" "}
                    <span className="font-body text-sm font-normal text-white/45">g</span>
                  </span>
                </li>
              </ul>
              <p className="mt-4 font-body text-sm text-white/60">
                {ratios.p}% {copy.splitShortLabels.protein} · {ratios.c}%{" "}
                {copy.splitShortLabels.carbs} · {ratios.f}% {copy.splitShortLabels.fat}
              </p>
              {kcalFromMacros !== null ? (
                <>
                  <p className="mt-3 font-body text-xs text-white/50">{copy.energyNote}</p>
                  <p className="mt-1 font-body text-xs text-white/50">
                    {copy.roundedMacrosEnergy.replace("{n}", String(kcalFromMacros))}
                  </p>
                </>
              ) : null}
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
