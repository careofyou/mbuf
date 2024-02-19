import React from "react"

import { motion } from "framer-motion"

import NewsBlock from "../NewsBlock"
import PersonalProjectList from "../PersonalProjectList"
import SectionHeader from "../SectionHeaderUpdate"
import SectionProjectList from "../SectionProjectList"
import { DiamondIcon, SquirqleIcon, CircleIcon } from "../StripeIcons"
import Hero from "./Hero"

type Props = {
  posts: [
    {
      id: string
      title: string
      subtitle: string
      slug: string
      publishDate: Date
    }
  ]
  projects: [
    {
      id: string
      title: string
      subtitle: string
      slug: string
      projectType: string
      isPublished: boolean
      bgColor: string
      hasDarkBg: boolean
      timeline: string
      company: string
      featuredImage: {
        alt: string
        image: {
          url: string
        }
      }
    }
  ]
}

function FadeIn({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { ease: "easeInOut", duration: 1 },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export default function Homepage({ posts, projects }: Props) {
  const workProjects = projects.filter(
    (project) => project.projectType === "work"
  )
  const personalProjects = projects.filter(
    (project) => project.projectType === "personal"
  )

  return (
    <>
      <FadeIn>
        <section style={{ marginTop: "1rem", marginBottom: "8rem" }}>
          <Hero />
        </section>
      </FadeIn>
      <div className="mt-40"></div>
      <FadeIn>
        <section className="max-w-5xl px-5 py-6 mx-auto mt-50 mb-20  text-center top-10 bg-blue-200  border-2 border-gray-200 border-dotted rounded-lg md:mb-20 md:mt-32 md:py-12 md:px-14">
          <h2 className="text-xl font-semibold text-left md:text-2xl text-primary">
            Наша миссия:
          </h2>
          <div className="flex flex-wrap justify-center mt-6 -m-1">
            <h2 className="text-xl text-left font-sm md:text-xl text-primary">
              Текст о нашей миссии Текст о нашей миссии Текст о нашей миссии
            </h2>
          </div>
        </section>
        <a id="writing" />
      </FadeIn>

      {/* <FadeIn>
        <section className="mx-auto mb-10 md:mb-15">
          <SectionHeader
            title="История"
            subtitle="A smattering of tips, tricks, and thoughts from along the way"
            icon={
              <div className="transition duration-1000 ease-in-out hover:scale-150 hover:rotate-180">
                <CircleIcon />
              </div>
            }
          />
          <div className="pt-8" />
          <SectionProjectList projects={workProjects} />
          <a id="work" />
        </section>
      </FadeIn> */}

      <FadeIn>
        <section className="mx-auto mb-10 md:mb-15">
          <SectionHeader
            title="Новости"
            subtitle="A smattering of tips, tricks, and thoughts from along the way"
            icon={
              <div className="transition duration-1000 ease-in-out hover:scale-150 hover:rotate-180">
                <CircleIcon />
              </div>
            }
          />
          <div className="pt-8" />
          <NewsBlock />
          <a id="work" />
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mb-10 md:mb-20">
          <SectionHeader
            title="Проекты"
            subtitle="Tidbits and snippets of projects over time"
            icon={
              <div className="transition duration-1000 ease-in-out hover:scale-150 hover:rotate-90">
                <DiamondIcon />
              </div>
            }
          />
          <div className="pt-12" />
          <SectionProjectList projects={workProjects} />
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mb-10 md:mb-20">
          <SectionHeader
            title="Продукция"
            subtitle="Things I built for fun and favours"
            icon={
              <div className="transition duration-1000 ease-in-out hover:scale-150 hover:-rotate-12">
                <SquirqleIcon />
              </div>
            }
          />
          <div className="pt-12" />
          <PersonalProjectList projects={personalProjects} />
        </section>
      </FadeIn>
    </>
  )
}
