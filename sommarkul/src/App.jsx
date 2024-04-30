import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import  Frontpage from "../src/components/Frontpage"
import {ShowProducts} from './components/Products'
import  MenyChoices  from './components/MenyChoices'
import '../src/css/App.css';
import '../src/css/mediaQ.css';
import '../src/css/Form.css';
import '../src/css/Buttons.css';

import bild from "./data/img/bild.png"
import { Routes, Route } from 'react-router-dom';

function App() {
  const [showproducts, setShowproducts] = useState('');

  return (
    <div className="body">
      <Frontpage />
      <MenyChoices setShowproducts={setShowproducts} />
      <div className ="background-div "> 
        <img className="background-img" src={bild} alt="backgroundimg" />
      </div>
      <Routes>
        <Route path="/" element={<ShowProducts showproducts={showproducts} />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;