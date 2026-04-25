'use client';

import { useState } from 'react';
import {
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
  useComboboxAnchor,
} from '@/components/custom/ui/combobox';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from '@/components/custom/ui/input-group';
import {
  BuildingIcon,
  SearchIcon,
  UserIcon,
} from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
];

const grouped = {
  fruits: [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ],
  vegetables: [
    { value: 'carrot', label: 'Carrot' },
    { value: 'broccoli', label: 'Broccoli' },
    { value: 'spinach', label: 'Spinach' },
  ],
};

const users = [
  { value: 'alice', label: 'Alice Johnson', role: 'Admin' },
  { value: 'bob', label: 'Bob Smith', role: 'Editor' },
  { value: 'charlie', label: 'Charlie Lee', role: 'Viewer' },
  { value: 'diana', label: 'Diana Park', role: 'Editor' },
];

const orgs = [
  { value: 'acme', label: 'Acme Corp', type: 'Company' },
  { value: 'globex', label: 'Globex', type: 'Company' },
  { value: 'initech', label: 'Initech', type: 'Startup' },
];

/* ─── Helper components ─────────────────────────────────────────────────────── */

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-sm font-medium">{title}</p>
        {description && (
          <p className="text-muted-foreground mt-0.5 text-xs">{description}</p>
        )}
      </div>
      <div className="flex flex-wrap items-start gap-4">{children}</div>
    </div>
  );
}

