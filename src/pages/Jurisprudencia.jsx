import React from 'react'
import "./Inicio.css";
import * as motion from "motion/react-client";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";



function Jurisprudencia() {
  return (
    <div className="relative w-[100%] h-[150px] mt-[90px] bg-[url('./assets/FondoTramiteMatricula.jpg')] bg-cover bg-center">
          {/* Overlay negro */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
      
          {/* Texto centrado */}
          <div className="absolute inset-0 flex items-center text-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">Jurisprudencia</h1>
          </div>
        </div>
  )
}

export default Jurisprudencia