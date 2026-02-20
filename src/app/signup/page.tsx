"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { User, Mail, Lock } from "lucide-react"
import { supabase } from "@/lib/supabase/client"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()

  const handleSignup = async () => {
    setLoading(true)
    setError(null)
    try {
      const { error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      })
      if (authError) throw authError

      // If auto-confirm is enabled, we could auto login, but safe default is to ask to check email or login
      alert("Cuenta creada exitosamente. Por favor, inicia sesión.")
      router.push('/login')
    } catch (err: any) {
      setError(err.message || "Error al crear cuenta")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen bg-[#ED3237] font-montserrat px-6">

      <div className="w-full max-w-6xl mx-auto pt-8">

        <h1 className="text-white text-5xl md:text-5xl font-extrabold text-center mb-12 mt-8 tracking-wide">
          CREAR CUENTA
        </h1>

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
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
            <label className="block text-white text-2xl md:text-3xl font-bold mb-4 text-center">
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

          {/* ================= SUBMIT BUTTON ================= */}
          <div className="pt-6 text-center space-y-4">
            <button
              onClick={handleSignup}
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
                font-montserrat
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading ? 'Creando cuenta...' : 'Crear cuenta'}
            </button>

            <button
              onClick={() => router.push('/login')}
              className="text-white text-2xl font-bold underline underline-offset-4 hover:opacity-80 transition"
            >
              Ya tengo cuenta
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}
