
import '../src/css/App.css';
import '../src/css/mediaQ.css';
import '../src/css/Form.css';
import '../src/css/Buttons.css';
import  Frontpage from "../src/components/Frontpage"
import {ShowProducts} from './components/Products'
import  MenyChoices  from './components/MenyChoices'
import FormLogIn from '../src/components/FormLogIn'
//import { Router } from '../src/routes/router.jsx';
import bild from "./data/img/bild.png"
import { useState } from 'react';





function App() {
   const [showproducts, setShowproducts] = useState(''); 

  return (
    <>
<body style={{ position: 'relative', minHeight: '100vh' }}>
	<Frontpage />
	<MenyChoices setShowproducts={setShowproducts} />
	<div className ="background-div "> 
	<img className="background-img" src={bild} alt="backgroundimg" />
	</div>

	<ShowProducts showproducts={showproducts}/>
	
	
</body>
    </>
  )
}

export default App
