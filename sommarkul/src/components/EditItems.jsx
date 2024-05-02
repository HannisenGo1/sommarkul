import { useState } from 'react';
import { editProduct } from '../data/crud.js';
import { ProductStore } from '../data/changeStore.js'; 

const EditProduct = ({ product, whenEditDone }) => {
    const [disableButton, setDisableButton] = useState(false);
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price); 
    const [information, setInformation] = useState(product.information); 
    const [type, setType] = useState(product.type); 
    const setProducts = ProductStore((state) => state.setProducts); 

    const handleSave = async () => {
        setDisableButton(true);
        const updatedProduct = { name, price, information, type }; 
        await editProduct(product.key, updatedProduct); 

        // Uppdatera den lokala produktlistan
        setProducts((prevProducts) =>
            prevProducts.map((p) =>
                p.key === product.key ? { ...p, ...updatedProduct } : p
            )
        );

        whenEditDone();
    };

	return (
		<>
			<section className="change-Info">
				<section className="name-change">
					<label>Name</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</section>
				<section className="price-change">
					<label>Price</label>
					<input
						type="text"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</section>
				<section className="info-change">
					<label>Information</label>
					<input
						type="text"
						value={information}
						onChange={(e) => setInformation(e.target.value)}
					/>
				</section>
				<section className="type-change">
					<label>Type</label>
					<input
						type="text"
						value={type}
						onChange={(e) => setType(e.target.value)}
					/>
				</section>
			</section>
			<button disabled={disableButton} onClick={handleSave}>
				💾
			</button>
		</>
	);
};

export default EditProduct;
