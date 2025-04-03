import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Noticia from './components/Noticia';
import Noticias from './components/Noticias';
import Autoridades from './pages/Autoridades';
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
import Valores from './pages/Valores';
import NoticiasCorrales from './components/NoticiasCorrales';
import JuzgadosyJuecesdePaz from './pages/JuzgadosyJuecesdePaz';
import TramitesMatricula from './components/TramitesMatricula';
import HerramientasOnline from './pages/HerramientasOnline';
import ComisionJovenes from './pages/ComisionJovenes';
import AbodagoDeNiño from './pages/AbodagoDeNiño';
import ConvenioCasilleroNotificaciones from './pages/ConvenioCasilleroNotificaciones';
import Delegacion from './pages/Delegacion';




function App() {

  return (
    <>
      <Router>
      <ScrollTop/>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Autoridades" element={<Autoridades />} />
          <Route path="/SitiosdeInteres" element={<Enlaces/>} />
          <Route path="/Padron" element={<Padron/>} />
          <Route path="/ComisiondeJovenes" element={<ComisionJovenes/>} />
          <Route path="/Delegacion" element={<Delegacion/>} />
          <Route path="/Conveniocasillerosnotificaciones" element={<ConvenioCasilleroNotificaciones/>} />
          <Route path="/Herramientas" element={<HerramientasOnline/>} />
          <Route path="/Jurisprudencia" element={<Jurisprudencia/>} />
          <Route path="/ConveniosyBeneficios" element={<Convenio/>} />
          <Route path="/Valores" element={<Valores/>} />
          <Route path="/JuzgadosyJuecesdePaz" element={<JuzgadosyJuecesdePaz/>} />
          <Route path="/Registrodeabogadosdeniñosniñasyadolescentes" element={<AbodagoDeNiño/>} />
          <Route path="/RequisitosMatriculacion" element={<TramitesMatricula/>} />
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
