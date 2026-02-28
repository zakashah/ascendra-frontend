'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

type Tab = {
  id: string;
  label: string;
};

type TabsNavProps = {
  tabs: Tab[];
  defaultActive?: string;
  className?: string;
  onChange?: (id: string) => void;
};

export function TabsNav({
  tabs,
  defaultActive,
  className,
  onChange,
}: TabsNavProps) {
  const [active, setActive] = useState(defaultActive ?? tabs[0]?.id);

  const handleChange = (id: string) => {
    setActive(id);
    onChange?.(id);
  };

  return (
    <nav className={cn('', className)}>
      <div className="text-foreground relative">
        {/* Fixed bottom border line */}
        <div className="bg-border/60 pointer-events-none absolute inset-x-0 bottom-0 h-px" />

        <div className="no-scrollbar overflow-x-auto">
          <div className="flex h-12 items-center gap-6 px-4 whitespace-nowrap">
            {tabs.map((tab) => {
              const isActive = tab.id === active;

              return (
                <button
                  key={tab.id}
                  onClick={() => handleChange(tab.id)}
                  className={cn(
                    'relative h-full text-sm font-medium transition-colors',
                    'hover:text-foreground',
                    isActive ? 'text-foreground' : 'text-muted-foreground'
                  )}
                >
                  {tab.label}

                  {/* Active underline */}
                  {isActive && (
                    <span className="bg-primary absolute inset-x-0 bottom-0 h-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
