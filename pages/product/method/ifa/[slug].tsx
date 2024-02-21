import React, { useEffect, useState } from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/router"

import { ifaData } from "@/../lib/data"
import Layout from "@/Layout"
import SEO from "@/SEO"

export default function Product() {
  const router = useRouter()
  const [productIndex, setProductIndex] = useState(0)

  useEffect(() => {
    const getSlugFromUrl = (url: string) => {
      const segments = new URL(url, "http://localhost").pathname.split("/")
      return segments[segments.length - 1]
    }

    const slug = getSlugFromUrl(router.asPath)
    const index = ifaData.findIndex((product) => product.slug === slug)

    setProductIndex(index)
  }, [router])

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
        <div className="mx-auto xl:container pt-auto">
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink w-full max-w-full">
              <div className="flex flex-row flex-wrap box-one">
                {productIndex !== -1 && (
                  <React.Fragment>
                    <div className="flex-shrink w-full max-w-full pb-1 lg:pb-0 lg:pr-1">
                      <div className="relative w-full h-full pl-8 mb-4 overflow-hidden bg-gray-100 rounded-lg pt-auto transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                        <a href={ifaData[productIndex].link}>
                          <Image
                            className="flex overflow-hidden shadow-md rounded-t-md"
                            src={ifaData[productIndex].featured_image}
                            alt=""
                            width="800"
                            height="400"
                          />
                          <div className="relative bottom-0 w-full px-5 pb-5 mx-auto bg-gradient-cover pt-auto">
                            <h2 className="pt-8 mb-1 text-xl font-semibold break-words text-primary">
                              {ifaData[productIndex].title}
                            </h2>
                            <p className="block mx-auto mb-1 break-words text-md text-tertiary">
                              {ifaData[productIndex].subtitle}
                            </p>
                            <div className="pt-2">
                              <div className="inline-block h-3 mr-2 border-l-2 border-red-600"></div>
                              {ifaData[productIndex].date}
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
