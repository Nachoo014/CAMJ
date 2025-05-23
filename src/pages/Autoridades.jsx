import React from 'react'
import "./Inicio.css";
import * as motion from "motion/react-client";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import ImagenDirectorio from '../assets/Directorio.jpeg'


function Autoridades() {

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
            nombreCompleto:"Dra. Jesica Maricel TORRES",
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
    return (
        <>
        <div className="relative w-screen h-[150px] mt-[90px] bg-[url('./assets/FondoTramiteMatricula.jpg')] bg-cover bg-center">
          {/* Overlay negro */}
          <div className="absolute inset-0 bg-black opacity-70"></div>

          {/* Texto centrado */}
          <div className="absolute inset-0 flex items-center text-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold underline">Autoridades</h1>
          </div>
        </div>
        
        <div className='bg-[#0F0D3C] w-screen h-[100%] flex flex-col items-center'>
        <motion.img 
                initial={{ opacity: 0, }} 
                whileInView={{ opacity: 1, transition: { duration: 0.4 } }}  src={ImagenDirectorio} className='w-[80%] mt-5 h-[200px] md:h-[400px] xl:h-[600px] rounded-md  ' alt="" />

            <div className='mt-[50px] w-[100%]'>
                <div className=''>
                {DirectivosMsJz.map((direc) =>(<div>
                    <motion.h1 
                        initial={{ opacity: 0, }} 
                        whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
                        className='text-[20px] md:text-[30px] text-[#f4f4f4] text-center underline m-[5px]'>{direc.puesto}</motion.h1>
                    <motion.p 
                    initial={{ opacity: 0, }} 
                    whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
                    className='text-[17px] md:text-[23px] text-[#f4f4f4] text-center m-[5px]'>{direc.nombreCompleto}</motion.p>
                    </div>
                ))}
                    <div className='flex flex-col md:flex-row justify-around '>
                        <div className='text-center'>
                            <motion.h1 
                            initial={{ opacity: 0, }} 
                            whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
                            className='text-[20px] md:text-[23px] xl:text-[25px] text-[#f4f4f4] underline my-[15px]'>VOCALES TITULARES</motion.h1>
                            {vocTitMsJz.map((vtmj)=>(
                                <motion.p
                                initial={{ opacity: 0, }} 
                whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
                                className='text-[18px] md:text-[20px] xl:text-[23px] text-[#f4f4f4] my-[15px] '>{vtmj.nombreCompleto} </motion.p>
                            ))}
                        </div>
                        <div className='text-center'>
                        <motion.h1
                        initial={{ opacity: 0, }} 
                        whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
                        className='text-[20px] md:text-[23px] xl:text-[25px] text-[#f4f4f4] underline my-[15px]'>VOCALES SUPLENTES</motion.h1>
                            {vocSupMsJz.map((vsmj)=>(
                                <motion.p 
                                initial={{ opacity: 0, }} 
                whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
                                className='text-[18px] md:text-[20px] xl:text-[23px] text-[#f4f4f4] my-[15px] '>{vsmj.nombreCompleto} </motion.p>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

        </div>
        </>
      );
}

export default Autoridades


