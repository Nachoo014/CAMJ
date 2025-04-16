import React from "react";

function CodigoarancelariodeabogadosdeCordoba() {
  return (
    <>
      <div className="relative w-[100%] h-[150px] mt-[90px] bg-[url('./assets/FondoTramiteMatricula.jpg')] bg-cover bg-center">
        {/* Overlay negro */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Texto centrado */}
        <div className="absolute inset-0 flex items-center text-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-semibold">
            Código arancelario de abogados de Cordoba
          </h1>
        </div>
      </div>
      <div className="mt-10 mb-16 flex flex-col flex-wrap justify-center items-center">
        <a
          className="px-6 m-2 py-3 text-[15px] xl:text-[18px] w-[300px] xl:w-[40%] text-center border-[#15171c] border-2 text-black font-semibold rounded-md hover:bg-[#15171c] hover:text-white transition duration-300 shadow-md"
          href="/upload/LEYNº9459.pdf"
          download
        >
          LEY Nº 9459
        </a>
        <a
          className="px-6 m-2 py-3 text-[15px] xl:text-[18px] w-[300px] xl:w-[40%] text-center border-[#15171c] border-2 text-black font-semibold rounded-md hover:bg-[#15171c] hover:text-white transition duration-300 shadow-md"
          href="/upload/LEYN°11042.pdf"
          download
        >
          LEY N° 11042
        </a>
      </div>
    </>
  );
}

export default CodigoarancelariodeabogadosdeCordoba;
