import { Home , PanelTop, CircleUserRound, AudioLines, Youtube, FolderUp} from "lucide-react"
import Link from "next/link"

const pages = [
  {
    label: "Home",
    icon: Home,
    href: "/home",
  },
  {
    label: "Template",
    icon: PanelTop,
    href: "/template",
  },
  {
    label: "Avatar",
    icon: CircleUserRound,
    href: "/avatar",
  },
  {
    label: "Voice",
    icon: AudioLines,
    href: "/voice",
  },
  {
    label: "Video",
    icon: Youtube,
    href: "/video",
  },
  {
    label: "Asset",
    icon: FolderUp,
    href: "/asset",
  }
]

export default function Sidebar() {
  return (
      <div className="flex flex-col space-y-4 justify-start p-10 ">
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