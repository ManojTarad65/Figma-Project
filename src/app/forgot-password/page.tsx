"use client"

import { Mail } from "lucide-react"

export default function ForgotPasswordPage() {
  return (
    <section className="min-h-screen bg-[#ED3237] font-montserrat px-6">

      <div className="w-full max-w-6xl mx-auto pt-10">

        {/* ================= TITLE ================= */}
        <h1 className="text-white text-5xl font-extrabold text-center mb-16 tracking-wide">
          Recuperación de contraseña
        </h1>

        <div className="space-y-14">

          {/* ================= EMAIL ================= */}
          <div>
            <label className="block text-white text-2xl md:text-3xl font-bold mb-2 text-center">
              Correo electrónico
            </label>

            <div className="relative">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-[#D64641] w-12 h-12" />

              <input
                type="email"
                placeholder="Ingrese correo electrónico"
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

          {/* ================= BUTTON ================= */}
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
              Enviar correo electrónico
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
