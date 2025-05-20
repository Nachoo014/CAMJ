import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "./Style.css";
import ImgConstruccionTribunales from "../assets/CAMJTRIBUNALESCB_CONTRUCCION.png";
import CAMJCB_COE from "../assets/camj-corral-de-bustos-coe.png";
import CAMJCB_DIA_INHABIL from "../assets/CAMJFiscaliaDiaInhabil.png";
import noticias from "../data/noticias.json";

// Import react-slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components for navigation
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
    onClick={onClick}
  >
    →
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
    onClick={onClick}
  >
    ←
  </button>
);

// MediaSlider component
const MediaSlider = ({ noticia }) => {
  if (!noticia?.img?.length) return null;

  const isVideo = (url) => {
    const videoExtensions = [".mp4", ".webm", ".ogg"];
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp"];

    // Si la URL termina en una extensión de imagen, no es video, incluso si es de Google Drive
    if (imageExtensions.some((ext) => url.toLowerCase().endsWith(ext))) {
      return false;
    }

    // Solo consideramos video si es de Google Drive Y no es una imagen
    return (
      (url.includes("drive.google.com") &&
        !imageExtensions.some((ext) => url.toLowerCase().endsWith(ext))) ||
      url.includes("facebook.com") ||
      videoExtensions.some((ext) => url.toLowerCase().endsWith(ext))
    );
  };

  const settings = {
    dots: noticia.img.length > 1,
    infinite: noticia.img.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: noticia.img.length > 1 ? <NextArrow /> : null,
    prevArrow: noticia.img.length > 1 ? <PrevArrow /> : null,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="mb-4 max-w-full mx-auto">
      <Slider {...settings}>
        {noticia.img.map((media, index) => (
          <div key={index} className="px-2">
            {isVideo(media) ? (
              media.includes("facebook.com") ? (
                <iframe
                  src={media.replace("/share/v/", "/plugins/video.php?href=") + "&show_text=false"}
                  className="w-full h-[500px] rounded-lg shadow"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  title={`Video de Facebook ${index + 1}`}
                ></iframe>
              ) : (
                <video
                  className="w-full h-[500px] object-contain rounded-lg shadow"
                  controls
                  onError={(e) => {
                    console.error("Error al cargar video:", media);
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                >
                  <source src={media} type="video/mp4" />
                  Tu navegador no soporta videos.
                </video>
              )
            ) : (
              <img
                src={media}
                className="w-full h-[500px] object-contain rounded-lg shadow"
                alt={`Imagen ${index + 1}`}
                loading="lazy"
                onError={(e) => {
                  console.error("Error al cargar imagen:", media);
                }}
              />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};
function NoticiasCorrales() {
 

  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === parseInt(id));

  if (!noticia) return <h1 className="text-center text-2xl text-red-600 font-bold mt-10">Noticia no encontrada</h1>;

  return (
    <div className="max-w-4xl mx-auto my-[150px] p-6 bg-white shadow-lg rounded-lg">
      {/* Renderiza el slider de imágenes/videos si existen */}
      <MediaSlider noticia={noticia} />

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
              type="application/pdf"
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