"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Why this exists: a native <select>'s closed box can be themed with CSS
// in every browser, but the OPEN options popup is rendered by the OS/
// browser shell, not the page — Safari (macOS + iOS) and Windows Chrome
// in particular ignore author styling on <option> almost entirely and
// fall back to a plain native list. That's a platform limitation, not
// something fixable with more CSS. Radix's Select primitive renders the
// listbox as real, styleable DOM in a portal, while still producing a
// hidden native <select> that mirrors its state — so it keeps working
// with plain HTML form submission (FormData, Netlify Forms) exactly like
// before, with the same `name`/`required`/`value` contract.

export type SelectOption = {
  value: string;
  label: string;
  icon?: LucideIcon;
};

export function Select({
  name,
  options,
  placeholder,
  defaultValue,
  required,
  invalid,
  describedBy,
  onValueChange,
  triggerId,
}: {
  name: string;
  options: SelectOption[];
  placeholder: string;
  defaultValue?: string;
  required?: boolean;
  invalid?: boolean;
  describedBy?: string;
  onValueChange?: (value: string) => void;
  triggerId?: string;
}) {
  return (
    <SelectPrimitive.Root
      name={name}
      defaultValue={defaultValue}
      required={required}
      onValueChange={onValueChange}
    >
      <SelectPrimitive.Trigger
        id={triggerId}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        className={`flex w-full items-center justify-between gap-2 rounded-[var(--radius-md)] border ${
          invalid ? "border-[var(--color-failed)]/60" : "border-white/15"
        } bg-white/[0.02] px-4 py-3 text-sm text-[var(--color-warm-paper)] outline-none transition-colors duration-150 hover:border-white/25 focus:border-[var(--color-gold-bright)] data-[placeholder]:text-[var(--color-warm-paper)]/50 data-[state=open]:border-[var(--color-gold-bright)]`}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <ChevronDown
            size={16}
            strokeWidth={2}
            className="shrink-0 text-[var(--color-gold-bright)] transition-transform duration-150 data-[state=open]:rotate-180"
            aria-hidden
          />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          sideOffset={8}
          className="z-[60] max-h-[min(24rem,var(--radix-select-content-available-height))] w-[var(--radix-select-trigger-width)] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-gold)]/25 bg-[var(--color-dark-slate)]/95 shadow-2xl backdrop-blur-md animate-fade-up [animation-duration:150ms]"
        >
          <SelectPrimitive.ScrollUpButton className="flex h-7 items-center justify-center text-[var(--color-gold-bright)]">
            <ChevronDown size={14} strokeWidth={2} className="rotate-180" aria-hidden />
          </SelectPrimitive.ScrollUpButton>

          <SelectPrimitive.Viewport className="p-1.5">
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option.value}
                value={option.value}
                className="group relative flex cursor-pointer select-none items-center gap-3 rounded-[var(--radius-md)] py-3 pl-3 pr-9 text-sm font-medium text-[var(--color-warm-paper)]/90 outline-none transition-colors duration-100 data-[highlighted]:bg-[var(--color-gold)]/10 data-[highlighted]:text-[var(--color-warm-paper)] data-[state=checked]:text-[var(--color-gold-bright)]"
              >
                {option.icon && (
                  <option.icon
                    size={16}
                    strokeWidth={1.75}
                    className="shrink-0 text-[var(--color-gold-bright)]/70 transition-colors duration-100 group-data-[highlighted]:text-[var(--color-gold-bright)]"
                    aria-hidden
                  />
                )}
                <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="absolute right-3 flex items-center">
                  <Check size={16} strokeWidth={2.5} className="text-[var(--color-gold-bright)]" aria-hidden />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>

          <SelectPrimitive.ScrollDownButton className="flex h-7 items-center justify-center text-[var(--color-gold-bright)]">
            <ChevronDown size={14} strokeWidth={2} aria-hidden />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
