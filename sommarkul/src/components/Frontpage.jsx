import React, { useState } from "react";
import sol from "../data/img/sol.png";
import FormLogIn from "./FormLogIn";
import Footer from "./Footer";

const Frontpage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginBtn = () =>{
	setShowLoginForm(true)
  }

  return (
    <>
      <div className='theHeader'> 
        <h1 className="rubrik">
          <img className="icon" src={sol} alt="Icon" /> Sommar lek
        </h1> 
      </div>

      {showLoginForm && <FormLogIn />}
	  
      <Footer handleLoginBtn={handleLoginBtn}/>
    </>
  );
};

export default Frontpage;