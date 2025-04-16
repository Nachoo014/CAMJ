import React from "react";
import { Link } from "react-router-dom";

function HerramientasOnline() {
  return (
    <div className="mt-36 mb-16 flex flex-col flex-wrap justify-center items-center">
      <a
        href="/upload/EstatutosColegioAbogados.doc" download
        className="px-6 m-2 py-3 text-[15px] xl:text-[18px] w-[300px] xl:w-[40%] text-center border-[#15171c] border-2 text-black font-semibold rounded-md hover:bg-[#15171c] hover:text-white transition duration-300 shadow-md"
      >
        Descargar Estatuto Colegio de Abogados
      </a>

      <a
        href="/upload/Estatutodelacomisióndejovenesabogados.doc"
        download
        className="px-6 m-2 py-3 text-[15px] xl:text-[18px] w-[300px] xl:w-[40%] text-center border-[#15171c] border-2 text-black font-semibold rounded-md hover:bg-[#15171c] hover:text-white transition duration-300 shadow-md"
      >
        Descargar Estatuto Comisión Jóvenes Abogados
      </a>
      <Link
        to="/Conveniocasillerosnotificaciones"
        className="px-6 m-2 py-3 text-[15px] xl:text-[18px] w-[300px] xl:w-[40%] text-center border-[#15171c] border-2 text-black font-semibold rounded-md hover:bg-[#15171c] hover:text-white transition duration-300 shadow-md"
      >
        Convenio casilleros notificaciones
      </Link>
      <Link
        to="/CodigoarancelariodeabogadosdeCordoba"
        className="px-6 m-2 py-3 text-[15px] xl:text-[18px] w-[300px] xl:w-[40%] text-center border-[#15171c] border-2 text-black font-semibold rounded-md hover:bg-[#15171c] hover:text-white transition duration-300 shadow-md"
      >
        Código arancelario de abogados de Cordoba
      </Link>
      <a
        href="/upload/LEYN°5805-LeydeColegiaciónObligatoria.pdf"
        download
        className="px-6 m-2 py-3 text-[15px] xl:text-[18px] w-[300px] xl:w-[40%] text-center border-[#15171c] border-2 text-black font-semibold rounded-md hover:bg-[#15171c] hover:text-white transition duration-300 shadow-md"
      >
        LEY N° 5805 - Ley de Colegiación Obligatoria
      </a>
    </div>
  );
}

export default HerramientasOnline;
