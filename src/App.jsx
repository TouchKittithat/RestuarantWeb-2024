import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components && pages
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Location from './pages/Location';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';


function App() {
  
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/location' element={<Location />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
