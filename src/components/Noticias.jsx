import React from 'react'
import { Link } from "react-router-dom";
import * as motion from "motion/react-client"
import "./Style.css"

function Noticias() {
    const noticias = [
        { id: 1, img:"https://fastly.picsum.photos/id/842/300/300.jpg?hmac=uqKggbY3dFXd9a15cU2P6Dp7tZCk3JQANKLni3veZiE", titulo: "Noticia 1", resumen: "Resumen de la noticia 1..." },
        { id: 2, img:"https://fastly.picsum.photos/id/842/300/300.jpg?hmac=uqKggbY3dFXd9a15cU2P6Dp7tZCk3JQANKLni3veZiE", titulo: "Noticia 2", resumen: "Resumen de la noticia 2..." },
        { id: 3, img:"https://fastly.picsum.photos/id/842/300/300.jpg?hmac=uqKggbY3dFXd9a15cU2P6Dp7tZCk3JQANKLni3veZiE", titulo: "Noticia 3", resumen: "Resumen de la noticia 3..." },
      ];


  return (
    <div>
      <h1>Noticias</h1>
      <motion.div 
      initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 0.5 } }}
      
      className="flex flex-col md:flex-row justify-center ">
        {noticias.map((noticia) => (
          <div key={noticia.id} className="bg-[#0F0D3C] h-[500px] w-[300px] m-5 flex flex-col">  
            <img src={noticia.img} alt="" />
            <h2 className='text-[#f4f4f4] flex justify-center text-3xl mt-[15px] mb-[15px] '>{noticia.titulo}</h2>
            <p className='text-[#f4f4f4] flex justify-start text-l ml-[15px] mr-[15px]  '>{noticia.resumen}</p>
            <Link to={`/noticias/${noticia.id}`} className="bg-[#f4f4f4] text-[#f4f4f4] hover:bg-[#15171C] text- m-auto text-center w-[50%] rounded-[5px] ">
              Leer más
            </Link>
          </div>
          
        ))}
      </motion.div>
    </div>
  )
}

export default Noticias