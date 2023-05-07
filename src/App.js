
import React from 'react';
import './App.css';
import Home from './Pages/home';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Contato from './Pages/contato/contato';
import Fotografia from './Pages/fotos/foto';
import Detalhes from './Pages/detalhes/detalhes';
import Comentario from './Pages/comentário/comentario';




function App() {

    
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contato' element={<Contato/>} />
      <Route path='/foto' element={<Fotografia/>} />
      <Route path='/comentario' element={<Comentario/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
