import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/home';
import Exercise1 from './Pages/exercise1'
import Exercise2 from './Pages/exercise2';


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='Exercise1' exact element={<Exercise1/>}/>
          <Route path='Exercise2' exact element={<Exercise2/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
