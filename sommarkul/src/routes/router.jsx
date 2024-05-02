import { createHashRouter } from "react-router-dom";
import React from "react";
import CheckoutCart from "../components/CheckoutCart";
import  ProtectedRoute from './ProtectedRoute';
import App from "../App";
import ChangeSite from '../components/Changesite'

//path till ändra sidan, med element: <ProtectedRoute><Changesite/></ProtectedRoute>


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/Checkout",
		element: <CheckoutCart />
      },
	  {
        path: "/ChangeMeny",
        element: <ProtectedRoute><ChangeSite/></ProtectedRoute>,
      },
    ],
  },
]);

export { router };


