import { InfoIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/custom/ui/button';

interface UnsavedChangesBarProps {
  show: boolean;
  onSave?: () => void;
  onReset?: () => void;
  saveLabel?: string;
  resetLabel?: string;
  message?: string;
  isLoading?: boolean;
}

export function UnsavedChangesBar({
  show,
  onSave,
  onReset,
  saveLabel = 'Save',
  resetLabel = 'Reset',
  message = 'Please check the form for errors',
  isLoading = false,
}: UnsavedChangesBarProps) {
  return (
    <div
      className={cn(
        'fixed bottom-8 left-1/2 z-50 -translate-x-1/2 transition-all duration-200',
        show
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      )}
    >
      <div className="flex items-center justify-between gap-6 rounded-md bg-[#1c1c1f] bg-linear-to-b py-2 pr-2 pl-3 shadow-[inset_0_0_0_1px_#2f3037,inset_0_2px_0_theme(--color-white/0.12),inset_0_0_2px_2px_theme(--color-white/0.06),0_16px_36px_-6px_theme(--color-black/0.36),0_6px_16px_-2px_theme(--color-black/0.2)] dark:shadow-[inset_0_0_0_1px_theme(--color-black/0.8),inset_0_2px_0_theme(--color-white/0.12),inset_0_0_2px_2px_theme(--color-white/0.06),0_16px_36px_-6px_theme(--color-black/0.36),0_6px_16px_-2px_theme(--color-black/0.2)]">
        <span className="flex items-center gap-1.5 text-sm font-normal whitespace-nowrap text-white">
          <InfoIcon className="size-3.5 shrink-0 stroke-3" />
          {message}
        </span>
        <div className="flex items-center gap-2.5">
          <Button
            variant="destructive"
            size="sm"
            onClick={onReset}
            disabled={isLoading}
            className="h-6"
          >
            {resetLabel}
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={onSave}
            disabled={isLoading}
            className="h-6"
          >
            {saveLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
