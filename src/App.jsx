import { useState } from "react";

import "./App.css";
import { Routes, Route} from 'react-router-dom';

import Layout from "./components/Layout/Layout";
import { Contact } from "./Pages";
import Home from "./components/Home/Home";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
