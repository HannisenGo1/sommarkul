import React, { useState, useEffect } from 'react';
import { GetItem } from '../data/fireStore';

const ShowProducts = () => {
  const [products, setProducts] = useState([]); // State för att lagra produkterna

  useEffect(() => {
   
    async function fetchProducts() {
      try {
        const productList = await GetItem(); 
        setProducts(productList); 
      } catch (error) {
        console.error('Fel vid hämtning av produkter:', error);
      }
    }
    fetchProducts(); // Anropa funktionen för att hämta produkterna
  }, []);

  return (
<div>
  {products.map(product => (
    <div className="productDiv" key={product.key}>
      <h3>{product.name}</h3>
      
      <img src={product.imgurl} alt={product.name} style={{ width: '100px' }} />
	  <p>Pris: {product.price}</p>
	  <p> {product.type}</p>
    </div>
  ))}
</div>
  );
};

export  {ShowProducts} ;
