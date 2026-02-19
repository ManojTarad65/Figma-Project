
"use client"

import { User, Lock } from "lucide-react"

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-[#ED3237] font-montserrat px-6">

      <div className="w-full max-w-6xl mx-auto pt-24">

        {/* ================= TITLE ================= */}
        <h1 className="text-white text-5xl md:text-5xl font-extrabold text-center mb-12 -mt-16 tracking-wide">
          INICIAR SESIÓN
        </h1>

        <div className="space-y-12">

          {/* ================= USERNAME ================= */}
          <div>
            <label className="block text-white text-2xl md:text-3xl font-bold mb-2 text-center">
              Nombre usuario
            </label>

            <div className="relative">
              <User className="absolute left-6 top-1/2 -translate-y-1/2 text-[#D64641] w-12 h-12" />

              <input
                type="text"
                placeholder="Rodrigo Andrés Tapia Jensen"
                className="
                  w-full
                  h-20
                  font-montserrat
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

          {/* ================= PASSWORD ================= */}
          <div>
            <label className="block text-white text-2xl md:text-3xl font-bold mb-2 text-center">
              Clave
            </label>

            <div className="relative">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-[#D64641] w-12 h-12" />

              <input
                type="password"
                placeholder="Contraseña"
                className="
                  w-full
                  h-20
                  bg-white
                  font-montserrat
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

          {/* ================= LOGIN BUTTON ================= */}
          <div className="pt-2 text-center">
            <button
              className="
                w-full
                h-20
                bg-black
                text-white
                rounded-full
                font-montserrat
                border-[4px] border-white
                text-2xl
                font-bold
                hover:bg-zinc-900
                transition
                shadow-xl
              "
            >
              Iniciar sesión
            </button>

            <button className="mt-2 text-white text-2xl font-bold underline underline-offset-4 hover:opacity-80 transition">
              Olvidó contraseña
            </button>
          </div>

          {/* ================= CREATE ACCOUNT ================= */}
          <div className="pt-4 text-center">
            <label className="block text-white text-2xl md:text-3xl font-bold mb-2">
              Nuevo usuario
            </label>

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
                font-montserrat
              "
            >
              Crear cuenta
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
