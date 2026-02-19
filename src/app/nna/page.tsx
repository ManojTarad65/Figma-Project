

"use client"

import { Home, Bell, User } from "lucide-react"

export default function NnaMainView() {

  const cards = [
    { title: "Memoria", color: "bg-[#9B69C2]", progress: "22%" },
    { title: "Lenguaje", color: "bg-[#BCA9CE]", progress: "38%" },
    { title: "Concentración", color: "bg-[#A366FF]", progress: "15%" },
    { title: "Percepción", color: "bg-[#5C66FF]", progress: "20%" },
  ]

  const graphData = [
    { label: "M", height: "55%" },
    { label: "L", height: "80%" },
    { label: "C", height: "60%" },
    { label: "Pe", height: "82%" },
    { label: "Ps", height: "92%" },
  ]

  return (
    <section className="min-h-screen bg-[#FEFEFE] flex flex-col font-montserrat">

      {/* Top Strip */}
      <div className="w-full h-[6px] flex">
        <div className="h-full w-1/3 bg-[#80C342]" />
        <div className="h-full w-1/3 bg-[#FFCC00]" />
        <div className="h-full w-1/3 bg-[#F05A28]" />
      </div>

      <div className="flex w-full flex-1">

        {/* LEFT SIDEBAR */}
        <div className="w-[18%] flex flex-col items-center pt-12">

          <div className="w-28 h-28 rounded-full bg-[#ED3237] flex items-center justify-center shadow-sm">
            <User className="w-14 h-14 text-white" />
          </div>

          <h2 className="text-[#ED3237] text-3xl font-bold mt-4 tracking-tight">
            Rodrigo
          </h2>

          <div className="mt-10 space-y-8 w-full px-4">
            {[
              { name: "Memoria", active: true },
              { name: "Lenguaje", active: true },
              { name: "Concentración", active: false },
              { name: "Percepción", active: false },
              { name: "Psicomotricidad", active: false },
            ].map((item, i) => (
              <div key={i} className={`flex flex-col items-center ${!item.active && "opacity-40"}`}>
                <span className={`text-4xl leading-none ${item.active ? "text-[#ED3237]" : "text-gray-400"}`}>★</span>
                <p className={`text-xs font-bold mt-1 uppercase tracking-tighter ${item.active ? "text-[#ED3237]" : "text-gray-600"}`}>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* MAIN CONTENT */}
        <div className="w-[75%] px-12 pt-8">

          {/* GRAPH */}
         <div className="flex justify-center mb-18 ">
            <div className="w-[59%] relative">
              <div className="h-42 border-l-[1.5px] border-b-[1.5px] border-black/40 flex items-end justify-between px-12 ">
                
                {/* Visual connecting line (simplified SVG) */}
                <svg className="absolute inset-0 w-full h-full px-12 pb-1 pointer-events-none">
                  <polyline
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="1"
                    points="40,90 140,40 250,70 360,35 470,20"
                  />
                </svg>

                {graphData.map((item, i) => (
                  <div key={i} className="flex flex-col items-center justify-end h-full z-10">
                    <div
                      className="w-7 bg-[#A5B4FC] transition-all"
                      style={{ height: item.height }}
                    />
                    <span className="absolute -bottom-7 text-xs font-bold text-gray-500">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* CARDS GRID */}
          <div className="grid grid-cols-2 gap-x-24 gap-y-10">

            {cards.map((item, index) => (
              <div key={index} className="flex flex-col items-center">

                <div
                  className={`w-full h-40 rounded-[20px] border-[3.5px] border-black ${item.color}`}
                />

                <div className="w-full h-7 bg-black mt-3 relative overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#F5D14E]"
                    style={{ width: item.progress }}
                  />
                </div>

                <h3 className="text-[40px] mt-3 font-light text-black leading-none">
                  {item.title}
                </h3>

              </div>
            ))}

          </div>

        </div>


        {/* RIGHT ICONS */}
        <div className="w-[10%] flex flex-col items-center pt-12 space-y-12">

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
