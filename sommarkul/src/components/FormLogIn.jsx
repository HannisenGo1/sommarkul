import { useState } from "react";
import ValidationInlog from './ValidationLogIn'
import { useNavigate } from "react-router-dom";

const FormLogIn = ({ handleBackBtn }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [userError, setUserError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();
	
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
		setIsLoggedIn(true);
		if (!isFormValid()) {
			console.log("Formuläret är inte utfört korrekt");
			return;
		}
		
		const isLoggedIn = ValidationInlog.getState().login(username, password);
		if (isLoggedIn) {
			navigate('/ChangeMeny');
		} else {
		}
	};
	
	// Returnera null om användaren är inloggad
	if (isLoggedIn) {
		return null;
	}
	
	return (
		<>
		<div className="LogInForm">
		<button className="backBtn" onClick={handleBackBtn}> Tillbaka</button>
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
		<button className="LogInBtn" onClick={handleLogIn}> Logga in </button>
		</div>
		</>
	);
};

export default FormLogIn;


