import React, { useState, useEffect }  from 'react'
import "./Inicio.css";
import * as motion from "motion/react-client";


function Padron() {

    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRI9-98_uS5FJFgnyxP1zJH32tqpAz6a3GPtNpgcR2QR3xGODUPcdCSjSeOG68OQXlxt8cX_03OPQmk/pubhtml"
    
      const [datos, setDatos] = useState(datosIniciales);
      const [busqueda, setBusqueda] = useState("");
      const busquedaLimpia = busqueda.trim();
    
      // Filtrar datos según la búsqueda
      const datosFiltrados =
    busquedaLimpia.length > 0
      ? datosIniciales.filter(
          (item) =>
            item.Apellido.toLowerCase().includes(busquedaLimpia.toLowerCase()) ||
            item.Matrícula.toString().includes(busquedaLimpia)
        )
      : [];
      
      console.log(datosFiltrados)
      return (
        <div>
          <div className="relative w-[100%] h-[150px] mt-[90px] bg-[url('./assets/FondoTramiteMatricula.jpg')] bg-cover bg-center">
            {/* Overlay negro */}
            <div className="absolute inset-0 bg-black opacity-70"></div>
      
            {/* Texto centrado */}
            <div className="absolute inset-0 flex items-center text-center justify-center">
              <h1 className="text-white text-3xl md:text-5xl font-bold">Padrón</h1>
            </div>
          </div>
      
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Búsqueda de Abogados</h2>
            <p className="text-md mb-4">Encuentra a tu abogado ingresando su apellido o número de matrícula.</p>
            <input
              type="text"
              placeholder="Buscar por apellido o matrícula..."
              className="w-full p-2 mb-4 border rounded"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
      
            {/* Botón de descarga */}
            
            <a
              href="/upload/PadronCAMJ.csv"
              download
              className="bg-[#0F0D3C] text-[#f4f4f4] px-5 py-2 text-lg font-semibold transition-transform duration-300 transform hover:scale-110 block text-center w-fit mx-auto"
            >
              Descargar Padrón
            </a>
      
            {/* Mostrar la tabla solo si hay una búsqueda válida */}
            {busquedaLimpia.length > 0 && datosFiltrados.length > 0 ? (
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-2">Apellido</th>
                      <th className="border p-2">Nombre</th>
                      <th className="border p-2">Dirección</th>
                      <th className="border p-2">Código Postal</th>
                      <th className="border p-2">Localidad</th>
                      <th className="border p-2">Teléfono</th>
                      <th className="border p-2">Matrícula</th>
                      <th className="border p-2">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datosFiltrados.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="border p-0.5">{item.Apellido}</td>
                        <td className="border p-0.5">{item.Nombre}</td>
                        <td className="border p-0.5">{item['Calle y número']}</td>
                        <td className="border p-0.5">{item['Código Postal']}</td>
                        <td className="border p-0.5">{item.Ciudad}</td>
                        <td className="border p-0.5">{item['Nº de teléfono']}</td>
                        <td className="border p-0.5">{item.Matrícula}</td>
                        <td className="border p-0.5">
                          <a href={`mailto:${item['Correo Electrónico']}`} className="text-blue-600 underline">
                            {item['Correo Electrónico']}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : busquedaLimpia.length > 0 ? (
              <p className="text-center text-gray-600 mt-4">No se encontraron resultados</p>
            ) : null}
          </div>
        </div>
      );
      
    }
    
    export default Padron;