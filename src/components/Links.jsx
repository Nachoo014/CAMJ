import React from 'react'
import "./Style.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { CiViewList } from "react-icons/ci";
import { FaBookBookmark } from "react-icons/fa6";
import { IoLogoUsd } from "react-icons/io";
import { BiSolidInstitution } from "react-icons/bi";
import { CiGift } from "react-icons/ci";
import * as motion from "motion/react-client"
function Links() {
    const enlaces = [{
        id: 1,
        href: "/Padrón",
        link: "Padrón",
        icono: <CiViewList />,
      },
      {
        id: 2,
        href: "/Jurisprudencia",
        link: "Jurisprudencia",
        icono: <FaBookBookmark />,
      },
      {
        id: 3,
        href: "/ValorDelAporte",
        link: "Valor Del Aporte",
        icono: <IoLogoUsd />,
        
      },
      {
        id: 4,
        href: "/JuzgadosyJuecesdePaz",
        link: "Juzgados y Jueces de Paz",
        icono: <BiSolidInstitution />,
        
      },
      {
        id: 5,
        href: "/ConveniosyBeneficios",
        link: "Convenio y Beneficios",
        icono: <CiGift />
        ,
        
       
      }]
  return (
    <div className='p-[50px] h-[100%] w-full bg-[#ffe7d1] grid grid-cols-1 xl:grid-cols-5 gap-3'>
        {enlaces.map((e) => (
              <Link
              className="m-[20px] w-[90%] relative h-full xl:h-[250px] border-4 rounded-md flex flex-col items-center justify-center text-center text-1xl md:text-2xl xl:text-3xl p-2 hover:bg-[#15171c] hover:text-[#ffe7d1] transform scale-100 transition duration-500 hover:scale-105"
              style={{ borderColor: "#15171c" }}
              key={e.id}
              to={e.href}
            >
              <div className="flex flex-col items-center justify-center">
                {/* Ícono con altura fija */}
                <motion.p 
                  initial={{ opacity: 0, y: -100 }} 
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }} 
                  className="text-2xl m-[0-px] md:text-[50px] h-[60px] xl:m-[15px] flex items-center justify-center"
                >
                  {e.icono}
                </motion.p>
            
                {/* Texto con altura fija */}
                <motion.span 
                  initial={{ opacity: 0, y: -100 }} 
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }} 
                  className="text-2xl md:text-[25px] font-bold h-[40px] flex items-center justify-center"
                >
                  {e.link}
                </motion.span>
              </div>
            </Link>
            ))}
    </div>
  )
}

export default Links