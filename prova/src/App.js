import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

  //gerenciador de rotas
import {BrowserRouter, Route, Routes} from 'react-router-dom'


import Login from './pages/Login';
import Produtos from './pages/Produtos';
import RegistroProduto from './pages/RegistroProduto';
import NavBarra from "./components/NavBarra"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/produtos' element={<Produtos />} />
      <Route path='/RegistroProduto' element={<RegistroProduto />}/>
      <Route path='/login' element={<Login />}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
