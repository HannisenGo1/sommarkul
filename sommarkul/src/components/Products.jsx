import React, { useState, useEffect } from 'react';
import { GetItem } from '../data/fireStore';
import kundvagn from '../data/img/kundvagn.png';
import search from '../data/img/search.png';

const ShowProducts = ({showproducts}) => {
  const [products, setProducts] = useState([]);
 
 // hämta ut Getitems genom fetchProducts funktionen 
 
  useEffect(() => {
    async function fetchProducts() {
      try {
        const productList = await GetItem();
        setProducts(productList);
      } catch (error) {
        console.error('Fel vid hämtning av produkter:', error);
      }
    }
    fetchProducts();
  }, []);

  // Filtrera produkter efter vald typ
  const Products = showproducts ? products.filter(product => product.type === showproducts) : products;
  

  return (
    <>
      <div className="search-label">
        <p> Sök efter produkt</p>
        <label> </label>
        <input />
        <button className="search-btn">
          {' '}
          <img src={search} className="searchicon" alt="search" />
        </button>
      </div>

      <div className="cart-div">
        <img className="shoppingcart" src={kundvagn} alt="shoppingcart" />
      </div>

      <div className="all-products-div">
        {Products.map(product => (
          <div className="productDiv" key={product.key}>
            <h3 className="productName">{product.name}</h3>
            <p> {product.type}</p>
            <img src={product.imgurl} alt={product.name} className="productImage" />
            <div className="put-in-cart-div">
              <button className="cart-btn"> Lägg i kundvagn</button>
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

export { ShowProducts };

