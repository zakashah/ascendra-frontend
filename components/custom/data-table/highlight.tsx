'use client';

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

interface HighlightProps {
  text: string;
  query: string;
}

export function Highlight({ text, query }: HighlightProps) {
  const term = query.trim();
  if (!term) return <>{text}</>;

  const regex = new RegExp(`(${escapeRegex(term)})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark
            key={i}
            className="bg-yellow-200/50 text-inherit dark:bg-yellow-400/30"
          >
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}
