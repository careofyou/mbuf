import React, { useEffect, useState } from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/router"

import Layout from "../../../../components/Layout"
import SEO from "../../../../components/SEO"
import { ifaData } from "../../../../lib/data"

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
              <div className="box-one flex flex-row flex-wrap">
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
                          <div className="relative px-5 pb-5 bottom-0 w-full bg-gradient-cover mx-auto pt-auto">
                            <h2 className="font-semibold text-xl text-primary mb-1 pt-8 break-words">
                              {ifaData[productIndex].title}
                            </h2>
                            <p className="block text-md text-tertiary mb-1 mx-auto break-words">
                              {ifaData[productIndex].subtitle}
                            </p>
                            <div className="pt-2">
                              <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
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
