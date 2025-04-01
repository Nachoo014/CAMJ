import React from 'react'
import { motion } from 'motion/react'
function AbodagoDeNiño() {
  return (
    <div className="mt-36 mb-16 flex flex-col flex-wrap justify-center items-center">
      <motion.a
      initial={{ opacity: 0, }} 
      whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
        href="/upload/Resolución Colegio.pdf" download
        className="px-6 m-2 py-3 text-[15px] xl:text-[18px] w-[300px] xl:w-[40%] text-center border-[#15171c] border-2 text-black font-semibold rounded-md hover:bg-[#15171c] hover:text-white transition duration-300 shadow-md"
      >
        Resolución del Colegio
      </motion.a>

      <motion.a
      initial={{ opacity: 0, }} 
      whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
        href="/upload/ley10636.pdf"
        download
        className="px-6 m-2 py-3 text-[15px] xl:text-[18px] w-[300px] xl:w-[40%] text-center border-[#15171c] border-2 text-black font-semibold rounded-md hover:bg-[#15171c] hover:text-white transition duration-300 shadow-md"
      >
        Ley 10636
      </motion.a>
      <motion.a
      initial={{ opacity: 0, }} 
      whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
        href="/upload/NotaAbogadosdeNiños-Niñas-Adolescentes2023.doc"
        download
        className="px-6 m-2 py-3 text-[15px] xl:text-[18px] w-[300px] xl:w-[40%] text-center border-[#15171c] border-2 text-black font-semibold rounded-md hover:bg-[#15171c] hover:text-white transition duration-300 shadow-md"
      >
        Nota para inscripción
      </motion.a>
      <motion.a
      initial={{ opacity: 0, }} 
      whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
        href="/upload/decreto reglamentario.pdf"
        download
        className="px-6 m-2 py-3 text-[15px] xl:text-[18px] w-[300px] xl:w-[40%] text-center border-[#15171c] border-2 text-black font-semibold rounded-md hover:bg-[#15171c] hover:text-white transition duration-300 shadow-md"
      >
        Decreto reglamentario de la Ley 10636
      </motion.a>
    </div>
  )
}

export default AbodagoDeNiño