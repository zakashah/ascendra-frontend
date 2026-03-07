import { cn } from '@/lib/utils';
import { useTabs } from '@/providers/tabs-context';
import clsx from 'clsx';
import Link from 'next/link';
import { BubbleBadge } from '../common-ui/bubble-badge';

export function TabTrigger({
  value,
  disabled,
  dirty,
  className,
  children,
  ...props
}: React.ComponentProps<'button'> & {
  value: string;
  disabled?: boolean;
  dirty?: boolean;
}) {
  const { active, setActive } = useTabs();
  const isActive = active === value;

  const handleClick = () => {
    if (disabled || isActive) return;
    setActive(value);
  };

  return (
    <div className="pl-0.5">
      <Link
        href={'#'}
        className={clsx(
          'focus-visible:outline-primary hover:text-foreground inline-flex h-6 items-center rounded-[0.375rem] px-2 text-nowrap transition-colors focus-visible:outline-2',
          isActive ? 'text-foreground cursor-default' : 'text-muted-foreground',
          disabled ? 'cursor-not-allowed opacity-50' : '',
          className
        )}
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <span
          className={clsx(
            'relative',
            isActive &&
              "after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:bg-black after:content-[''] dark:after:bg-white"
          )}
        >
          <div className="flex items-baseline gap-1.5">
            {dirty && <BubbleBadge color="orange" size="sm" />}
            {children}
          </div>
        </span>
      </Link>
    </div>
  );
}
