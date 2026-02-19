"use client"

import { X } from "lucide-react"
import { createPortal } from "react-dom"
import { useEffect, useState } from "react"
import Image from "next/image"

interface ResponseModalProps {
  open: boolean
  type: "logrado" | "porLograr"
  onClose: () => void
}

export default function ResponseModal({
  open,
  type,
  onClose,
}: ResponseModalProps) {

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !open) return null

  const isSuccess = type === "logrado"

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* ================= MODAL CARD ================= */}
      <div className="relative bg-[#F2F2F2] w-[520px] max-w-[90%] rounded-[28px] border-[5px] border-black shadow-2xl px-10 py-12 text-center">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6"
        >
          <X className="w-7 h-7 stroke-[2.5]" />
        </button>

        {/* Rocket Circle */}
        <div className="flex justify-center mb-8">
          <div className="w-36 h-36  rounded-full flex items-center justify-center">
            <Image
              src="/logo.png"   // rocket logo
              alt="rocket"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-[42px] font-extrabold tracking-wide text-black mb-2">
          {isSuccess ? "LOGRADO" : "POR LOGRAR"}
        </h2>

        <p className="text-[30px] text-black mb-10 font-bold">
          Siguiente actividad
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-6">

          {/* Continue */}
          <button className="w-full py-4 bg-[#ED3237] text-white text-2xl font-bold rounded-full border-[4px] border-black hover:scale-[1.02] transition">
            Continuar
          </button>

          {/* Back */}
          <button className="w-full py-4 bg-black text-white text-2xl font-bold rounded-full border-[4px] border-white hover:scale-[1.02] transition">
            Volver
          </button>

        </div>
      </div>
    </div>,
    document.body
  )
}
