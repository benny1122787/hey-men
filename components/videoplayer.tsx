"use client"

import TypewriterComponent from "typewriter-effect"

export default function VideoPlayer() {
  return (
    <div className="relative p-12 h-screen w-screen bg-gradient-to-b from-white via-violet-500 to-indigo-950">
      <div className="flex items-center justify-center trnasform translate-x-16">
        <video src="https://resource.heygencdn.com/homepage/header_video_josh2.mp4" width={650} height={0} controls className="rounded-lg">
          not support
        </video>
      </div>
      <div className="absolute top-32 left-32 w-80 h-96 bg-white rounded-lg bg-opacity-90">
        <div className="p-3">
          script
        </div>
        <div className="p-3">
          <TypewriterComponent
            options={{
              strings: [
                "Hey there! Welcome to HeyMen - where you can easily create fun, high-quality videos using our AI avatars and voices. In just a few clicks, you can generate custom videos for social media, presentations, education, and more.",
              ],
              delay:1,
              deleteSpeed:1,
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
    </div>
  )
}