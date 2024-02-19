import React from "react"

import { VerticalTimeline } from "react-vertical-timeline-component"

import "react-vertical-timeline-component/style.min.css"
import { newsData } from "../../lib/data"

// eslint-disable-next-line import/order
import Image from "next/image"

export default function Experience() {
  return (
    <section id="experience" className="max-w-full mx-auto mb-10 md:mb-20">
      <VerticalTimeline lineColor="">
        <div className="bg-white">
          <div className="xl:container mx-auto pt-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {newsData.map((props, index) => (
                <div
                  key={index}
                  className="flex flex-row bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:scale-105"
                >
                  <div className="w-1/2">
                    <a href="#">
                      <Image
                        className="object-cover w-full h-full rounded-tl-lg rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg"
                        src={props.featured_image}
                        alt=""
                        width={800}
                        height={400}
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-5">
                    <a href="#">
                      <h2 className="font-semibold text-xl text-primary mb-1 break-words">
                        {props.title}
                      </h2>
                      <p className="text-md text-tertiary mb-1 break-words">
                        {props.subtitle}
                      </p>
                      <div className="flex items-center">
                        <div className="h-3 border-l-2 border-red-600 mr-2"></div>
                        <p className="text-sm">{props.date}</p>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </VerticalTimeline>
    </section>
  )
}
