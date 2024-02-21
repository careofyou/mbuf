import { motion } from "framer-motion"

import Layout from "../../components/Layout"
import SectionWorkList from "../../components/SectionWorkList"
import SEO from "../../components/SEO"
import { TriSquareIcon } from "../../components/StripeIcons"

export default function Contacts() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto mt-4 mb-20 md:mt-12 md:pt-16">
        <TriSquareIcon />
        <h2 className="mt-12 text-lg font-semibold">Конакты</h2>
        <SectionWorkList />
        <h2 className="mb-4 text-lg font-semibold">Уважаемые коллеги! </h2>
        <p className="mb-4 font-serif text-xl antialiased leading-relaxed tracking-[.005em] text-secondary">
          По всем вопросам, связанным с приобретением продукции, ценами,
          условиями поставки просим обращаться в Отдел продаж.
        </p>
        <h2 className="pt-4 mb-4 text-lg font-semibold">Дистрибьютеры</h2>
        <p className="mb-4 font-serif text-xl antialiased leading-relaxed tracking-[.005em] text-secondary">
          дистрибьютер дистрибьютер дистрибьютер дистрибьютер дистрибьютер
          дистрибьютер дистрибьютер дистрибьютер дистрибьютер дистрибьютер
          дистрибьютер дистрибьютер дистрибьютер дистрибьютер дистрибьютер
          дистрибьютер дистрибьютер дистрибьютер
        </p>
        <p className="mb-4 font-serif text-xl antialiased leading-relaxed tracking-[.005em] text-secondary">
          дистрибьютер дистрибьютер дистрибьютер дистрибьютер дистрибьютер
          дистрибьютер дистрибьютер дистрибьютер дистрибьютер дистрибьютер
          дистрибьютер дистрибьютер дистрибьютер дистрибьютер дистрибьютер
          дистрибьютер дистрибьютер дистрибьютер
        </p>
      </div>
    </Layout>
  )
}
