import React from 'react'
import { Link } from "react-router-dom";
import * as motion from "motion/react-client"
import magistraturaCBA from "../assets/imgNoticias/MagistraturaCBA.jpeg";
import defninez from "../assets/imgNoticias/DefNiñez.jpeg";
import diaAbogacia from "../assets/imgNoticias/DiaAbogacia.jpeg";
import feria2024 from "../assets/imgNoticias/Feria2024Enero.jpeg";
import planos from "../assets/imgNoticias/PlanosCB.jpeg";
import FinAño2025 from "../assets/imgNoticias/FinAño2025.jpeg";



import "./Style.css"

function Noticias() {
    const noticias = [
     
      {
          id:1,
          img:diaAbogacia,
          titulo:"Día de la Abogacía 2024",
          fecha:"29 de agosto de 2024",
          resumen:"En esta fecha, en nuestro día, es inevitable hacer balances y exponer un panorama sobre el libre ejercicio de nuestra profesión. Y aclarar, una vez" ,
      },
      {
          id:2,
          img:FinAño2025,
          titulo:"Mensaje de Fin de Año",
          fecha:"30 de diciembre de 2024",
          resumen:"Al cerrar este año quiero agradecer a cada uno de ustedes por el apoyo y la confianza depositados en nuestra gestión." ,
      },
  
  ];


  return (
    <div>
      <h1>Noticias</h1>
      <motion.div 
      initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 0.5 } }}
      
      className="flex flex-col-reverse justify-center items-center flex-wrap mt-[120px]">
        {noticias.map((noticia) => (
          <div key={noticia.id} className="bg-[#0F0D3C] h-[100%] w-[80%] xl:w-[50%] m-5 flex flex-col drop-shadow-lg">  
            <img src={noticia.img} className='' alt="" />
            <h2 className='text-[#f4f4f4] flex justify-center text-[20px] font-bold text-center mt-[15px] mb-[15px]'>{noticia.titulo}</h2>
            <p className='text-[#f4f4f4] flex justify-center text-[18px] text-center px-2'>{noticia.resumen}</p>
            <p className='text-[#f4f4f4] flex justify-center text-[12px] text-center my-[10px] '>{noticia.fecha}</p>
            <Link to={`/noticias/${noticia.id}`} className="bg-[#f4f4f4] text-[#0f0d3c] transform scale-100 transition duration-500 hover:scale-105 font-semibold text-[15px] m-auto mb-5 text-center w-[50%] rounded-[5px] ">
              Leer más
            </Link>
          </div>
          
        ))}
      </motion.div>
    </div>
  )
}

export default Noticias