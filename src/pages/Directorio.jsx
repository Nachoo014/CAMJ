import React from 'react'
import "./Inicio.css";
import * as motion from "motion/react-client";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import ImagenDirectorio from '../assets/Directorio.jpg'


function Directorio() {

    const DirectivosMsJz = [{
        id: 1,
        puesto:"PRESIDENTE:",
        nombreCompleto:"Dra. Verónica Marina DI POMPO"
      },
      {
        id: 2,
        puesto:"VICEPRESIDENTE:",
        nombreCompleto:"Dr. Leonardo Silvio CINGOLANI",
      },
      {
        id: 3,
        puesto:"SECRETARIA:",
        nombreCompleto:"Dra. Paula Mercedes LLORET",
        
      },
      {
        id: 4,
        puesto:"TESORERO:",
        nombreCompleto:"Dr. José Martín DONATO"
        
      }]
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

      const vocTitMsJz = [
        {
            id:1,
            nombreCompleto:"Dr. Matías José PRATTI",
        },
        {
            id:2,
            nombreCompleto:"Dra. María Laura CASINGHINO",
        },
        {
            id:3,
            nombreCompleto:"Dr. Sebastián C. VILLALÓN",
        },
        {
            id:4,
            nombreCompleto:"Dra. Valeria Soledad PELLEGRINO",
        },
        {
            id:5,
            nombreCompleto:"Dra. Ilsa Marcela LEONORI",
        },
        {
            id:6,
            nombreCompleto:"Dra. Jesica Marisel TORRES",
        },
      ]
      const vocSupMsJz = [
        {
            id:1,
            nombreCompleto:"Dr. Cristian DI LORENZO",
        },
        {
            id:2,
            nombreCompleto:"Dra. Camila PASCHETTI",
        },
        {
            id:3,
            nombreCompleto:"Dra. María Belén LAMBERTUCCI",
        },
        {
            id:4,
            nombreCompleto:"Dra. Magali Marina MODILONI",
        },
        {
            id:5,
            nombreCompleto:"Dra. María Eulogia ANTÚNEZ",
        },
        {
            id:6,
            nombreCompleto:"Dr. Emiliano MIRAVALLES",
        },
      ]
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
        <>
        <div className="relative w-[100%] h-[150px] mt-[90px] bg-[url('./assets/FondoTramiteMatricula.jpg')] bg-cover bg-center">
          {/* Overlay negro */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
      
          {/* Texto centrado */}
          <div className="absolute inset-0 flex items-center text-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">Directorio 2023/25</h1>
          </div>
        </div>
        <div className='bg-[#0F0D3C] w-[100%] h-[100%] flex flex-col items-center'>
            <Link className='bg-white text-black my-[50px] font-semibold text-3xl md:text-4xl flex justify-center items-center rounded-[10px] h-[60px] p-[15px] transform scale-100 transition duration-500 hover:scale-110' >ESTATUTO</Link>
            <motion.img 
                initial={{ opacity: 0, y: -100 }} 
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}  src={ImagenDirectorio} className='w-[80%] h-[200px] md:h-[400px] xl:h-[600px]  ' alt="" />
            <div className='mt-[50px] w-[100%]'>
                <motion.h1 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1, transition: { duration: 0.4 } }} className='text-2xl md:text-4xl px-2 mb-[15px] bg-[#f4f4f4] w-[100%] text-center font-semibold '>DELEGACIÓN MARCOS JUÁREZ</motion.h1>
                <div className=''>
                {DirectivosMsJz.map((direc) =>(<div>
                    <motion.h1 
                        initial={{ opacity: 0, y: -100 }} 
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                        className='text-[20px] md:text-[30px] text-[#f4f4f4] text-center underline m-[5px]'>{direc.puesto}</motion.h1>
                    <motion.p 
                    initial={{ opacity: 0, y: -100 }} 
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                    className='text-[17px] md:text-[23px] text-[#f4f4f4] text-center m-[5px]'>{direc.nombreCompleto}</motion.p>
                    </div>
                ))}
                    <div className='flex flex-col md:flex-row justify-around '>
                        <div className='text-center'>
                            <motion.h1 
                            initial={{ opacity: 0, y: -100 }} 
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                            className='text-[20px] md:text-[23px] xl:text-[25px] text-[#f4f4f4] underline my-[15px]'>VOCALES TITULARES</motion.h1>
                            {vocTitMsJz.map((vtmj)=>(
                                <motion.p
                                initial={{ opacity: 0, y: -100 }} 
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                                className='text-[18px] md:text-[20px] xl:text-[23px] text-[#f4f4f4] my-[15px] '>{vtmj.nombreCompleto} </motion.p>
                            ))}
                        </div>
                        <div className='text-center'>
                        <motion.h1
                        initial={{ opacity: 0, y: -100 }} 
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                        className='text-[20px] md:text-[23px] xl:text-[25px] text-[#f4f4f4] underline my-[15px]'>VOCALES SUPLENTES</motion.h1>
                            {vocSupMsJz.map((vsmj)=>(
                                <motion.p 
                                initial={{ opacity: 0, y: -100 }} 
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                                className='text-[18px] md:text-[20px] xl:text-[23px] text-[#f4f4f4] my-[15px] '>{vsmj.nombreCompleto} </motion.p>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <div className='mt-[50px] w-[100%]'>
            <motion.h1
            initial={{ opacity: 0, }} 
            whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
            className='text-2xl md:text-3xl xl:text-4xl px-2 mb-[15px] bg-[#f4f4f4] w-[100%] text-center font-semibold '>DELEGACIÓN CORRAL DE BUSTOS IFFLINGER</motion.h1>
            <div>
            {DirectivosCB.map((direcCB) =>(<div>
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }} 
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                        className='text-[20px] md:text-[30px] text-[#f4f4f4] text-center underline m-[5px]'>{direcCB.puesto}</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -100 }} 
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                        className='text-[17px] md:text-[23px] text-[#f4f4f4] text-center m-[5px]'>{direcCB.nombreCompleto}</motion.p>
                    </div>
                ))}
                <div className='flex flex-col md:flex-row justify-around text-center'>
                    <div className=''>
                        <motion.h1
                        initial={{ opacity: 0, y: -100 }} 
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }} 
                        className='text-[20px] md:text-[23px] xl:text-[25px] text-[#f4f4f4] underline my-[15px]'>VOCALES TITULARES</motion.h1>
                        {vocTitCB.map((vtcb)=>(
                                <motion.p
                                initial={{ opacity: 0, y: -100 }} 
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                                className='text-[18px] md:text-[20px] xl:text-[23px] text-[#f4f4f4] my-[15px] '>{vtcb.nombreCompleto} </motion.p>
                            ))}
                    </div>
                    <div className=''>
                    <div className=''>
                    <motion.h1
                    initial={{ opacity: 0, y: -100 }} 
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                    className='text-[20px] md:text-[23px] xl:text-[25px] text-[#f4f4f4] underline my-[15px]'>VOCALES SUPLENTES</motion.h1>
                    {vocSupCB.map((vscb)=>(
                                <motion.p
                                initial={{ opacity: 0, y: -100 }} 
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                                className='text-[18px] md:text-[20px] xl:text-[23px] text-[#f4f4f4] my-[15px] '>{vscb.nombreCompleto} </motion.p>
                            ))}
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
      );
}

export default Directorio


