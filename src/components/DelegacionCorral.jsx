import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./Style.css"
import * as motion from "motion/react-client"
import ImgConstruccionTribunales from "../assets/CAMJTRIBUNALESCB_CONTRUCCION.png";
import CAMJCB_COE from "../assets/camj-corral-de-bustos-coe.png";
import CAMJCB_DIA_INHABIL from "../assets/CAMJFiscaliaDiaInhabil.png";

function DelegacionCorral() {
    const noticiasDelegacion = [
        {     id: 1,
              img: [ImgConstruccionTribunales,], // Múltiples imágenes
              titulo: "Construcción de Tribunales Corral de Bustos",
              contenido:"Publicamos los Planos y el Estudio de Suelo de la obra de construcción del nuevo edificio de Tribunales Corral de Bustos – Iflinger a fines de colaborar con la difusión y publicidad para las propuestas de presentación de oferentes." },
              {     id: 2,
                img: [CAMJCB_COE,], // Múltiples imágenes
                titulo: "Solicitamos la apertura de Tribunales Corral de Bustos y de Juzgados de Paz de la zona",
                contenido:"El Colegio de Abogados del Departamento Marcos Juárez y su Delegación Corral de Bustos solicitaron al Intendente de Corral de Bustos Ifflinger Roberto Pacheco," },
                {     id: 3,
                  img: [CAMJCB_DIA_INHABIL,], // Múltiples imágenes
                  titulo: "Viernes 4 de octubre día inhábil en Fiscalías Corral de Bustos",
                  contenido:"Es por la mudanza de la Fiscalía de Instrucción con Funciones de Fiscalía de Menores y Familia al nuevo edificio ubicado en Sarmiento Nº 36 de Corral de Bustos Ifflinger, ciudad sede de nuestra Delegación." },
        
      ];
  
    return (
    <div className='flex flex-col w-screen justify-center items-center'>
        <motion.h1
         initial={{ opacity: 0, x: -100 }} 
         whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
        className='w-screen p-[25px] flex justify-center items-center text-center text-3xl md:text-4xl xl:text-5xl font-bold'>Delegación Corral de Bustos Ifflinger</motion.h1>
        <div className='flex flex-col w-full xl:flex-row justify-between items-center px-[100px] '>
            {noticiasDelegacion.map((nd)=>(
            <motion.div
             initial={{ opacity: 0, y: -100 }} 
             whileInView={{ opacity: 1, y: 0, transition: { duration: 1.0 } }}
            className='w-[300px] h-[500px] m-[20px] bg-[#23272F] flex flex-col items-center rounded-[5px]' >
                <img src={nd.img} className='rounded-t-[5px] h-[200px] w-full' alt="" />
                <h1 className='text-[18px] mt-[20px] px-1 text-center font-semibold underline text-[#f2f2f2]'>{nd.titulo} </h1>
                <p className='text-[14px] px-[20px] m-20px text-[#f2f2f2]' >{nd.contenido}</p>
                <Link to={`/DelegacionCorral/${nd.id}`} className="bg-[#f4f4f4] text-[#15171C] transform scale-100 transition duration-500 hover:scale-90 text- m-auto text-center w-[50%] rounded-[5px] ">Leer más</Link>
                </motion.div>))}
                
        </div>
        
    </div>
  )
}

export default DelegacionCorral