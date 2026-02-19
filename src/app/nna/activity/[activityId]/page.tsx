// "use client"

// import { Home, Bell, User, Play } from "lucide-react"

// export default function ActivityView() {

//   return (
//     <section className="min-h-screen bg-[#F2F2F2] flex flex-col font-montserrat">

   
//       <div className="flex w-full flex-1">

//         {/* ================= LEFT SIDEBAR ================= */}
//         <div className="w-[18%] flex flex-col items-center pt-12">

//           <div className="w-28 h-28 rounded-full bg-[#ED3237] flex items-center justify-center">
//             <User className="w-14 h-14 text-white" />
//           </div>

//           <h2 className="text-[#ED3237] text-3xl font-bold mt-4">
//             Rodrigo
//           </h2>

//           <div className="mt-12 space-y-8 text-center">

//             <div>
//               <div className="text-[#ED3237] text-4xl">★</div>
//               <p className="text-[#ED3237] text-sm font-semibold">Memoria</p>
//             </div>

//             <div>
//               <div className="text-[#ED3237] text-4xl">★</div>
//               <p className="text-[#ED3237] text-sm font-semibold">Lenguaje</p>
//             </div>

//             <div className="opacity-40">
//               <div className="text-gray-400 text-4xl">★</div>
//               <p className="text-gray-600 text-sm font-semibold">Concentración</p>
//             </div>

//             <div className="opacity-40">
//               <div className="text-gray-400 text-4xl">★</div>
//               <p className="text-gray-600 text-sm font-semibold">Percepción</p>
//             </div>

//             <div className="opacity-40">
//               <div className="text-gray-400 text-4xl">★</div>
//               <p className="text-gray-600 text-sm font-semibold">Psicomotricidad</p>
//             </div>

//           </div>
//         </div>


//         {/* ================= MAIN CONTENT ================= */}
//         <div className="w-[66%] px-2 pt-12">

//           {/* ===== TITLE ===== */}
//           <div className="relative flex items-center justify-center mb-10">

//             <div className="absolute left-0">
//               <Home className="w-10 h-10 text-[#ED3237]" />
//             </div>

//             <h1 className="text-5xl font-bold">
//               Actividad
//             </h1>

//           </div>


//           {/* ===== VIDEO + TEXT SECTION ===== */}
//           <div className="flex gap-16 items-start">

//             {/* VIDEO BOX */}
//             <div className="w-[55%] h-80 bg-[#ED3237] rounded-2xl border-[3px] border-black flex items-center justify-center">

//               <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center">
//                 <Play className="w-16 h-16 text-[#ED3237]" fill="#ED3237" />
//               </div>

//             </div>


//             {/* RIGHT TEXT BLOCK */}
//             <div className="w-[45%]">

//              <h2 className="text-2xl font-bold mb-3 text-right tracking-wide">

//                 OBJETIVO:
//               </h2>

//               <p className="text-gray-700 leading-relaxed mb-8">
//                 Construir palabras a partir de los grupos presentados utilizando
//                 las letras de madera para ir mejorando la conciencia fonológica
//                 y la función simbólica.
//               </p>


//       <h2 className="text-2xl font-bold mb-3 text-right tracking-wide">

//                 INSTRUCCIONES:
//               </h2>

//               <p className="text-gray-700 leading-relaxed ">
//                 Busca en tu Kit NeuroDiversión los animales y las letras de madera.
//                 Identifica cada animal repite su nombre y repasa el sonido de cada letra.
//                 ¿Recuerdas alguna canción con animales? ¡Cántala!
//                 Ahora toma un animal y escogiendo las letras correctas, escribe su nombre.
//                 Hazlo con cada animal.
//               </p>

//             </div>

//           </div>


//           {/* ===== QUESTION ===== */}
//           <div className="mt-24 text-center">
//             <p className="text-[24px] text-gray-800 mb-4 font-montserrat style-regular ">
//               ¿Es capaz de realizar al menos el 50% de la actividad de manera acertada?
//             </p>

//             <div className="flex justify-center gap-44">

//               <button className="px-14 py-4 bg-[#80C342] text-white text-2xl font-bold rounded-full border-[3px] border-black">
//                 Logrado
//               </button>

//               <button className="px-14 py-4 bg-[#848688] text-white text-2xl font-bold rounded-full border-[3px] border-black">
//                 Por lograr
//               </button>

//             </div>

//           </div>


//           {/* ===== CONFIRM BUTTON ===== */}
//           <div className="mt-8">
//             <button className="w-full h-18 bg-[#ED3237] text-white text-2xl font-bold rounded-full border-[3px] border-black">
//               Confirmar
//             </button>
//           </div>

//         </div>


//         {/* ================= RIGHT ICONS ================= */}
//         <div className="w-[14%] flex flex-col items-center pt-16 space-y-16">

//           <Home className="w-12 h-12 text-black" />

//           <div className="relative">
//             <Bell className="w-12 h-12 text-black" />
//             <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#ED3237] text-white text-xs rounded-full flex items-center justify-center">
//               9
//             </span>
//           </div>

//           <User className="w-12 h-12 text-black" />

//         </div>

//       </div>
//     </section>
//   )
// }


"use client"

import { Home, Bell, User, Play } from "lucide-react"

