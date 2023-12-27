import { Home } from "lucide-react"
import Link from "next/link"

const pages = [
  {
    label: "Home",
    icon: Home,
    href: "/home",
  },
  {
    label: "Template",
    icon: Home,
    href: "/template",
  },
  {
    label: "Avatar",
    icon: Home,
    href: "/avatar",
  },
  {
    label: "Voice",
    icon: Home,
    href: "/voice",
  },
  {
    label: "Video",
    icon: Home,
    href: "/video",
  },
  {
    label: "Asset",
    icon: Home,
    href: "/asset",
  }
]

export default function Sidebar() {
  return (
      <div className="flex flex-col h-full space-y-1">
        {pages.map((page) => (
          <Link
            href={page.href}
            key={page.href}
          >
            <div className="flex items-center flex-1">
              <page.icon className="h-5 w-5 mr-3" />
              {page.label}
            </div>
          </Link>

        ))}
      </div>
  )
}