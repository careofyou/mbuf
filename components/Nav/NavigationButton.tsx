import { MouseEventHandler, useMemo } from "react"

import { motion, TargetAndTransition, useReducedMotion } from "framer-motion"

interface NavigationButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>
  showMobileNavigation: boolean
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  showMobileNavigation,
  handleClick,
}) => {
  const shouldReduceMotion = useReducedMotion()

  const tapProperties: TargetAndTransition = useMemo(() => {
    return {
      translateX: "90px",
      rotate: 90,
    }
  }, [])

  return (
    <button
      aria-label="Toggle Navigation"
      onClick={handleClick}
      className="my-3 h-12 w-12 overflow-hidden rounded-lg bg-gray-200 shadow dark:bg-gray-700 dark:text-gray-100 "
    >
      <motion.div
        whileTap={shouldReduceMotion ? undefined : tapProperties}
        className="p-3"
      >
        {showMobileNavigation ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </motion.div>
    </button>
  )
}

export default NavigationButton
