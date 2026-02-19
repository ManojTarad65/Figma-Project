"use client"

import Image from "next/image"
import { User, Bell, Home } from "lucide-react"

export default function AssessmentPage() {
  return (
    <section className="relative w-full h-screen overflow-hidden font-montserrat text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Background"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-red-600/55 backdrop-brightness-95" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex flex-col items-center px-6 pt-10">

  {/* Header Row */}
  <div className="w-full max-w-6xl flex items-center justify-center relative">

    {/* Back Arrow */}
    <button className="absolute left-0 text-white hover:opacity-80 transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 md:w-10 md:h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    {/* Title */}
    <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-center">
      PAUTA DE ENTRADA
    </h1>

  </div>


        {/* ================= CATEGORY SECTION ================= */}
        <div className="w-full max-w-6xl mt-6 text-center font-bold relative">

  

          {/* Top Row */}
          <div className="flex justify-between items-center text-3xl md:text-4xl px-12">

            <span className="text-white">
              Lenguaje
            </span>

            <span className="text-white/40">
              Memoria
            </span>

            <span className="text-white/40">
              Psicomotricidad
            </span>

          </div>

          {/* Bottom Row */}
          <div className="flex justify-center gap-20 md:gap-32 mt-3 text-3xl md:text-4xl">

            <span className="text-white/40">
              Percepción
            </span>

            <span className="text-white/40">
              Concentración
            </span>

          </div>

        </div>

{/* ================= DESCRIPTION ================= */}
<div className="w-full max-w-6xl mt-8">

  <p className="
    max-w-4xl
    text-left
    text-xl md:text-2xl
    font-semibold
    leading-snug
  ">
    Marca aquella conducta, acción, emoción o reacción que realiza el 
      <br />niño o niña.
  
    Puedes marcar más de una.
  </p>

</div>


{/* ================= CHECKLIST ================= */}
<div className="
  w-full
  max-w-6xl
  mt-10
">

  <div className="
    max-w-3xl
    space-y-6
    text-xl md:text-2xl
  ">

    {[
      "Llora",
      "Balbucea",
      "Emite sonidos",
      "Menciona vocales",
      "Menciona letras",
      "Menciona sílabas"
    ].map((item, index) => (
      <label
        key={index}
        className="flex items-center gap-5 cursor-pointer"
      >
        <input
          type="checkbox"
          className="
            w-6 h-6 md:w-7 md:h-7
            appearance-none
            border-2 border-black
            bg-white
            checked:bg-black
            relative
          "
        />

        <span className="font-semibold">
          {item}
        </span>
      </label>
    ))}

  </div>

</div>


{/* ================= CONFIRM BUTTON ================= */}
<div className="w-full max-w-6xl mt-12">

  <button
    className="
      w-full
      bg-black text-white
      rounded-full
      border-4 border-white
      py-5
      text-xl md:text-2xl
      font-bold
      shadow-xl
    "
  >
    Confirmar
  </button>

</div>


        {/* ================= RIGHT FLOATING ICONS ================= */}
        <div className="hidden md:flex absolute right-16 top-12 
                        flex-col space-y-6 items-center">

          <Home className="w-12 h-12 text-white cursor-pointer" />

          <div className="relative">
            <Bell className="w-12 h-12 text-white cursor-pointer" />
            <span className="absolute -top-1 -right-1 w-5 h-5 
                             border-2 border-white rounded-full 
                             flex items-center justify-center 
                             bg-red-600 text-white text-xs font-bold">
              9
            </span>
          </div>

          <User className="w-12 h-12 text-white cursor-pointer" />
        </div>

      </div>
    </section>
  )
}
