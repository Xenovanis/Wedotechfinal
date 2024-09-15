import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Service from './Pages/ServicePage/Service';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;