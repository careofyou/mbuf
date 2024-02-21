import React from "react"

import Image from "next/image"

import "react-vertical-timeline-component/style.min.css"
export default function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex-shrink max-w-full w-full pb-1 lg:pb-0 lg:pr-1">
      <div className="relative  w-full h-full pt-auto pl-8 mb-4 overflow-hidden bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
        <Image
          className="flex overflow-hidden shadow-md rounded-t-md"
          src={src}
          alt={alt}
          width="800"
          height="400"
        />
      </div>
    </div>
  )
}
