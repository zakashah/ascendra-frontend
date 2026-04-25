"use client"

import * as React from "react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/custom/ui/input-group"
import { ChevronDownIcon, XIcon, CheckIcon } from "lucide-react"

const Combobox = ComboboxPrimitive.Root

function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />
}

function ComboboxTrigger({
  className,
  children,
  ...props
}: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn("[&_svg:not([class*='size-'])]:size-4", className)}
      {...props}
    >
      {children}
      <ChevronDownIcon className="text-muted-foreground size-4 pointer-events-none" />
    </ComboboxPrimitive.Trigger>
  )
}

function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      render={<InputGroupButton variant="ghost" size="icon-xs" />}
      className={cn(className)}
      {...props}
    >
      <XIcon className="pointer-events-none" />
    </ComboboxPrimitive.Clear>
  )
}

function ComboboxInput({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...props
}: ComboboxPrimitive.Input.Props & {
  showTrigger?: boolean
  showClear?: boolean
}) {
  return (
    <InputGroup className={cn("w-auto", className)}>
      <ComboboxPrimitive.Input
        render={<InputGroupInput disabled={disabled} />}
        {...props}
      />
      <InputGroupAddon align="inline-end">
        {showTrigger && (
          <InputGroupButton
            size="icon-xs"
            variant="ghost"
            asChild
            className="group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent"
            disabled={disabled}
          >
            <ComboboxTrigger />
          </InputGroupButton>
        )}
        {showClear && <ComboboxClear disabled={disabled} />}
      </InputGroupAddon>
      {children}
    </InputGroup>
  )
}

function ComboboxContent({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  anchor,
  ...props
}: ComboboxPrimitive.Popup.Props &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    "side" | "align" | "sideOffset" | "alignOffset" | "anchor"
  >) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className="isolate z-50"
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-content"
          data-chips={!!anchor}
          className={cn(
            // Group context (used by Empty)
            "group/combobox-content relative",
            // Sizing
            "max-h-(--available-height) w-(--anchor-width) max-w-(--available-width)",
            "min-w-[calc(var(--anchor-width)+--spacing(7))]",
            "origin-(--transform-origin)",
            "data-[chips=true]:min-w-(--anchor-width)",
            // Background + shape — matches SelectContent / DropdownMenuContent
            "[:where(&)]:bg-white dark:[:where(&)]:bg-secondary",
            "[:where(&)]:rounded-md overflow-hidden",
            // Ring
            "[:where(&)]:ring-1 [:where(&)]:ring-[#191c21]/8",
            "dark:[:where(&)]:ring-[#111113]/32",
            // Dark inner ring overlay (matches SelectContent)
            "dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:z-10",
            "dark:after:size-full dark:after:rounded-[inherit] dark:after:ring-1 dark:after:ring-white/4 dark:after:ring-inset",
            // Shadow
            "shadow-[0_16px_36px_-6px_rgba(0,0,0,.07),0_6px_16px_-2px_rgba(0,0,0,.2)]",
            // Animation
            "data-open:animate-in data-closed:animate-out",
            "data-closed:fade-out-0 data-open:fade-in-0",
            "data-closed:zoom-out-95 data-open:zoom-in-95",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            "data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2",
            "duration-100",
            className
          )}
          {...props}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  )
}

function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={cn(
        "no-scrollbar overflow-y-auto overscroll-contain",
        "max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))]",
        "scroll-py-1 p-1 data-empty:p-0",
        className
      )}
      {...props}
    />
  )
}

function ComboboxItem({
  className,
  children,
  ...props
}: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        // Layout — matches SelectItem grid approach
        "group relative grid cursor-default grid-cols-[1rem_1fr] items-center gap-2",
        "rounded-[0.375rem] px-2 py-1 text-sm outline-hidden select-none",
        // Highlight state (hover / keyboard)
        "data-highlighted:bg-[#f6f6f7] data-highlighted:text-foreground",
        "data-highlighted:ring-1 data-highlighted:ring-[#EBEBED] data-highlighted:ring-inset",
        "dark:data-highlighted:bg-border dark:data-highlighted:ring-[#1f1f23]",
        // Selected state (Base UI uses data-selected)
        "data-selected:bg-[#f6f6f7] data-selected:text-foreground",
        "data-selected:ring-1 data-selected:ring-[#EBEBED] data-selected:ring-inset",
        "dark:data-selected:bg-border dark:data-selected:ring-[#1f1f23]",
        // Clerk pattern: fade selected bg when hovering other items
        "group-hover/content:data-selected:not-data-highlighted:bg-transparent",
        "group-hover/content:data-selected:not-data-highlighted:ring-0",
        // SVG
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        // Disabled
        "data-disabled:pointer-events-none data-disabled:opacity-40",
        className
      )}
      {...props}
    >
      <span className="flex size-4 items-center justify-center">
        <ComboboxPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </ComboboxPrimitive.ItemIndicator>
      </span>
      {children}
    </ComboboxPrimitive.Item>
  )
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={cn("scroll-my-1", className)}
      {...props}
    />
  )
}

