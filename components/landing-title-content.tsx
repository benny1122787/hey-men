"use client"

import { Button } from "./ui/button"

export default function LandingTitleContent() {
  return (
    <div >
      <div className="text-center py-24">
        <h1 className="text-purple-500 text-6xl">AI-powered video</h1>
        <h2 className="text-6xl">creations at scale</h2>
        <div className="py-4 line-clamp-2 text-4xl pl-24 pr-24 ml-24 mr-24">
          Effortlessly produce studio quality videos with AI-generated avatars and voices.
        </div>
        <Button>
          Get started for free
        </Button>
        <div >
          No credit card needed
        </div>
      </div>
    </div>
  )
}