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
    <nav className="sticky top-0 z-10 border-b  bg-gray-100 ">
      <div className="container flex items-center justify-between w-full px-4 pt-2 pb-2 mx-auto lg:px-0 max-w-screen-lg md:flex-row">
        <div className="flex mx-auto justify-between w-5/6 ">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-16 my-4">
            {/* logo */}
            <div>
              <Link href="/">
                <a className="py-1 my-1 mr-0 font-sans text-sm antialiased font-semibold border-b border-blue-700 border-opacity-0 hover:border-opacity-100 md:mr-6 md:inline-block text-secondary">
                  Медико-биологический&nbsp;Союз
                </a>
              </Link>
            </div>
            {/* primary */}
            <div className="hidden lg:flex gap-8 mb-1 text-md text-tertiary">
              <div className="space-x-5">
                {navigation
                  .filter((e, i) => i !== 4)
                  .map((item, i) => (
                    <NavItem item={item} key={item.name} />
                  ))}
              </div>
              <div className="space-x-5 lg:ml-20">
                {navigation
                  .filter((e, i) => i === 4)
                  .map((item, i) => (
                    <NavItem item={item} key={item.name} />
                  ))}
              </div>
            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-6">
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            {navigation.map((item, i) => (
              <div
                item={item}
                key={item.name}
                onClick={(toggleMenu) => setToggleMenu(!toggleMenu)}
              >
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
