type NavLinkBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function NavLinkBadge({
  children,
  className,
}: NavLinkBadgeProps) {
  return (
    <span
      className={`ml-1 inline-flex items-center rounded-[0.375rem] border border-dashed border-sky-500 px-1 text-xs font-light text-sky-500 ${className ?? ''}`}
    >
      <span className="px-0.5">{children}</span>
    </span>
  );
}
