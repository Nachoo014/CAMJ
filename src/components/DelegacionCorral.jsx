import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./Style.css"
import * as motion from "motion/react-client"


function DelegacionCorral() {
    const noticiasDelegacion = [
        { id: 1, img:"https://fastly.picsum.photos/id/842/300/300.jpg?hmac=uqKggbY3dFXd9a15cU2P6Dp7tZCk3JQANKLni3veZiE", titulo: "Noticia 1", resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet beatae, porro voluptatum repellat libero ullam." },
        { id: 2, img:"https://fastly.picsum.photos/id/842/300/300.jpg?hmac=uqKggbY3dFXd9a15cU2P6Dp7tZCk3JQANKLni3veZiE", titulo: "Noticia 2", resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet beatae, porro voluptatum repellat libero ullam." },
        { id: 3, img:"https://fastly.picsum.photos/id/842/300/300.jpg?hmac=uqKggbY3dFXd9a15cU2P6Dp7tZCk3JQANKLni3veZiE", titulo: "Noticia 3", resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet beatae, porro voluptatum repellat libero ullam." },
      ];
  
    return (
    <div className='flex flex-col justify-center items-center'>
        <motion.h1
         initial={{ opacity: 0, x: -100 }} 
         whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
        className='w-[100%] max-w-[1440px] p-[25px] flex justify-center items-center text-center text-3xl md:text-4xl xl:text-5xl font-bold'>Delegación Corral de Bustos Ifflinger</motion.h1>
        <div className='flex flex-col xl:flex-row justify-between items-center px-[100px] '>
            {noticiasDelegacion.map((nd)=>(<motion.div
             initial={{ opacity: 0, y: -100 }} 
             whileInView={{ opacity: 1, y: 0, transition: { duration: 1.0 } }}
            className='w-[300px] h-[490px] m-[20px] bg-[#23272F] flex flex-col items-center rounded-[5px]' >
                <img src={nd.img} className='rounded-t-[5px]' alt="" />
                <h1 className='text-2xl mt-[20px] font-bold text-[#f2f2f2]'>{nd.titulo} </h1>
                <p className='text-sm px-[20px] m-20px font-semibold text-[#f2f2f2]' >{nd.resumen}</p>
                <Link to={`/noticias/${nd.id}`} className="bg-[#f4f4f4] text-[#15171C] transform scale-100 transition duration-500 hover:scale-90 text- m-auto text-center w-[50%] rounded-[5px] ">Leer más</Link>

                
                </motion.div>))}
                
        </div>
        <motion.div
         initial={{ opacity: 0, y: -100 }} 
         whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        className='w-[100%] flex justify-center m-[25px]'>
        <Link className='bg-[#23272F] w-[175px] ransform scale-100 transition duration-500 hover:scale-115 h-[35px] flex justify-center text-[#f2f2f2] items-center'>VER TODAS</Link>  
        </motion.div>
    </div>
  )
}

export default DelegacionCorral