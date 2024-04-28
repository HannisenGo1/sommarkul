import { set } from 'firebase/database';
import React, { useState, useEffect  } from 'react';
import { GetTypes } from '../data/fireStore';

// Alternativ menyn och sortering utav types för att få ut alla types beroende vad man trycker på! 

const MenyChoices = ({ setShowproducts }) => {
const [types, setTypes] = useState([])

// hämta typ listan
useEffect(() => {
    async function fetchTypes() {
      try {
        const typeList = await GetTypes();
        setTypes(typeList);
      } catch (error) {
        console.error('Fel vid hämtning av typer:', error);
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

