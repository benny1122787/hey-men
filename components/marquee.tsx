"use client"

import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from "next/image";
import Link from 'next/link';

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

export default function ADMarquee() {
  return (
    <div className="mx-auto w-3/4 h-24">
      <Marquee autoFill direction="right" speed={50} delay={0} gradient gradientWidth={128}>
        {ads.map((ad) => (
          <Link key={ad.label} href={ad.href}>
            <Image src={ad.src} alt={ad.label} width={80} height={0} />
          </Link>
        ))}
      </Marquee>
    </div>
  )
}