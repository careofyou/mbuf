import Layout from "../../components/Layout"
import NewsBlock from "../../components/NewsBlock"
import { TriSquareIcon } from "../../components/StripeIcons"

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto mt-4 mb-20 md:mt-12 md:pt-16">
        <TriSquareIcon />
        <h1 className="mt-4 mb-8 text-4xl antialiased font-bold text-primary">
          Проекты
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
        <NewsBlock />
      </div>
    </Layout>
  )
}
