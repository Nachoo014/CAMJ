import React, { useState,useEffect } from 'react'
import * as motion from "motion/react-client"
import "./Style.css"
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Calendar from "react-calendar";

function Footer() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(new Date()); // Se asegura de que la fecha inicial sea la actual
  }, []);
  const [showInfo, setShowInfo] = useState({
    sede: false,
    tribunales: false,
    nuevaSede: false, // Para la nueva sede que agregarás
  });

  const toggleInfo = (section) => {
    setShowInfo((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-screen h-[100%] bg-[#202020] px-[150px] py-[35px] flex flex-col xl:flex-row justify-between items-center">
      
      {/* SEDE */}
      <div className="flex flex-col items-center">
      <div className="border-2 border-[#f4f4f4] text-center w-[350px] flex flex-col items-center rounded-2xl p-[15px] m-[10px]">
          <h1 className="text-[#f4f4f4] font-bold text-[18px]">Sede del Colegio</h1>
          {showInfo.sede && (
            <>
              <p className="text-[#f4f4f4] text-[12px]">Av. Hipólito Yrigoyen 1154</p>
              <p className="text-[#f4f4f4] text-[12px]">Marcos Juárez</p>
              <p className="text-[#f4f4f4] text-[12px]">Tel/Fax 03472 - 456949</p>
              <p className="text-[#f4f4f4] text-[12px]">colegiomjuarez@colegioabogadosmj.com.ar</p>
            </>
          )}
          <button 
            onClick={() => toggleInfo("sede")} 
            className="mt-2 p-1.5 rounded-md text-[12px] text-[#f4f4f4] font-semibold border-[f4f4f4] border-1 hover:text-[#202020] hover:bg-[#f4f4f4] hover:font-bold hover:underline "
          >
            {showInfo.sede ? "Ver menos" : "Ver más"}
          </button>
        </div>

        {/* TRIBUNALES */}
        <div className="border-2 border-[#f4f4f4] text-center w-[350px] flex flex-col items-center rounded-2xl p-[15px] m-[10px]">
          <h1 className="text-[#f4f4f4] font-bold text-[18px]">Sala de servicios del Colegio en Tribunales</h1>
          {showInfo.tribunales && (
            <>
              <p className="text-[#f4f4f4] text-[12px]">Av. Lardizábal 1750</p>
              <p className="text-[#f4f4f4] text-[12px]">Marcos Juárez</p>
              <p className="text-[#f4f4f4] text-[12px]">Tel/Fax 03472 - 456948</p>
              <p className="text-[#f4f4f4] text-[12px]">colegiomjuareztribunales@colegioabogadosmj.com.ar</p>
            </>
          )}
          <button 
            onClick={() => toggleInfo("tribunales")} 
            className="mt-2 p-1.5 rounded-md text-[12px] text-[#f4f4f4] font-semibold border-[f4f4f4] border-1 hover:text-[#202020] hover:bg-[#f4f4f4] hover:font-bold hover:underline"
          >
            {showInfo.tribunales ? "Ver menos" : "Ver más"}
          </button>
        </div>
        {/* NUEVA SEDE */}
        <div className="border-2 border-[#f4f4f4] text-center w-[350px] flex flex-col items-center rounded-2xl p-[15px] m-[10px]">
          <h1 className="text-[#f4f4f4] font-bold text-[18px]">Delegación del Colegio Corral de Bustos</h1>
          {showInfo.nuevaSede && (
            <>
              <p className="text-[#f4f4f4] text-[12px]">Av. Santa Fe Nº 253</p>
              <p className="text-[#f4f4f4] text-[12px]">Corral de Bustos</p>
              <p className="text-[#f4f4f4] text-[12px]">Tel/Fax: 03468-409389</p>
              <p className="text-[#f4f4f4] text-[12px]">abogcdb@gmail.com</p>
            </>
          )}
          <button 
            onClick={() => toggleInfo("nuevaSede")} 
            className="mt-2 p-1.5 rounded-md text-[12px] text-[#f4f4f4] font-semibold border-[f4f4f4] border-1 hover:text-[#202020] hover:bg-[#f4f4f4] hover:font-bold hover:underline"
          >
            {showInfo.nuevaSede ? "Ver menos" : "Ver más"}
          </button>
        </div>
      </div>

      {/* REDES SOCIALES */}
      <div className="text-white w-[250px] flex flex-col items-center text-center justify-center text-3xl my-[50px] xl:my-0">
        <h1>Redes Oficiales</h1>
        <div className="flex flex-row">
          <a className="m-2 transform scale-100 transition duration-500 hover:scale-110" 
             href="https://www.instagram.com/colegiodeabogadosmarcosjuarez/">
            <CiInstagram />
          </a>
          <a className="m-2 transform scale-100 transition duration-500 hover:scale-110" 
             href="https://www.facebook.com/abogadosMJ/?ref=embed_page#">
            <CiFacebook />
          </a>
          <a className="m-2 transform scale-100 transition duration-500 hover:scale-110" href="#">
            <FaWhatsapp />
          </a>
          <a className="m-2 transform scale-100 transition duration-500 hover:scale-110" href="#">
            <FiLinkedin />
          </a>
        </div>
      </div>

      {/* CALENDARIO */}
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
          tileClassName={({ date, view }) => {
            if (view === "month" && date.toDateString() === new Date().toDateString()) {
              return "bg-red-500 text-white font-bold rounded-full"; // Azul para destacar el día actual
            }
          }}
        />
      </div>
      
    </div>
  );
}

export default Footer