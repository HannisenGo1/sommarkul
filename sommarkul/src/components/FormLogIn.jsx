import { useState } from "react";

const FormLogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isValidUser = (username) => {
    return username.length > 0 && username.includes("admin");
  };

  const isFormValid = () => {
    let isValid = true;

    if (!isValidUser(username)) {
      setUserError("Felaktigt användarnamn");
      isValid = false;
    } else {
      setUserError("");
    }
    if (password === "") {
      setPasswordError("Felaktigt lösenord");
      isValid = false;
    } else {
      setPasswordError("");
    }
    return isValid;
  };

  const handleLogIn = () => {
    console.log("knappen trycktes på");
    if (!isFormValid()) {
      console.log("Formuläret är inte utfört korrekt");
      return;
    }
    if (password !== "password") {
      setPasswordError("Felaktigt lösenord");
      return;
    }
    console.log("Lyckades med inloggning");
    //  navigate('/ChangeMeny')
  };

  return (
    <>
	<button className="backBtn"> Tillbaka</button>
      <div className="LogInForm">
        <label> Användarnamn </label>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          type="username"
        />
        {userError && <span className="error-msg">{userError}</span>}

        <label> Lösenord </label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
		
        {passwordError && <span className="error-msg">{passwordError}</span>}
        <button className="LogInBtn" onClick={handleLogIn}>
          Logga in
        </button>
      </div>
    </>
  );
};

export default FormLogIn;