function FruitItems() {
  return (
    <>
      {fruits.map((f) => (
        <ComboboxItem key={f.value} value={f.value}>
          {f.label}
        </ComboboxItem>
      ))}
    </>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default function ComboboxShowcase() {
  /* Basic */
  const [basic, setBasic] = useState<string | null>(null);

  /* Multiple */
  const [multi, setMulti] = useState<string[]>([]);

  /* Chips */
  const [chips, setChips] = useState<string[]>([]);
  const chipsAnchor = useComboboxAnchor();

  /* showClear */
  const [withClear, setWithClear] = useState<string | null>(null);

  /* Grouped */
  const [grouped2, setGrouped2] = useState<string | null>(null);

  /* ComboboxItem custom */
  const [customItem, setCustomItem] = useState<string | null>(null);
  const [orgItem, setOrgItem] = useState<string | null>(null);

  /* Invalid */
  const [invalidVal, setInvalidVal] = useState<string | null>(null);
  const [invalidChips, setInvalidChips] = useState<string[]>([]);
  const invalidChipsAnchor = useComboboxAnchor();

  /* Input Group integration */
  const [inputGroup, setInputGroup] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-3xl space-y-12 p-8">
      <div>
        <h1 className="text-lg font-semibold">Combobox</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Searchable select built on Base UI. Supports single, multiple,
          chips, groups, validation states, and Input Group composition.
        </p>
      </div>

      {/* ── Basic ─────────────────────────────────────────────────────────── */}
      <Section title="Basic" description="Single value, filterable.">
        <Combobox value={basic} onValueChange={setBasic}>
          <ComboboxInput placeholder="Select a fruit…" className="w-52" />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No results.</ComboboxEmpty>
              <ComboboxCollection>
                <FruitItems />
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Section>

      {/* ── Multiple ──────────────────────────────────────────────────────── */}
      <Section
        title="Multiple"
        description="Multi-select with checkmarks. Selected value shown in input."
      >
        <Combobox value={multi} onValueChange={setMulti} multiple>
          <ComboboxInput placeholder="Select fruits…" className="w-52" />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No results.</ComboboxEmpty>
              <ComboboxCollection>
                <FruitItems />
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Section>

      {/* ── ComboboxChips ─────────────────────────────────────────────────── */}
      <Section
        title="ComboboxChips"
        description="Multi-select with removable chip tags inline in the input."
      >
        <Combobox value={chips} onValueChange={setChips} multiple>
          <ComboboxChips ref={chipsAnchor} className="w-80">
            {chips.map((v) => (
              <ComboboxChip key={v} value={v}>
                {fruits.find((f) => f.value === v)?.label ?? v}
              </ComboboxChip>
            ))}
            <ComboboxChipsInput placeholder="Add fruit…" />
          </ComboboxChips>
          <ComboboxContent anchor={chipsAnchor}>
            <ComboboxList>
              <ComboboxEmpty>No results.</ComboboxEmpty>
              <ComboboxCollection>
                <FruitItems />
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Section>

      {/* ── showClear ─────────────────────────────────────────────────────── */}
      <Section
        title="showClear"
        description="Clear button appears when a value is selected."
      >
        <Combobox value={withClear} onValueChange={setWithClear}>
          <ComboboxInput
            placeholder="Select a fruit…"
            showClear
            className="w-52"
          />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No results.</ComboboxEmpty>
              <ComboboxCollection>
                <FruitItems />
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Section>

      {/* ── ComboboxGroup + ComboboxSeparator ────────────────────────────── */}
      <Section
        title="ComboboxGroup + ComboboxSeparator"
        description="Options organised under labelled groups with a visual separator."
      >
        <Combobox value={grouped2} onValueChange={setGrouped2}>
          <ComboboxInput placeholder="Select a food…" className="w-52" />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No results.</ComboboxEmpty>
              <ComboboxCollection>
                <ComboboxGroup>
                  <ComboboxLabel>Fruits</ComboboxLabel>
                  {grouped.fruits.map((f) => (
                    <ComboboxItem key={f.value} value={f.value}>
                      {f.label}
                    </ComboboxItem>
                  ))}
                </ComboboxGroup>
                <ComboboxSeparator />
                <ComboboxGroup>
                  <ComboboxLabel>Vegetables</ComboboxLabel>
                  {grouped.vegetables.map((v) => (
                    <ComboboxItem key={v.value} value={v.value}>
                      {v.label}
                    </ComboboxItem>
                  ))}
                </ComboboxGroup>
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Section>

      {/* ── ComboboxItem with icon ────────────────────────────────────────── */}
      <Section
        title="ComboboxItem"
        description="Items with leading icons and secondary text."
      >
        {/* Users */}
        <Combobox value={customItem} onValueChange={setCustomItem}>
          <ComboboxInput placeholder="Assign to…" className="w-56" />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No users found.</ComboboxEmpty>
              <ComboboxCollection>
                {users.map((u) => (
                  <ComboboxItem key={u.value} value={u.value}>
                    <span className="flex items-center gap-2">
                      <UserIcon className="text-muted-foreground size-3.5" />
                      <span>{u.label}</span>
                      <span className="text-muted-foreground ml-auto text-xs">
                        {u.role}
                      </span>
                    </span>
                  </ComboboxItem>
                ))}
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>

        {/* Orgs */}
        <Combobox value={orgItem} onValueChange={setOrgItem}>
          <ComboboxInput placeholder="Select organisation…" className="w-56" />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No organisations.</ComboboxEmpty>
              <ComboboxCollection>
                {orgs.map((o) => (
                  <ComboboxItem key={o.value} value={o.value}>
                    <span className="flex items-center gap-2">
                      <BuildingIcon className="text-muted-foreground size-3.5" />
                      <span>{o.label}</span>
                      <span className="text-muted-foreground ml-auto text-xs">
                        {o.type}
                      </span>
                    </span>
                  </ComboboxItem>
                ))}
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Section>

      {/* ── aria-invalid ──────────────────────────────────────────────────── */}
      <Section
        title="aria-invalid"
        description="Error state on ComboboxInput and ComboboxChips."
      >
        {/* Input invalid */}
        <Combobox value={invalidVal} onValueChange={setInvalidVal}>
          <ComboboxInput
            placeholder="Select a fruit…"
            className="w-52"
            aria-invalid
          />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No results.</ComboboxEmpty>
              <ComboboxCollection>
                <FruitItems />
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>

        {/* Chips invalid */}
        <Combobox value={invalidChips} onValueChange={setInvalidChips} multiple>
          <ComboboxChips
            ref={invalidChipsAnchor}
            className="w-72"
            aria-invalid
          >
            {invalidChips.map((v) => (
              <ComboboxChip key={v} value={v}>
                {fruits.find((f) => f.value === v)?.label ?? v}
              </ComboboxChip>
            ))}
            <ComboboxChipsInput placeholder="Add fruit…" />
          </ComboboxChips>
          <ComboboxContent anchor={invalidChipsAnchor}>
            <ComboboxList>
              <ComboboxEmpty>No results.</ComboboxEmpty>
              <ComboboxCollection>
                <FruitItems />
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Section>

      {/* ── Disabled ──────────────────────────────────────────────────────── */}
      <Section title="Disabled" description="Fully non-interactive.">
        <Combobox disabled>
          <ComboboxInput
            placeholder="Select a fruit…"
            className="w-52"
            disabled
          />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxCollection>
                <FruitItems />
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Section>

      {/* ── Input Group ───────────────────────────────────────────────────── */}
      <Section
        title="Input Group"
        description="ComboboxInput composed with a leading InputGroupAddon icon."
      >
        <Combobox value={inputGroup} onValueChange={setInputGroup}>
          <ComboboxInput placeholder="Search fruits…" className="w-64">
            <InputGroupAddon align="inline-start">
              <InputGroupText>
                <SearchIcon className="text-muted-foreground size-4" />
              </InputGroupText>
            </InputGroupAddon>
          </ComboboxInput>
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No results.</ComboboxEmpty>
              <ComboboxCollection>
                <FruitItems />
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Section>
    </div>
  );
}
