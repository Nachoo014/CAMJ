import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Style.css";
import * as motion from "motion/react-client";
import noticias from "../data/noticias.json"

const isFacebookVideoUrl = (url) => {
  return url.includes("facebook.com") && (url.includes("video") || url.includes("watch"));
};

const isDirectVideoUrl = (url) => {
  return /\.(mp4|webm|ogg)$/i.test(url);
};

const getFacebookEmbedUrl = (url) => {
  const videoIdMatch = url.match(/v=(\d+)/);
  if (videoIdMatch) {
    const videoId = videoIdMatch[1];
    return `https://www.facebook.com/video/embed?video_id=${videoId}`;
  }
  return url;
};

function UltimasNoticias() {
  const UltimasNoticias = noticias.slice(-3);

  return (
    <div className="flex flex-col w-screen justify-center items-center mt-[30px]">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
        className="w-[80%] p-[25px] border-t border-t-gray-500 flex justify-center items-center text-[25px] md:text-[30px] font-bold text-[#000000]"
      >
        Ultimas Noticias
      </motion.h1>
      <div className="flex flex-col xl:flex-row-reverse justify-center items-stretch gap-6 px-[100px] py-8 w-full max-w-[1200px]">
        {UltimasNoticias.map((news) => (
          <div
          key={news.id}
          className="w-[300px] h-100% m-[20px] bg-[#23272F] flex flex-col items-center rounded-[5px]"
        >
         {news.img && news.img.length > 0 && (
  <div className="w-full h-0 pb-[56.25%] relative"> {/* Relación 16:9 (9 / 16 * 100 = 56.25%) */}
    {isFacebookVideoUrl(news.img[0]) ? (
      <iframe
        src={getFacebookEmbedUrl(news.img[0])}
        className="absolute top-0 left-0 w-full h-full object-cover"
        title={news.titulo}
        allowFullScreen
        frameBorder="0"
      ></iframe>
    ) : isDirectVideoUrl(news.img[0]) ? (
      <video
        src={news.img[0]}
        controls
        className="absolute top-0 left-0 w-full h-full object-cover"
        title={news.titulo}
      >
        Tu navegador no soporta el elemento de video.
      </video>
    ) : (
      <img
        src={news.img[0]}
        alt={news.titulo}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    )}
  </div>
)}
          <div className="p-4 flex flex-col flex-grow justify-between">
            <div>
              <h2 className="text-[18px] mt-[20px] font-semibold underline text-[#f2f2f2]">
                {news.titulo}
              </h2>
              <p className="text-[12px] font-semibold my-[10px] px-2 rounded-md text-[#23272F] bg-[#f2f2f2] w-fit">
                {news.fecha}
              </p>
              <p className="text-[14px] my-[10px] text-[#f2f2f2]">
                {news.contenido && news.contenido.length > 0
                  ? news.contenido[0].split(" ").slice(0, 10).join(" ") + "..."
                  : "No hay contenido disponible."}
              </p>
            </div>
            <Link
              to={`/noticias/${news.id}`}
              className="bg-[#f4f4f4] text-[#15171C] text-sm font-semibold text-center py-2 px-4 rounded-[5px] mt-4 transform scale-100 transition duration-500 hover:scale-105 w-full max-w-[120px] mx-auto"
            >
              Leer más
            </Link>
          </div>
        </div>
        ))}
      </div>
      <Link
              to="/noticias"
              className="bg-[#15171C] text-[#f4f4f4] text-center text-sm font-medium py-2 px-4 rounded-[5px] mt-4 hover:bg-gray-200 hover:text-[#15171C] hover: border-2 border-[#15171c] transition duration-300 w-full max-w-[200px] mx-auto my-5"
            >
              Ver todas las noticias
            </Link>
    </div>
  );
}

export default UltimasNoticias;