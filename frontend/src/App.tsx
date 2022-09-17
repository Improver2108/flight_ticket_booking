import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Index from './pages/Index/Index'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Layout from './pages/Layout/Layout';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>          
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="index" element={<Index />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
