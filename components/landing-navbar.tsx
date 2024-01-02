"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import LandingMenu from "@/components/landing-menu"
import { Fade as Hamburger } from 'hamburger-react'

export default function LandingNavBar() {
  return (
    <div className="p-4 flex items-center justify-between fixed top-0 bg-white w-full z-10">
      <Link href="/home" className="flex items-center">
        <div className="relative h-8 w-8">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <div>
          HeyMen
        </div>
      </Link>

      <div className="hidden sm:flex">
        <LandingMenu />
      </div>

      <Link href="/home" className="flex items-center">
        <Button>
          Get Started
        </Button>
      </Link>

      <div className="flex sm:hidden">
        <Hamburger />
      </div>
    </div>
  )
}