export default function ActivityView() {

  return (
    <section className="min-h-screen bg-[#F2F2F2] flex flex-col font-montserrat">

      <div className="flex w-full flex-1 flex-col lg:flex-row">

        {/* ================= LEFT SIDEBAR ================= */}
        <div className="lg:w-[18%] w-full flex flex-col items-center pt-6 lg:pt-12">

          <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-[#ED3237] flex items-center justify-center">
            <User className="w-12 h-12 lg:w-14 lg:h-14 text-white" />
          </div>

          <h2 className="text-[#ED3237] text-2xl lg:text-3xl font-bold mt-3 lg:mt-4">
            Usuario
          </h2>

          <h3 className="text-xl font-bold mt-1 lg:hidden">
            Actividad 7
          </h3>

          <div className="mt-6 lg:mt-12 space-y-6 lg:space-y-8 text-center text-sm lg:text-base">

            <div>
              <div className="text-[#ED3237] text-3xl lg:text-4xl">★</div>
              <p className="text-[#ED3237] font-semibold">Memoria</p>
            </div>

            <div>
              <div className="text-[#ED3237] text-3xl lg:text-4xl">★</div>
              <p className="text-[#ED3237] font-semibold">Lenguaje</p>
            </div>

            <div className="opacity-40">
              <div className="text-gray-400 text-3xl lg:text-4xl">★</div>
              <p className="text-gray-600 font-semibold">Concentración</p>
            </div>

            <div className="opacity-40">
              <div className="text-gray-400 text-3xl lg:text-4xl">★</div>
              <p className="text-gray-600 font-semibold">Percepción</p>
            </div>

          </div>
        </div>


        {/* ================= MAIN CONTENT ================= */}
        <div className="lg:w-[66%] w-full px-4 lg:px-2 pt-6 lg:pt-12">

          {/* TITLE (hide on mobile if needed) */}
          <div className="hidden lg:flex relative items-center justify-center mb-10">
            <div className="absolute left-0">
              <Home className="w-10 h-10 text-[#ED3237]" />
            </div>
            <h1 className="text-5xl font-bold">
              Actividad
            </h1>
          </div>

          {/* VIDEO + TEXT */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

            {/* VIDEO BOX */}
            <div className="w-full lg:w-[55%] h-64 lg:h-80 bg-[#ED3237] rounded-2xl border-[3px] border-black flex items-center justify-center">

              <div className="w-28 h-28 lg:w-40 lg:h-40 bg-white rounded-full flex items-center justify-center">
                <Play className="w-12 h-12 lg:w-16 lg:h-16 text-[#ED3237]" fill="#ED3237" />
              </div>

            </div>

            {/* RIGHT TEXT BLOCK */}
            <div className="w-full lg:w-[45%] mt-6 lg:mt-0">

              <h2 className="text-lg lg:text-2xl font-bold mb-2 lg:mb-3 text-right">
                OBJETIVO:
              </h2>

              <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-6 lg:mb-8">
                Construir palabras a partir de los grupos presentados utilizando
                las letras de madera para ir mejorando la conciencia fonológica
                y la función simbólica.
              </p>

              <h2 className="text-lg lg:text-2xl font-bold mb-2 lg:mb-3 text-right">
                INSTRUCCIONES:
              </h2>

              <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                Busca en tu Kit NeuroDiversión los animales y las letras de madera.
                Identifica cada animal repite su nombre y repasa el sonido de cada letra.
                ¿Recuerdas alguna canción con animales? ¡Cántala!
                Ahora toma un animal y escogiendo las letras correctas, escribe su nombre.
                Hazlo con cada animal.
              </p>

            </div>

          </div>


          {/* QUESTION */}
          <div className="mt-12 lg:mt-24 text-center">
            <p className="text-base lg:text-[24px] text-gray-800 mb-4">
              ¿Es capaz de realizar al menos el 50% de la actividad de manera acertada?
            </p>

            <div className="flex justify-center gap-6 lg:gap-44 flex-wrap">

              <button className="px-10 lg:px-14 py-3 lg:py-4 bg-[#80C342] text-white text-lg lg:text-2xl font-bold rounded-full border-[3px] border-black">
                Logrado
              </button>

              <button className="px-10 lg:px-14 py-3 lg:py-4 bg-[#848688] text-white text-lg lg:text-2xl font-bold rounded-full border-[3px] border-black">
                Por lograr
              </button>

            </div>

          </div>

          {/* CONFIRM BUTTON */}
          <div className="mt-8 mb-20 lg:mb-0">
            <button className="w-full h-14 lg:h-18 bg-[#ED3237] text-white text-lg lg:text-2xl font-bold rounded-full border-[3px] border-black">
              Confirmar
            </button>
          </div>

        </div>


        {/* ================= RIGHT ICONS ================= */}
        <div className="hidden lg:flex w-[14%] flex-col items-center pt-16 space-y-16">

          <Home className="w-12 h-12 text-black" />

          <div className="relative">
            <Bell className="w-12 h-12 text-black" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#ED3237] text-white text-xs rounded-full flex items-center justify-center">
              9
            </span>
          </div>

          <User className="w-12 h-12 text-black" />

        </div>

      </div>


      {/* ================= MOBILE BOTTOM NAV ================= */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3">

        <Home className="w-6 h-6 text-black" />

        <div className="relative">
          <Bell className="w-6 h-6 text-black" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ED3237] text-white text-[10px] rounded-full flex items-center justify-center">
            9
          </span>
        </div>

        <User className="w-6 h-6 text-black" />

      </div>

    </section>
  )
}
