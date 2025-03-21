import React from 'react'
import "./Inicio.css";
import ImgConvenios1 from "../assets/ConveniosyBeneficios.jpg"
import ImgConvenios2 from "../assets/ConveniosyBeneficios2.jpg"

function Convenio() {
  return (
    <>
    <div className="relative w-[100%] mt-[90px] h-[150px] bg-[url('./assets/FondoTramiteMatricula.jpg')] bg-cover bg-center">
    {/* Overlay negro */}
    <div className="absolute inset-0 bg-black opacity-70"></div>

    {/* Texto centrado */}
    <div className="absolute inset-0 flex items-center text-center justify-center">
      <h1 className="text-white text-3xl md:text-5xl font-bold">Convenio y Beneficios</h1>
    </div>
  </div>
    <div className='flex flex-col justify-center items-center my-5'>
            <img className='p-2 md:max-w-[750px]' src={ImgConvenios1} alt="" />

            <p className='text-[12px] md:text-[15px] font-bold p-2 text-gray-700'>Recuerde, colega, leer los detalles y condiciones y presentar el carnet de abogado/a al momento de abonar.</p>
            <p className='text-[12px] md:text-[15px] font-bold p-2 text-gray-700'>Convenios actualizados a noviembre del 2024.</p>
            <p className='text-[12px]  md:text-[15px] p-2 text-gray-700 w-[350px] md:w-[750px]'>
            <h1 className='text-[12px] md:text-[15px] font-bold text-gray-700 underline'>SUPERMERCADOS LA BOMBA (Marcos Juárez)</h1>
            Presentando el carné del colegio: -10% por pago en efectivo y puede adicionar un 5% más de descuento si tiene ficha en el super.
            La Bomba Sur: Mendoza y Mansilla; Noroeste: Rosario de Santa Fe y Chacabuco; Norte: Santa Fe 1098. Teléfono 3472/436193
            </p>
            <p className='text-[12px]  md:text-[15px] p-2 text-gray-700 w-[350px] md:w-[750px]'>
            <h1 className='text-[12px] md:text-[15px] font-bold text-gray-700 underline'>Farmacias Moderna</h1>
            -20% para medicamentos sin obra social; -25% en perfumería y varios; -35% en genéricos. Beiro Nº 301 (Ms. Jz.); San Martín Nº 886 (Ms. Jz.). 3535/087620
            </p>
            <p className='text-[12px]  md:text-[15px] p-2 text-gray-700 w-[350px] md:w-[750px]'>
            <h1 className='text-[12px] md:text-[15px] font-bold text-gray-700 underline'>STC Computación (Ms. Jz.)</h1>
            -10% en insumos, toner, cartuchos y resmas. San Martín Nº 988 3472/558319
            </p>
            <p className='text-[12px]  md:text-[15px] p-2 text-gray-700 w-[350px] md:w-[750px]'>
            <h1 className='text-[12px] md:text-[15px] font-bold text-gray-700 underline'>La Vieja Librería (Ms. Jz.)</h1>
            -10% en compras excepto libros. Beiró Nº 330 3472/455336
            </p>
            <p className='text-[12px]  md:text-[15px] p-2 text-gray-700 w-[350px] md:w-[750px]'>
            <h1 className='text-[12px] md:text-[15px] font-bold text-gray-700 underline'>Librería Ojalillo (Ms. Jz.)</h1>
            -30% pago en efectivo en todos los artículos de librería excepto fotocopias. Jujuy Nº 494 3472/611194
            </p>
            <p className='text-[12px]  md:text-[15px] p-2 text-gray-700 w-[350px] md:w-[750px]'>
            <h1 className='text-[12px] md:text-[15px] font-bold text-gray-700 underline'>Vinoteca Don 
            Diego (L)</h1>
            -10% en bebidas; y 15 % en fiambres, los lunes. Ramón Infante 441 3472/502895
            </p>
            <p className='text-[12px]  md:text-[15px] p-2 text-gray-700 w-[350px] md:w-[750px]'>
            <h1 className='text-[12px] md:text-[15px] font-bold text-gray-700 underline'>Restó Cruz (Ms. Jz.)</h1>
            -10% de lunes a viernes sólo por la noche. Belgrano 1474 3472/436190
            </p>
            <p className='text-[12px]  md:text-[15px] p-2 text-gray-700 w-[350px] md:w-[750px]'>
            <h1 className='text-[12px] md:text-[15px] font-bold text-gray-700 underline'>Club San Martín
            (Ms. Jz.)</h1>
            -30% gym funcional, natación y colonia; -20% en la cuota del jardín; -30% academias de arte; y -10 % en electrodomésticos. Alem 671 03472/425549
            </p>
            <p className='text-[12px]  md:text-[15px] p-2 text-gray-700 w-[350px] md:w-[750px]'>
            <h1 className='text-[12px] md:text-[15px] font-bold text-gray-700 underline'>Dante restó (L)</h1>
            -10% pago efectivo en almuerzos y cenas, sólo los martes. No aplicable para el menú Ejecutivo. Entre Ríos 1275 esq. Ruta Nac. Nº 9 341/6198875
            </p>
            <p className='text-[12px]  md:text-[15px] p-2 text-gray-700 w-[350px] md:w-[750px]'>
            <h1 className='text-[12px] md:text-[15px] font-bold text-gray-700 underline'>Algo Rico y Natural (Ms. Jz.)</h1>
            -15% pago en efectivo. Avellaneda 755 3472/545017
            </p>
            <p className='text-[12px]  md:text-[15px] p-2 text-gray-700 w-[350px] md:w-[750px]'>
            <h1 className='text-[12px] md:text-[15px] font-bold text-gray-700 underline'>AMENA Boutique (Ms. Jz.)</h1>
            -20% pago efectivo. Campaña del Desierto 381 3472/508787
            </p>
            <p className='text-[12px]  md:text-[15px] p-2 text-gray-700 w-[350px] md:w-[750px]'>
            <h1 className='text-[12px] md:text-[15px] font-bold text-gray-700 underline'>La Canti (Ms. Jz.)</h1>
            -10% pago efectivo, sólo miércoles.
            Belgrano Nº 1199 3472/587480
            </p>
            <p className='text-[12px]  md:text-[15px] p-2 text-gray-700 w-[350px] md:w-[750px]'>
            <h1 className='text-[12px] md:text-[15px] font-bold text-gray-700 underline'>Nutra Vitta (L)</h1>
            -15% pago efectivo o transferencias. Rivadavia 901
            </p>
            <p className='text-[12px]  md:text-[15px] p-2 text-gray-700 w-[350px] md:w-[750px]'>
            <h1 className='text-[12px] md:text-[15px] font-bold text-gray-700 underline'>HAYYA fitnes club (L)</h1>
            -10% pago efectivo. Rivadavia 1185.
            </p>
               </div>
    </>
  )
}

export default Convenio