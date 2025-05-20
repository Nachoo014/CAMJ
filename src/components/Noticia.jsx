import React from 'react'
import { useParams } from "react-router-dom";
import "./Style.css"





function Noticia() {
  const noticias = [
    {
        id: 1,
        img:"",
        titulo: "Resurge la Comisión de Jóvenes de nuestro Colegio De Abogados",
        fecha: "19 de julio de 2023",
        contenido: ["En nuestra sede de Marcos Juarez, se delinearon los primeros pasos para conformar la comisión y puntos a trabajar en pos de los nóveles abogados del Departamento."
        ],
        Saludo:[],
    },
    {
        id: 2,
        img:"",
        titulo: "Asunción de Nuevos Directorios del Colegio de Abogados de Marcos Juárez y Delegación Corral de Bustos con Presencia de Autoridades Nacionales y Provinciales",
        fecha: " 28 de Julio de 2023",
        contenido: [ "Acto de asunción de los directorios del Colegio del Abogados de Marcos Juárez y Delegación Corral de Bustos contando con la presencia de Autoridades de la abogacía y Justicia Nacional y Provincial.",
          "1) Verónica Di Pompo, flamante presidenta;",
          "2) José Luis Lassalle, pte. FACA;",
          "3) Isabel D’Onofrio, pta. saliente;",
          "4) Auditorio con magistrados y funcionarios de Tribunales de nuestra jurisdicción;",
          "5) Mónica Raquel Gilli y Liliana Bichsel, ptas. colegios de SanFrancisco y de BellVille;",
          "6) Marcelo Scarpa, sec. FACA;",
          "7) Junta Electoral del colegio de abogados;",
          "8) Carolina Gobbato, pte. Delegación de nuestra institución reconoce la labor de la Junta Electoral;",
          "9) Discurso de incio de gestión de la Dra. Di Pompo.",
         ],
        Saludo:[
          "Con aprecio.",
            "Dra. Verónica Di Pompo",
            "Presidenta Colegio de Abogados",
            "Departamento Marcos Juárez",
        ],
    }
];
      const { id } = useParams();
      const noticia = noticias.find((n) => n.id === parseInt(id));
    
      if (!noticia) return <h1>Noticia no encontrada</h1>;
      return (
        <div className="mt-[150px] flex flex-col justify-center max-w-[900px] mx-auto my-[150px] p-6 bg-white shadow-lg rounded-lg">
          {/* Renderiza la imagen si existe */}
          {noticia.img && <img src={noticia.img} className='m-1 md:m-[50px]' alt={noticia.titulo} />}
          
          <h1 className='ml-1 md:ml-[50px] my-[15px] text-[20px] xl:text-[30px] font-bold underline'>
            {noticia.titulo}
          </h1>
          
          <p className='ml-1 md:ml-[50px] my-[15px] text-[12px] xl:text-[15px]'>{noticia.fecha}</p>
          
          {/* Renderiza los párrafos del contenido */}
          {noticia.contenido && noticia.contenido.map((parrafo, index) => (
            <p className='ml-1 md:ml-[50px] my-[15px] text-[18px] xl:text-[25px] mr-1 md:mr-[50px]' key={index}>
              {parrafo}
            </p>
          ))}
    
          {/* Renderiza el saludo si existe */}
          {noticia.Saludo && noticia.Saludo.map((saludo, index) => (
            <p className='ml-1 md:ml-[50px] my-[15px] text-[18px] xl:text-[25px] text-center' key={index}>
              {saludo}
            </p>
          ))}
    
          {/* Renderiza los botones de descarga si existen */}
          {noticia.descargas && noticia.descargas.length > 0 && (
            <div className="ml-1 md:ml-[50px] my-[15px]">
              <h2 className="text-[18px] xl:text-[25px] font-bold">Descargas:</h2>
              {noticia.descargas.map((archivo, index) => (
                <a 
                  key={index} 
                  href={archivo.url} 
                  className="block mt-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
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

export default Noticia