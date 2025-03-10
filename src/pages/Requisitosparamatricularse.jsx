import React from 'react'

function Requisitosparamatricularse() {
  return (
   <>
   <div className="relative w-[100%] mt-[90px] h-[150px] bg-[url('./assets/FondoTramiteMatricula.jpg')] bg-cover bg-center">
          {/* Overlay negro */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
      
          {/* Texto centrado */}
          <div className="absolute inset-0 flex items-center text-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">Requisitos para matricularse</h1>
          </div>
        </div>
        <h1 className='text-[20px] font-bold m-[15px]'>(abogados con domicilio real en el departamento Marcos Juárez)</h1>
        <h2 className='text-[18px] font-bold m-[15px]'>PARA  OBTENER MATRICULA PROFESIONAL</h2>
        <div className='my-[25px]'>
        <p className='text-[14px] font-bold m-[15px]'>1)Formulario de Solicitud de inscripción (abajo)</p>
        <p className='text-[14px] font-bold m-[15px]'>2)  1 fotografías 3×3</p>
        <p className='text-[14px] font-bold m-[15px]'>3)  1 fotocopias del título autenticadas por Universidad  impreso a color y/o título emitido por  la Universidad con firma digital, en este caso enviar por correo electrónico en archivo PDF </p>
        <p className='text-[14px] font-bold m-[15px]'>4) 1 fotocopia del  Documento de Identidad  con domicilio actual.</p>
        <p className='text-[14px] font-bold m-[15px]'>5) Certificado de buena conducta expedido por Policía de la Provincia de Córdoba Impreso a color cuya antigüedad no supere los tres meses</p>
        <p className='text-[14px] font-bold m-[15px]'>6)  Certificado del Registro Nacional de Reincidencia cuya antigüedad no supere los tres meses (enviar por correo electrónico en archivo PDF) </p>
        <p className='text-[14px] font-bold m-[15px]'>7)  Certificado de domicilio real</p>
        <p className='text-[14px] font-bold m-[15px]'>8) Nota dirigida al Pte. del Colegio  manifestando que no posee antecedentes ni procesos pendientes</p>
        <p className='text-[14px] font-bold m-[15px]'>10) El costo de inscripción de matrícula es el equivalente a 10 JUS.</p>
        </div>
        <p className='text-[14px] font-bold m-[15px]'>
        Solicitud de inscripción para matrícula
        </p>
        <a href="/upload/Solicitud-de-inscripcion-para-matricula.doc" download  
            className="px-4 py-2 bg-[#0F0D3C] text-white rounded-md hover:bg-[#000000] transition m-[25px] flex justify-center items-center w-[150px] text-center">
        Descargar
        </a>
        <p className='text-[14px] font-bold m-[15px]'>OBLIGACIONES PARA CON EL COLEGIO
        * Aportes mínimos anuales</p>

        </>
  )
}

export default Requisitosparamatricularse