import * as React from "react"
import { LuSlash } from "react-icons/lu"
import { cn } from "@/lib/utils"

export function MenuHeaderSlash({ className, ...props }: React.ComponentProps<typeof LuSlash>) {
  return (
    <LuSlash
      data-slot="menu-header-slash"
      className={cn("size-3 -rotate-12 text-gray-300 dark:text-gray-500 shrink-0", className)}
      {...props}
    />
  )
}
