"use client"

import { User, Mail, Lock } from "lucide-react"

export default function SignupPage() {
  return (
    <section className="min-h-screen bg-[#ED3237] font-montserrat px-6">

      <div className="w-full max-w-6xl mx-auto pt-8">

        <div className="space-y-16">

          {/* ================= USERNAME ================= */}
          <div>
            <label className="block text-white text-2xl md:text-3xl font-bold mb-4 text-center">
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

          {/* ================= EMAIL ================= */}
          <div>
            <label className="block text-white text-2xl md:text-3xl font-bold mb-4 text-center">
              Correo
            </label>

            <div className="relative">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-[#D64641] w-12 h-12" />

              <input
                type="email"
                placeholder="r.tapia.jensen@gmail.com"
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

          {/* ================= PASSWORD ================= */}
          <div>
            <label className="block text-white text-2xl md:text-3xl font-bold mb-4 text-center">
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

          {/* ================= SUBMIT BUTTON ================= */}
          <div className="pt-6 text-center">
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
              Crear cuenta
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}
