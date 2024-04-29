import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/css/App.css';
import '../src/css/mediaQ.css';
import '../src/css/Form.css';
import '../src/css/index.css';
//import Footer from './components/Footer.jsx';
//import Frontpage from './components/Frontpage.jsx';

import '../src/data/img/bild.png'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
