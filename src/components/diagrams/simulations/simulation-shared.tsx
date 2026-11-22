'use client';

import React from 'react';
import type { SimulationParamValue } from '@/types/diagrams';

export type SimParamMap = Record<string, SimulationParamValue>;

export function getNumParam(
  params: SimParamMap,
  key: string,
  fallback: number,
  min?: number,
  max?: number,
): number {
  const raw = params[key];
  let val =
    typeof raw === 'number'
      ? raw
      : typeof raw === 'string' && raw.trim() !== '' && Number.isFinite(Number(raw))
        ? Number(raw)
        : fallback;
  if (!Number.isFinite(val)) val = fallback;
  if (min !== undefined) val = Math.max(min, val);
  if (max !== undefined) val = Math.min(max, val);
  return val;
}

export function getStrParam(
  params: SimParamMap,
  key: string,
  fallback: string,
): string {
  const raw = params[key];
  return typeof raw === 'string' && raw.trim() !== '' ? raw : fallback;
}

export function getBoolParam(
  params: SimParamMap,
  key: string,
  fallback: boolean,
): boolean {
  const raw = params[key];
  if (typeof raw === 'boolean') return raw;
  if (raw === 'true') return true;
  if (raw === 'false') return false;
  return fallback;
}

export interface SimSliderProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  accentColor?: string;
  decimals?: number;
  onChange: (value: number) => void;
}

export function SimSlider({
  id,
  label,
  value,
  min,
  max,
  step,
  unit = '',
  decimals,
  onChange,
}: SimSliderProps) {
  const displayVal =
    decimals !== undefined
      ? value.toFixed(decimals)
      : Number.isInteger(step)
        ? String(Math.round(value))
        : String(Number(value.toFixed(2)));

  return (
    <div className="glass-surface rounded-2xl px-3.5 py-2.5">
      <div className="flex items-center justify-between gap-2 text-xs">
        <label
          htmlFor={id}
          className="font-medium text-[#1D1D1F] dark:text-[#F5F5F7]"
        >
          {label}
        </label>
        <span className="glass-pill rounded-full px-2 py-0.5 font-mono text-[11px] font-semibold tabular-nums text-[#1D1D1F] dark:text-[#F5F5F7]">
          {displayVal}
          {unit ? ` ${unit}` : ''}
        </span>
      </div>
      <input
        id={id}
        type="range"
        aria-label={label}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 h-1.5 w-full cursor-pointer accent-[#2563EB] dark:accent-[#60A5FA]"
      />
      <div className="mt-0.5 flex justify-between font-mono text-[10px] text-[#6E6E73] dark:text-[#98989D]">
        <span>
          {min}
          {unit ? ` ${unit}` : ''}
        </span>
        <span>
          {max}
          {unit ? ` ${unit}` : ''}
        </span>
      </div>
    </div>
  );
}

export interface SimReadoutCardProps {
  label: string;
  value: string;
  tone?: 'neutral' | 'emerald' | 'blue' | 'amber' | 'rose' | 'indigo';
  subtext?: string;
}

const TONE_CLASSES: Record<NonNullable<SimReadoutCardProps['tone']>, string> = {
  neutral: 'text-[#1D1D1F] dark:text-[#F5F5F7]',
  emerald: 'text-emerald-700 dark:text-emerald-300',
  blue: 'text-blue-700 dark:text-blue-300',
  amber: 'text-amber-700 dark:text-amber-300',
  rose: 'text-rose-700 dark:text-rose-300',
  indigo: 'text-indigo-700 dark:text-indigo-300',
};

export function SimReadoutCard({
  label,
  value,
  tone = 'neutral',
  subtext,
}: SimReadoutCardProps) {
  return (
    <div className="glass-surface rounded-2xl px-3 py-2.5">
      <div className="font-mono text-[10.5px] font-semibold tracking-wide text-[#6E6E73] dark:text-[#98989D]">
        {label}
      </div>
      <div className={`mt-0.5 font-mono text-xs font-semibold tabular-nums ${TONE_CLASSES[tone]}`}>
        {value}
      </div>
      {subtext && (
        <div className="mt-0.5 text-[10.5px] leading-snug text-[#6E6E73] dark:text-[#98989D]">
          {subtext}
        </div>
      )}
    </div>
  );
}

export interface SimModeButtonGroupProps<T extends string> {
  label?: string;
  value: T;
  options: Array<{ value: T; label: string }>;
  onChange: (value: T) => void;
}

export function SimModeButtonGroup<T extends string>({
  label,
  value,
  options,
  onChange,
}: SimModeButtonGroupProps<T>) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {label && (
        <span className="mr-1 font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
          {label}
        </span>
      )}
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(opt.value)}
            className={`inline-flex h-7 cursor-pointer items-center rounded-full px-3 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25 ${
              active
                ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                : 'glass-pill text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:text-[#F5F5F7]'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
