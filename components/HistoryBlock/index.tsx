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
            <div className="flex-shrink max-w-full w-full lg:w-1/2 grayscale-[0%]  hover:grayscale-[0%]">
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
            <div className="flex-shrink max-w-full w-full lg:w-1/2 grayscale-[20%]  hover:grayscale-[0%]">
              <div className="box-one flex flex-row flex-wrap">
                {experiencesData
                  .filter((e, i) => i >= 2 && i < 3)
                  .map((props, index) => (
                    <React.Fragment key={index}>
                      <div className="flex-shrink max-w-full w-full pb-1 lg:pb-0 lg:pr-1">
                        <div className="relative  w-full h-full pt-auto pl-8 mb-4 overflow-hidden bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                          <Image
                            className="flex overflow-hidden shadow-md rounded-t-md grayscale-[10%] hover:grayscale-[0%]"
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
            <div className="flex-shrink max-w-full w-full grayscale-[40%]  hover:grayscale-[0%]">
              <div className="box-one flex flex-row flex-wrap">
                {experiencesData
                  .filter((e, i) => i >= 3 && i < 4)
                  .map((props, index) => (
                    <React.Fragment key={index}>
                      <div className="flex-shrink max-w-full w-full pb-1 lg:pb-0 lg:pr-1">
                        <div className="relative  w-full h-full pt-auto pl-8 mb-4 overflow-hidden bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                          <Image
                            className="flex overflow-hidden shadow-md rounded-t-md grayscale-[20%] hover:grayscale-[0%]"
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
      <div className="bg-white">
        <div className="xl:container mx-auto pt-auto">
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink max-w-full w-full grayscale-[6%]  hover:grayscale-[0%]">
              <div className="box-one flex flex-row flex-wrap">
                {experiencesData
                  .filter((e, i) => i >= 4 && i < 5)
                  .map((props, index) => (
                    <React.Fragment key={index}>
                      <div className="flex-shrink max-w-full w-full pb-1 lg:pb-0 lg:pr-1">
                        <div className="relative  w-full h-full pt-auto pl-8 mb-4 overflow-hidden bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                          <Image
                            className="flex overflow-hidden shadow-md rounded-t-md grayscale-[30%] hover:grayscale-[0%]"
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
            <div className="bg-white">
              <div className="xl:container mx-auto pt-auto">
                <div className="flex flex-row flex-wrap">
                  <div className="flex-shrink max-w-full w-full grayscale-[80%]  hover:grayscale-[0%]">
                    <div className="box-one flex flex-row flex-wrap">
                      {experiencesData
                        .filter((e, i) => i >= 5 && i < 6)
                        .map((props, index) => (
                          <React.Fragment key={index}>
                            <div className="flex-shrink max-w-full w-full pb-1 lg:pb-0 lg:pr-1">
                              <div className="relative  w-full h-full pt-auto pl-8 mb-4 overflow-hidden bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                                <Image
                                  className="flex overflow-hidden shadow-md rounded-t-md grayscale-[50%] hover:grayscale-[0%]"
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
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="xl:container mx-auto pt-auto grayscale-[90%]  hover:grayscale-[0%]">
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink max-w-full w-full">
              <div className="box-one flex flex-row flex-wrap">
                {experiencesData
                  .filter((e, i) => i >= 6 && i < 7)
                  .map((props, index) => (
                    <React.Fragment key={index}>
                      <div className="flex-shrink max-w-full w-full pb-1 lg:pb-0 lg:pr-1">
                        <div className="relative  w-full h-full pt-auto pl-8 mb-4 overflow-hidden bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                          <Image
                            className="flex overflow-hidden shadow-md rounded-t-md grayscale-[90%]  hover:grayscale-[0%]"
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
            <div className="flex-shrink max-w-full w-full lg:w-1/2 grayscale-[100%]  hover:grayscale-[0%]">
              <div className="box-one flex flex-row flex-wrap">
                {experiencesData
                  .filter((e, i) => i >= 7 && i < 8)
                  .map((props, index) => (
                    <React.Fragment key={index}>
                      <div className="flex-shrink max-w-full w-full pb-1 lg:pb-0 lg:pr-1">
                        <div className="relative  w-full h-full pt-auto pl-8 mb-4 overflow-hidden bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                          <Image
                            className="flex overflow-hidden shadow-md rounded-t-md grayscale-[100%]  hover:grayscale-[0%]"
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
            <div className="flex-shrink max-w-full w-full lg:w-1/2 grayscale-[100%]  hover:grayscale-[0%]">
              <div className="box-one flex flex-row flex-wrap">
                {experiencesData
                  .filter((e, i) => i >= 8 && i <= 9)
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
          </div>
        </div>
      </div>
    </section>

    //     <section id="experience" className="max-w-full mx-auto mb-10 md:mb-20">
    //       <div id="main" className="m-8 grid grid-cols-4 gap-1 justify-evenly">
    //         <div
    //           className="bg-red-500 col-start-2 col-span-2
    // rounded-lg h-12"
    //         >
    //           <div className="flex-shrink max-w-full w-full lg:w-1/2">
    //             <div className="box-one flex flex-row flex-wrap">
    //               {experiencesData
    //                 .filter((e, i) => i >= 0 && i <= 1)
    //                 .map((props, index) => (
    //                   <React.Fragment key={index}>
    //                     <div className="flex-shrink max-w-full w-full pb-1 lg:pb-0 lg:pr-1">
    //                       <div className="relative  w-full h-full pt-auto pl-8 mb-4 overflow-hidden bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
    //                         {/* <Image
    //                               className="flex overflow-hidden shadow-md rounded-t-md"
    //                               src={props.featured_image}
    //                               alt=""
    //                               width="800"
    //                               height="400"
    //                             /> */}
    //                         <div className="relative px-5 pb-5 bottom-0 w-full bg-gradient-cover mx-auto pt-auto">
    //                           <h2 className="font-semibold text-xl text-primary mb-1 pt-8 break-words">
    //                             {props.title}
    //                           </h2>
    //                           <p className="block text-md text-tertiary mb-1 mx-auto break-words">
    //                             {props.subtitle}
    //                           </p>
    //                           <div className="pt-2">
    //                             <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
    //                             {props.date}
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </React.Fragment>
    //                 ))}
    //             </div>
    //           </div>
    //         </div>
    //         <div className="bg-red-300 rounded-lg h-12">
    //           <div className="flex-shrink max-w-full w-full lg:w-1/2">
    //             <div className="box-one flex flex-row flex-wrap">
    //               {experiencesData
    //                 .filter((e, i) => i >= 0 && i <= 1)
    //                 .map((props, index) => (
    //                   <React.Fragment key={index}>
    //                     <div className="flex-shrink max-w-full w-full pb-1 lg:pb-0 lg:pr-1">
    //                       <div className="relative  w-full h-full pt-auto pl-8 mb-4 overflow-hidden bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
    //                         {/* <Image
    //                               className="flex overflow-hidden shadow-md rounded-t-md"
    //                               src={props.featured_image}
    //                               alt=""
    //                               width="800"
    //                               height="400"
    //                             /> */}
    //                         <div className="relative px-5 pb-5 bottom-0 w-full bg-gradient-cover mx-auto pt-auto">
    //                           <h2 className="font-semibold text-xl text-primary mb-1 pt-8 break-words">
    //                             {props.title}
    //                           </h2>
    //                           <p className="block text-md text-tertiary mb-1 mx-auto break-words">
    //                             {props.subtitle}
    //                           </p>
    //                           <div className="pt-2">
    //                             <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
    //                             {props.date}
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </React.Fragment>
    //                 ))}
    //             </div>
    //           </div>
    //         </div>
    //         <div className="bg-red-300 rounded-lg h-12">
    //           <div className="flex-shrink max-w-full w-full lg:w-1/2">
    //             <div className="box-one flex flex-row flex-wrap">
    //               {experiencesData
    //                 .filter((e, i) => i >= 0 && i <= 1)
    //                 .map((props, index) => (
    //                   <React.Fragment key={index}>
    //                     <div className="flex-shrink max-w-full w-full pb-1 lg:pb-0 lg:pr-1">
    //                       <div className="relative  w-full h-full pt-auto pl-8 mb-4 overflow-hidden bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
    //                         {/* <Image
    //                               className="flex overflow-hidden shadow-md rounded-t-md"
    //                               src={props.featured_image}
    //                               alt=""
    //                               width="800"
    //                               height="400"
    //                             /> */}
    //                         <div className="relative px-5 pb-5 bottom-0 w-full bg-gradient-cover mx-auto pt-auto">
    //                           <h2 className="font-semibold text-xl text-primary mb-1 pt-8 break-words">
    //                             {props.title}
    //                           </h2>
    //                           <p className="block text-md text-tertiary mb-1 mx-auto break-words">
    //                             {props.subtitle}
    //                           </p>
    //                           <div className="pt-2">
    //                             <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
    //                             {props.date}
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </React.Fragment>
    //                 ))}
    //             </div>
    //           </div>
    //         </div>
    //         <div
    //           className="bg-red-500 col-start-2 col-end-4
    // rounded-lg h-12"
    //         >
    //           <div className="flex-shrink max-w-full w-full lg:w-1/2">
    //             <div className="box-one flex flex-row flex-wrap">
    //               {experiencesData
    //                 .filter((e, i) => i >= 0 && i <= 1)
    //                 .map((props, index) => (
    //                   <React.Fragment key={index}>
    //                     <div className="flex-shrink max-w-full w-full pb-1 lg:pb-0 lg:pr-1">
    //                       <div className="relative  w-full h-full pt-auto pl-8 mb-4 overflow-hidden bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
    //                         {/* <Image
    //                               className="flex overflow-hidden shadow-md rounded-t-md"
    //                               src={props.featured_image}
    //                               alt=""
    //                               width="800"
    //                               height="400"
    //                             /> */}
    //                         <div className="relative px-5 pb-5 bottom-0 w-full bg-gradient-cover mx-auto pt-auto">
    //                           <h2 className="font-semibold text-xl text-primary mb-1 pt-8 break-words">
    //                             {props.title}
    //                           </h2>
    //                           <p className="block text-md text-tertiary mb-1 mx-auto break-words">
    //                             {props.subtitle}
    //                           </p>
    //                           <div className="pt-2">
    //                             <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
    //                             {props.date}
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </React.Fragment>
    //                 ))}
    //             </div>
    //           </div>
    //         </div>
    //         <div className="bg-red-300 rounded-lg h-12">
    //           <div className="flex-shrink max-w-full w-full lg:w-1/2">
    //             <div className="box-one flex flex-row flex-wrap">
    //               {experiencesData
    //                 .filter((e, i) => i >= 0 && i <= 1)
    //                 .map((props, index) => (
    //                   <React.Fragment key={index}>
    //                     <div className="flex-shrink max-w-full w-full pb-1 lg:pb-0 lg:pr-1">
    //                       <div className="relative  w-full h-full pt-auto pl-8 mb-4 overflow-hidden bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
    //                         {/* <Image
    //                               className="flex overflow-hidden shadow-md rounded-t-md"
    //                               src={props.featured_image}
    //                               alt=""
    //                               width="800"
    //                               height="400"
    //                             /> */}
    //                         <div className="relative px-5 pb-5 bottom-0 w-full bg-gradient-cover mx-auto pt-auto">
    //                           <h2 className="font-semibold text-xl text-primary mb-1 pt-8 break-words">
    //                             {props.title}
    //                           </h2>
    //                           <p className="block text-md text-tertiary mb-1 mx-auto break-words">
    //                             {props.subtitle}
    //                           </p>
    //                           <div className="pt-2">
    //                             <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
    //                             {props.date}
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </React.Fragment>
    //                 ))}
    //             </div>
    //           </div>
    //         </div>
    //         <div className="bg-red-300 rounded-lg h-12">6</div>
    //         <div className="bg-red-300 rounded-lg h-12">7</div>
    //         <div
    //           className="bg-red-500 col-start-2 col-span-3
    // rounded-lg h-12"
    //         >
    //           8
    //         </div>
    //       </div>
    //     </section>
  )
}
