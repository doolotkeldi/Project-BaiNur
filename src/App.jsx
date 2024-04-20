import { useState } from "react";
import "./App.css";
import { Routes, Route} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import { Contact } from "./Pages";
import Home from "./components/Home/Home";
import Registration from "./components/Registration/Registration";
import Corzina from "./components/Corzina/Corzina";
import CorzinaImage from "./components/Corzina/CorzinaImage";
import Cart from "./components/Cart/Cart";
import HomePage from "./Pages/HomePage";
import IzBran from "./components/IzBran/IzBran";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/corzina/:id" element={<Corzina />} />
          <Route path="/izbran" element={<IzBran />} />
        
        </Route>
          <Route path="/corzinaImage/:id" element={<CorzinaImage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
