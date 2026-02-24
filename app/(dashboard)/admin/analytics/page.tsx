'use client';

import { NameAvatar } from '@/components/custom/name-avatar';
import { AppSidebar, data } from '@/components/sidebar/app-sidebar';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarHeader, SidebarProvider } from '@/components/ui/sidebar';
import {
  ChevronDown,
  Folder,
  LucideChevronRight,
  LucideChevronsUpDown,
  LucideUser,
  Menu,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { LuCircleArrowUp, LuMoon, LuSlash, LuSun } from 'react-icons/lu';
import SwitcherSection from './switcher';
import Image from 'next/image';
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';
import { MdOutlineMenuBook } from 'react-icons/md';

export default function OverviewPage() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  const [openItem, setOpenItem] = useState(true);
  const [active, setActive] = useState('users');

  return (
    <>
      <header className="flex items-center h-14 justify-between pr-[calc(var(--app-layout-spacing)/2)] pl-[calc(var(--app-layout-spacing)/2-12px)] border-b border-border/70 bg-surface-soft text-black dark:text-white">
        <div className="flex flex-1 items-center overflow-x-auto no-scrollbar">
          <div className="h-10 flex items-center me-4 whitespace-nowrap gap-0.5">
            <div className="px-1">
              <Link
                href="#"
                className="flex items-center gap-2 px-2 h-6 bg-surface-soft rounded-[0.375rem] focus-visible:outline-2 focus-visible:outline-primary"
              >
                <Avatar size="sm" className="shrink-0">
                  <AvatarImage src="/images/home.png" className="rounded-sm" />
                </Avatar>
                <span className="truncate">Personal Workspace</span>
                <Badge
                  className="rounded-sm bg-muted text-muted-foreground h-4.5 p-0 px-1 text-[10px] font-light leading-none shrink-0"
                  variant="outline"
                >
                  Hobby
                </Badge>
              </Link>
            </div>
            <button
              type="button"
              className="flex bg-surface-soft items-center justify-center h-7 w-7 border-0 rounded-[0.375rem] focus-visible:outline-2 focus-visible:outline-primary focus-visible:-outline-offset-2 hover:bg-background hover:rounded-sm hover:border cursor-pointer"
            >
              <LucideChevronsUpDown className="size-3.5 text-gray-500" />
            </button>
            <LuSlash className="text-gray-300 dark:text-gray-500 size-3 -rotate-12" />
            <div className="px-1">
              <Link
                href="#"
                className="flex items-center gap-2 px-2 h-6 bg-surface-soft rounded-[0.375rem] focus-visible:outline-2 focus-visible:outline-primary"
              >
                <span className="truncate">Front Row</span>
              </Link>
            </div>
            <button
              type="button"
              className="flex bg-surface-soft items-center justify-center h-7 w-7 border-0 rounded-[0.375rem] focus-visible:outline-2 focus-visible:outline-primary focus-visible:-outline-offset-2 hover:bg-background hover:rounded-sm hover:border cursor-pointer"
            >
              <LucideChevronsUpDown className="size-3.5 text-gray-500" />
            </button>
            <LuSlash className="text-gray-300 dark:text-gray-500 size-3 -rotate-12" />
            <div className="px-1">
              <Link
                href="#"
                className="flex items-center gap-2 px-2 h-6 bg-surface-soft rounded-[0.375rem] focus-visible:outline-2 focus-visible:outline-primary"
              >
                <span className="block size-1.5 shrink-0 rounded-full shadow-[0_0_0_3px] bg-orange-500 shadow-orange-500/25"></span>
                <span className="truncate">Development</span>
              </Link>
            </div>
            <button
              type="button"
              className="flex bg-surface-soft items-center justify-center h-7 w-7 border-0 rounded-[0.375rem] focus-visible:outline-2 focus-visible:outline-primary focus-visible:-outline-offset-2 hover:bg-background hover:rounded-sm hover:border cursor-pointer"
            >
              <LucideChevronsUpDown className="size-3.5 text-gray-500" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge
            className="rounded-[0.375rem] p-0 px-1 h-4.5 leading-0 bg-indigo-600/5 text-indigo-600 border-indigo-200 dark:bg-indigo-600/20 dark:text-indigo-400 dark:border-indigo-800 cursor-pointer"
            variant="outline"
          >
            <LuCircleArrowUp />
            Upgrades
          </Badge>
          <button
            type="button"
            className="h-6
        /* Layout & Positioning */
        group relative inline-flex min-w-fit items-center justify-between overflow-hidden rounded-[0.375rem] transition-all cursor-pointer
        
        /* Background & Base Colors */
        bg-white dark:bg-zinc-700 
        text-xs text-black dark:text-white
        
        /* The Gradient Overlay (Pseudo-element) */
        before:absolute before:inset-0 before:size-full 
        before:bg-linear-to-b before:from-transparent before:to-black/2 dark:before:to-black/12
        before:transition-opacity hover:before:opacity-0
        
        /* The Complex Layered Shadow */
        /* 1. Inner highlight, 2. Soft drop shadow, 3. Defined edge, 4. Thin border-stroke */
        shadow-[inset_0_1px_0px_0_rgba(255,255,255,0.05),0_2px_2px_-1px_rgba(0,0,0,0.06),0_4px_4px_-2px_rgba(0,0,0,0.04),0_0_0_1px_rgba(0,0,0,0.1)]
        dark:shadow-[inset_0_1px_0px_0_rgba(255,255,255,0.05),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_rgba(255,255,255,0.1)]
        
        /* Interactions */
        hover:bg-zinc-50 dark:hover:bg-zinc-800
        active:scale-[0.98]
        disabled:opacity-40 disabled:cursor-not-allowed
        focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-3
      "
          >
            <span className="flex w-full items-center px-3 py-1.5 gap-1.5">
              Invite
            </span>
          </button>
          <button
            type="button"
            onClick={() => {
              setIsDarkMode(!isDarkMode);
              document.documentElement.classList.toggle('dark');
            }}
            className="flex items-center justify-center h-7 w-7 rounded-full focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 bg-background border border-border cursor-pointer"
          >
            {isDarkMode ? (
              <LuMoon className="text-gray-400 size-3.5" />
            ) : (
              <LuSun className="text-gray-400 size-3.5" />
            )}
          </button>
          <NameAvatar name="burhan shah" />
        </div>
      </header>
      {/* <nav className="sticky z-10 top-0">
        <div className="relative pr-[calc(var(--app-layout-spacing)/2)] pl-[calc(var(--app-layout-spacing)/2-12px)] bg-surface-soft text-black dark:text-white">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border/70" />
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex whitespace-nowrap pl-3 pr-1.5 gap-7">
              <div className="py-3.5">
                <Link
                  href="#"
                  className="py-1 text-foreground/70 hover:text-foreground rounded-[0.375rem] focus-visible:outline-2 focus-visible:outline-primary"
                >
                  Overview
                </Link>
              </div>
              <div className="py-3.5">
                <Link
                  href="#"
                  className="py-1 text-foreground/70 hover:text-foreground rounded-[0.375rem] focus-visible:outline-2 focus-visible:outline-primary"
                >
                  Users
                </Link>
              </div>
              <div className="py-3.5">
                <Link
                  href="#"
                  className="py-1 text-foreground/70 hover:text-foreground rounded-[0.375rem] focus-visible:outline-2 focus-visible:outline-primary"
                >
                  Organizations
                </Link>
              </div>
              <div className="py-3.5">
                <Link
                  href="#"
                  className="py-1 text-foreground/70 hover:text-foreground rounded-[0.375rem] focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <span>Billing</span>
                  <span
                    className="relative ml-1 px-1 inline-flex shrink-0 items-center rounded-xs text-sky-500 border border-dashed border-sky-500 font-light text-xs"
                    data-slot="badge"
                  >
                    <span className="px-0.5">Beta</span>
                  </span>
                </Link>
              </div>
              <div className="py-3.5 relative z-10 after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-black dark:after:bg-white after:content-['']">
                <Link
                  href="#"
                  className="py-1 text-foreground rounded-[0.375rem] focus-visible:outline-2 focus-visible:outline-primary"
                >
                  Configure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
      <nav className="sticky top-0 z-100">
        <div
          className="
      relative bg-surface-soft text-black dark:text-white
    "
        >
          {/* Bottom divider */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border/70 " />
          <div className="overflow-x-auto no-scrollbar ">
            <div className="flex items-center whitespace-nowrap gap-3 h-12 pl-[calc(var(--app-layout-spacing)/2-12px)] pr-[calc(var(--app-layout-spacing)/2)]">
              {/* Normal Tab */}
              <div className="pl-1">
                <Link
                  href="#"
                  className="
            inline-flex items-center
            px-2 h-6
            rounded-[0.375rem]
            text-muted-foreground hover:text-foreground
            focus-visible:outline-2
            focus-visible:outline-primary
          "
                >
                  <span>Overview</span>
                </Link>
              </div>
              <Link
                href="#"
                className="
            inline-flex items-center
            px-2 h-6
            rounded-[0.375rem]
            text-muted-foreground hover:text-foreground
            focus-visible:outline-2
            focus-visible:outline-primary
          "
              >
                <span>Users</span>
              </Link>

              <Link
                href="#"
                className="
            inline-flex items-center
            px-2 h-6
            rounded-[0.375rem]
            text-muted-foreground hover:text-foreground
            focus-visible:outline-2
            focus-visible:outline-primary
          "
              >
                <span>Organizations</span>
              </Link>

              {/* Billing with badge */}
              <Link
                href="#"
                className="
            inline-flex items-center
            px-2 h-6
            rounded-[0.375rem]
            text-muted-foreground hover:text-foreground
            focus-visible:outline-2
            focus-visible:outline-primary
          "
              >
                <span>Billing</span>
                <span
                  className="
              ml-1 px-1 inline-flex items-center rounded-[0.375rem]
              text-sky-500 border border-dashed border-sky-500
              font-light text-xs
            "
                >
                  <span className="px-0.5">Beta</span>
                </span>
              </Link>

              {/* Active Tab */}
              <Link
                href="#"
                className="
            inline-flex items-center
            px-2 h-6
            rounded-[0.375rem]
            text-foreground
            focus-visible:outline-2
            focus-visible:outline-primary
          "
              >
                <span
                  className="
              relative
              after:absolute
              after:left-0
              after:-bottom-3.5
              after:h-px
              after:w-full
              after:bg-black
              dark:after:bg-white
              after:content-['']
            "
                >
                  Configure
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="app-container mt-8 lg:mt-10 pb-12 lg:pb-16">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Mobile Toggle Button */}
          <div className="flex items-center lg:hidden gap-4">
            {/* <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 px-3 py-2 border rounded-md"
            >
              <Menu size={16} />
            </button> */}
            <button
              type="button"
              className="h-8 w-8
        /* Layout & Positioning */
        group relative inline-flex items-center justify-center overflow-hidden rounded-[0.375rem] transition-all
        
        /* Background & Base Colors */
        bg-white dark:bg-zinc-700 
        text-xs text-black dark:text-white
        
        /* The Gradient Overlay (Pseudo-element) */
        before:absolute before:inset-0 before:size-full 
        before:bg-linear-to-b before:from-transparent before:to-black/2 dark:before:to-black/12
        before:transition-opacity hover:before:opacity-0
        
        /* The Complex Layered Shadow */
        /* 1. Inner highlight, 2. Soft drop shadow, 3. Defined edge, 4. Thin border-stroke */
        shadow-[inset_0_1px_0px_0_rgba(255,255,255,0.05),0_2px_2px_-1px_rgba(0,0,0,0.06),0_4px_4px_-2px_rgba(0,0,0,0.04),0_0_0_1px_rgba(0,0,0,0.1)]
        dark:shadow-[inset_0_1px_0px_0_rgba(255,255,255,0.05),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_rgba(255,255,255,0.1)]
        
        /* Interactions */
        hover:bg-zinc-50 dark:hover:bg-zinc-800
        active:scale-[0.98]
        disabled:opacity-40 disabled:cursor-not-allowed
        focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-3
        cursor-pointer
      "
              onClick={() => setOpen(true)}
            >
              {/* <span className="flex w-full items-center px-3 py-1.5 gap-1.5">
                Invite
              </span> */}
              <Menu className="text-muted-foreground size-3.5" />
            </button>
            <span
              className="font-semibold text-muted-foreground cursor-pointer"
              onClick={() => setOpen(true)}
            >
              User & Authentication
            </span>
          </div>

          {/* Sidebar */}
          <aside
            className={`
    w-80 lg:w-58 shrink-0 bg-background
    lg:static lg:block
    fixed top-0 left-0 h-screen
    transform transition-transform duration-300
    ${open ? 'translate-x-0' : '-translate-x-full'}
    lg:translate-x-0
    z-150 lg:z-90
    overflow-y-auto overflow-x-hidden lg:overflow-y-hidden
    p-6 lg:p-0 gap-8
  `}
          >
            {/* Close button for mobile */}
            {/* <div className="flex justify-end p-4 lg:hidden">
              <button onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div> */}
            <header className="p-0.5">
              <button
                type="button"
                className="
    group w-full text-left
    flex items-center gap-2
    rounded-[0.375rem]
    bg-background
    focus-visible:outline-2
    focus-visible:outline-primary
    cursor-pointer
    hover:bg-muted/75
    px-2 py-1.5
  "
              >
                {/* Left Icon Box */}
                <div
                  className="
      flex h-8 w-8 shrink-0 items-center justify-center
      rounded-md
      bg-primary text--foreground
    "
                >
                  <LucideUser className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="text-foreground truncate">
                    User Management
                  </span>
                  <span className="text-muted-foreground truncate">
                    Manage users
                  </span>
                </div>

                {/* Chevron */}
                <LucideChevronsUpDown
                  className="
      h-3.5 w-3.5 shrink-0
      text-muted-foreground
      transition-transform
    "
                />
              </button>
              {/* <Link href="#" className="p-2">
                <div className="flex items-center justify-between p-2">
                  <div className="flex">img</div>
                  <div className="flex gap-1.5">
                    <div className="flex flex-col">
                      <div>top</div>
                      <div>bottom</div>
                    </div>
                  </div>
                  <div className="flex">action</div>
                </div>
              </Link> */}
              {/* <Item variant="outline" asChild role="listitem">
                <Link
                  href="#"
                  className="rounded-[0.375rem] border-0 hover:bg-muted/80! px-5! py-5! gap-1.5! focus-visible:outline-2! focus-visible:outline-primary! focus-visible:outline-offset-2!"
                >
                  <ItemMedia variant="image">
                    <div className="flex items-center justify-center bg-primary/90 h-full w-full">
                      <MdOutlineMenuBook className="size-5 text-background" />
                    </div>
                  </ItemMedia>
                  <ItemContent className="gap-0">
                    <ItemTitle className="line-clamp-1">Acme Inc</ItemTitle>
                    <ItemDescription>Enterprise</ItemDescription>
                  </ItemContent>
                  <ItemContent className="flex-none text-center">
                    <ItemDescription>duration</ItemDescription>
                  </ItemContent>
                </Link>
              </Item> */}
            </header>
            {/* Sidebar content */}
            <div className="flex flex-col gap-8 mt-2">
              <main className="flex flex-col p-0.5">
                <div>
                  {/* Group Header */}
                  <button
                    onClick={() => setOpenItem((prev) => !prev)}
                    className="
          group w-full flex items-center justify-between
          px-3 h-8
          rounded-md
          hover:bg-muted/75
          transition-colors
          focus-visible:outline-2 focus-visible:outline-primary cursor-pointer
        "
                  >
                    <div className="flex items-center gap-3">
                      <Folder className="h-4 w-4 text-muted-foreground" />
                      <span>User Management</span>
                    </div>

                    <ChevronDown
                      className={`
            h-3.5 w-3.5 text-muted-foreground
            transition-transform duration-200
            ${openItem ? 'rotate-180' : ''}
          `}
                    />
                  </button>

                  {/* Collapsible Content */}
                  <div
                    className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${openItem ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
                  >
                    {/* Wrapper must be relative */}
                    <div className="relative mt-[0px] p-0.5">
                      {/* Continuous vertical guide line */}
                      <div className="absolute left-[20px] top-0 bottom-0 w-px bg-border pointer-events-none" />
                      <div className="flex flex-col gap-[1px]">
                        {['overview', 'users', 'billing'].map((item) => {
                          const isActive = active === item;
                          return (
                            <button
                              key={item}
                              onClick={() => setActive(item)}
                              className={`
                    relative w-full text-left
                    px-3 h-8
                    flex items-center
                    text-sm rounded-md
                    transition-colors
                    focus-visible:outline-2 focus-visible:outline-primary cursor-pointer
                    ${isActive ? 'bg-muted' : 'hover:bg-muted/75'}
                  `}
                            >
                              {/* Active stroke (inside padding, no full height) */}
                              {isActive && (
                                <span className="absolute left-[18px] top-2 bottom-2 w-px bg-black dark:bg-white" />
                              )}

                              <span
                                className={`pl-6 capitalize ${
                                  isActive
                                    ? 'text-foreground'
                                    : 'text-foreground'
                                }`}
                              >
                                {item}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <footer className="h-300">footer</footer>
            </div>
            {/* <div className="flex flex-col space-y-4">
              <a href="#">Overview</a>
              <a href="#">Users</a>
              <a href="#">Billing</a>
              <a href="#">Settings</a>
            </div>
            <div className="h-300" /> */}
          </aside>

          {/* Overlay for mobile */}
          {open && (
            <div
              className="fixed inset-0 bg-black/40 lg:hidden z-140"
              onClick={() => setOpen(false)}
            />
          )}

          {/* Main Content */}
          <section className="flex-1">
            <div className="border border-dashed border-border h-300">
              Your content here
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
