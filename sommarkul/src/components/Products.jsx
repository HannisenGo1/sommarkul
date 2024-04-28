import React, { useState, useEffect } from 'react';
import { GetItem } from '../data/fireStore';
import kundvagn from '../data/img/kundvagn.png';
import search from '../data/img/search.png';
import saveInCartStore from '../data/cartStore';
import {CartCounter} from './Cartsite'


const ShowProducts = ({ showproducts }) => {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const addToCart = saveInCartStore(state => state.addToCart)

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

  const filteredProducts = showproducts
    ? products.filter(product => product.type === showproducts)
    : products;

  const searchForProducts = filteredProducts.filter(product =>
    product.name.toLowerCase().includes(searchProducts.toLowerCase())
  );

  // för att få ut värdet från vad användaren fyller i
  const handleSearchChange = event => {
    setSearchValue(event.target.value);
  };
 // Rendera efter att knappen trycks på 
  const handleSearchSubmit = () => {
	setSearchProducts(searchValue)
  }
  
  return (
    <>
      <div className="search-label">
        <p> Sök efter produkt</p>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
        <button className="search-btn" onClick={handleSearchSubmit}>
          <img src={search} className="searchicon" alt="search" />
        </button>
      </div>

      <div className="cart-div">
		
	<button className='shoppingcart-btn'> 
        <img className="shoppingcart" src={kundvagn} alt="shoppingcart" />
     
	 </button>
	 <div className='cart-counter-btn'> 
	 <CartCounter />
		</div>
      </div>

      <div className="all-products-div">
        {searchForProducts.map(product => (
          <div className="productDiv" key={product.key}>
            <h3 className="productName">{product.name}</h3>
            
            <img src={product.imgurl} alt={product.name} className="productImage" />
            <div className="put-in-cart-div">
              <button className="cart-btn" onClick={() => addToCart(product)}>Köp</button>
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