function ComboboxLabel({
  className,
  ...props
}: ComboboxPrimitive.GroupLabel.Props) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      className={cn("text-muted-foreground px-1.5 py-1 text-xs", className)}
      {...props}
    />
  )
}

function ComboboxCollection({ ...props }: ComboboxPrimitive.Collection.Props) {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  )
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "text-muted-foreground hidden w-full justify-center py-6 text-center text-sm",
        "group-data-empty/combobox-content:flex",
        className
      )}
      {...props}
    />
  )
}

function ComboboxSeparator({
  className,
  ...props
}: ComboboxPrimitive.Separator.Props) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function ComboboxChips({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof ComboboxPrimitive.Chips> &
  ComboboxPrimitive.Chips.Props) {
  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      className={cn(
        // Shape + background — matches custom InputGroup
        "dark:bg-secondary rounded-[.375rem] bg-white transition",
        // Base ring
        "ring-1 ring-(--color-umbra)/12",
        "dark:ring-(--color-gray-1000)/88 dark:ring-inset",
        // Base shadow
        "shadow-[0_2px_2px_-1px_rgba(0,0,0,0.06),0_4px_4px_-2px_rgba(0,0,0,0.04)]",
        "dark:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24)]",
        // Focus shadow
        "focus-within:shadow-[0_0_0_3px_rgba(0,0,0,0.08),0_4px_4px_-1px_rgba(0,0,0,0.08),0_4px_4px_-2px_rgba(0,0,0,0.04)]",
        "dark:focus-within:shadow-[0_0_0_3px_rgba(61,61,74,0.4),0_4px_4px_-1px_rgba(0,0,0,0.08),0_4px_4px_-2px_rgba(0,0,0,0.16)]",
        // Invalid
        "has-aria-invalid:ring-[var(--color-red-700)] dark:has-aria-invalid:ring-[var(--color-red-600)]",
        "has-aria-invalid:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_#e02e2e,0_4px_4px_-2px_rgba(0,0,0,0.06)]",
        "dark:has-aria-invalid:shadow-[0_-1px_1px_rgba(255,255,255,0.12),0_0_0_1px_#f73d3d,0_0_0_2px_rgba(0,0,0,0.16)]",
        // Disabled
        "has-disabled:cursor-not-allowed has-disabled:opacity-40",
        // Layout
        "flex min-h-8 flex-wrap items-center gap-1 px-2 py-1 text-sm",
        "has-data-[slot=combobox-chip]:px-1",
        className
      )}
      {...props}
    />
  )
}

function ComboboxChip({
  className,
  children,
  showRemove = true,
  ...props
}: ComboboxPrimitive.Chip.Props & {
  showRemove?: boolean
}) {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(
        "bg-[var(--color-gray-100)] text-foreground",
        "border border-[var(--color-gray-200)]",
        "dark:bg-[var(--color-gray-1300)] dark:border-[var(--color-gray-1100)]",
        "flex h-[calc(--spacing(5.25))] w-fit items-center justify-center gap-1",
        "rounded-[0.25rem] px-1.5 text-xs font-medium whitespace-nowrap",
        "has-data-[slot=combobox-chip-remove]:pr-0",
        "has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      {showRemove && (
        <ComboboxPrimitive.ChipRemove
          render={<Button variant="ghost" size="icon-xs" />}
          className="-ml-1 opacity-50 hover:opacity-100"
          data-slot="combobox-chip-remove"
        >
          <XIcon className="pointer-events-none" />
        </ComboboxPrimitive.ChipRemove>
      )}
    </ComboboxPrimitive.Chip>
  )
}

function ComboboxChipsInput({
  className,
  ...props
}: ComboboxPrimitive.Input.Props) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-chip-input"
      className={cn(
        "min-w-16 flex-1 bg-transparent px-1 py-0.5 text-sm outline-none",
        "placeholder:text-gray-500 dark:placeholder:text-gray-700",
        className
      )}
      {...props}
    />
  )
}

function useComboboxAnchor() {
  return React.useRef<HTMLDivElement | null>(null)
}

export {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
}
