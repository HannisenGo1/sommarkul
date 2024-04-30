import React, { useState, useEffect } from 'react';
import { GetItem } from '../data/fireStore';
import kundvagn from '../data/img/kundvagn.png';
import search from '../data/img/search.png';
import saveInCartStore from '../data/cartStore';
import {CartCounter} from './Cartsite'
import { NavLink } from 'react-router-dom';
import addincart from '../data/img/addincart.png'



//tar in props från App.jsx 
const ShowProducts = ({ showproducts }) => {
	const [products, setProducts] = useState([]);
	const [searchProducts, setSearchProducts] = useState('');
	const [searchValue, setSearchValue] = useState('');
	
	// för att lägga in i item arrayen i cartstore
	const addToCart = saveInCartStore(state => state.addToCart)
	
	// hämta ifrån databasen
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
	
	// filtrera genom kategori / beroende på vad i alternativ meny,
	// parametern som hämtas ifrån app.jsx tom sträng från början
	const filterProducts = showproducts
	? products.filter(product => product.type === showproducts)
	: products;
	
	// filtrera produkterna vid sökning, kör map för att få ut dom 
	const searchForProducts = filterProducts.filter(product =>
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
		
		<input type="text" value={searchValue} onChange={handleSearchChange} placeholder='sök efter produkt här' />
		<button className="search-btn" onClick={handleSearchSubmit}>	
		<img src={search} className="searchicon" alt="search" />
		</button>
		</div>
		
		<div className="cart-div">
		
		<NavLink to="/Checkout" className="shoppingcart-btn"> 
		<img className="shoppingcart" src={kundvagn} alt="shoppingcart" />
		</NavLink>
		
		
		<div className='cart-counter-btn'> 
		<CartCounter />
		</div>
		</div>
		
		<div className="all-products-div">
		{searchForProducts.map(product => (
			<div className="productDiv" key={product.key}>
			<h3 className="productName">{product.name}</h3>
			
			
			<img src={product.imgurl} alt={product.name} 
			className="productImage" />
			
			<div className="put-in-cart-div">
			<img src={addincart} className="cart-btn" onClick={() => addToCart(product)}/>
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

