import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import {Routes, Route, useNavigate, Link } from 'react-router';
import Info from './pages/Info'

function App() {
  
  let navigate = useNavigate();

  return (
    <>
      <div>
        <button onClick={()=>{ navigate("/") }}>Main</button>
        <button onClick={()=>{ navigate("/info")}}>/info</button>
        <button onClick={()=>{ navigate("/mypage")}}>/mypage</button>
        {/* <button onClick={()=>{ navigate("/cart")}}>/cart</button> */}
        <button><Link to="/cart">/cart</Link></button>
      </div>

      <Routes>
        <Route path="/" element={ <div style={{backgroundColor:'lightgray'}}><h1>Main 공간 </h1></div>} />
        <Route path="/info" element={ <Info/> } />
        <Route path="/mypage" element={<div><h1>마이페이지 공간</h1></div>} />
        <Route path="/cart" element={<div><h1>cart공간</h1></div>} />
      </Routes>
    </>
  )
}

export default App
