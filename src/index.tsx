import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from "../src/context/LanguageContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects.js";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js"
import ErrorPage from "./pages/Error404.js";
createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LanguageProvider>
   
      <BrowserRouter>
        <Routes>
         
          <Route path="/" element={<Home />} />
           <Route path="/Contact" element={<Contact />} />
           <Route path="/Projects" element={<Projects />} />
          {/* 404 Route - Always keep it last a DRARIi  */}
        <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
);
