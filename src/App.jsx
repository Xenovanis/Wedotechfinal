import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Service from './Pages/ServicePage/Service';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/service' element={<Service/>}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
