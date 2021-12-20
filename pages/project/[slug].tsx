import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystone-6/document-renderer"
import { NotEditable } from "@keystone-6/fields-document/component-blocks"
import { InferRenderersForComponentBlocks } from "@keystone-6/fields-document/component-blocks"
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next"
import Image from "next/image"
import Link from "next/link"

import Layout from "../../components/Layout"
import ProjectLayout from "../../components/ProjectLayout"
import SEO from "../../components/SEO"
import { componentBlocks } from "../../lib/component-blocks"
import { query } from ".keystone/api"

const componentBlockRenderers: InferRenderersForComponentBlocks<
  typeof componentBlocks
> = {
  quote: (props) => {
    return (
      <div
        style={{
          borderLeft: "3px solid #CBD5E0",
          paddingLeft: 16,
        }}
      >
        <div style={{ fontStyle: "italic", color: "#4A5568" }}>
          {props.content}
        </div>
        <div style={{ fontWeight: "bold", color: "#718096" }}>
          <NotEditable>— </NotEditable>
          {props.attribution}
        </div>
      </div>
    )
  },
  image: (props) => {
    return (
      <div className="max-w-full max-h-full my-4">
        {/* <Image src={props.imageSrc} alt={props.altText} layout="fill" /> */}
        <Image
          src={props.imageSrc}
          alt={props.altText}
          width={props.width}
          height={props.height}
          layout="responsive"
          objectFit="scale-down"
        />
        <span className="text-sm text-tertiary">{props.caption}</span>
      </div>
    )
  },
}

const renderers: DocumentRendererProps["renderers"] = {
  // use your editor's autocomplete to see what other renderers you can override
  inline: {
    bold: ({ children }) => {
      return <strong>{children}</strong>
    },
  },

  block: {
    paragraph: ({ children, textAlign }) => {
      return <p style={{ textAlign }}>{children}</p>
    },
  },
}

export default function ProjectPage({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <SEO title={project.title} description={project.subtitle} />
      <ProjectLayout>
        <main className="mt-4">
          <div className="mb-4">
            <Link href="/">
              <a>&larr; back home</a>
            </Link>
          </div>
          <h1 className="mb-4 font-serif text-5xl">{project.title}</h1>
          {project.content?.document && (
            <div className="prose prose-lg">
              <DocumentRenderer
                document={project.content.document}
                renderers={renderers}
                componentBlocks={componentBlockRenderers}
              />
            </div>
          )}
        </main>
      </ProjectLayout>
    </Layout>
  )
}

type Project = {
  slug: string
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const projects = await query.Project.findMany({
    query: `slug`,
  })

  const paths = projects
    .map((project: Project) => project.slug)
    .filter((slug: string): slug is string => !!slug)
    .map((slug: string) => `/project/${slug}`)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const project = await query.Project.findOne({
    where: { slug: params!.slug as string },
    query: "id title content {document}",
  })
  return { props: { project } }
}
