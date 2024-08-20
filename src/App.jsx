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


function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/location' element={<Location />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
