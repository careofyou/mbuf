import { motion } from "framer-motion"

import HistoryBlock from "../../components/HistoryBlock"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import { TriSquareIcon } from "../../components/StripeIcons"

export default function About() {
  return (
    <Layout>
      <SEO
        og="image011.jpg"
        title="О нас"
        description="Про эмбэс все такое !"
      />
      <div className="relative">
        <div className="relative order-1 -z-10 lg:order-2">
          <div className="inset-y-0  lg:mt-40 lg:mr-20">
            <motion.img
              src="img/image011.jpg"
              alt="cursor on a white box with abstract design"
              className="w-full mx-auto md:w-auto"
              initial={{ opacity: 0 }}
              transition={{ ease: "easeIn", duration: 1.5 }}
              animate={{ opacity: 1 }}
            />
          </div>
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
      <div className="max-w-3xl mx-auto mt-4 mb-20 md:mt-12 md:pt-16">
        <TriSquareIcon />
        <h1 className="mt-4 mb-8 text-4xl antialiased font-bold text-primary">
          О нас
        </h1>
        <p className="mb-4 text-xl antialiased leading-relaxed tracking-tight text-secondary">
          Основная деятельность Группы компаний Медико-биологический Союз
          разработка и производство наборов реагентов для диагностики
          инфекционных заболеваний, в том числе социально-опасных инфекций (ВИЧ
          и др.). Наборы реагентов применяются в клинико-диагностических
          лабораториях, лечебно-профилактических учреждениях, лабораториях
          Службы Крови, Центров по профилактике и борьбе со СПИД более 25 лет.
          Медико-биологический Союз является третьим в РФ производителем наборов
          реагентов для инфекционных заболеваний – более 15 млн. анализов в год.
        </p>
        <p className="mb-4 text-xl antialiased leading-relaxed tracking-tight text-secondary">
          Также группа компаний осуществляет разработку и производство
          медицинского оборудования для клинико-диагностических лабораторий,
          автоматизированных диагностических комплексов, наборов реагентов для
          контроля качества лабораторных исследований.
        </p>
        <HistoryBlock />
      </div>
    </Layout>
  )
}
