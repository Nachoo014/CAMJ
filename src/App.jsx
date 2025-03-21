import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Noticia from './components/Noticia';
import Noticias from './components/Noticias';
import Institucional from './pages/Institucional';
import Inicio from './pages/Inicio';
import './App.css'
import NavBar from './components/NavBar';
import ScrollTop from './components/ScrollTop';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Enlaces from './pages/Enlaces';
import Padron from './pages/Padron';
import Jurisprudencia from './pages/Jurisprudencia';
import Requisitosparamatricularse from './pages/Requisitosparamatricularse';
import AfiliarseCajaAbogados from './pages/AfiliarseCajaAbogados';
import ReqMatriculaTransitoria from './pages/ReqMatriculaTransitoria';
import Solicitudcertificadodematricula from './pages/Solicitudcertificadodematricula';
import Convenio from './pages/Convenio';
import ValorAportes from './pages/ValorAportes';
import NoticiasCorrales from './components/NoticiasCorrales';
import JuzgadosyJuecesdePaz from './pages/JuzgadosyJuecesdePaz';






function App() {

  return (
    <>
      <Router>
      <ScrollTop/>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Institucional" element={<Institucional />} />
          <Route path="/Links" element={<Enlaces/>} />
          <Route path="/Padron" element={<Padron/>} />
          <Route path="/Jurisprudencia" element={<Jurisprudencia/>} />
          <Route path="/ConveniosyBeneficios" element={<Convenio/>} />
          <Route path="/ValorDelAporte" element={<ValorAportes/>} />
          <Route path="/JuzgadosyJuecesdePaz" element={<JuzgadosyJuecesdePaz/>} />
          <Route path="/RequisitosparaMatriculaTransitoria" element={<ReqMatriculaTransitoria/>} />
          <Route path="/Requisitosparamatricularse" element={<Requisitosparamatricularse/>} />
          <Route path="/AfiliarsealaCajadeAbogados" element={<AfiliarseCajaAbogados/>} />
          <Route path="/Solicitudcertificadodematricula" element={<Solicitudcertificadodematricula/>} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:id" element={<Noticia />} />
          <Route path="/DelegacionCorral/:id" element={<NoticiasCorrales />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
        <Footer></Footer>
    </Router>
    </>
  )
}

export default App
