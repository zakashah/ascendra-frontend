import Link from 'next/link';

const AVATAR_COLORS = [
  '#F97316', // orange
  '#EF4444', // red
  '#EC4899', // pink
  '#8B5CF6', // violet
  '#6366F1', // indigo
  '#3B82F6', // blue
  '#06B6D4', // cyan
  '#10B981', // emerald
  '#84CC16', // lime
  '#EAB308', // yellow
];

export function NameAvatar({
  name,
  size = 28,
}: {
  name: string;
  size?: number;
}) {
  const initials = getInitials(name);
  const backgroundColor = getAvatarColor(name);

  return (
    <Link
      href="#"
      className="rounded-full focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
    >
      <div
        style={{
          backgroundColor,
          width: size,
          height: size,
        }}
        className="flex items-center justify-center rounded-full text-white font-normal  select-none"
      >
        <span style={{ fontSize: size * 0.4 }}>{initials}</span>
      </div>
    </Link>
  );
}

function getAvatarColor(name: string): string {
  const hash = stringToHash(name.toLowerCase());
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
}

function getInitials(name: string): string {
  const cleaned = name.trim().replace(/\s+/g, ' ');
  const parts = cleaned.split(' ');

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return parts[0][0].toUpperCase() + parts[parts.length - 1][0].toUpperCase();
}

function stringToHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}
