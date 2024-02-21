"use client"

import React from "react"

import Image from "next/image"
import { VerticalTimeline } from "react-vertical-timeline-component"

import "react-vertical-timeline-component/style.min.css"
import { controlData } from "@/../lib/data"

export default function Experience() {
  return (
    <section id="experience" className="max-w-full mx-auto mb-10 md:mb-20">
      <VerticalTimeline lineColor="">
        <div className="bg-white">
          <div className="mx-auto xl:container pt-auto">
            <div className="flex flex-row flex-wrap">
              <div className="flex-shrink w-full max-w-full">
                <div className="flex flex-row flex-wrap box-one">
                  {controlData.map((props, index) => (
                    <React.Fragment key={index}>
                      <div className="flex-shrink w-full max-w-full pb-1 lg:pb-0 lg:pr-1">
                        <div className="relative w-full h-full pl-8 mb-4 overflow-hidden bg-gray-100 rounded-lg pt-auto transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                          <a href={props.link}>
                            <Image
                              className="flex overflow-hidden shadow-md rounded-t-md"
                              src={props.featured_image}
                              alt=""
                              width="800"
                              height="400"
                            />
                            <div className="relative bottom-0 w-full px-5 pb-5 mx-auto bg-gradient-cover pt-auto">
                              <h2 className="pt-8 mb-1 text-xl font-semibold break-words text-primary">
                                {props.title}
                              </h2>
                              <p className="block mx-auto mb-1 break-words text-md text-tertiary">
                                {props.subtitle}
                              </p>
                              <div className="pt-2">
                                <div className="inline-block h-3 mr-2 border-l-2 border-red-600"></div>
                                {props.date}
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </VerticalTimeline>
    </section>
  )
}
