
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./components/Home";



import './App.css'
import NavbarArea from "./shared/NavbarArea";

function App() {
  

  return (
    <>
    <BrowserRouter>
      <NavbarArea />
      <Routes>
        <Route path="/" element={<Home/>} />
        
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
