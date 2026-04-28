'use client';

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

interface HighlightProps {
  text: string;
  query: string;
  ranges?: [number, number][];
}

const markClass = 'bg-yellow-200/50 text-inherit dark:bg-yellow-400/30';

export function Highlight({ text, query, ranges }: HighlightProps) {
  if (ranges?.length) {
    const parts: { text: string; highlight: boolean }[] = [];
    let cursor = 0;
    for (const [start, end] of ranges) {
      if (start > cursor) parts.push({ text: text.slice(cursor, start), highlight: false });
      parts.push({ text: text.slice(start, end + 1), highlight: true });
      cursor = end + 1;
    }
    if (cursor < text.length) parts.push({ text: text.slice(cursor), highlight: false });
    return (
      <>
        {parts.map((p, i) =>
          p.highlight ? (
            <mark key={i} className={markClass}>{p.text}</mark>
          ) : (
            p.text
          )
        )}
      </>
    );
  }

  const term = query.trim();
  if (!term) return <>{text}</>;

  const regex = new RegExp(`(${escapeRegex(term)})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className={markClass}>{part}</mark>
        ) : (
          part
        )
      )}
    </>
  );
}
