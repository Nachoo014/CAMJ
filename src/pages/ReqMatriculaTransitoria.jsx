import React from 'react'
import "./Inicio.css";

function ReqMatriculaTransitoria() {
  return (
    <>
   <div className="relative w-[100%] mt-[90px] h-[150px] bg-[url('./assets/FondoTramiteMatricula.jpg')] bg-cover bg-center">
          {/* Overlay negro */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
      
          {/* Texto centrado */}
          <div className="absolute inset-0 flex items-center text-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">Requisitos para Matrícula Transitoria</h1>
          </div>
        </div>
        <h1 className='text-[20px] font-bold m-[15px]'>para abogados/as con domicilio real fuera de la provincia de Córdoba</h1>
        <div className='my-[25px]'>
        <p className='text-[14px] font-bold m-[15px]'>1)Formulario de Solicitud de inscripción (abajo)</p>
        <p className='text-[14px] font-bold m-[15px]'>2)  1 fotografías 3×3</p>
        <p className='text-[14px] font-bold m-[15px]'>3) 1 fotocopias del título autenticadas por Universidad impreso a color y/o título emitido por la Universidad con firma digital, en este caso enviar por correo electrónico en archivo PDF (enviando en copia a color el mismo)</p>
        <p className='text-[14px] font-bold m-[15px]'>4) 1 fotocopia del  Documento de Identidad  con domicilio actual.</p>
        <p className='text-[14px] font-bold m-[15px]'>5) Certificado de buena conducta expedido por Policía de la Provincia de Córdoba Impreso a color cuya antigüedad no supere los tres meses</p>
        <p className='text-[14px] font-bold m-[15px]'>6)  Certificado del Registro Nacional de Reincidencia cuya antigüedad no supere los tres meses. Enviar por correo electrónico en archivo PDF </p>
        <p className='text-[14px] font-bold m-[15px]'>7)  Certificado de domicilio real</p>
        <p className='text-[14px] font-bold m-[15px]'>8) Nota dirigida al Pte. del Colegio  manifestando que no posee antecedentes ni procesos pendientes </p>
        <p className='text-[14px] font-bold m-[15px]'>9)  Constancia de CUIT o CUIL</p>
        <p className='text-[14px] font-bold m-[15px]'>10) Pago inscripción matrícula profesional:

            <p className='mt-[5px]'>Gasto de gestión:</p>

            <p className='mt-[5px]'>el valor equivalente a 10 aportes colegiales.
            El gasto de gestión no se abona con reinscripción en la matrícula oportunamente otorgada.</p>

            <p className='mt-[5px] underline'>Además del gasto de gestión detallado anteriormente tiene el siguiente Costo de inscripción:</p>

            <p className='mt-[5px]'>* Si opta por una matrícula por tres años debe pagar el valor de 50 aportes</p>

            <p className='mt-[5px]'>* Si opta por una matrícula por cuatro años debe pagar  el valor de  60 aportes</p>

            <p className='mt-[5px]'>* Si opta por una matrícula por cinco años debe pagar el valor de 70 aportes</p>

            <p className='mt-[5px]'>DURANTE LA VIGENCIA DE LA MATRÍCULA</p>

            <p className='mt-[5px]'>* No cumplimenta aportes mínimos anuales al Colegio durante los cinco años.</p>

            <p className='mt-[5px]'>* No debe cumplimentar mínimos anuales ni cuota mensual a la Caja de Abogados pero no tiene derecho a Jubilación por parte de dicha entidad.</p>

            <p className='mt-[5px]'>* Una vez cumplido el plazo de vigencia de matrícula, la misma queda automáticamente cancelada, lo cual se comunica a los Juzgados y Colegios de la provincia.</p>

</p>
<a href="/upload/DeclaracionJuradaAusenciaDeAntecedentes.docx" className='text-[14px] underline font-bold m-[15px] hover:text-[#0F0D3C]'>Declaración Jurada de Ausencia de Antecedentes Penales</a>
        </div>
        <p className='text-[14px] font-bold m-[15px]'>
        Solicitud de inscripción para matrícula
        </p>
        <a href="/upload/Solicitud-de-inscripcion-para-matricula.doc" download  
            className="px-4 py-2 bg-[#0F0D3C] text-white rounded-md hover:bg-[#000000] transition m-[25px] flex justify-center items-center w-[150px] text-center">
        Descargar
        </a>

        </>
  )
}

export default ReqMatriculaTransitoria