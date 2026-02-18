
"use client"

import Image from "next/image"
import { User, Bell, Home } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white font-montserrat">

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 select-none pointer-events-none">
        <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          priority
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-red-600/55 backdrop-brightness-95" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen w-full">

        {/* ================= CENTER CONTENT ================= */}
<div className="flex-1 flex flex-col items-center justify-start 
                pt-20 md:pt-24 
                text-center px-6 w-full max-w-7xl mx-auto">

  {/* CTA - Slightly Higher */}
  <button
    className="bg-black text-white rounded-full
               border-[3px] border-white
               w-full max-w-[900px]
               py-4 md:py-5
               text-xl md:text-2xl lg:text-3xl
               font-bold tracking-tight
               shadow-2xl transition-all hover:bg-white/10"
  >
    Ingresar alumno
  </button>

  {/* Title - Smaller */}
  <h2 className="mt-10 text-white font-semibold
                 text-lg md:text-2xl lg:text-3xl
                 drop-shadow-md">
    Alumnos registrados (0/2)
  </h2>

  {/* Subtitle - Bigger */}
  <p className="mt-6 text-white/95
                text-xl md:text-2xl lg:text-3xl
                font-medium tracking-wide">
    No hay registros de alumnos propios
  </p>

</div>

        {/* ================= RIGHT FLOATING ICONS ================= */}
        <div className="hidden md:flex absolute right-10 top-24 
                        flex-col space-y-10 items-center z-20">

          <button className="p-2 transition-transform hover:scale-110">
            <Home className="w-8 h-8 lg:w-9 lg:h-9 text-white drop-shadow-md" />
          </button>

          <button className="relative p-2 transition-transform hover:scale-110">
            <Bell className="w-8 h-8 lg:w-9 lg:h-9 text-white drop-shadow-md" />
            <span className="absolute -top-1 -right-1 w-4 h-4 
                             border-2 border-white rounded-full 
                             flex items-center justify-center 
                             bg-white/20 backdrop-blur-sm
                             text-[9px] font-black">
              9
            </span>
          </button>

          <button className="p-2 transition-transform hover:scale-110">
            <User className="w-8 h-8 lg:w-9 lg:h-9 text-white drop-shadow-md" />
          </button>

        </div>

      </div>
    </section>
  )
}
