"use client"

import { useState } from "react";
import TypewriterComponent from "typewriter-effect"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function VideoPlayer() {
  const [count, setCount] = useState(0);

  const videoScr = () => {
    if (count === 0) {
      return "https://resource.heygencdn.com/homepage/header_video_josh2.mp4"
    } else if (count === 1) {
      return "https://resource.heygencdn.com/homepage/header_video_studio_avatar2.mp4"
    } else {
      return "https://resource.heygencdn.com/homepage/header_video_instant_avatar2.mp4"
    }
  };

  return (
    <div className="relative p-12 h-screen w-screen bg-gradient-to-b from-white via-violet-500 to-indigo-950">
      <div className="flex items-center justify-center trnasform translate-x-16">
        <video autoPlay muted src={videoScr()} width={650} height={0} controls className="rounded-lg">
          not support
        </video>
      </div>
      <div className="absolute top-32 left-32 w-80 h-96 bg-white rounded-lg bg-opacity-90">
        <div className='p-3'>
          <Button onClick={() => setCount(0)} className={`w-10 h-10 ${count === 0 ? 'bg-violet-600' : 'bg-white'} rounded-full hover:bg-white hover:shadow-xl hover:shadow-violet-600`}>
            <Avatar>
              <AvatarImage src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf826fcbe9010b22000e_hero_avatar_1.webp" alt="@shadcn" />
            </Avatar>
          </Button>
          <Button onClick={() => setCount(1)} className={`w-10 h-10 ${count === 1 ? 'bg-violet-600' : 'bg-white'} rounded-full hover:bg-white hover:shadow-xl hover:shadow-violet-600`}>
            <Avatar>
              <AvatarImage src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf82026f22092b01126f_hero_avatar_2.webp" alt="@shadcn" />
            </Avatar>
          </Button>
          <Button onClick={() => setCount(2)} className={`w-10 h-10 ${count === 2 ? 'bg-violet-600' : 'bg-white'} rounded-full hover:bg-white hover:shadow-xl hover:shadow-violet-600`}>
            <Avatar>
              <AvatarImage src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf837db334699b6f542b_hero_avatar_3.webp" alt="@shadcn" />
            </Avatar>
          </Button>
        </div>
        <div className="p-3">
          script
        </div>
        <div className="p-3">
          <TypewriterComponent
            options={{
              strings: [
                "Hey there! Welcome to HeyMen - where you can easily create fun, high-quality videos using our AI avatars and voices. In just a few clicks, you can generate custom videos for social media, presentations, education, and more.",
              ],
              delay: 1,
              deleteSpeed: 1,
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
    </div>
  )
}