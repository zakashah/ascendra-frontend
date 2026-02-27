'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function OverviewPage() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  const [openItem, setOpenItem] = useState(true);
  const [active, setActive] = useState('users');

  return <>Your content</>;
}
