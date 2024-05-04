import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import '../src/css/App.css';
import '../src/css/mediaQ.css';
import '../src/css/Form.css';
import '../src/css/index.css';

import { RouterProvider } from "react-router-dom";
import  {router}  from "./routes/router.jsx";

import '../src/data/img/bild.png'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
