import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { LuCopy, LuCheck, LuCopyCheck } from 'react-icons/lu';

type CopyTextProps = {
  value: string;
  children?: React.ReactNode;
  timeout?: number;
  className?: string;
  showTooltip?: boolean;
};

export function CopyText({
  value,
  children,
  timeout = 1200,
  className,
  showTooltip = false,
}: CopyTextProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);

    setCopied(true);
    if (showTooltip) setOpen(true);

    setTimeout(() => {
      setCopied(false);
      setOpen(false);
    }, timeout);
  };

  const trigger = (
    <span
      onClick={handleCopy}
      onMouseEnter={() => showTooltip && setOpen(true)}
      onMouseLeave={() => showTooltip && setOpen(false)}
      className={cn(
        'group/tt inline-flex cursor-copy items-center gap-1 select-none',
        className
      )}
    >
      {children ?? value}
      <span className="flex h-4 w-4 items-center justify-center">
        {copied ? (
          <LuCopyCheck className="h-3.5 w-3.5 text-green-600" />
        ) : (
          <LuCopy className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover/row:opacity-100 group-hover/tt:opacity-100" />
        )}
      </span>
    </span>
  );

  if (!showTooltip) return trigger;

  return (
    <Tooltip open={open}>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>

      <TooltipContent className="flex items-center gap-1">
        {copied ? (
          <>
            <span>Copied</span>
            <LuCheck />
          </>
        ) : (
          <span>Copy</span>
        )}
      </TooltipContent>
    </Tooltip>
  );
}
