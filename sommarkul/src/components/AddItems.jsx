 import { useState } from 'react';
 import { addItems, GetItem } from '../data/fireStore';
 
 const AddProduct = ({ setProducts }) => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [information, setInformation] = useState('');
	const [type, setType] = useState('');
	const [image, setImage] = useState(null); 
	const [isLoading, setIsLoading] = useState(false);
	const [showForm, setShowForm] = useState(false); 
	
	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		
		const newProductData = { name, price, information, type, image };
		
		try {
			await addItems(newProductData);
			const updatedProducts = await GetItem();
			setProducts(updatedProducts);
			// Återställa fälten efter att produkten har lagts till
			setName('');
			setPrice('');
			setInformation('');
			setType('');
			setImage(null);
			
			setShowForm(false);
		} catch (error) {
			console.error('Fel vid tillägg av ny produkt:', error);
		} finally {
			setIsLoading(false);
		}
	};
	
	// Funktion för att hantera filuppladdning
	const handleImageChange = (event) => {
		const file = event.target.files[0];
		// Kontrollera att filen är i formatet png eller jpg
		if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
			setImage(file);
		} 
	};
	
	return (
		<section>
		<button onClick={() => setShowForm(true)}>Lägg till produkt</button>
		{showForm && (
			<form className="form">
			<h3>Register a new product</h3>
			<section className="column">
			<label>Name</label>
			<input
			type="text"
			value={name}
			onChange={(e) => setName(e.target.value)}
			/>
			</section>
			<section className="column">
			<label>Price</label>
			<input
			type="text"
			value={price}
			onChange={(e) => setPrice(e.target.value)}
			/>
			</section>
			<section className="column">
			<label>Information</label>
			<input
			type="text"
			value={information}
			onChange={(e) => setInformation(e.target.value)}
			/>
			</section>
			<section className="column">
			<label>Type</label>
			<input
			type="text"
			value={type}
			onChange={(e) => setType(e.target.value)}
			/>
			</section>
			<section className="column">
			<label>Image</label>
			<input
			type="file"
			accept=".png, .jpg, .jpeg"
			onChange={handleImageChange}
			/>
			</section>
			<button
			disabled={isLoading}
			onClick={handleSubmit}
			type="submit"
			>
			Registrera produkt
			</button>
			</form>
		)}
		</section>
	);
};

export default AddProduct;