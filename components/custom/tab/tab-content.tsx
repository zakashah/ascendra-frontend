import { cn } from '@/lib/utils';
import { useTabs } from '@/providers/tabs-context';

type TabsContentProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
};

export function TabContent({ value, children, className }: TabsContentProps) {
  const { active } = useTabs();

  if (active !== value) return null;

  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <div className="flex flex-wrap items-start gap-8">{children}</div>
    </div>
  );
}
