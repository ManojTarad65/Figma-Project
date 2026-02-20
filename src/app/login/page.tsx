"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { User, Lock } from "lucide-react"
import { supabase } from "@/lib/supabase/client"
import { useAppContext } from "@/store/app-context"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()
  const { setPermissions } = useAppContext()

  const handleLogin = async () => {
    setLoading(true)
    setError(null)

    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (authError) throw authError

      console.log("LOGIN SUCCESS")

      // Fetch app context
      console.log("Calling RPC get_app_context")
      const { data: contextData, error: contextError } = await supabase.rpc('get_app_context')

      console.log("RPC RESULT:", contextData, contextError)

      if (contextError) throw contextError

      if (contextData) {
        setPermissions(contextData.permissions)
        router.push(contextData.redirect_to)
      } else {
        throw new Error("No se pudo obtener el contexto de la aplicación")
      }

    } catch (err: any) {
      console.error(err)
      setError(err.message || "Error al iniciar sesión")
    } finally {
      setLoading(false)
    }
  }

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
              Correo electrónico
            </label>

            <div className="relative">
              <User className="absolute left-6 top-1/2 -translate-y-1/2 text-[#D64641] w-12 h-12" />

              <input
                type="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="
                  w-full
                  h-20
                  font-montserrat
                  bg-white
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

          {error && (
            <div className="text-white text-xl font-bold text-center bg-black/20 p-4 rounded-lg">
              {error}
            </div>
          )}

          {/* ================= LOGIN BUTTON ================= */}
          <div className="pt-2 text-center">
            <button
              onClick={handleLogin}
              disabled={loading}
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
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading ? 'Iniciando...' : 'Iniciar sesión'}
            </button>

            <button
              onClick={() => router.push('/forgot-password')}
              className="mt-2 text-white text-2xl font-bold underline underline-offset-4 hover:opacity-80 transition"
            >
              Olvidó contraseña
            </button>
          </div>

          {/* ================= CREATE ACCOUNT ================= */}
          <div className="pt-4 text-center">
            <label className="block text-white text-2xl md:text-3xl font-bold mb-2">
              Nuevo usuario
            </label>

            <button
              onClick={() => router.push('/signup')}
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
