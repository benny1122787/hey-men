"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

export default function LandingMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem>
            <NavigationMenuTrigger>{item.triggerTitle}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul>
                {item.content.map((content) => (
                  <ListItem
                    key={content.title}
                    title={content.title}
                    href={content.href}
                  >
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <Link href="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const cases = [
  {
    title: "Explainer & How to",
    href: "/",
  },
  {
    title: "Marketing",
    href: "/",
  },
  {
    title: "Personalized Sales",
    href: "/",
  },
  {
    title: "Training & Onboarding",
    href: "/",
  }
]


const features = [
  {
    title: "Custom Avatars",
    href: "/",
  },
  {
    title: "Video Translate",
    href: "/",
  },
  {
    title: "Voice Cloning",
    href: "/",
  },
  {
    title: "Photo Avatar",
    href: "/",
  },
  {
    title: "Text to speech",
    href: "/",
  },
  {
    title: "AI Avatars",
    href: "/",
  },
  {
    title: "Templates",
    href: "/",
  },
  {
    title: "Zapier",
    href: "/",
  }
]

const resources = [
  {
    title: "Blog",
    href: "/",
  },
  {
    title: "Weekly Webinar",
    href: "/",
  },
  {
    title: "Case Studies",
    href: "/",
  },
  {
    title: "Help Center",
    href: "/",
  }
]

const items = [
  {
    triggerTitle: "Use Cases",
    content: cases,
  },
  {
    triggerTitle: "Features",
    content: features,
  },
  {
    triggerTitle: "Resources",
    content: resources,
  }
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"