import React from 'react'
import { motion } from 'motion/react'
function Valores() {

    const valores =[
        {
            id:1,
            titulo:"Valor del JUS",
            fechaAct:"Desde el 01/04/2025",
            valor:"$32.348,40"
        },
        {
            id:2,
            titulo:"Unidad Económica",
            fechaAct:"Desde el 01/04/2025",
            valor:"$8.525.859,38"
        },
        {
            id:3,
            titulo:"Aporte colegial",
            fechaAct:"Desde el 01/04/2025",
            valor:"$20.500,00"
        },
    ]

  return (
    <>
     <div className="relative w-[100%] h-[150px] mt-[90px] bg-[url('./assets/FondoTramiteMatricula.jpg')] bg-cover bg-center">
          {/* Overlay negro */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
      
          {/* Texto centrado */}
          <div className="absolute inset-0 flex items-center text-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">Valor Del Aporte</h1>
          </div>
        </div>
        <div className='flex flex-col justify-center my-[25px] items-center'>
            <h1 className=' text-black text-[25px] font-bold'>VALORES OFICIALES</h1>
            {valores.map(v => (
                <motion.div
                initial={{ opacity: 0, }} 
                whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
                key={v.id} className='my-5 p-2.5 w-[250px] md:w-[500px] hover:bg-[#0f0d3c] hover:text-white transition duration-300 border-[#0F0D3C] border-2 '>
                    <p className='text-18px xl:text-20px font-bold'>{v.titulo}</p>
                    <p className='text-18px xl:text-20px font-light'>{v.fechaAct}</p>
                    <p className='text-18px xl:text-20px'>{v.valor}</p>
                    

                </motion.div>
            ) )}

        </div>
        </>
  )
}

export default Valores