import React from 'react'
import { motion } from 'motion/react'
function ConvenioCasilleroNotificaciones() {
  return (
    <div className='mt-36 flex flex-col items-center justify-center'>
    <h2 className='text-xl font-bold text-[#0f0d3c] mb-2'>Reglamento General</h2>
    <motion.a
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
        className='my-5 p-2.5 w-[250px] md:w-[500px] hover:bg-[#0f0d3c] hover:text-white transition duration-500 border-[#0F0D3C] border-2 text-center font-semibold'
        href='/upload/Reglamentoconstitucióndedomicilio.docx' download>
        Reglamento constitución de domicilio
    </motion.a>

    {/* Sección Marcos Juárez */}
    <h1 className='w-screen h-[35px] text-[25px] bg-[#0f0d3c] text-white text-center flex items-center justify-center'>Marcos Juárez</h1>
    <motion.a
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
        className='my-5 p-2.5 w-[250px] md:w-[500px] hover:bg-[#0f0d3c] hover:text-white transition duration-500 border-[#0F0D3C] border-2 text-center font-semibold'
        href='/upload/ConvenioconstitucióndomiciliocolegiadosenMarcosJuárez.docx' download>
        Convenio constitución domicilio colegiados en Marcos Juárez
    </motion.a>
    <motion.a
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
        className='my-5 p-2.5 w-[250px] md:w-[500px] hover:bg-[#0f0d3c] hover:text-white transition duration-500 border-[#0F0D3C] border-2 text-center font-semibold'
        href='/upload/ConvenioconstitucióndomicilionocolegiadosenMarcosJuárez.docx' download>
        Convenio constitución domicilio no colegiados en Marcos Juárez
    </motion.a>

    {/* Sección Corral de Bustos */}
    <h1 className='w-screen h-[35px] text-[25px] bg-[#0f0d3c] text-white text-center flex items-center justify-center'>Corral de Bustos</h1>
    <motion.a
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
        className='my-5 p-2.5 w-[250px] md:w-[500px] hover:bg-[#0f0d3c] hover:text-white transition duration-500 border-[#0F0D3C] border-2 text-center font-semibold'
        href='/upload/ConvenioconstitucióndomicilionocolegiadosenCorraldeBustos.docx' download>
        Convenio constitución domicilio no colegiados en Corral de Bustos
    </motion.a>
    <motion.a
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
        className='my-5 p-2.5 w-[250px] md:w-[500px] hover:bg-[#0f0d3c] hover:text-white transition duration-500 border-[#0F0D3C] border-2 text-center font-semibold'
        href='/upload/ConvenioconstitucióndedomiciliocolegiadosenCorraldeBustos.docx' download>
        Convenio constitución de domicilio colegiados en Corral de Bustos
    </motion.a>
</div>
                    
  )
}

export default ConvenioCasilleroNotificaciones