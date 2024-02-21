import "../styles/tailwind-custom.css"
import "../styles/fonts.css"
import { useEffect, useState } from "react"

import { AnimatePresence } from "framer-motion"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useScrollBlock } from "../components/Nav/useScrollBlock"

import Footer from "../components/Footer"
import Nav from "../components/Nav"
import * as ga from "../lib/ga"

function MyApp({ Component, pageProps }: AppProps) {
  const [blockScroll, allowScroll] = useScrollBlock()
  const [showMobileNavigation, setShowMobileNavigation] = useState(false)

  const mobileNavigationHandler = (): void => {
    if (showMobileNavigation) {
      setShowMobileNavigation(false)
      allowScroll()
    } else {
      window.scrollTo({ top: 0 })
      setShowMobileNavigation(true)
      blockScroll()
    }
  }
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Nav
        showMobileNavigation={showMobileNavigation}
        handleClick={mobileNavigationHandler}
      />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default MyApp
