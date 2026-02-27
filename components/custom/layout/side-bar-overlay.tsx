'use client';

export default function SideBarOverlay() {
  const closeSidebar = () => {
    const root = document.getElementById('app-layout');
    if (!root) return;
    root.setAttribute('data-sidebar', 'closed');
  };

  return (
    <div
      id="sidebar-overlay"
      onClick={closeSidebar}
      className="pointer-events-none fixed inset-0 z-140 bg-black/40 opacity-0 transition-opacity duration-300 group-data-[sidebar=open]:pointer-events-auto group-data-[sidebar=open]:opacity-100 lg:hidden"
    />
  );
}
