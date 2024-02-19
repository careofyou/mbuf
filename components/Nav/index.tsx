import React, { useState } from "react"

import { Bars3Icon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const router = useRouter()

  const navigation = [
    {
      name: "Продукция",
      href: "/product",
      isActive: router.pathname === "/product",
    },
    {
      name: "Проекты",
      href: "/#work",
      isActive: false,
    },
    {
      name: "Контакты",
      href: "/contacts",
      isActive: router.pathname === "/contacts",
    },
    { name: "О нас", href: "/about", isActive: router.pathname === "/about" },
  ]

  return (
    <nav className="sticky top-0 z-10 border-b bg-gray-100 font-mono">
      <div className="container flex items-center justify-between w-full px-4 pt-2 pb-2 mx-auto lg:px-0 max-w-screen-lg md:flex-row">
        {/* Left side of navbar */}
        <div className="flex items-center">
          <div>
            <Link href="/">
              <a className="py-1 my-1 mr-0 font-sans text-sm antialiased font-semibold border-b border-blue-700 border-opacity-0 hover:border-opacity-100 md:mr-6 md:inline-block text-secondary">
                Медико-биологический&nbsp;Союз
              </a>
            </Link>
          </div>
        </div>

        {/* Centered navigation items */}
        <div className="flex space-x-5 lg:hidden mx-auto">
          {navigation.map((item) => (
            <NavItem item={item} key={item.name} />
          ))}
        </div>

        {/* Right side of navbar */}
        <div className="flex items-center">
          <div className="hidden lg:flex gap-8 mb-1 text-md text-tertiary">
            {navigation
              .filter((e, i) => i !== 4)
              .map((item) => (
                <NavItem item={item} key={item.name} />
              ))}
          </div>
          <div className="hidden lg:flex">
            {navigation
              .filter((e, i) => i === 4)
              .map((item) => (
                <NavItem item={item} key={item.name} />
              ))}
          </div>

          {/* Mobile navigation toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              <Bars3Icon className="h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            {navigation.map((item) => (
              <div key={item.name} onClick={() => setToggleMenu(!toggleMenu)}>
                <NavItem item={item} key={item.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

type Props = {
  item: {
    href: string
    isActive: boolean
    name: string
  }
}

function NavItem({ item }: Props) {
  return (
    <Link key={item.name} href={item.href}>
      <a
        className={`text-sm py-1 hover:bg-gray-100 hover:border-b ${
          item.isActive
            ? "text-darkseafoam hover:text-darkerseafoam hover:border-darkerseafoam"
            : "text-secondary hover:text-primary hover:border-gray-700"
        }`}
      >
        {item.name}
      </a>
    </Link>
  )
}
