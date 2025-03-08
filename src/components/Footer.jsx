import React, { useState } from 'react'
import * as motion from "motion/react-client"
import "./Style.css"
import { CiLocationOn } from "react-icons/ci";
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Calendar from "react-calendar";

function Footer() {

    const [date, setDate] = useState(new Date());
  return (
    <div className='w-[100%] max-w-[1440px] h-[100%] bg-[#202020] px-[150px] py-[25px] flex flex-col xl:flex-row justify-between items-center'>
        <div className='flex flex-col items-center'>
            <div className='border-2 border-[#f4f4f4] text-center w-[350px] flex flex-col items-center rounded-2xl p-[25px]'>
                <h1 className='text-[#f4f4f4]'>Delegación Corral de Bustos</h1>
                <p className='text-[#f4f4f4]'>Av. Sta. Fe esq. San Martín</p>
                <p className='text-[#f4f4f4]'>Corral de Bustos</p>
                <a href='https://www.google.com/maps?ll=-33.283441,-62.187788&z=16&t=m&hl=es-US&gl=US&mapclient=embed&q=Av.+Sta.+Fe+X2645+Corral+de+Bustos-Ifflinger+C%C3%B3rdoba' className='text-[#f4f4f4] mt-2 text-2xl transform scale-100 transition duration-500 hover:scale-110'><CiLocationOn /></a>
            </div>
            <div className='border-2 border-[#f4f4f4] text-center w-[350px] flex flex-col items-center rounded-2xl p-[25px] m-[10px]'>
                <h1 className='text-[#f4f4f4]'>Sede del Colegio</h1>
                <p className='text-[#f4f4f4]'>Av. Hipólito Yrigoyen 1154</p>
                <p className='text-[#f4f4f4]'>Marcos Juarez</p>
                <a href='https://www.google.com/maps?ll=-32.693922,-62.105609&z=15&t=m&hl=es-US&gl=US&mapclient=embed&q=Blvd.+H.+Yrigoyen+1154+X2580CZA+C%C3%B3rdoba' className='text-[#f4f4f4] mt-2 text-2xl transform scale-100 transition duration-500 hover:scale-110'><CiLocationOn /></a>
            </div>
        </div>
        <div className='text-white w-[250px] flex flex-col items-center text-center justify-center text-3xl my-2 xl:my-0'>
            <h1>Redes Oficiales</h1>
            <div className='flex flex-row'>
            <a className='m-2 transform scale-100 transition duration-500 hover:scale-110' href="https://www.instagram.com/colegiodeabogadosmarcosjuarez/"><CiInstagram /></a>
            <a className='m-2 transform scale-100 transition duration-500 hover:scale-110' href="https://www.facebook.com/abogadosMJ/?ref=embed_page#"><CiFacebook /></a>
            <a className='m-2 transform scale-100 transition duration-500 hover:scale-110' href=""><FaWhatsapp /></a>
            <a className='m-2 transform scale-100 transition duration-500 hover:scale-110' href=""><FiLinkedin /></a>

            </div>
        </div>
        <div className="text-white w-[350px] h-[300px] text-center border-[#f4f4f4] border-2 rounded-lg p-3">
      <h1 className="text-white text-3xl mb-2 font-bold">Calendario</h1>
      
      {/* Contenedor del título del mes y botones */}
      <div className="flex items-center justify-between text-[#f4f4f4] text-lg font-semibold mb-2">
        <button 
          onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}
          className="transform transition-transform duration-200 hover:scale-110"
        >
          {"<"}
        </button>

        <span>
          {date.toLocaleDateString("es-ES", { month: "long", year: "numeric" })}
        </span>

        <button 
          onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}
          className="transform transition-transform duration-200 hover:scale-110"
        >
          {">"}
        </button>
      </div>

      {/* Calendario */}
      <Calendar
        onChange={setDate}
        value={date}
        view="month"
        next2Label={null}
        prev2Label={null}
        className="p-2 shadow-md"
        formatShortWeekday={(locale, date) =>
          date.toLocaleDateString(locale, { weekday: "short" }).toUpperCase()
        }
        locale="es-ES"
        showNeighboringMonth={false}
        showNavigation={false}
      />
    </div>

    </div>
  )
}

export default Footer