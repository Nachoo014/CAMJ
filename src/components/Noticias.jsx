import React from 'react';
import { Link } from 'react-router-dom';
import * as motion from 'motion/react-client';
import { parse, compareDesc } from 'date-fns';
import { es } from 'date-fns/locale';
import noticias from '../data/noticias.json';
import './Style.css';

function Noticias() {
  const NoticiasReversa = [...noticias].reverse();

  return (
    <div>
      <h1>Noticias</h1>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.5 } }}
        className="flex flex-row justify-center items-center flex-wrap mt-[120px]"
      >
        {NoticiasReversa.map((noticia) => {
          // Determinar qué mostrar: imagen, video o placeholder
          let mediaUrl = '';
          let isVideo = false;

          try { 
            if (Array.isArray(noticia.img)) {
              mediaUrl = noticia.img[0] || '';
            } else {
              mediaUrl = noticia.img || '';
            }

            if (mediaUrl && typeof mediaUrl === 'string' && mediaUrl.includes('facebook.com')) {
              isVideo = true;
            }
          } catch (error) {
            console.error(`Error procesando media para noticia ${noticia.id}:`, error);
            mediaUrl = '';
          }

          return (
            <div
              key={noticia.id}
              className="h-[600px] w-[400px] m-5 flex flex-col bg-[#f4f4f4] shadow-lg rounded-2xl"
            >
              {mediaUrl ? (
                isVideo ? (
                  <iframe
  src={mediaUrl}
  className="h-[300px] w-full rounded-t-2xl"
  style={{ height: '300px', width: '100%', minHeight: '300px', maxHeight: '300px' }}
  title={`Video de ${noticia.titulo || 'Noticia'}`}
  frameBorder="0"
  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
  allowFullScreen
/>
                ) : (
                  <img
                    src={mediaUrl}
                    className="h-[300px] w-full object-cover rounded-t-2xl"
                    alt={noticia.titulo || 'Noticia'}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                )
              ) : (
                <div className="h-[300px] w-full bg-gray-500 rounded-t-2xl flex items-center justify-center">
                  <span className="text-white">Sin imagen</span>
                </div>
              )}
              <div className=''>
              <h2 className="text-[#101010] flex text-[20px] px-2 underline font-bold mt-[15px] mb-[15px]">
                {noticia.titulo}
              </h2>
              <p className="text-[#202020] flex text-[18px] px-2">
                {noticia.contenido && noticia.contenido.length > 0
                  ? noticia.contenido[0].split(' ').slice(0, 10).join(' ') + '...'
                  : 'No hay contenido disponible.'}
              </p>
              <p className="text-[#f4f4f4] bg-[#505050] w-fit mx-2 rounded-md flex text-[12px] px-2 my-[10px]">
                {noticia.fecha}
              </p>
              </div>
              <Link
                to={`/noticias/${noticia.id}`}
                className="bg-[#505050] text-[#f4f4f4] transform scale-100 transition duration-500 hover:scale-105 font-semibold text-[15px] m-auto mb-5 text-center w-[50%] rounded-[5px]"
              >
                Leer más
              </Link>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Noticias;