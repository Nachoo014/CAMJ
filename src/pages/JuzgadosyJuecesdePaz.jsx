import React from 'react'

function JuzgadosyJuecesdePaz() {

    const JuzgadosMsJz = [
        {
            id:1,
            nombre:"Mesa de Entradas General",
            email:"tribunales-mj@justiciacordoba.gob.ar;"
        },
        {
            id:2,
            nombre:"Asesoría Letrada con funciones Múltiples – MARCOS JUAREZ	",
            email:"asemuf-mj@justiciacordoba.gob.ar"
        },
        {
            id:3,
            nombre:"Cámara Civil Múltiple Secretaria civil y flia.- MARCOS JUAREZ",
            email:"camcivmfsecccf-mj@justiciacordoba.gob.ar"
        },
        {
            id:4,
            nombre:"Cámara Civil Múltiple Secretaria Laboral – MARCOS JUAREZ",
            email:"camcivmfseclab-mj@justiciacordoba.gob.ar"
        },
        {
            id:5,
            nombre:"Delegacion Administracion General – MARCOS JUAREZ",
            email:"tribunales-mj@justiciacordoba.gob.ar"
        },
        {
            id:6,
            nombre:"Direccion de Policía Judicial – MARCOS JUAREZ",
            email:"poljud-mj@justiciacordoba.gob.ar"
        },
        {
            id:7,
            nombre:"Equipo Técnico del Interior – MARCOS JUAREZ",
            email:"equitec-mj@justiciacordoba.gob.ar"
        },
        {
            id:8,
            nombre:"Fiscalia de Instrucción y Familia Secretaria 1 – MARCOS JUAREZ",
            email:"fispenfamsec1-mj@justiciacordoba.gob.ar"
        },
        {
            id:9,
            nombre:"Fiscalia de Instrucción y Familia Secretaria 2 – MARCOS JUAREZ",
            email:"fispenfamsec2-mj@justiciacordoba.gob.ar"
        },
        {
            id:10,
            nombre:"Intendencia – MARCOS JUAREZ",
            email:"intendencia-mj@justiciacordoba.gob.ar"
        },
        {
            id:11,
            nombre:"Juzgado civil Múltiple 1 – MARCOS JUAREZ",
            email:"juzcivmf1-mj@justiciacordoba.gob.ar"
        },
        {
            id:12,
            nombre:"uzgado civil Múltiple 2 – MARCOS JUAREZ",
            email:"juzcivmf2-mj@justiciacordoba.gob.ar"
        },
        {
            id:13,
            nombre:"Juzgado de Control Múltiple – MARCOS JUAREZ",
            email:"juzpenmf-mj@justiciacordoba.gob.ar"
        },
        {
            id:14,
            nombre:"Juzgado de Control Múltiple – MARCOS JUAREZ",
            email:"juzpenmf-mj@justiciacordoba.gob.ar"
        },
        {
            id:15,
            nombre:"Medicina Forense – MARCOS JUAREZ",
            email:"medforense-mj@justiciacordoba.gob.ar"
        },
        {
            id:16,
            nombre:"Oficiales de Justicia, Ujieres y Notificadores – MARCOS JUAREZ",
            email:"ojun-mj@justiciacordoba.gob.ar"
        },
        {
            id:17,
            nombre:"Oficina de Atención Ciudadana – MARCOS JUAREZ",
            email:"atencionciudadana-mj@justiciacordoba.gob.ar"
        },
        {
            id:18,
            nombre:"Oficina de Ejecuciones Particulares – MARCOS JUAREZ",
            email:"oficivep-mj@justiciacordoba.gob.ar"
        },
        {
            id:19,
            nombre:"Oficina de Ejecuciones Particulares – MARCOS JUAREZ",
            email:"oficivep-mj@justiciacordoba.gob.ar"
        },
        {
            id:20,
            nombre:"Oficina Única de Violencia Familiar y de Genero – MARCOS JUAREZ",
            email:"ofuvfa-mj@justiciacordoba.gob.ar"
        },
        {
            id:21,
            nombre:"Secretaria de lucha contra el narcotráfico – MARCOS JUAREZ",
            email:"secpennt-mj@justiciacordoba.gob.ar"
        },

    ]
    const JuzgadosCB = [
        {
            id:1,
            nombre:"Mesa de Entradas General",
            email:"tribunales-cb@justiciacordoba.gob.ar;"
        },
        {
            id:2,
            nombre:"Asesoría Letrada con funciones Múltiples – CORRAL DE BUSTOS",
            email:"asemuf-cb@justiciacordoba.gob.ar"
        },
        {
            id:3,
            nombre:"Delegacion Administracion General – CORRAL DE BUSTOS",
            email:"tribunales-cb@justiciacordoba.gob.ar"
        },
        {
            id:4,
            nombre:"Direccion de Policía Judicial – CORRAL DE BUSTOS",
            email:"poljud-cb@justiciacordoba.gob.ar"
        },
        {
            id:5,
            nombre:"Equipo Técnico del Interior – CORRAL DE BUSTOS",
            email:"equitec-cb@justiciacordoba.gob.ar"
        },
        {
            id:6,
            nombre:"Fiscalia de Instrucción con func. Fisc. Men. y Flia. – CORRAL DE BUSTOS",
            email:"fispenmf-cb@justiciacordoba.gob.ar"
        },
        {
            id:7,
            nombre:"Intendencia – CORRAL DE BUSTOS",
            email:"intendencia-cb@justiciacordoba.gob.ar"
        },
        {
            id:8,
            nombre:"Juzgado Multifuero Secretaria Civil – CORRAL DE BUSTOS",
            email:"juzmufsecciv-cb@justiciacordoba.gob.ar"
        },
        {
            id:9,
            nombre:"Juzgado Multifuero Secretaria Penal – CORRAL DE BUSTOS",
            email:"juzmufsecpen-cb@justiciacordoba.gob.ar"
        },
        {
            id:10,
            nombre:"Oficiales de Justicia, Ujieres y Notificadores – CORRAL DE BUSTOS",
            email:"ojun-cb@justiciacordoba.gob.ar"
        },
        {
            id:11,
            nombre:"Oficina Única de Ejecución Fiscal – CORRAL DE BUSTOS",
            email:"ofucivef-cb@justiciacordoba.gob.ar"
        },
    ]

  return (
    <>
    <div className="relative w-[100%] h-[150px] mt-[90px] bg-[url('./assets/FondoTramiteMatricula.jpg')] bg-cover bg-center">
          {/* Overlay negro */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
      
          {/* Texto centrado */}
          <div className="absolute inset-0 flex items-center text-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">Juzgados y Jueces de Paz</h1>
          </div>
        </div>
        <h1 className='mt-[25px] ml-3 text-[25px] underline'>Juzgados</h1>
            <div className="overflow-x-auto mt-10 mb-10">
                <h1 className='text-[25px] p-3'>MARCOS JUAREZ</h1>
              <table className="min-w-full border border-gray-300 shadow-md">
                <tbody>
                  {JuzgadosMsJz.map((juzgado) => (
                    <tr key={juzgado.id} className="border-b border-gray-300 hover:bg-[#999999] ">
                      <td className="p-3 text-gray-800">{juzgado.nombre}</td>
                      <td className="p-3 text-gray-600">
                        <a href={`mailto:${juzgado.email}`} className="text-blue-600 hover:underline">
                          {juzgado.email}
                        </a>
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto mt-10 mb-10">
                <h1 className='text-[25px] p-3'>CORRAL DE BUSTOS</h1>
              <table className="min-w-full border border-gray-300 shadow-md">
                <tbody>
                  {JuzgadosCB.map((juzgado2) => (
                    <tr key={juzgado2.id} className="border-b border-gray-300 hover:bg-[#999999] ">
                      <td className="p-3 text-gray-800">{juzgado2.nombre}</td>
                      <td className="p-3 text-gray-600">
                        <a href={`mailto:${juzgado2.email}`} className="text-blue-600 hover:underline">
                          {juzgado2.email}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        <h1 className='mt-[25px] ml-3 text-[25px] underline'>Jueces de Paz</h1>
           <div className='flex flex-col items-center my-5'>
            <div className='flex flex-col w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>ALEJO LEDESMA-CALDERAS – Dpto. Marcos Juárez-</span>
            <span>Sr. Francisco Mauro JULIA</span>
            <span>Dirección: Sarmiento esquina Córdoba (edif Estación de Tren) C.P.2662</span>
            <span>Tel. Munic. Ofic.03468-490197- Partic.03468-490525 Munic.03468-490982</span>
            <span>Tel cel. corporativo: 351-2384868</span>
            <span>Email: fjulia@justiciacordoba.gob.ar</span>
            <span>e-mail: franmau@hotmail.com.ar</span>
            <span className='font-semibold'>colabora en el Juzgado de Paz de Arias</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>ARIAS – LAS TUNAS – Dpto. Marcos Juárez-</span>
            <span>Sr. Guillermo Victorio PIOLI</span>
            <span>Secretaria: Claudia Inés Corso (autentica firmas y diligencia cédulas de notificación Judiciales)</span>
            <span>direc. Ofic.: Córdoba esq. Avda. San Martín (Ctro Cívico) C.P.2624</span>
            <span>Tel. 03468-440140 cel. 03468-156-49516            </span>
            <span>polic. 03468-441380</span>
            <span>Tel cel. corporativo: 351-2388947</span>
            <span>Email: gpioli@justiciacordoba.gob.ar</span>
            <span>e-mail: guillermopioli@hotmail.com</span>
            <span>tel cel corporativo secretaria: 0351-152-003296</span>
            <span className='font-semibold'>colabora con este Juzgado el Sr. Francisco Juliá (Alejo Ledesma)</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>CAMILO ALDAO – LINIERS -Dpto. Marcos Juárez-
            VACANTE</span>
            <span>Subroga el Sr. Benegas, Marcelo (Colonia Italiana) va días miércoles</span>
            <span>Secretaria por Convenio: Martina, Valeria Ivana</span>
            <span>Domicilio: Belgrano 901 (Municip. Anexo Juzg.Paz) C.P.2585</span>
            <span>Tel. Munic. y ofic. 03468-401159 – 03468-401260 – 402426 – 402196 Pol. 03468- 463180</span>
            <span>Tel. cel. corporativo: 351-2386608 (uso suspendido por vacancia)</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>CAVANAGH – Dpto. Marcos Juárez-</span>
            <span>Sra. Claudia Mónica Anabel CRISTALES</span>
            <span>Domicilio: Belgrano 377 (Centro Cultural Cavanagh) C.P.2625</span>
            <span>Tel. correo (al lado) de 08 a 12 hs. 03468-491020 Policía 03468-491300 Munic. 03468-491055 / 491091 Cel partic.: 346-8-643000</span>
            <span>Tel. cel. corporativo: 351-152-409412</span>
            <span>Email: ccristales@justiciacordoba.gob.ar</span>
            <span>e-mail: claucristalescab@gmail.com</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>COLONIA ITALIANA – Dpto. Marcos Juárez-</span>
            <span>Sr. Marcelo Hugo BENEGAS</span>
            <span>Dirección: Marcos Juárez esq. Islas Malvinas C.P.2645</span>
            <span>Tel. Munic.03468-422601</span>
            <span>Tel. cel. corporativo: 351-2390185</span>
            <span>Email: mbenegas@justiciacordoba.gob.ar e-mail: marcebenegas59@gmail.com Atiende Corral de Bustos (Notificaciones)</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>CORRAL DE BUSTOS-LA ITALIANA- Dpto. Marcos Juarez- SUPRIMIDO</span>
            <span>Hay Tribunales</span>
            <span>C.P.2645</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>CRUZ ALTA – Dpto. Marcos Juarez-</span>
            <span>Sr. Alberto Ramón GAZZOLA</span>
            <span>Colabora con este Juzgado el Sr. Horacio Skalko, Juez de Paz de Los Surgentes Secretaria: María Celeste Maccioni (autentica firmas y diligencia cédulas de notificación judiciales)</span>
            <span>Direc.: Dr. Coloccini 830 C.P.2189</span>
            <span>Tel. Ofic.03467-400133 policía: 03467-423160</span>
            <span>Munic.03467-401101</span>
            <span>Tel cel. corporativo: 351-2365940</span>
            <span>Email: agazzola@justiciacordoba.gob.ar</span>
            <span>e-mail: albertogazzola@hotmail.com</span>
            <span>Tel cel corporativo secretaria: 0351-152-004573</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>GENERAL BALDISSERA- Dpto. Marcos Juarez-</span>
            <span>Sr. Cristian Oscar FORCONI</span>
            <span>domicilio: Remigio Mancini s/n (Policía) C.P.2583</span>
            <span>Tel. Ofic. Polic. 03468-494790 Munic. 03468-494220</span>
            <span>Tel cel. corporativo: 351-2385930</span>
            <span>Email: cforconi@justiciacordoba.gob.ar</span>
            <span>e-mail: forconi_cristian@hotmail.com</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>GENERAL ROCA – Dpto. Marcos Juárez-</span>
            <span>Sra. María Raquel SAURI</span>
            <span>Dirección: San Martín 420 esq. Bv. Illia (policía al lado) C.P.2592</span>
            <span>Tel. Pol. 03472-491820 491117</span>
            <span>Munic. 03472-492107 – 492849</span>
            <span>Tel cel. corporativo: 351-2451807</span>
            <span>Email: msauri@justiciacordoba.gob.ar</span>
            <span>e-mail: mariaraquelsauri@gmail.com</span>
            <span className='font-semibold'>va días viernes a colaborar en Leones</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>GUATIMOZIN – Dpto. Marcos Juárez-</span>
            <span>Sra. María Alicia SIMUNOVICH</span>
            <span>Dirección: Avda. Río de la Plata esq. Avda Cba. (Casa de la Cultura) C.P.2627</span>
            <span>Tel. Ofic.03468-495639 Munic.03468-495316</span>
            <span>Tel cel. corporativo: 351-2388274</span>
            <span>Email: msimunovich@justiciacordoba.gob.ar</span>
            <span>e-mail: simula@hotmail.com</span>
            <span className='font-semibold'>Atiende Cavanagh va días jueves</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>INRIVILLE – SALADILLO – Dpto. Marcos Juárez-</span>
            <span>Sr. Henry José STORTI</span>
            <span>Dirección: General San Martin 439 C.P.2587</span>
            <span>Tel. Ofic. 03467-411521 cel. 03467-156-38544</span>
            <span>Tel Pol. 03467-481120 480172</span>
            <span>Tel cel. corporativo: 351-2362359</span>
            <span>Email: hstorti@justiciacordoba.gob.ar</span>
            <span>Email: henry_storti@hotmail.com</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>ISLA VERDE – Dpto. Marcos Juárez-</span>
            <span>Sra. Silvia Viviana FERREYRA</span>
            <span>Domicilio: San Martin 288 – Planta Alta (Munic.) C.P.2661</span>
            <span>Tel. Munic.03468-400961 (10 Hs.)</span>
            <span>Tel cel. corporativo: 351-2390410</span>
            <span>Email: svferreyra@justiciacordoba.gob.ar</span>
            <span>e-mail: silviavivianaferreyra@gmail.com</span>
            <span className='font-semibold'>Enviar correspondencia a domic. partic. Uruguay 856 – Isla Verde</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>LAS TUNAS</span>
            <span>Ver Arias</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>LEONES – Dpto. Marcos Juárez</span>
            <span>Subrogan Sra. Raquel Sauri, Jueza de Paz de General. Roca, Sr. Ivàn Pereyra, Juez de Paz de Morrison y Sra. Carla Cocco, Jueza de Paz de Noetinger</span>
            <span>Sr. Diego Marcelo Pelizzari (en comisión en Marcos Juárez a partir del 30-10- 2019)</span>
            <span>Secretario: GALEANO, Marcelo Adrián (autentica firmas y diligencia cédulas de notificación judiciales)</span>
            <span>Dirección: Amadeo Bertini 693 esq. D. Alighieri (Ctro de Educ. de Nivel Medio de Adultos de Leones)
            C.P.2594</span>
            <span>Tel. Oficina 03472-489620</span>
            <span>Tel Munic. 03472-484100 Polic. 03472-483560</span>
            <span>Tel Cel. corporativo del Juez: 351-2423845</span>
            <span>Tel Cel corporativo de secretario: 351-3100835</span>
            <span>Email: dpelizzari@justiciacordoba.gob.ar</span>
            <span>e-mail: aymara.maricelydiego@hotmail.com</span>
            <span className='font-semibold'>Colaboran en este Juzgado la Sra. Raquel Sauri (General Roca), Sr. Iván Pereyra y la Sra. Carla Cocco (Noetinger)</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>LINIERS</span>
            <span>Ver Camilo Aldao</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>LOS SURGENTES – Dpto. Marcos Juárez</span>
            <span>Sr. Horacio José María SKALKO</span>
            <span>Dirección: Gobernador Garzón 369 (juzg. Faltas) C.P.2581</span>
            <span>Tel. Ofic. 03467-495756 cel. 03467-156-43540 </span>
            <span>Tel Munic. Ofic.03467-495017/132/607 (fax)</span>
            <span>Tel polic. 03467-495025</span>
            <span>Tel celular corporativo: 351-2364622</span>
            <span>Email: hskalko@justiciacordoba.gob.ar</span>
            <span className='font-semibold'>Colabora con Juzgado de Paz de Cruz Alta</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>MONTE BUEY – Dpto. Marcos Juárez</span>
            <span>Sra. Silvina Andrea PIGLIAPOCO</span>
            <span>Direc.: Mariano Moreno No 210 (al lado de la Policía Local) C.P.2589</span>
            <span>Tel. Ofic. 03467-472223 Polic. 03467-470057</span>
            <span>Munic. 03467-470675 – 470157</span>
            <span>Tel celular corporativo: 351-2421865</span>
            <span>Email: spigliapoco@justiciacordoba.gob.ar</span>
            <span>e-mail: sapigliapoco@hotmail.com</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>SAIRA- Dpto. Marcos Juárez</span>
            <span>Sr. Daniel Darío CAPRA</span>
            <span>Dirección: San Martín 440 C.P.2525</span>
            <span>Tel. 03472-155-28177 // Tel Munic. 03472-493026 03472-493200</span>
            <span>Tel celular corporativo: no usa celular corporativo.</span>
            <span>Email: dcapra@justiciacordoba.gob.ar</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>SALADILLO</span>
            <span>ver Inriville</span>
            </div>
            <div className='flex flex-col justify-center w-[300px] xl:w-[500px] my-2'>
            <span className='font-bold'>SAN JOSE DEL SALTEÑO – Dpto. Marcos Juárez</span>
            <span>atiende Sra. Mariela Le Roux</span>
            <span>(Chilibroste) C.P.2563</span>
            </div>

            </div>         
        </>  
  )
}

export default JuzgadosyJuecesdePaz