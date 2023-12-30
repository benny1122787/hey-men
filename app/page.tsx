import LandingNavBar from "@/components/landing-navbar"
import LandingTitleContent from "@/components/landing-title-content"
import ADMarquee from "@/components/marquee"
import VideoPlayer from "@/components/videoplayer"

export default function LandingPage() {
  return (
    <div>
      <LandingNavBar />
      <LandingTitleContent />
      <ADMarquee />
      <VideoPlayer/>
    </div>
  )
}
