import { DashboardHeader } from '@/components/layout/dashboard-header';
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="mx-auto w-full max-w-screen-2xl px-6 py-6">
        {children}
      </main>
    </div>
  );
}
