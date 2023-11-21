import { motion } from "framer-motion"
export default function Hero() {
  return (
    <section className="relative px-0 pb-6 mb-0 overflow-hidden md:px-12 md:pb-6 lg:overflow-visible lg:pl-12 lg:pr-0 rounded-b-3xl grid grid-cols-1 lg:grid-cols-2 lg:gap-4 lg:mb-0 lg:-mx-12">
      <div className="order-2 py-4 lg:py-32 lg:order-1">
        <span className="inline-block mt-4 mb-2 text-xl md:mb-3 md:text-2xl text-tertiary">
          МБС
        </span>
        <h1 className="text-4xl antialiased font-bold tracking-tight lg:leading-headers md:text-5xl text-primary">
          Медико-биологический <span className="effect-shine">Союз</span>
        </h1>
      </div>

      <div className="relative order-1 -z-10 lg:order-2">
        <div className="inset-y-0  lg:-mt-40 lg:-mr-20 mt-10">
          <motion.video
            autoPlay
            loop
            muted
            className="mx-auto w-128 md:w-auto"
            initial={{ opacity: 0 }}
            transition={{ ease: "easeIn", duration: 1.5 }}
            animate={{ opacity: 1 }}
          >
            <source src="/mbu.webm" type="video/webm" />
            {/* Add additional source elements for other video formats */}
          </motion.video>
        </div>
      </div>
    </section>
  )
}
