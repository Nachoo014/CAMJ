import React from 'react'

function Solicitudcertificadodematricula() {
  return (
    <div>
      <div className="relative w-[100%] mt-[90px] h-[150px] bg-[url('./assets/FondoTramiteMatricula.jpg')] bg-cover bg-center">
    {/* Overlay negro */}
    <div className="absolute inset-0 bg-black opacity-70"></div>

    {/* Texto centrado */}
    <div className="absolute inset-0 flex items-center text-center justify-center">
      <h1 className="text-white text-3xl md:text-5xl font-bold">Solicitud certificado de matrícula</h1>
    </div>
  </div>
  <p className='text-[14px] font-bold m-[15px]'>
        Bajar el documento.
        </p>
        <a href="/upload/Solicitud-de-certificado-de-matricula.docx" download  
            className="px-4 py-2 bg-[#0F0D3C] text-white rounded-md hover:bg-[#000000] transition m-[25px] flex justify-center items-center w-[150px] text-center">
        Descargar
        </a>
    </div>
  )
}

export default Solicitudcertificadodematricula