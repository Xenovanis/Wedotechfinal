import { useState } from 'react'
import Home from './Pages/HomePage/Home'
import Navbar from './Components/NavBar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
  <div className="flixed top-0 -z-10 h-full w-full"></div>
  <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

  <div className='container mx-auto px-8'></div>
        <Navbar/>
        
<Home></Home> 
      
    </div>
  )
}

export default App
