// import { set } from 'firebase/database';
import React, { useState, useEffect  } from 'react';
import { GetTypes } from '../data/fireStore';

// tar ifrån App.jsx och skickar med propset hit
const MenyChoices = ({ setShowproducts }) => {
	const [types, setTypes] = useState([])
	
	// hämta type listan från firestore
	useEffect(() => {
		async function fetchTypes() {
			try {
				const typeList = await GetTypes();
				setTypes(typeList);
			} catch (error) {
				console.error('Fel vid hämtning av typ:', error);
			}
		}
		fetchTypes();
	}, []);
	
	const handleShowAllProducts = () => {
		setShowproducts('');
	};
	
	const handleShowAllLek = () => {
		setShowproducts('lek');
	};
	
	const handleShowAllBad = () => {
		setShowproducts('bad');
	};
	
	return (
		<div className="meny-alternativ">
		<button className="show-all-products" onClick={handleShowAllProducts}>
		Alla produkter
		</button>
		<button className="show-all-lek" onClick={handleShowAllLek}>
		Lek
		</button>
		<button className="show-all-bad" onClick={handleShowAllBad}>
		Bad
		</button>
		</div>
	);
};

export default MenyChoices;

