import sol from "../data/img/sol.png"
import FormLogIn from "./FormLogIn"
//import { NavLink } from "react-router-dom"
import { useState } from "react"
import Footer from "./Footer"

const Frontpage = () => {
	const [showLoginForm, setShowLoginForm] = useState(false);

const handleLoginButton = () => {
  console.log("Login button clicked");
  setShowLoginForm(!showLoginForm);
};

return ( 
	<>  
<div className='theHeader'> 

		<h1 className="rubrik"><img className="icon" src={sol} alt="Icon" /> Sommar lek </h1> 
	</div>


{showLoginForm && <FormLogIn />}


<Footer handleLoginButton={handleLoginButton} /> 


</>
)
}

export { Frontpage}