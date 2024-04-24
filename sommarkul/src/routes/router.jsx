import { createHashRouter } from "react-router-dom";
//import { ProtectedRoute } from './ProtectedRoute';
import App from "./App";
import FormLogIn from "./components/FormLogIn";
//path till ändra sidan, med element: <ProtectedRoute><ändrasidan /></ProtectedRoute>

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      {
        
      },
    ],
  },
]);

export { router };


