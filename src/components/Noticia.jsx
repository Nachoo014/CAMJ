import React from 'react'
import { useParams } from "react-router-dom";
import "./Style.css"

function Noticia() {
    const noticias = [
        { id: 1, titulo: "Noticia 1", contenido: "Contenido completo de la noticia 1." },
        { id: 2, titulo: "Noticia 2", contenido: "Contenido completo de la noticia 2." },
        { id: 3, titulo: "Noticia 3", contenido: "Contenido completo de la noticia 3." },
      ];
      const { id } = useParams();
      const noticia = noticias.find((n) => n.id === parseInt(id));
    
      if (!noticia) return <h1>Noticia no encontrada</h1>;
  return (
    <div className="noticia-detalle">
      <h1>{noticia.titulo}</h1>
      <p>{noticia.contenido}</p>
    </div>
  )
}

export default Noticia