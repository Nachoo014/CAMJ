import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Noticia from './components/Noticia';
import Noticias from './components/Noticias';
import Directorio from './pages/Directorio';
import Inicio from './pages/Inicio';
import './App.css'
import NavBar from './components/NavBar';
import ScrollTop from './components/ScrollTop';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <Router>
      <ScrollTop/>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Directorio" element={<Directorio />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:id" element={<Noticia />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
        <Footer></Footer>
    </Router>
    </>
  )
}

export default App
