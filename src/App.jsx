import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Noticia from './components/Noticia';
import Noticias from './components/Noticias';
import Inicio from './pages/Inicio';
import './App.css'
import NavBar from './components/NavBar';
function App() {

  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/noticias/:id" element={<Noticias />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
