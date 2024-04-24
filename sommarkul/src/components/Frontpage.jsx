import sol from "../data/img/sol.png"
import FormLogIn from "./FormLogIn"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const Frontpage = () => {
	const [showLoginForm, setShowLoginForm] = useState(false);

const handleLoginButton = () => {
  console.log("Login button clicked");
  setShowLoginForm(!showLoginForm);
};

return ( 
	<> 
<div className='theHeader'> 
<img className="icon" src={sol} alt="Icon" />
		<h1> Sommarkul </h1> 
	</div>


{showLoginForm && <FormLogIn />}


<div className="footer"> 
<p className="adress"> Nissesgatan 14, Göteborg</p> 
<p className="kontakt"> Kontakt: nisse@sommarkul.se  0707000077</p>
<button className="iconLogInhide" onClick={handleLoginButton}>
  <img src={sol} className="iconLogIn" alt="Logga in" />
</button>

 


</div>

</>
	)
}

export { Frontpage}