import React from 'react'
import { useState } from 'react'
import "./Style.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';
import Logo from "../assets/LogoCAMJ.png";


function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    {
      id: 1,
      href: "/Directorio",
      link: "Directorio",
    },
    {
      id: 2,
      href: "/Noticias",
      link: "Noticias",
    },
    {
      id: 3,
      href: "/Links",
      link: "Links",
    },
  ];
  return (
    <div className="z-50 w-[100%] max-h-[90px] fixed top-0 max-w-[1440px] flex justify-between items-center text-black py-6 md:px-32 bg-[#ffe7d1] drop-shadow-md">
      <a href="/"><img src={Logo} className='w-[80px] h-[80px]' alt="" /></a>
  
      {/* Menú Desktop */}
      <div className="hidden xl:flex items-center gap-12 font-semibold text-base">
        {links.map((l) => (
          <Link
            className="p-3 hover:bg-[#15171c] hover:text-[#ffe7d1] rounded-md transition-all"
            key={l.id}
            to={l.href}
          >
            {l.link}
          </Link>
        ))}
      </div>
  
      {/* Botón Menú Móvil */}
      <IoMdMenu
        className="xl:hidden block text-5xl cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
  
      {/* Menú Móvil */}
      <div
        className={`absolute top-24 left-0 w-full bg-[#ffe7d1] flex flex-col items-center gap-6 font-semibold text-lg transition-transform z-50 
        ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full hidden"}`}
      >
        {links.map((l) => (
          <Link
            className="w-full text-center p-4 hover:bg-white transition-all cursor-pointer"
            key={l.id}
            to={l.href}
            onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic
          >
            {l.link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar