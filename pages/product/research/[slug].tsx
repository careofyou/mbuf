import React from "react"

import { motion } from "framer-motion"
import Image from "next/image"

import Layout from "../../../components/Layout"
import SEO from "../../../components/SEO"
import { ifaData } from "../../../lib/data"

export default function Product() {
  const currentUrl = typeof window !== "undefined" ? window.location.href : ""
  let slug = (url) => new URL(url).pathname.match(/[^\/](?!.*[\/])+/g)
  var x = slug(currentUrl)
  var y: number = +x
  return (
    <Layout>
      <SEO
        og="image011.jpg"
        title="Продукция"
        description="Про эмбэс все такое !"
      />
      <div className="relative">
        <div className="relative order-1 -z-10 lg:order-2">
          <div className="inset-y-0  lg:mt-40 lg:mr-20"></div>
        </div>
        <div className="absolute top-0 right-44">
          <motion.div
            className="hidden overflow-hidden md:block md:w-40 md:h-40 rounded-md"
            initial={{ rotate: 10 }}
            animate={{ rotate: 0 }}
            transition={{ type: "spring", bounce: 0.25, mass: 2 }}
          ></motion.div>
        </div>
      </div>
      <div className="bg-white">
        <div className="xl:container mx-auto pt-auto">
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink max-w-full w-full">
              <div className="box-one flex flex-row flex-wrap">
                {ifaData
                  .filter((e, i) => i > y - 1 && i <= y)
                  .map((props, index) => (
                    <React.Fragment key={index}>
                      <div className="flex-shrink max-w-full w-full pb-1 lg:pb-0 lg:pr-1">
                        <div className="relative  w-full h-full pt-auto pl-8 mb-4 overflow-hidden bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                          <a href={props.link}>
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
    </Layout>
  )
}
