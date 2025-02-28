import React from 'react'
import './Inicio.css'
import * as motion from "motion/react-client"
import Links from '../components/Links'
import TramitesMatricula from '../components/TramitesMatricula'
import DelegacionCorral from '../components/DelegacionCorral'
function Inicio() {
  return (
    <>
   <div className="relative h-screen w-full max-w-[1440px]">
  {/* Imagen de fondo */}
  <div  className="absolute inset-0 bg-[url('./assets/FondoInicio.jpg')] bg-cover bg-center bg-no-repeat"></div>

  {/* Overlay con opacidad */}
  <div className="absolute inset-0 bg-black opacity-70"></div>

  {/* Contenido sobre la imagen */}
  <div className="relative z-10 flex flex-col h-screen p-[50px] w-[100%] md:w-[60%]  justify-center text-white  font-bold">
    <motion.h1 initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x:0, transition: {duration: 0.8} }} className='text-3xl md:text-5xl'>Colegio de Abogados Departamento Marcos Juárez</motion.h1>
    <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x:0, transition: {duration: 0.8} }} className='text-1xl md:text-2xl font-light'>Tradición, ética y justicia: 64 años al servicio de los abogados.</motion.p>
  </div>
</div>
<Links></Links>
<TramitesMatricula></TramitesMatricula>
<DelegacionCorral/>
    </>
  )
}

export default Inicio