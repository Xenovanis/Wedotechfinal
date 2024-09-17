import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Service from './Pages/ServicePage/Service';
import Contact from './Pages/Contact/Contact'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;