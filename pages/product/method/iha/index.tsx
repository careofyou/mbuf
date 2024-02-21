import Layout from "../../../../components/Layout"
import ProductBlockiha from "../../../../components/ProductBlock/ProductBlockiha/"
import SEO from "../../../../components/SEO"

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
          <div className="hidden overflow-hidden md:block md:w-40 md:h-40 rounded-md"></div>
        </div>
      </div>
      <ProductBlockiha />
    </Layout>
  )
}
