'use client';

import { TabsNav } from '@/components/custom/nav/tabs-nav';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function OverviewPage() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  const [openItem, setOpenItem] = useState(true);
  const [active, setActive] = useState('users');

  return (
    <>
      <header className="flex flex-wrap items-center justify-between pb-6">
        <div>this is long left side left this is long left side left</div>
        <div className="w-full sm:w-fit">right</div>
      </header>
      <main className="flex flex-col gap-8">
        <TabsNav
          tabs={[
            { id: 'tab1', label: 'Tab 1' },
            { id: 'tab2', label: 'Tab 2' },
            { id: 'tab3', label: 'Tab 3' },
          ]}
          defaultActive="tab1"
        />
        <main className="h-300">div content</main>
      </main>
    </>
  );
}
