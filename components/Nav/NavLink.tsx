import clsx from "clsx"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"

interface NavLinkProps extends LinkProps {
  className: string
  children: string
  isHeader?: boolean
  isMobileNavigation?: boolean
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  isMobileNavigation,
  isHeader,
  href,
  ...props
}) => {
  const router = useRouter()

  const isRouteActive =
    router.pathname.split("/")[1] === String(href).split("/")[1]

  return (
    <Link
      href={href}
      className={clsx(
        "motion-safe:transition-colors",
        isRouteActive
          ? "font-semibold dark:text-blue-500"
          : "capitalize inline-block text-3xl relative cursor-pointer transition-all duration-500 before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-gray-600 before:via-slate-400 before:to-zinc-500 hover:before:w-full hover:before:opacity-100",
        isMobileNavigation ? "text-2xl" : "text-base",
        !isMobileNavigation &&
          isHeader &&
          "rounded-lg p-2 hover:bg-gray-200 dark:hover:bg-blue-500"
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

export default NavLink
