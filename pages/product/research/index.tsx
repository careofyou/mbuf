import { motion } from "framer-motion"

import Layout from "../../../components/Layout"
import SectionWorkList from "../../../components/SectionWorkList"
import SEO from "../../../components/SEO"
import { TriSquareIcon } from "../../../components/StripeIcons"
import ProductResearch from "../../../components/ProductBlock/ProductResearch"

export default function Product() {
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
      <ProductResearch />
    </Layout>
  )
}
