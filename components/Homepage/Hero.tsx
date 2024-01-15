// Hero.tsx

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

type HeroProps = {
  className?: string // Add className prop
}

export default function Hero({ className }: HeroProps) {
  const heroVideoRef = useRef(null)

  const handleScroll = () => {
    const scroll = window.pageYOffset
    const heroVideo = heroVideoRef.current

    if (heroVideo) {
      const opacity = 1 - Math.min(scroll / 200, 1) // Adjust 200 based on your preference
      heroVideo.style.opacity = opacity.toString()
    }
  }

  useEffect(() => {
    // Access the video element
    const heroVideo = heroVideoRef.current

    // Play the video on mount
    heroVideo.play().catch((error) => {
      // Autoplay might be blocked, handle error (e.g., show a play button)
      console.error("Autoplay blocked: ", error)
    })

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className={`relative ${className}`}>
      {/* Video Container */}
      <div className="w-full h-screen mt-12 mb-20 overflow-hidden fixed top-1 left-0">
        <video
          ref={heroVideoRef}
          autoPlay
          loop
          muted
          className="w-full h-1/2 object-cover"
        >
          <source src="/mbu.webm" type="video/webm" />
          {/* Add additional source elements for other video formats */}
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative px-4 pb-6 mb-0 overflow-hidden md:px-12 md:pb-6 lg:overflow-visible lg:pl-12 lg:pr-4 rounded-b-3xl grid grid-cols-1 lg:grid-cols-2 lg:gap-4 lg:mb-0 lg:mx-12">
        <div className="order-2 py-4 lg:py-32 lg:order-1">
          {/* ... rest of your code ... */}
        </div>
      </div>
    </section>
  )
}
