import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Navbar from './pages/Navbar'
import Services from './pages/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
