import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//import FormLogIn from '../components/FormLogIn'
import ValidationInlog from '../components/ValidationLogIn';



const ProtectedRoute = ({ children }) => {
 const isLoggedIn = ValidationInlog.isLoggedIn(state => state.isLoggedIn);
 // sidan för att ändra sedan change
  const navigate = useNavigate();

  useEffect(() => { 
	console.log("isLoggedIn:", isLoggedIn);
  if (!isLoggedIn) {
    navigate('/login');
	console.log("Redirecting to login page...");
  } 
  }, [isLoggedIn, navigate]);
  return isLoggedIn ? children : null;
};



export default ProtectedRoute