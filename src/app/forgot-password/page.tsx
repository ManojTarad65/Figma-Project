"use client"

import { useState } from "react"
import { Mail } from "lucide-react"
import { supabase } from "@/lib/supabase/client"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleResetPassword = async () => {
    setLoading(true)
    setError(null)
    setMessage(null)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${location.origin}/auth/callback?next=/reset-password`,
      })
      if (error) throw error
      setMessage("Se ha enviado un correo con instrucciones para restablecer la contraseña if an account exists.")
    } catch (err: any) {
      setError(err.message || "Error al enviar el correo")
    } finally {
      setLoading(false)
    }
  }

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

          {/* ================= BUTTON ================= */}
          <div className="pt-2">
            <button
              onClick={handleResetPassword}
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
              {loading ? 'Enviando...' : 'Enviar correo electrónico'}
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
