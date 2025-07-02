import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/HomePage/Home"
import Service from "./Pages/ServicePage/Service"
import Contact from "./Pages/Contact/Contact"
import { Projects } from "./Pages/ProjectsPage/Projects"
import ErrorPage from "./Pages/ErrorPage/ErrorPage"

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      
    </BrowserRouter>
  )
}

export default App
