"use client"

import React from "react"

import "react-vertical-timeline-component/style.min.css"
import { experiencesData } from "../../lib/data"
import Image from "next/image"

export default function Experience() {
  return (
    <section id="experience" className="max-w-full mx-auto mb-10 md:mb-20">
      <div className="bg-white">
        <div className="xl:container mx-auto pt-auto">
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink max-w-full w-full lg:w-1/2">
              <div className="box-one flex flex-row flex-wrap">
                {experiencesData
                  .filter((e, i) => i >= 0 && i <= 1)
                  .map((props, index) => (
                    <React.Fragment key={index}>
                      <div className="flex-shrink max-w-full w-full pb-1 lg:pb-0 lg:pr-1">
                        <div className="relative  w-full h-full pt-auto pl-8 mb-4 overflow-hidden bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                          {/* <Image
                              className="flex overflow-hidden shadow-md rounded-t-md"
                              src={props.featured_image}
                              alt=""
                              width="800"
                              height="400"
                            /> */}
                          <div className="relative px-5 pb-5 bottom-0 w-full bg-gradient-cover mx-auto pt-auto">
                            <h2 className="font-semibold text-xl text-primary mb-1 pt-8 break-words">
                              {props.title}
                            </h2>
                            <p className="block text-md text-tertiary mb-1 mx-auto break-words">
                              {props.subtitle}
                            </p>
                            <div className="pt-2">
                              <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                              {props.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
            <div className="flex-shrink max-w-full w-full lg:w-1/2">
              <div className="box-one flex flex-row flex-wrap">
                {experiencesData
                  .filter((e, i) => i > 1 && i < 4)
                  .map((props, index) => (
                    <React.Fragment key={index}>
                      <div className="flex-shrink max-w-full  w-full sm:w-1/2 transition duration-200 transform hover:translate-y-2 pr-1">
                        <div className="relative w-full h-fit pt-auto mb-4 overflow-hidden bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                          {/* <Image
                              className="max-w-full w-full mx-auto h-auto opacity-0"
                              src={props.featured_image}
                              alt=""
                              width="800"
                              height="400"
                            /> */}
                          <div className="relative px-5 pb-5 bottom-0 w-full bg-gradient-cover mx-auto pt-auto">
                            <h2 className="font-semibold text-xl text-primary mb-1 pt-8 break-words">
                              {props.title}
                            </h2>
                            <div className="pt-1">
                              <div className="inline-block h-3 border-l-2 border-red-600 mr-2 "></div>
                              {props.date}
                            </div>
                          </div>
                        </div>

                        <p className="block text-md text-tertiary mb-1 mx-auto break-words">
                          {props.subtitle}
                        </p>
                      </div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="xl:container mx-auto pt-auto">
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink max-w-full w-full lg:w-1/2">
              <div className="box-one flex flex-row flex-wrap">
                {experiencesData
                  .filter((e, i) => i > 3 && i < 6)
                  .map((props, index) => (
                    <React.Fragment key={index}>
                      <div className="flex-shrink max-w-full  w-full sm:w-1/2 transition duration-200 transform hover:translate-y-2 pr-1">
                        <div className="relative w-full h-fit pt-auto mb-4 overflow-hidden bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                          {/* <Image
                              className="max-w-full w-full mx-auto h-auto opacity-0"
                              src={props.featured_image}
                              alt=""
                              width="800"
                              height="400"
                            /> */}
                          <div className="relative px-5 pb-5 bottom-0 w-full bg-gradient-cover mx-auto pt-auto">
                            <h2 className="font-semibold text-xl text-primary mb-1 pt-8 break-words">
                              {props.title}
                            </h2>
                            <div className="pt-1">
                              <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                              {props.date}
                            </div>
                          </div>
                        </div>

                        <p className="block text-md text-tertiary mb-1 mx-auto break-words">
                          {props.subtitle}
                        </p>
                      </div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
            <div className="flex-shrink max-w-full w-full lg:w-1/2">
              <div className="box-one flex flex-row flex-wrap">
                {experiencesData
                  .filter((e, i) => i >= 6 && i < 7)
                  .map((props, index) => (
                    <React.Fragment key={index}>
                      <div className="flex-shrink max-w-full w-full pb-1 lg:pb-0 lg:pr-1">
                        <div className="relative  w-full h-full pt-auto pl-8 mb-4 overflow-hidden bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                          <Image
                            className="flex overflow-hidden shadow-md rounded-t-md"
                            src={props.featured_image}
                            alt=""
                            width="800"
                            height="400"
                          />
                          <div className="relative px-5 pb-5 bottom-0 w-full bg-gradient-cover mx-auto pt-auto">
                            <h2 className="font-semibold text-xl text-primary mb-1 pt-8 break-words">
                              {props.title}
                            </h2>
                            <p className="block text-md text-tertiary mb-1 mx-auto break-words">
                              {props.subtitle}
                            </p>
                            <div className="pt-2">
                              <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                              {props.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
