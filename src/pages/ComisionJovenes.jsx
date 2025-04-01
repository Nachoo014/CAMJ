import React from "react";
import { motion } from "motion/react";
function ComisionJovenes() {
  return (
    <>
      <div className="relative w-screen h-[150px] mt-[90px] bg-[url('./assets/FondoTramiteMatricula.jpg')] bg-cover bg-center">
        {/* Overlay negro */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Texto centrado */}
        <div className="absolute inset-0 flex items-center text-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold underline">
            Comisión de Jóvenes
          </h1>
        </div>
      </div>
      <div className="bg-[#0F0D3C] w-screen h-[100%] py-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, }} 
          whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
          className="text-[20px] md:text-[30px] text-[#f4f4f4] text-center underline m-[5px]"
        >
          Presidente
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, }} 
          whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
          className="text-[17px] md:text-[23px] text-[#f4f4f4] text-center m-[5px]"
        >
          Marianela Bargna
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, }} 
          whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
          className="text-[20px] md:text-[30px] text-[#f4f4f4] text-center underline m-[5px]"
        >
          Vicepresidente
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, }} 
          whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
          className="text-[17px] md:text-[23px] text-[#f4f4f4] text-center m-[5px]"
        >
          Andreina Gomez
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, }} 
          whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
          className="text-[20px] md:text-[30px] text-[#f4f4f4] text-center underline m-[5px]"
        >
          Secretaría
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, }} 
          whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
          className="text-[17px] md:text-[23px] text-[#f4f4f4] text-center m-[5px]"
        >
          Magalí Modiloni
        </motion.p>
      </div>
    </>
  );
}

export default ComisionJovenes;
