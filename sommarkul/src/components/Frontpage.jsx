import React, { useState } from "react";
import sol from "../data/img/sol.png";
import FormLogIn from "./FormLogIn";


const Frontpage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginBtn = () =>{
	console.log('knappen trycks på', handleLoginBtn)
	setShowLoginForm(true)

  }
  const handleBackBtn = () => {
	setShowLoginForm(false)
  }

  return (
    <>
      <div className='theHeader'> 
        <h1 className="rubrik">
          <img className="icon" src={sol} alt="Icon" /> Sommar lek
        </h1> 
      </div>

     {showLoginForm && <FormLogIn handleBackBtn={handleBackBtn} />}
	  
      <footer className="footer">
      <p className="adress">Nissesgatan 14, Göteborg</p>
      <p className="kontakt">Kontakt: nisse@sommarkul.se 0707000077</p>
      <button className="iconLogInhide" onClick={handleLoginBtn}>
        <img src={sol} className="iconLogIn" alt="Logga in" />
      </button>
    </footer>
    </>
  );
};

export default Frontpage;