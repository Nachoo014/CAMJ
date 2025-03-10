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
import Enlaces from './pages/Enlaces';
import Padron from './pages/Padron';
import Jurisprudencia from './pages/Jurisprudencia';
function App() {

  return (
    <>
      <Router>
      <ScrollTop/>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Directorio" element={<Directorio />} />
          <Route path="/Links" element={<Enlaces/>} />
          <Route path="/Padron" element={<Padron/>} />
          <Route path="/Jurisprudencia" element={<Jurisprudencia/>} />
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
