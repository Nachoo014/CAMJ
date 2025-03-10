import React from 'react'

function AfiliarseCajaAbogados() {
  return (
    <div><div className="relative w-[100%] mt-[90px] h-[150px] bg-[url('./assets/FondoTramiteMatricula.jpg')] bg-cover bg-center">
    {/* Overlay negro */}
    <div className="absolute inset-0 bg-black opacity-70"></div>

    {/* Texto centrado */}
    <div className="absolute inset-0 flex items-center text-center justify-center">
      <h1 className="text-white text-3xl md:text-5xl font-bold">Afiliarse a la Caja de Abogados</h1>
    </div>
  </div>
  <h1 className='text-[20px] font-bold m-[15px]'>PARA AFILIARSE A LA CAJA DE ABOGADOS</h1>
  <p className='text-[14px] font-bold m-[15px]'>
  BAJAR y completar (con links internos en el documento).
        </p>
        <a href="/upload/requisitos-de-afiliacion-Caja-de-Abogados-Abril-2021.docx" download  
            className="px-4 py-2 bg-[#0F0D3C] text-white rounded-md hover:bg-[#000000] transition m-[25px] flex justify-center items-center w-[150px] text-center">
        Descargar
        </a>
  </div>
  )
}

export default AfiliarseCajaAbogados