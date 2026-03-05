import { cn } from '@/lib/utils';
import { useTabs } from '@/providers/tabs-context';

type TabsContentProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
};

export function TabsContent({ value, children, className }: TabsContentProps) {
  const { active } = useTabs();

  if (active !== value) return null;

  return (
    <div className={cn('mt-8 flex flex-col gap-6', className)}>{children}</div>
  );
}
