// export default function Nav() {

//   const router = useRouter()

//   return (
//     <nav className="sticky top-0 z-10 border-b  bg-gray-100 ">
//       <div className="container flex items-center justify-between w-full px-4 pt-2 pb-2 mx-auto lg:px-0 max-w-screen-lg md:flex-row">
//         <div className="flex mx-auto justify-between w-5/6 ">
//           {/* Primary menu and logo */}
//           <div className="flex items-center gap-16 my-4">
//             {/* logo */}
//             <div>
//               <Link href="/">
//                 <a className="py-1 my-1 mr-0 font-sans text-sm antialiased font-semibold border-b border-blue-700 border-opacity-0 hover:border-opacity-100 md:mr-6 md:inline-block text-secondary">
//                   Медико-биологический&nbsp;Союз
//                 </a>
//               </Link>
//             </div>
//             {/* primary */}
//             <div className="hidden lg:flex gap-8 mb-1 text-md text-tertiary">
//               <div className="space-x-5">
//                 {navigation
//                   .filter((e, i) => i !== 4)
//                   .map((item, i) => (
//                     <NavItem item={item} key={item.name} />
//                   ))}
//               </div>
//               <div className="space-x-5 lg:ml-20">
//                 {navigation
//                   .filter((e, i) => i === 4)
//                   .map((item, i) => (
//                     <NavItem item={item} key={item.name} />
//                   ))}
//               </div>
//             </div>
//           </div>
//           {/* secondary */}
//           <div className="flex gap-6">
//             {/* Mobile navigation toggle */}
//             <div className="lg:hidden flex items-center">
//               <button onClick={() => setToggleMenu(!toggleMenu)}>
//                 <Bars3Icon className="h-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* mobile navigation */}
//       <div
//         className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
//           !toggleMenu ? "h-0" : "h-full"
//         }`}
//       >
//         <div className="px-8">
//           <div className="flex flex-col gap-8 font-bold tracking-wider">
//             {navigation.map((item, i) => (
//               <div
//                 item={item}
//                 key={item.name}
//                 onClick={(toggleMenu) => setToggleMenu(!toggleMenu)}
//               >
//                 <NavItem item={item} key={item.name} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

import React, { useState } from "react"
import { useRouter } from "next/router"
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid"
import Link from "next/link"

const Header = () => {
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
  let [open, setOpen] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="sticky top-0 z-10 border-b  bg-gray-100 shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-verdana text-3x2 cursor-pointer flex items-center gap-1">
          {/* <BookOpenIcon className="w-7 h-7 text-blue-600" /> */}
          <span>Медико-биологический&nbsp;Союз</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {navigation.map((item, i) => (
            <div
              className="md:ml-8 md:my-0 my-7 font-verdana"
              key={item.name}
              onClick={(toggleMenu) => setToggleMenu(!toggleMenu)}
            >
              <NavItem item={item} key={item.name} />
            </div>
          ))}
        </ul>
        {/* button */}
      </div>
    </div>
  )
}

export default Header

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
}
