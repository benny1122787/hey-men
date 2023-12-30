import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LandingMenu from "@/components/landing-menu";

export default function LandingNavBar() {
  return (
    <div className="p-4 bg-transparent flex items-center justify-between fixed top-0 bg-white w-full">
      <Link href="/home" className="flex items-center">
        <div className="relative h-8 w-8">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <div>
          HeyMen
        </div>
      </Link>
      <LandingMenu />
      <Link href="/home" className="flex items-center">
        <Button>
          Get Started
        </Button>
      </Link>
    </div>
  )
}