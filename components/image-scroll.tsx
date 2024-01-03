"use client"

import { ParallaxProvider } from "react-scroll-parallax"
import { ParallaxBanner } from "react-scroll-parallax"
import { Parallax } from "react-scroll-parallax"
import Image from "next/image";
import Link from "next/link";

const ads = [
  {
    label: "VOLVO",
    src: "/volvo.png",
    href: "https://www.volvo.com/en/",
  },
  {
    label: "accenture",
    src: "/accenture.png",
    href: "https://www.accenture.com/us-en",
  },
  {
    label: "amazon",
    src: "/amazon.png",
    href: "https://www.amazon.com/",
  },
  {
    label: "COLUMBIA UNIVERSITY",
    src: "/ColumbiaUniversity.png",
    href: "https://www.aljazeera.com/",
  },
  {
    label: "KPMG",
    src: "/KPMG.png",
    href: "https://kpmg.com/xx/en/home.html",
  },
  {
    label: "NVIDIA",
    src: "/nvidia.png",
    href: "https://www.nvidia.com/en-us/",
  },
  {
    label: "pattern",
    src: "/pattern.png",
    href: "https://pattern.com/",
  },
  {
    label: "salesforce",
    src: "/salesforce.png",
    href: "https://www.salesforce.com/tw/?ir=1",
  },
  {
    label: "pwc",
    src: "/pwc.png",
    href: "https://www.wix.com/",
  }
]

export function ImageScroll() {
  return (
    <div className="relative min-h-[1000px] bg-gradient-to-br from-indigo-950 via-violet-900 to-zinc-900">
      <div className="flex flex-col space-y-4 min-h-[1000px] items-center justify-center ">
        <div className="text-6xl text-white">
          Create with
        </div>
        <div className="text-9xl text-violet-500">
          HeyMen
        </div>
      </div>
      <ParallaxProvider>
        <Parallax speed={20} className="absolute top-72 left-60">
          <Link href="https://www.wix.com/">
            <Image src="/scroll-1.webp" alt="pwc" width={360} height={0} className="rounded-lg" />
          </Link>
        </Parallax>
        <Parallax speed={20} className="absolute top-48 right-12">
          <Link href="https://www.wix.com/">
            <Image src="/scroll-2.webp" alt="pwc" width={360} height={0} className="rounded-lg" />
          </Link>
        </Parallax>
        <Parallax speed={30} className="absolute top-96 left-12">
          <Link href="https://www.wix.com/">
            <Image src="/scroll-3.webp" alt="pwc" width={160} height={0} className="rounded-lg" />
          </Link>
        </Parallax>
        <Parallax speed={30} className="absolute bottom-72 right-12">
          <Link href="https://www.wix.com/">
            <Image src="/scroll-4.webp" alt="pwc" width={360} height={0} className="rounded-lg" />
          </Link>
        </Parallax>
        <Parallax speed={20} className="absolute bottom-24 left-72">
          <Link href="https://www.wix.com/">
            <Image src="/scroll-5.webp" alt="pwc" width={360} height={0} className="rounded-lg" />
          </Link>
        </Parallax>
        <Parallax speed={30} className="absolute bottom-36 right-48">
          <Link href="https://www.wix.com/">
            <Image src="/scroll-6.webp" alt="pwc" width={120} height={0} className="rounded-lg" />
          </Link>
        </Parallax>
        <Parallax speed={20} className="absolute top-96 right-24">
          <Link href="https://www.wix.com/">
            <Image src="/scroll-7.webp" alt="pwc" width={120} height={0} className="rounded-lg" />
          </Link>
        </Parallax>
      </ParallaxProvider>
    </div>
  )
}