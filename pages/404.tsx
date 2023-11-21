import Link from "next/link"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function NotFound() {
  return (
    <Layout>
      <SEO />
      <h1 className="mb-4 font-serif text-4xl">404:Не найдено</h1>
      <p className="mb-2 text-lg text-secondary">
        Похоже, такой страницы не существует.
      </p>
      <Link href="/">Назад</Link>
    </Layout>
  )
}
