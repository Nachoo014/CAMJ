import React from 'react'
import "./Style.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { CiViewList } from "react-icons/ci";
import { IoLogoUsd } from "react-icons/io";
import { BiSolidInstitution } from "react-icons/bi";
import { FaRegIdCard } from "react-icons/fa";
import { CiGift } from "react-icons/ci";
import * as motion from "motion/react-client"
import { FaHandsHoldingChild } from "react-icons/fa6";

function Links() {
    const enlaces = [
      {
        id: 1,
        href: "/Valores",
        link: "Valores",
        icono: <IoLogoUsd />,
        
      },
      {
        id: 2,
        href: "/RequisitosMatriculacion",
        link: "Requisitos de matriculación",
        icono: <FaRegIdCard />,
      },
      {
        id: 3,
        href: "/Registrodeabogadosdeniñosniñasyadolescentes",
        link: "Registro de abogados de niños, niñas y adolescentes",
        icono: <FaHandsHoldingChild />,
        
      },
    ]
  return (
    <div className='p-[25px] h-full xl:h-[220px] w-screen bg-[#ffe7d1] flex flex-col xl:flex-row justify-center items-center'>
  {enlaces.map((e) => (
    <Link
      className="w-[80%] xl:w-[220px] m-5 relative h-full xl:h-[150px] border-4 rounded-md flex flex-col items-center justify-center text-center text-1xl md:text-2xl xl:text-3xl p-2 hover:bg-[#15171c] hover:text-[#ffe7d1] transform scale-100 transition duration-500 hover:scale-105"
      style={{ borderColor: "#15171c" }}
      key={e.id}
      to={e.href}
    >
      <div className="flex flex-col items-center justify-center p-2">
        {/* Ícono con altura fija */}
        <motion.p 
          initial={{ opacity: 0, y: -100 }} 
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }} 
          className="text-[50px] h-[60px] xl:m-[15px] flex items-center justify-center"
        >
          {e.icono}
        </motion.p>
    
        {/* Texto con altura fija */}
        <motion.span 
          initial={{ opacity: 0, y: -100 }} 
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }} 
          className="text-[15px] font-bold h-[40px] flex items-center justify-center"
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