import React from 'react'
import { motion } from 'motion/react'
function Delegacion() {
    const DirectivosCB = [{
        id: 1,
        puesto:"PRESIDENTE:",
        nombreCompleto:"Dra. Carolina GOBBATO"
      },
      {
        id: 2,
        puesto:"SECRETARIO:",
        nombreCompleto:"Dr. Gonzalo JAUREGUIALZO",
        
      },
      {
        id: 3,
        puesto:"TESORERA",
        nombreCompleto:"Dra. Cristina Laura GRECO"
        
      }]
      const vocTitCB = [
        {
            id:1,
            nombreCompleto:"Dra. María Eugenia ZUÑIGA",
        },
        {
            id:2,
            nombreCompleto:"Dr. Federico AIROLDI",
        },
        {
            id:3,
            nombreCompleto:"Dr. Cristian Horacio DI LORENZO",
        },
      ]
      const vocSupCB = [
        {
            id:1,
            nombreCompleto:"Dra. Virginia RON",
        },
        {
            id:2,
            nombreCompleto:"Dra. María Laura CASINGHINO",
        },
        {
            id:3,
            nombreCompleto:"Dra. Valeria Soledad CHICCO",
        },
      ]
  return (
    <div className='bg-[#0F0D3C] py-[120px] w-[100%]'>
        <motion.h1
                    initial={{ opacity: 0, }} 
                    whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
                    className='text-2xl md:text-3xl xl:text-4xl px-2 mb-[15px] bg-[#f4f4f4] w-[100%] text-center font-semibold '>DELEGACIÓN CORRAL DE BUSTOS IFFLINGER</motion.h1>
            <div>
            {DirectivosCB.map((direcCB) =>(<div>
                    <motion.h1
                       initial={{ opacity: 0, }} 
                       whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
                        className='text-[20px] md:text-[30px] text-[#f4f4f4] text-center underline m-[5px]'>{direcCB.puesto}</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, }} 
                        whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
                        className='text-[17px] md:text-[23px] text-[#f4f4f4] text-center m-[5px]'>{direcCB.nombreCompleto}</motion.p>
                    </div>
                ))}
                <div className='flex flex-col md:flex-row justify-around text-center'>
                    <div className=''>
                        <motion.h1
                        initial={{ opacity: 0, }} 
                        whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
                        className='text-[20px] md:text-[23px] xl:text-[25px] text-[#f4f4f4] underline my-[15px]'>VOCALES TITULARES</motion.h1>
                        {vocTitCB.map((vtcb)=>(
                                <motion.p
                                initial={{ opacity: 0, }} 
                whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
                                className='text-[18px] md:text-[20px] xl:text-[23px] text-[#f4f4f4] my-[15px] '>{vtcb.nombreCompleto} </motion.p>
                            ))}
                    </div>
                    <div className=''>
                    <div className=''>
                    <motion.h1
                    initial={{ opacity: 0, }} 
                    whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
                    className='text-[20px] md:text-[23px] xl:text-[25px] text-[#f4f4f4] underline my-[15px]'>VOCALES SUPLENTES</motion.h1>
                    {vocSupCB.map((vscb)=>(
                                <motion.p
                                initial={{ opacity: 0, }} 
                whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
                                className='text-[18px] md:text-[20px] xl:text-[23px] text-[#f4f4f4] my-[15px] '>{vscb.nombreCompleto} </motion.p>
                            ))}
                    </div>
                    </div>
                </div>
            </div>
            </div>
  )
}

export default Delegacion