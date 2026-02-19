"use client"

import { Lock } from "lucide-react"

export default function ResetPasswordPage() {
  return (
    <section className="min-h-screen bg-[#ED3237] font-montserrat px-6">

      <div className="w-full max-w-6xl mx-auto pt-10">

        {/* ================= TITLE ================= */}
        <h1 className="text-white text-5xl md:text-5xl font-extrabold text-center mb-16 tracking-wide">
          Restablecer contraseña
        </h1>

        <div className="space-y-14">

          {/* ================= NEW PASSWORD ================= */}
          <div>
            <label className="block text-white text-2xl md:text-3xl font-bold mb-2 text-center">
              Nueva contraseña
            </label>

            <div className="relative">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-[#D64641] w-12 h-12" />

              <input
                type="password"
                placeholder="Ingrese nueva contraseña"
                className="
                  w-full
                  h-20
                  bg-white
                  text-gray-400
                  rounded-full
                  border-[4px] border-black
                  pl-20 pr-8
                  text-2xl
                  placeholder:text-gray-400
                  focus:outline-none
                  shadow-lg
                "
              />
            </div>
          </div>

          {/* ================= REPEAT PASSWORD ================= */}
          <div>
            <label className="block text-white text-2xl md:text-3xl font-bold mb-2 text-center">
              Repetir contraseña
            </label>

            <div className="relative">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-[#D64641] w-12 h-12" />

              <input
                type="password"
                placeholder="Ingrese nuevamente su contraseña"
                className="
                  w-full
                  h-20
                  bg-white
                  text-gray-400
                  rounded-full
                  border-[4px] border-black
                  pl-20 pr-8
                  text-2xl
                  placeholder:text-gray-400
                  focus:outline-none
                  shadow-lg
                "
              />
            </div>
          </div>

          {/* ================= CONFIRM BUTTON ================= */}
          <div className="pt-2">
            <button
              className="
                w-full
                h-20
                bg-black
                text-white
                rounded-full
                border-[4px] border-white
                text-2xl
                font-bold
                hover:bg-zinc-900
                transition
                shadow-xl
              "
            >
              Confirmar
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
