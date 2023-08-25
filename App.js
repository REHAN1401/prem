import { Routes, Route } from "react-router-dom"
import React from 'react'
import Home from "./Home";
import PaymentForm from "./components/PaymentForm";
import Premium from "./components/Premium";
function App() {
  return (  
    <div>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/premium" element={ <Premium/> } />
        <Route path="/payment" element={ <PaymentForm/> } />
         
      </Routes>
      </div>
  );
}

export default App;