import React from "react";
import "./Inicio.css";
import * as motion from "motion/react-client";

const enlaces = [
    {
        id:1,
        nombre:"Justicia Córdoba",
        href:"https://www.justiciacordoba.gob.ar/JusticiaCordoba/Inicio/index.aspx",
    },
    {
        id:2,
        nombre:"Rentas Córdoba",
        href:"https://www.rentascordoba.gob.ar/inicio/",
    },
    {
        id:3,
        nombre:"Servicios Extranet",
        href:"https://www.justiciacordoba.gob.ar/justiciacordoba/extranet.aspx",
    },
    {
        id:4,
        nombre:"Boletín Oficial de la Provincia de Córdoba",
        href:"https://boletinoficial.cba.gov.ar/",
    },
    {
        id:5,
        nombre:"InfoLEG",
        href:"https://www.infoleg.gob.ar/",
    },
    {
        id:6,
        nombre:"ARCA",
        href:"https://www.afip.gob.ar/landing/default.asp",
    },
]

function Enlaces() {
  return (
    <div className="mt-[90px] w-screen bg-#[f4f4f4] flex flex-col justify-center items-center">
        <div className="relative w-[100%] h-[150px] bg-[url('./assets/FondoTramiteMatricula.jpg')] bg-cover bg-center">
          {/* Overlay negro */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
      
          {/* Texto centrado */}
          <div className="absolute inset-0 flex items-center text-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">Links</h1>
          </div>
        </div>
        <div className="my-[50px] flex flex-col justify-center items-center w-screen">
        {enlaces.map((e) =>(
            <motion.a
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }} 
            key={e.id} href={e.href} className="w-[80%] xl:w-[50%] h- bg-[#0F0D3C] m-4 text-[20px] md:text-[25px] text-[#f4f4f4] text-center rounded-2xl drop-shadow-md transform scale-100 transition duration-500 hover:scale-105">{e.nombre}</motion.a>
        ))}
        </div>
    </div>
  )
}

export default Enlaces