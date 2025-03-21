import React from 'react'
import { Link } from 'react-router-dom';
import './Inicio.css'

function NotFound() {
   return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Onda Amarilla */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-400 rounded-bl-[50%]"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center p-10">
        <h1 className="text-4xl font-bold text-black">Página</h1>
        <p className="text-lg text-gray-700 mb-5">en construcción</p>
      
        <Link to='/' className=" px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg">
        Volver a la página principal
        </Link>
        
      </div>
    </div>
  );
}

export default NotFound