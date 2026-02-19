"use client"

import { Home, Bell, User } from "lucide-react"
import Image from "next/image"


export default function ActivitiesPage() {

  const activities = [
    { status: "done", label: "L" },
    { status: "locked", label: "PL" },
    { status: "locked", label: "PL" },
    { status: "locked", label: "PL" },
    { status: "done", label: "L" },
    { status: "locked", label: "PL" },
    { status: "locked", label: "PL" },
    { status: "locked", label: "PL" },
    { status: "locked", label: "PL" },
  ]

  return (
    <section className="min-h-screen bg-[#F5F5F5] flex flex-col font-montserrat px-8">



      <div className="flex w-full flex-1">

        {/* ================= LEFT SIDEBAR ================= */}
        <div className="w-[18%] flex flex-col items-center pt-12">

          <div className="w-28 h-28 rounded-full bg-[#ED3237] flex items-center justify-center">
            <User className="w-14 h-14 text-white" />
          </div>

          <h2 className="text-[#ED3237] text-3xl font-bold mt-4">
            Rodrigo
          </h2>

          <div className="mt-10 space-y-8 w-full px-4">

            <div className="flex flex-col items-center">
              <span className="text-[#ED3237] text-4xl">★</span>
              <p className="text-[#ED3237] text-xs font-bold mt-1 uppercase">Memoria</p>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-[#ED3237] text-4xl">★</span>
              <p className="text-[#ED3237] text-xs font-bold mt-1 uppercase">Lenguaje</p>
            </div>

            <div className="flex flex-col items-center opacity-40">
              <span className="text-gray-400 text-4xl">★</span>
              <p className="text-gray-600 text-xs font-bold mt-1 uppercase">Concentración</p>
            </div>

            <div className="flex flex-col items-center opacity-40">
              <span className="text-gray-400 text-4xl">★</span>
              <p className="text-gray-600 text-xs font-bold mt-1 uppercase">Percepción</p>
            </div>

            <div className="flex flex-col items-center opacity-40">
              <span className="text-gray-400 text-4xl">★</span>
              <p className="text-gray-600 text-xs font-bold mt-1 uppercase">Psicomotricidad</p>
            </div>

          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="w-[75%] px-16 pt-10">

        <div className="relative flex items-center justify-center mb-12">

  {/* Left Home Icon */}
  <div className="absolute left-0 ">
    <Home className="w-12 h-12 text-[#ED3237]" />
  </div>

  {/* Title */}
  <h1 className="text-5xl font-bold text-black">
    Actividades: Memoria
  </h1>
  </div>

          {/* GRID */}
          <div className="grid grid-cols-3 gap-x-24 gap-y-6 justify-items-center">

            {activities.map((item, index) => 
              <div key={index} className="flex flex-col items-center">

                <div
                  className={`w-72 h-40 rounded-[6px] border-[3px] border-black flex items-center justify-center ${
                    item.status === "done"
                      ? "bg-[#7BC043]"
                      : "bg-[#F02E2E]"
                  }`}
                >
                  {/* Rocket SVG */}

                <Image
  src="/Vector.png"
  alt="Rocket"
  width={90}
  height={90}
  className="object-contain"
/>

                </div>

                <p className="text-4xl mt-2 font-light">
                  {item.label}
                </p>

              </div>
            )}

          </div>

        </div>

        {/* ================= RIGHT ICONS ================= */}
        <div className="w-[10%] flex flex-col items-center pt-12 space-y-14">

          <Home className="w-12 h-12 text-black stroke-[1.5]" />

          <div className="relative">
            <Bell className="w-12 h-12 text-black stroke-[1.5]" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#ED3237] text-white text-[10px] font-bold rounded-full border-2 border-white flex items-center justify-center">
              9
            </span>
          </div>

          <User className="w-12 h-12 text-black stroke-[1.5]" />

        </div>

      </div>
    </section>
  )
}
