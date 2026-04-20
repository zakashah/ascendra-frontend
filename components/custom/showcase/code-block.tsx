'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { LuCopy, LuCheck } from 'react-icons/lu';

type Props = {
  code: string;
  label?: string;
  className?: string;
};

export function CodeBlock({ code, label, className }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className={cn('group relative', className)}>
      {label && (
        <p className="mb-1.5 text-xs font-medium text-muted-foreground">{label}</p>
      )}
      <div className="relative rounded-lg overflow-hidden bg-[oklch(0.14_0.01_286)] border border-white/[0.06]">
        <button
          onClick={handleCopy}
          title="Copy code"
          className="absolute top-3 right-3 z-10 flex h-6 w-6 items-center justify-center rounded-md bg-white/8 text-white/50 transition-all hover:bg-white/14 hover:text-white/80 opacity-0 group-hover:opacity-100"
        >
          {copied ? (
            <LuCheck className="h-3.5 w-3.5 text-green-400" />
          ) : (
            <LuCopy className="h-3.5 w-3.5" />
          )}
        </button>
        <pre className="overflow-x-auto p-4 text-[0.8125rem] leading-relaxed font-mono text-white/80 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
