'use client';

import { useState, useEffect, useRef } from 'react';
import { InfoIcon, CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/custom/ui/button';

type Phase = 'idle' | 'tried' | 'error' | 'success';

interface UnsavedChangesBarProps {
  isDirty: boolean;
  onSave?: () => boolean | Promise<boolean> | void;
  onReset?: () => void;
  saveLabel?: string;
  resetLabel?: string;
  /** Shown when the bar is in its default idle state */
  message?: string;
  /** Shown after clicking Save with a dirty/invalid form */
  validationMessage?: string;
  /** Shown while isSaving is true */
  savingMessage?: string;
  /** Shown on successful save */
  successMessage?: string;
  /** Shown when onSave returns false */
  errorMessage?: string;
  /** Hides buttons and shows savingMessage */
  isSaving?: boolean;
  /** Externally signals a successful save; triggers success state */
  isDone?: boolean;
}

export function UnsavedChangesBar({
  isDirty,
  onSave,
  onReset,
  saveLabel = 'Save',
  resetLabel = 'Reset',
  message = 'Unsaved changes',
  validationMessage = 'Please check the form for errors',
  savingMessage = 'Saving changes…',
  successMessage = 'Saved successfully',
  errorMessage = 'Failed to save. Please try again.',
  isSaving = false,
  isDone = false,
}: UnsavedChangesBarProps) {
  const [phase, setPhase] = useState<Phase>('idle');
  const barRef = useRef<HTMLDivElement>(null);

  // Adjusting state during render (React-recommended alternative to effects for prop-derived state).
  // When isDirty flips to false, reset out of tried/error so the button reverts to saveLabel.
  const [prevIsDirty, setPrevIsDirty] = useState(isDirty);
  if (prevIsDirty !== isDirty) {
    setPrevIsDirty(isDirty);
    if (!isDirty && (phase === 'tried' || phase === 'error')) {
      setPhase('idle');
    }
  }

  // When the parent signals success externally, enter success phase.
  const [prevIsDone, setPrevIsDone] = useState(isDone);
  if (prevIsDone !== isDone) {
    setPrevIsDone(isDone);
    if (isDone && phase !== 'success') setPhase('success');
  }

  // Auto-hide after success — timer is the only external side-effect needed.
  useEffect(() => {
    if (phase === 'success') {
      const t = setTimeout(() => setPhase('idle'), 2000);
      return () => clearTimeout(t);
    }
  }, [phase]);

  function triggerNudge() {
    const el = barRef.current;
    if (!el) return;
    el.classList.remove('animate-nudge-strong');
    void el.offsetWidth; // force reflow to restart the animation
    el.classList.add('animate-nudge-strong');
  }

  async function handleSave() {
    if (isDirty) {
      triggerNudge();
      setPhase('tried');
      /* if (phase === 'tried' || phase === 'error') {
        triggerNudge();
      } else {
        setPhase('tried');
      } */
      return;
    }

    if (!onSave) return;

    try {
      const result = await Promise.resolve(onSave());
      if (result === false) {
        setPhase('error');
      } else if (result === true) {
        setPhase('success'); // useEffect handles the 2s auto-hide
      }
      // void/undefined: caller manages isSaving / isDone externally
    } catch {
      setPhase('error');
    }
  }

  function handleReset() {
    setPhase('idle');
    onReset?.();
  }

  const isSuccess = phase === 'success';
  const isTriedState = phase === 'tried';
  const isErrorState = phase === 'error';
  const isOpen = isDirty || isSaving || isSuccess || isErrorState;

  const currentMessage = isSaving
    ? savingMessage
    : isSuccess
      ? successMessage
      : isErrorState
        ? errorMessage
        : isTriedState
          ? validationMessage
          : message;

  return (
    <div
      className={cn(
        'fixed bottom-8 left-1/2 z-50 -translate-x-1/2 transition-all duration-200',
        isOpen
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      )}
    >
      <div
        ref={barRef}
        className="flex items-center justify-between gap-6 rounded-md bg-[#1c1c1f] bg-linear-to-b py-2 pr-2 pl-3 shadow-[inset_0_0_0_1px_#2f3037,inset_0_2px_0_theme(--color-white/0.12),inset_0_0_2px_2px_theme(--color-white/0.06),0_16px_36px_-6px_theme(--color-black/0.36),0_6px_16px_-2px_theme(--color-black/0.2)] dark:shadow-[inset_0_0_0_1px_theme(--color-black/0.8),inset_0_2px_0_theme(--color-white/0.12),inset_0_0_2px_2px_theme(--color-white/0.06),0_16px_36px_-6px_theme(--color-black/0.36),0_6px_16px_-2px_theme(--color-black/0.2)]"
      >
        <span
          className={cn(
            'flex items-center gap-1.5 text-sm font-normal whitespace-nowrap',
            isSuccess ? 'text-green-400' : 'text-white'
          )}
        >
          {isSaving ? (
            <Loader2 className="size-3.5 shrink-0 animate-spin" />
          ) : isSuccess ? (
            <CheckCircle2 className="size-3.5 shrink-0 stroke-3 text-green-400" />
          ) : (
            <InfoIcon
              className={cn(
                'size-3.5 shrink-0 stroke-3',
                (isTriedState || isErrorState) && 'text-red-500'
              )}
            />
          )}
          {currentMessage}
        </span>

        {!isSaving && !isSuccess && (
          <div className="flex items-center gap-2.5">
            <Button
              variant="destructive"
              size="sm"
              onClick={handleReset}
              className="h-6"
            >
              {resetLabel}
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleSave}
              className="h-6"
            >
              {isTriedState || isErrorState ? 'Try again' : saveLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
