import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import  Frontpage from "../components/Frontpage"
import {ShowProducts} from '../components/Products'
import  MenyChoices  from '../components/MenyChoices'
import '../css/App.css';
import '../css/mediaQ.css';
import '../css/Form.css';
import '../css/Buttons.css';

import bild from "../data/img/bild.png"
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