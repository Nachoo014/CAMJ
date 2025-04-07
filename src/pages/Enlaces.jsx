import React from "react";
import "./Inicio.css";
import * as motion from "motion/react-client";

const enlaces = [
  {
    id: 1,
    nombre: "Justicia Córdoba",
    href: "https://www.justiciacordoba.gob.ar/JusticiaCordoba/Inicio/index.aspx",
  },
  {
    id: 2,
    nombre: "Rentas Córdoba",
    href: "https://www.rentascordoba.gob.ar/inicio/",
  },
  {
    id: 3,
    nombre: "Servicios Extranet",
    href: "https://www.justiciacordoba.gob.ar/justiciacordoba/extranet.aspx",
  },
  {
    id: 4,
    nombre: "Boletín Oficial de la Provincia de Córdoba",
    href: "https://boletinoficial.cba.gov.ar/",
  },
  {
    id: 5,
    nombre: "InfoLEG",
    href: "https://www.infoleg.gob.ar/",
  },
  {
    id: 6,
    nombre: "ARCA",
    href: "https://www.afip.gob.ar/landing/default.asp",
  },
  {
    id: 6,
    nombre: "FACA",
    href: "https://faca.org.ar/",
  },
];

function Enlaces() {
  return (
    <div className="mt-[90px] w-screen bg-#[f4f4f4] flex flex-col justify-center items-center">
      <div className="relative w-[100%] h-[150px] bg-[url('./assets/FondoTramiteMatricula.jpg')] bg-cover bg-center">
        {/* Overlay negro */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Texto centrado */}
        <div className="absolute inset-0 flex items-center text-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">Links</h1>
        </div>
      </div>
      <div className="my-[50px] flex flex-col justify-center items-center w-screen">
        {enlaces.map((e) => (
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
            key={e.id}
            href={e.href}
            className="px-6 m-2 py-3 text-[15px] xl:text-[18px] w-[300px] xl:w-[40%] text-center border-[#15171c] border-2 text-black font-semibold rounded-md hover:bg-[#15171c] hover:text-white transition duration-300 shadow-md"
          >
            {e.nombre}
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Enlaces;
