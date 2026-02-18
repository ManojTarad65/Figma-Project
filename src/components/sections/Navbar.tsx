
"use client"

import Image from "next/image"
import { User } from "lucide-react"

export default function Navbar() {
  return (
    <header className="w-full bg-white text-black shadow-sm relative z-50">

      {/* Main Navbar Container */}
      <div className="max-w-[1920px] mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <div className="flex-shrink-0 flex items-center">
          <div className="relative h-[65px] w-[150px]">
            <Image
              src="/logo.png"
              alt="Neuro Diversión Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </div>

        {/* CENTER: Navigation Links (Desktop) */}
        <nav className="hidden xl:flex items-center  justify-center gap-8 lg:gap-10">
          {[
            { name: "PLANES DE SUSCRIPCIÓN", href: "#" },
            { name: "CONTACTA A UN PROFESIONAL", href: "#" },
            { name: "NOSOTROS", href: "#" },
            { name: "CALENDARIO DE ACTIVIDADES", href: "#" },
            { name: "SOPORTE", href: "#" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-bold font-montserrat text-[14px] lg:text-[15px] tracking-[0.03em] uppercase text-black hover:text-red-600 transition-colors duration-200 whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* RIGHT: Profile Icon & Partner Logo */}
        <div className="flex items-center gap-4 md:gap-8">

          <div className="p-1 cursor-pointer hover:bg-gray-100 rounded-full transition-colors">
            <User className="w-8 h-8 text-[#E1251B] stroke-[2.5px]" />
          </div>

          <div className="relative h-[55px] w-[130px] md:w-[160px]">
            <Image
              src="/rightLogo.png"
              alt="Corfo Logo"
              fill
              className="object-contain object-right"
            />
          </div>

        </div>
      </div>

      {/* 3-Color Gradient Strip */}
      <div className="w-full flex flex-col">
        {/* Top Layer: Orange to Yellow Gradient */}
<div className="w-full h-[6px] bg-gradient-to-r from-[#E11B22] via-[#FFCC00] to-[#80C342]" />


      </div>
    </header>
  )
}
