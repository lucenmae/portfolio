"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/site"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-6">
      {siteConfig.mainNav.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm transition-colors hover:text-primary-500
              ${isActive ? "text-foreground" : "text-foreground/60"}`}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}