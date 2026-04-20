import { ShowcaseNav } from '@/components/custom/showcase/showcase-nav';

export default function ShowcaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <ShowcaseNav />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
