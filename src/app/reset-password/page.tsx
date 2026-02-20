"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock } from "lucide-react"
import { supabase } from "@/lib/supabase/client"

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()

  const handleUpdatePassword = async () => {
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden")
      return
    }

    setLoading(true)
    setError(null)
    setMessage(null)

    try {
      const { error } = await supabase.auth.updateUser({ password })
      if (error) throw error
      setMessage("Contraseña actualizada correctamente")
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    } catch (err: any) {
      setError(err.message || "Error al actualizar la contraseña")
    } finally {
      setLoading(false)
    }
  }

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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="
                  w-full
                  h-20
                  bg-white
                  font-montserrat
                  text-black
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
                className="
                  w-full
                  h-20
                  bg-white
                  font-montserrat
                  text-black
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

          {message && (
            <div className="text-white text-xl font-bold text-center bg-green-600/50 p-4 rounded-lg">
              {message}
            </div>
          )}

          {error && (
            <div className="text-white text-xl font-bold text-center bg-black/20 p-4 rounded-lg">
              {error}
            </div>
          )}

          {/* ================= CONFIRM BUTTON ================= */}
          <div className="pt-2">
            <button
              onClick={handleUpdatePassword}
              disabled={loading}
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
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading ? 'Actualizando...' : 'Confirmar'}
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
