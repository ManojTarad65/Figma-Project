

"use client"

import Image from "next/image"
import { User, Bell, Home } from "lucide-react"

export default function IngresarAlumno() {
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
      <div className="relative z-10 h-full flex flex-col items-center pt-10 px-6">

        {/* ================= HEADINGS ================= */}
        <h1 className="text-4xl md:text-4xl font-bold text-center tracking-wide">
          INGRESAR ALUMNO
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold mt-4 text-center">
          INFORMACIÓN PERSONAL
        </h2>

        {/* ================= FORM ================= */}
        <div className="w-full max-w-6xl mt-12 space-y-10">

          {/* -------- NOMBRE -------- */}
          <div>
            <label className="block text-center text-xl md:text-2xl font-bold mb-4">
              Nombre
            </label>

            <div className="relative">
              <User className="absolute left-8 top-1/2 -translate-y-1/2 text-red-500 w-10 h-10" />
              <input
                type="text"
                placeholder="Ingrese nombre del alumno"
                className="w-full bg-gray-200 text-black
                           rounded-full border-4 border-black
                           pl-20 pr-6 py-5
                           text-lg md:text-2xl
                           placeholder:text-gray-400
                           focus:outline-none"
              />
            </div>
          </div>

          {/* -------- APELLIDO -------- */}
          <div>
            <label className="block text-center text-xl md:text-2xl font-bold mb-4">
              Apellido
            </label>

            <div className="relative">
              <User className="absolute left-8 top-1/2 -translate-y-1/2 text-red-500 w-10 h-10" />
              <input
                type="text"
                placeholder="Ingrese apellidos del alumno"
                className="w-full bg-gray-200 text-black
                           rounded-full border-4 border-black
                           pl-20 pr-6 py-5
                           text-lg md:text-2xl
                           placeholder:text-gray-400
                           focus:outline-none"
              />
            </div>
          </div>

          {/* -------- FECHA + SEXO -------- */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* FECHA */}
            <div>
              <label className="block text-center text-xl md:text-2xl font-bold mb-4">
                Fecha de nacimiento
              </label>

              <div className="relative">
                <User className="absolute left-8 top-1/2 -translate-y-1/2 text-red-500 w-10 h-10" />
                <input
                  type="date"
                  className="w-full bg-gray-200 text-black
                             rounded-full border-4 border-black
                             pl-20 pr-6 py-5
                             text-lg md:text-xl
                             text-gray-500
                             focus:outline-none"
                />
              </div>
            </div>

            {/* SEXO */}
            <div>
              <label className="block text-center text-xl md:text-2xl font-bold mb-4">
                Sexo
              </label>

              <div className="relative">
                <User className="absolute left-8 top-1/2 -translate-y-1/2 text-red-500 w-10 h-10" />
                <select
                  className="w-full bg-gray-200 text-black
                             rounded-full border-4 border-black
                             pl-20 pr-6 py-5
                             text-lg md:text-xl
                             text-gray-500
                             focus:outline-none"
                >
                  <option>Seleccione sexo</option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                </select>
              </div>
            </div>

          </div>

          {/* -------- CONFIRM BUTTON -------- */}
          <button
            className="w-full bg-black text-white
                       rounded-full border-4 border-white
                       py-5
                       text-xl md:text-2xl font-bold
                       shadow-xl"
          >
            Confirmar
          </button>

        </div>

        {/* ================= RIGHT FLOATING ICONS ================= */}
        <div className="hidden md:flex absolute right-20 top-24 
                        flex-col space-y-8 items-center">

          <Home className="w-12 h-12 text-white" />

          <div className="relative">
            <Bell className="w-12 h-12 text-white" />
            <span className="absolute -top-1 -right-1 w-5 h-5 
                             border-2 border-white rounded-full 
                             flex items-center justify-center 
                             bg-red-600 text-white text-xs font-bold">
              9
            </span>
          </div>

          <User className="w-12 h-12 text-white" />
        </div>

      </div>
    </section>
  )
}
