import React, { useState } from "react"

import { XIcon, MenuIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { useRouter } from "next/router"

interface NavProps {
  showMobileNavigation: boolean
  handleClick: () => void
}

const Nav: React.FC<NavProps> = ({ showMobileNavigation, handleClick }) => {
  const router = useRouter()
  const navigation = [
    {
      name: "Продукция",
      href: "/product",
      isActive: router.pathname === "/product",
    },
    {
      name: "Проекты",
      href: "/project",
      isActive: false,
    },
    {
      name: "Контакты",
      href: "/contacts",
      isActive: router.pathname === "/contacts",
    },
    { name: "О нас", href: "/about", isActive: router.pathname === "/about" },
  ]

  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 z-10 border-b bg-gray-100 shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-verdana text-3x2 cursor-pointer flex items-center gap-1">
          <span>Медико-биологический&nbsp;Союз</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XIcon /> : <MenuIcon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "-top-[490px]"
          }`}
        >
          {navigation.map((item, i) => (
            <div className="md:ml-8 md:my-0 my-7 font-verdana" key={item.name}>
              <NavItem item={item} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Nav

type NavItemProps = {
  item: {
    href: string
    isActive: boolean
    name: string
  }
}

const NavItem: React.FC<NavItemProps> = ({ item }) => (
  <Link href={item.href}>
    <a
      className={`text-gray-800 hover:text-blue-400 duration-500 ${
        item.isActive
          ? "text-darkseafoam hover:text-darkerseafoam hover:border-darkerseafoam"
          : "text-secondary hover:text-primary hover:border-gray-700"
      }`}
    >
      {item.name}
    </a>
  </Link>
)
