import React from "react";
import { useParams } from "react-router-dom";
import "./Style.css";
import ImgConstruccionTribunales from "../assets/CAMJTRIBUNALESCB_CONTRUCCION.png";
import CAMJCB_COE from "../assets/camj-corral-de-bustos-coe.png";
import CAMJCB_DIA_INHABIL from "../assets/CAMJFiscaliaDiaInhabil.png";





function NoticiasCorrales() {
  const noticias = [
    {
      id: 1,
      img: [ImgConstruccionTribunales,], // Múltiples imágenes
      titulo: "Construcción de Tribunales Corral de Bustos",
      fecha: "6 de octubre de 2023",
      contenido: [
        "Publicamos los Planos y el Estudio de Suelo de la obra de construcción del nuevo edificio de Tribunales Corral de Bustos – Iflinger a fines de colaborar con la difusión y publicidad para las propuestas de presentación de oferentes.",
        "Rogamos aguardar la carga de los archivos pdf incrustados en esta noticia; están aptos y disponibles para su descarga.",
        "Los pliegos de la licitación pública podrán ser consultados en la Oficina de Contrataciones del Área de Administración (Arturo M. Bas 158, primer piso).",
        "Para mayor información, los interesados podrían comunicarse al teléfono (0351) 4481014, internos 37041, 37046, 37052, en días hábiles, de 8 a 14 horas",
      ],
      descargas: [
        { nombre: "03-Lic. Obra Corral de Bustos – Planos_compressed", url: "" },
        { nombre: "04-Lic. Obra Corral de Bustos – Estudio de suelos", url: "" },
      ],
    },
    {
      id: 2,
      img: [CAMJCB_COE], // Una sola imagen
      titulo: "Solicitamos la apertura de Tribunales Corral de Bustos y de Juzgados de Paz de la zona",
      fecha: "27 de abril de 2020",
      contenido: [
        "El Colegio de Abogados del Departamento Marcos Juárez y su Delegación Corral de Bustos solicitaron al Intendente de Corral de Bustos Ifflinger Roberto Pacheco, ciudad sede de Tribunales Corral de Bustos, y por su intermedio al COE Villa María la rehabilitación del Palacio de Justicia local y las sedes de la Justicia de Paz de la región.",
        "Además, en la misiva de esta mañana, se pidió la autorización para el desarrollo de las tareas profesionales de abogados y empleados en el ámbito de nuestros estudios jurídicos, con la debida posibilidad de circulación para el cumplimiento de dichas tareas y la apertura de la Delegación del Colegio de Abogados de esta Ciudad de Corral de Bustos-Ifflinger.",
        "En una parte de la carta, se destaca «que el interior provincial no vive la misma realidad que la capital en cuanto a la evolución y propagación del COVID-19, y que los Tribunales y Juzgados de Paz del departamento Marcos Juárez se hayan -en su mayoría- adaptados para la prestación del servicio de justicia«.",
        "Además, «cabe mencionar que los edificios donde funcionan los Tribunales de Competencia Múltiple de Corral Bustos, la Asesoría Letrada y el Ministerio Público Fiscal en esta Ciudad, son independientes entre sí ubicándose en diferentes sectores de la Ciudad, lo que contribuye al cumplimiento del aislamiento social obligatorio dispuesto en el orden nacional. Asimismo, y para contribuir al sostenimiento de las normas sanitarias dispuestas, creemos conveniente y proponemos un la implementación de un sistema de turnos presenciales para los colegiados otorgados por los funcionarios del Poder Judicial de la sede con el debido resguardo sanitario, así como la implementación y puesta en funcionamiento de todos los mecanismos tecnológicos habilitados (correo electrónicos, llamadas telefónicas, videollamadas, y cualquier otro que la autoridad estime conveniente) para la comunicación directa con los colegiados a fin de contribuir con la puesta en marcha del sistema judicial«.",
        "En la Delegación, que funciona en el edificio sito en calle Av. Santa Fe N°253 de Corral de Bustos Ifflinger, trabaja únicamente una secretaria, contando con instalaciones lo suficientemente amplias para que la misma pueda desarrollar sus tareas manteniendo la distancia social requerida. Incluso, el horario de atención es sólo por la mañana hasta las 13 horas.-",
        "«Que de más está recordar que es vital el funcionamiento de la Justicia como servicio esencial del Estado de Derecho, por lo que, sin desconocer el riesgo de la Pandemia y las precauciones que todos debemos tomar para evitar su propagación, creemos factible el retorno de la actividad con las limitaciones antes mencionadas, con más todas aquellas que el COE pudiera exigir» cierra la carta firmada por la Presidente de la Delegación Corral de Bustos del Colegio de Abogados Departamento Marcos Juárez Dra. María Laura Casinghino y la Dra. Ma. Isabel D’Onofrio, presidenta del Colegio de Abogados del Departamento Marcos Juárez .",
        "Adjuntamos la Carta",
      ],

    },{
      id: 2,
      img: [CAMJCB_COE], // Una sola imagen
      titulo: "Solicitamos la apertura de Tribunales Corral de Bustos y de Juzgados de Paz de la zona",
      fecha: "27 de abril de 2020",
      contenido: [
        "El Colegio de Abogados del Departamento Marcos Juárez y su Delegación Corral de Bustos solicitaron al Intendente de Corral de Bustos Ifflinger Roberto Pacheco, ciudad sede de Tribunales Corral de Bustos, y por su intermedio al COE Villa María la rehabilitación del Palacio de Justicia local y las sedes de la Justicia de Paz de la región.",
        "Además, en la misiva de esta mañana, se pidió la autorización para el desarrollo de las tareas profesionales de abogados y empleados en el ámbito de nuestros estudios jurídicos, con la debida posibilidad de circulación para el cumplimiento de dichas tareas y la apertura de la Delegación del Colegio de Abogados de esta Ciudad de Corral de Bustos-Ifflinger.",
        "En una parte de la carta, se destaca «que el interior provincial no vive la misma realidad que la capital en cuanto a la evolución y propagación del COVID-19, y que los Tribunales y Juzgados de Paz del departamento Marcos Juárez se hayan -en su mayoría- adaptados para la prestación del servicio de justicia«.",
        "Además, «cabe mencionar que los edificios donde funcionan los Tribunales de Competencia Múltiple de Corral Bustos, la Asesoría Letrada y el Ministerio Público Fiscal en esta Ciudad, son independientes entre sí ubicándose en diferentes sectores de la Ciudad, lo que contribuye al cumplimiento del aislamiento social obligatorio dispuesto en el orden nacional. Asimismo, y para contribuir al sostenimiento de las normas sanitarias dispuestas, creemos conveniente y proponemos un la implementación de un sistema de turnos presenciales para los colegiados otorgados por los funcionarios del Poder Judicial de la sede con el debido resguardo sanitario, así como la implementación y puesta en funcionamiento de todos los mecanismos tecnológicos habilitados (correo electrónicos, llamadas telefónicas, videollamadas, y cualquier otro que la autoridad estime conveniente) para la comunicación directa con los colegiados a fin de contribuir con la puesta en marcha del sistema judicial«.",
        "En la Delegación, que funciona en el edificio sito en calle Av. Santa Fe N°253 de Corral de Bustos Ifflinger, trabaja únicamente una secretaria, contando con instalaciones lo suficientemente amplias para que la misma pueda desarrollar sus tareas manteniendo la distancia social requerida. Incluso, el horario de atención es sólo por la mañana hasta las 13 horas.-",
        "«Que de más está recordar que es vital el funcionamiento de la Justicia como servicio esencial del Estado de Derecho, por lo que, sin desconocer el riesgo de la Pandemia y las precauciones que todos debemos tomar para evitar su propagación, creemos factible el retorno de la actividad con las limitaciones antes mencionadas, con más todas aquellas que el COE pudiera exigir» cierra la carta firmada por la Presidente de la Delegación Corral de Bustos del Colegio de Abogados Departamento Marcos Juárez Dra. María Laura Casinghino y la Dra. Ma. Isabel D’Onofrio, presidenta del Colegio de Abogados del Departamento Marcos Juárez .",
        "Adjuntamos la Carta",
      ],

    },
    {
        id: 3,
        img: [CAMJCB_DIA_INHABIL], // Una sola imagen
        titulo: "Viernes 4 de octubre día inhábil en Fiscalías Corral de Bustos",
        fecha: "3 de octubre de 2019",
        contenido: [
            "Es por la mudanza de la Fiscalía de Instrucción con Funciones de Fiscalía de Menores y Familia al nuevo edificio ubicado en Sarmiento Nº 36 de Corral de Bustos Ifflinger, ciudad sede de nuestra Delegación.",
            "El Acuerdo Nº 841 – “A” del Tribunal Superior de Justicia de la Provincia de Córdoba declara día inhábil a los fines procesales el viernes 4 de octubre de 2019 las dependencias de la Fiscalía de Corral de Bustos Ifflinger mencionada y dispone que los funcionarios y empleados asistan a prestar servicio en el horario habitual, sin perjuicio de las medidas que de carácter urgente deban ser tomadas por el titular de la misma.",
            "Dicha notificación fue firmada por la Sra. Presidenta del TSJ Dra. María Marta Cáceres de Bollati y los Sres. Vocales Dres. Aída Lucía Teresa Tarditti, Luis Enrique Rubio y Sebastián López Peña con la asistencia del Sr. Director Gral. del Área de Administración a cargo de la Administración Gral. del Poder Judicial, Lic. César Augusto Bartolomei.",
        ],
  
      },
  ];

  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === parseInt(id));

  if (!noticia) return <h1 className="text-center text-2xl text-red-600 font-bold mt-10">Noticia no encontrada</h1>;

  return (
    <div className="max-w-4xl mx-auto my-[150px] p-6 bg-white shadow-lg rounded-lg">
      {/* Renderiza imágenes si existen */}
      {noticia?.img?.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {noticia.img.map((imagen, index) => (
            <img
              key={index}
              src={imagen}
              className="w-full md:w-1/2 rounded-lg shadow"
              alt={`Imagen ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Título y fecha */}
      <h1 className="text-3xl font-bold text-center mb-2 underline">
        {noticia.titulo}
      </h1>
      <p className="text-gray-600 text-center">{noticia.fecha}</p>

      {/* Renderiza contenido si existe */}
      {noticia?.contenido?.length > 0 &&
        noticia.contenido.map((parrafo, index) => (
          <p className="text-lg text-gray-800 mt-4" key={index}>
            {parrafo}
          </p>
        ))}

      {/* Renderiza saludo si existe */}
      {noticia?.saludo?.length > 0 && (
        <div className="mt-6 text-center font-semibold text-xl">
          {noticia.saludo.map((nombre, index) => (
            <p key={index}>{nombre}</p>
          ))}
        </div>
      )}

      {/* Renderiza botones de descarga si existen */}
      {noticia?.descargas?.length > 0 && (
        <div className="mt-6 text-center flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2">Descargas:</h2>
          {noticia.descargas.map((archivo, index) => (
            <a
              key={index}
              href={archivo.url}
              className="block mt-2 w-[80%] md:w-[65%] bg-[#23272F] text-white py-2 px-4 rounded-lg hover:bg-black transition"
              download
            >
              {archivo.nombre}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default NoticiasCorrales;