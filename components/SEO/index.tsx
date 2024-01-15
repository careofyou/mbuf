import Head from "next/head"

type SEOProps = {
  title?: string
  description?: string
  og?: string
}

export default function SEO({
  title = "МБС",
  og = "og-home.png",
  description = "Медико-биологический союз",
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="MBU" />

      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="meta/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="meta/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="meta/favicon-16x16.png"
      />
      <link rel="manifest" href="meta/site.webmanifest" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}
