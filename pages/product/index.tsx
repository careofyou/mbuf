import { motion } from "framer-motion"

import Layout from "../../components/Layout"
import SectionWorkList from "../../components/SectionWorkList"
import SEO from "../../components/SEO"
import { TriSquareIcon } from "../../components/StripeIcons"

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
          <div className="inset-y-0  lg:mt-40 lg:mr-20">
            <motion.img
              src="img\uploaded\HBsAg.jpg"
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
          Продукция
        </h1>
        <p className="mb-4 text-xl antialiased leading-relaxed tracking-tight text-secondary">
          Надежность. Использование светодиодных источников света, точная
          система транспортировки планшетов, а также наличие автоматической
          калибровки и самодиагностики в конструкции фотометра INVITROLOGIC
          гарантирует высокую надежность и точность измерений при минимуме
          требований к техническому обслуживанию. Высокое разрешение
          сканирования. Высокотехнологичная оптическая конструкция из 8
          оптоволоконных датчиков обеспечивают высокое разрешение сканирования.
          Высокая скорость проведения измерений. Время измерения одного планшета
          5 секунд в одноволновом режиме (8 секунд в двухволновом режиме).
          Адаптирован для всех типов 96- и 48-луночных планшетов. Система
          фиксации планшета разработана для того, чтобы работать со всеми типами
          96- и 48­–луночных планшетов без дополнительных адаптеров.
          Совместимость с лабораторными роботами. Фронтальная загрузочная
          система обеспечивает легкий доступ для автоматических систем. При
          необходимости фронтальная панель легко убирается. Широкий
          фотометрический диапазон. Диапазон регистрации от 0.000 до 4.500 ОЕ,
          что позволяет исключить необходимость дополнительного разведения
          образцов. Возможность встряхивания. Три режима шейкирования с
          различной интенсивностью. Возможность работы сразу после включения (не
          требует прогрева).
        </p>
        <p className="mb-4 text-xl antialiased leading-relaxed tracking-tight text-secondary">
          Фотометр для микропланшетов INVITROLOGIC поставляется с
          русифицированным программным обеспечением (ПО) «Автософт», которое
          обеспечивает полный контроль оборудования. ПО «Автософт» работает в
          операционной среде Windows®. Гибкость и дружественный интерфейс ПО
          «Автософт» позволяют осуществлять программирование процессов и методик
          их проведения, как для рутинных анализов, так и для сложных научных
          исследований.
        </p>

        <ul className="flex items-baseline space-x-4"></ul>
        <hr className="mb-12 border-t-2 border-dotted mt-14" />
        <h2 className="mt-12 text-lg font-semibold">
          Технические характеристики фотометра INVITROLOGIC:
        </h2>
        <p className="mb-4 font-serif text-xl antialiased leading-relaxed tracking-[.005em] text-secondary">
          характеристики характеристики характеристики характеристики
          характеристики
        </p>
        <p className="mb-4 font-serif text-xl antialiased leading-relaxed tracking-[.005em] text-secondary">
          характеристики характеристики характеристики характеристики
          характеристики характеристики характеристики характеристики
          характеристики характеристики
        </p>
        <h2 className="pt-4 mb-4 text-lg font-semibold">История компании</h2>
        <p className="mb-4 font-serif text-xl antialiased leading-relaxed tracking-[.005em] text-secondary">
          характеристики характеристики характеристики характеристики
          характеристики характеристики характеристики характеристики
          характеристики характеристики
        </p>
        <p className="mb-4 font-serif text-xl antialiased leading-relaxed tracking-[.005em] text-secondary">
          характеристики характеристики характеристики характеристики
          характеристики характеристики характеристики характеристики
          характеристики характеристики
        </p>
      </div>
    </Layout>
  )
}
