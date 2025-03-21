import React from 'react'
import * as motion from "motion/react-client"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function TramitesMatricula() {
    const enlaces = [{
            id: 1,
            href: "/Requisitosparamatricularse",
            link: "Requisitos para matricularse",
          },
          {
            id: 2,
            href: "/AfiliarsealaCajadeAbogados",
            link: "Afiliarse a la Caja de Abogados",
          },
          {
            id: 3,
            href: "/RequisitosparaMatriculaTransitoria",
            link: "Requisitos para Matrícula Transitoria",
            
          },
          {
            id: 4,
            href: "/Solicitudcertificadodematricula",
            link: "Solicitud certificado de matrícula",
            
          },]

  return (
    <div className="relative h-[700px] w-screen">
    {/* Imagen de fondo */}
    <div className="bg-[url('./assets/FondoTramiteMatricula.jpg')] bg-cover h-full"></div>
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-[#353535] opacity-70"></div>

    {/* Contenedor del texto */}
    <motion.div initial={{ opacity: 0, }} 
                  whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
                   className="absolute inset-0 flex mt-[50px] flex-col justify-center">
        <h1 className="text-white text-[25px] md:text-[30px]  flex flex-col items-center">Trámites para la <p className='font-bold'>MATRICULACIÓN</p></h1>
        <h3 className="text-white mt-[25px] mb-[20px] w-[100%] text-center flex flex-col items-center text-md md:text-[18px] xl:text-[25px] ">información y servicios para colegiarse en el Departamento Marcos Juárez</h3>
        <div className='flex flex-col items-center'>
        {enlaces.map((e)=>(<Link className='bg-[#0F0D3C] px-[20px] m-[15px] text-center text-[#f2f2f2] rounded-[5px] text-[18px] flex justify-center items-center h-[50px] xl:text-2xl w-[320px] xl:w-[500px] transform scale-100 transition duration-500 hover:scale-110 hover:border-2 border-white'
            key={e.id}
            to={e.href}
            >{e.link}</Link> ))}
        </div>
    </motion.div>
</div>
  )
}

export default TramitesMatricula