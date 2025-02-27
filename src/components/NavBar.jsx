import React from 'react'
import { useState } from 'react'
import "./Style.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';

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
    {
      id: 4,
      href: "/Concurso",
      link: "Concurso",
    },
  ];
    return (
        <div className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-[#ffe7d1] drop-shadow-md">
          <h1 className="text-3xl font-bold">Logo</h1>
          <div className="hidden xl:flex items-center gap-12 font-semibold text-base">
            {links.map((l) => (
              <Link
                className="p-3 hover:bg-[#15171c] hover:text-[#ffe7d1] rounded-md transition-all "
                key={l.id}
                to={l.href}
              >
                {l.link}
              </Link>
            ))}
          </div>
    
          <IoMdMenu
            className="xl:hidden block text-5xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen, console.log(isMenuOpen))}
          />
          <div className={`absolute z-100 xl:hidden top-24 left-0 w-full bg-[#ffe7d1] flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
            style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
          >
             {links.map((l) => (
              <Link
                className="w-full text-center p-4 hover:bg-white transition-all cursor-pointer"
                key={l.id}
                to={l.href}
              >
                {l.link}
              </Link>
            ))}
          </div>
        </div>
      );
}

export default NavBar