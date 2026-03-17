import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const variants = cva(
  'inline-flex rounded-[5px] cursor-pointer w-fit shrink-0 focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-2',
  {
    variants: {
      variant: {
        primary: 'text-primary dark:text-[#846BFF]',
        blue: 'text-[#236dd7] hover:text-[#1c5bb6] dark:text-[#3180F5] dark:hover:text-[#236dd7]',
        muted: 'text-muted-foreground hover:text-muted-foreground/90',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

type AnchorProps = React.ComponentProps<'a'> & VariantProps<typeof variants>;

export function Anchor({
  className,
  variant,
  children,
  ...props
}: AnchorProps) {
  return (
    <a
      data-slot="anchor"
      className={cn(variants({ variant }), className)}
      {...props}
    >
      {children}
    </a>
  );
}
