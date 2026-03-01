import { cn } from '@/lib/utils';
import { TabsContext } from '@/providers/tabs-context';
import { useState } from 'react';

export function Tabs({
  defaultValue,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & { defaultValue: string }) {
  const [active, setActive] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div className={cn('w-full', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}
