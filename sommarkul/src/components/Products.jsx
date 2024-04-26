import React, { useState, useEffect } from 'react';
import { GetItem } from '../data/fireStore';
import kundvagn from '../data/img/kundvagn.png'

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
	<>
		<div className="cart-div"> 
<img className="shoppingcart" src={kundvagn} alt="shoppingcart" />
		</div>


<div className="all-producs-div">
  {products.map(product => (
    <div className="productDiv" key={product.key} >
      <h3 className="productName">{product.name}</h3>

      <img src={product.imgurl} alt={product.name} className="productImage" />
	  <div className="put-in-cart-div"> 
	  <button className='cart-btn'> Lägg i kundvagn</button>
	  </div>

      <div className="priceWrapper"> 
          <p className="productPrice">Pris: {product.price}:-</p>
        </div>
      </div>
    
  ))}
</div>
</>
  );
};

export  {ShowProducts} ;
