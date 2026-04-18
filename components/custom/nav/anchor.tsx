import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const variants = cva(
  'inline-flex rounded-[5px] text-[12px] font-medium cursor-pointer w-fit shrink-0 focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-2',
  {
    variants: {
      variant: {
        primary:
          'text-[#6C47FF] hover:text-[#5F15FE] dark:text-[#846BFF] dark:hover:text-[#6C47FF]',
        blue: 'text-[#226ED7] hover:text-[#1c5bb6] dark:text-[#3180F5] dark:hover:text-[#226ED7]',
        muted:
          'dark:text-[#ACACB7] dark:hover:text-[#F6F6F7] text-[#5F5F6F] hover:text-[#2B2B34]',
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
