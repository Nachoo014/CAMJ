import React from 'react'
import { useState } from 'react'
import "./Style.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';
import Logo from "../assets/LogoCAMJ.png";


function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const links = [
    {
      id: 1,
      href: "#",
      link: "Institucional",
      subMenu: [
        { id: 1, href: "/Autoridades", link: "Autoridades" },
        { id: 2, href: "/Delegacion", link: "Delegación" },
        { id: 3, href: "/ComisiondeJovenes", link: "Comisión de Jóvenes" },
        
      ],
    },
    {
      id: 2,
      href: "#",
      link: "Servicios",
      subMenu: [
        { id: 1, href: "/ConveniosyBeneficios", link: "Convenios y Beneficios" },
        { id: 2, href: "/Herramientas", link: "Herramientas Online" },
      ],
    },
    {
      id: 3,
      href: "/SitiosdeInteres",
      link: "Sitios de Interés",
    },
    {
      id: 4,
      href: "/Padron",
      link: "Padrón",
    },
  ];

  return (
    <div className="z-50 max-h-[90px] fixed top-0 w-screen flex justify-between items-center text-black py-6 md:px-32 bg-[#ffe7d1] drop-shadow-md">
      <a href="/">
        <img src={Logo} className="w-[80px] h-[80px]" alt="Logo" />
      </a>

      {/* Menú Desktop */}
      <div className="hidden xl:flex items-center gap-12 font-semibold text-base">
        {links.map((l) => (
          <div key={l.id} className="relative">
            {l.subMenu ? (
              <div>
                <button
                  className="p-3 hover:bg-[#15171c] hover:text-[#ffe7d1] rounded-md transition-all"
                  onClick={() => toggleSubMenu(l.link)}
                >
                  {l.link}
                </button>
                {openSubMenu === l.link && (
                  <div className="absolute left-0 mt-2 w-48 bg-[#ffe7d1] shadow-lg rounded-md">
                    {l.subMenu.map((sub) => (
                      <Link
                        key={sub.id}
                        to={sub.href}
                        className="block px-4 py-2 text-black hover:bg-white transition-all"
                        onClick={() => setOpenSubMenu(null)}
                      >
                        {sub.link}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                className="p-3 hover:bg-[#15171c] hover:text-[#ffe7d1] rounded-md transition-all"
                to={l.href}
              >
                {l.link}
              </Link>
            )}
          </div>
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
          <div key={l.id} className="w-full text-center">
            {l.subMenu ? (
              <div>
                <button
                  className="w-full p-4 hover:bg-white transition-all cursor-pointer"
                  onClick={() => toggleSubMenu(l.link)}
                >
                  {l.link}
                </button>
                {openSubMenu === l.link && (
                  <div className="bg-[#ffe7d1] shadow-md">
                    {l.subMenu.map((sub) => (
                      <Link
                        key={sub.id}
                        to={sub.href}
                        className="block px-4 py-2 hover:bg-white transition-all"
                        onClick={() => {
                          setOpenSubMenu(null);
                          setIsMenuOpen(false);
                        }}
                      >
                        {sub.link}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                className="block p-4 hover:bg-white transition-all cursor-pointer"
                to={l.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {l.link}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavBar;