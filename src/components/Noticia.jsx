import React from 'react'
import { useParams } from "react-router-dom";
import "./Style.css"
import magistraturaCBA from "../assets/imgNoticias/MagistraturaCBA.jpeg";
import defninez from "../assets/imgNoticias/DefNiñez.jpeg";
import diaAbogacia from "../assets/imgNoticias/DiaAbogacia.jpeg";
import feria2024 from "../assets/imgNoticias/Feria2024Enero.jpeg";
import planos from "../assets/imgNoticias/PlanosCB.jpeg";
import FinAño2025 from "../assets/imgNoticias/FinAño2025.jpeg";
import Feria from "../assets/imgNoticias/camjFeria.png";




function Noticia() {
  const noticias = [
    {
        id: 1,
        img: diaAbogacia,
        titulo: "Día de la Abogacía 2024",
        fecha: "29 de agosto de 2024",
        contenido: [
          "En esta fecha, en nuestro día, es inevitable hacer balances y exponer un panorama sobre el libre ejercicio de nuestra profesión. Y aclarar, una vez más -por si hiciera falta- que somos personas defendiendo a personas. Jamás un cálculo algorítmico de Inteligencia Artificial pondrá en contexto un problema y, aún menos, analizará las emociones de nuestros clientes, en búsqueda de la mejor solución",
          "Es inadmisible soslayar que nosotros, los abogados/as, nos preparamos durante años para defender a una persona ante la vulneración de un derecho, y que somos el primer contacto de nuestros vecinos ante un potencial conflicto. Incluso, somos la única profesión que se enfrenta a otro colega en defensa del cliente, con el agregado que tenemos que convencer a un tercero: el Juez. Esas particularidades son propias de nuestra profesión.",
          "¿Cuántas veces hemos escuchado las palabras Habeas Corpus, Habeas Data, por nombrar algunas? Es que también somos creadores de leyes.",
          "Somos mediadores, somos profesores, somos “auxiliares de la justicia”, somos dirigentes, pero por sobre todo somos abogados/as litigantes. Por eso «intentar suplir» nuestra actividad o simplificarla por «meras actuaciones administrativas» es ver nuestra profesión con miopía.",
          "Por eso, estimado/a colega celebremos con orgullo este Día de la Abogacía. Cuenta con su institución colegial como respaldo.",
          "Y a usted, lector/a, lo insto a que tenga aprecio y respeto por nuestra labor, porque tenga por seguro que siempre, siempre, va a haber un abogado/a que le atienda el teléfono, lo escuche, lo oriente y que ante cualquier escenario lo guíe en la mejor solución de su caso.",
        ],
        Saludo:[
          "Dra. Verónica Di Pompo",
          "Presidente",
        ],
    },
    {
        id: 2,
        img: FinAño2025,
        titulo: "Mensaje de Fin de Año",
        fecha: "30 de diciembre de 2024",
        contenido: [
            "Al cerrar este año quiero agradecer a cada uno de ustedes por el apoyo y la confianza depositados en nuestra gestión.",
            "Junto con los demás miembros del Directorio, nuestros delegados y personal administrativo, hemos trabajado con dedicación para representarlos y acompañarlos en las distintas situaciones que conlleva el ejercicio de nuestra vocación.",
            "Promovimos espacios de diálogo, formación continua y defensa gremial fortaleciendo nuestras instituciones y protegiendo el libre ejercicio de nuestra profesión.",
            "Escuchamos y respondimos cada inquietud para que se sientan respaldados y perciban que su colegio está siempre presente, junto a ustedes.",
            "Formamos parte de una comunidad que comparte valores y un propósito común: garantizar que nuestra labor sea reconocida y ejercida con la dignidad y el respeto que merece.",
            "Anhelo que el 2025 sea un año pleno de salud, prosperidad, oportunidades, mucha camaradería entre colegas y un firme acompañamiento en la defensa de nuestra abogacía. Sigamos trabajando por un futuro que enaltezca nuestra profesión, reafirmando el orgullo de ser abogados.",
            


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
    <div className="mt-[90px] flex flex-col justify-center max-w-[1440px]">
      <img src={noticia.img} className='m-1 md:m-[50px]' alt="" />
      <h1 className='ml-1 md:ml-[50px] my-[15px] text-[20px] xl:text-[30px] font-bold underline'>{noticia.titulo}</h1>
      <p className='ml-1 md:ml-[50px] my-[15px] text-[12px] xl:text-[15px]'>{noticia.fecha}</p>
      {noticia.contenido.map((parrafo, index) => (
    <p className='ml-1 md:ml-[50px] my-[15px] text-[18px] xl:text-[25px] mr-1 md:mr-[50px]' key={index}>{parrafo}</p>
))}
      {noticia.Saludo.map((saludo, index) => (
    <p className='ml-1 md:ml-[50px] my-[15px] text-[18px] xl:text-[25px] text-center' key={index}>{saludo}</p>
))}
    
    </div>
  )
}

export default Noticia