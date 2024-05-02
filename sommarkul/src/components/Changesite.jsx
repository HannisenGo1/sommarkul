import React, { useState, useEffect } from 'react';
import { GetItem } from '../data/fireStore';
import AddProduct from './AddItems';
import EditProduct from './EditItems';
import DeleteButton from './DeleteItems';

const ChangeSite = () => {
	const [products, setProducts] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [editingProduct, setEditingProduct] = useState(null);
	
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
	
	const handleEdit = (product) => {
		setIsEditing(true);
		setEditingProduct(product);
	};
	
	const handleEditDone = () => {
		setIsEditing(false);
		setEditingProduct(null);
	};
	const handleAddProduct = (newProduct) => {
		const newProductWithKey = { ...newProduct, key: generateUniqueId() };
		console.log('New product with ID:', newProductWithKey);
		setProducts([...products, newProductWithKey]);
	};
	let idCounter = 0;
	
	const generateUniqueId = () => {
		idCounter++;
		const newId = 'id' + idCounter;
		console.log('Generated ID:', newId); 
		return newId;
	};
	const handleDelete = async (productId) => {
    try {
        await deleteProduct(productId);
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
    } catch (error) {
        console.error('Fel vid borttagning av produkt:', error);
    }
};
	
	
	return (
		<>
		<h2 className="textadminvy"> Administratör vyn </h2>
		<div className="AddNewDiv">
		
		<AddProduct setProducts={handleAddProduct} />
		</div>
		<div className="all-products-div">
		{products.map((product) => (
			<div className="productDiv" key={product.id}>
			<h3 className="productName">{product.name}</h3>
			<img src={product.imgurl} alt={product.name} className="productImage" />
			<div className="priceWrapper">
			<p className="productPrice">Pris: {product.price}:-</p>
			<button className="editbtn" onClick={() => handleEdit(product)}> Redigera</button>
			<DeleteButton productKey={product.key} onDelete={handleDelete} />
			</div>
			</div>
		))}
		</div>
		{isEditing && (
			<EditProduct product={editingProduct} whenEditDone={handleEditDone} />
		)}
		</>
	);
};

export default ChangeSite;
