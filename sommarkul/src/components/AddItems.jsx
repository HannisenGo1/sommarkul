import React, { useState } from 'react';
import { addItems, GetItem } from '../data/fireStore';
import { ProductStore } from '../data/changeStore';
import { uploadImageToStorage } from '../data/fireStore';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [information, setInformation] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState(null); 
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
	const [showForm, setShowForm] = useState(false);
const setProducts = ProductStore(state => state.setProducts)


const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();

    try {
        
        const imageUrl = await uploadImageToStorage(image);

        
        const newProductData = { name, price, information, type, image: imageUrl };
        console.log('kommer datan in', newProductData);


        await addItems(newProductData);
        console.log('Produkten har lagts till i Firestore');

      
        ProductStore.getState().addProduct(newProductData);

        // Återställ fälten
        setName('');
        setPrice('');
        setInformation('');
        setType('');
        setImage(null);

        console.log('Produkten har lagts till i tillståndsbutiken');
    } catch (error) {
        console.error('Fel vid tillägg av ny produkt:', error);
        setErrorMessage('Kunde inte lägga till produkten. Försök igen senare.');
    } finally {
        setIsLoading(false);
    }
};


    
    
    const handleImageChange = (event) => {
        const file = event.target.files[0];
       
        if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
            setImage(file);
        } else {
            setImage(null);

        }
    };
    
    return (
        <form className="form" onSubmit={handleSubmit}>
            <button className="addProductBtn" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Dölj formulär' : 'Lägg till produkt'}
            </button>

            {showForm && (
                <div className="addProductDiv">
                    <h3>Registrera en ny produkt</h3>
                    <section className="column">
                        <label>Namn</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </section>
                    <section className="column">
                        <label>Pris</label>
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
                        <label>Typ</label>
                        <input
                            type="text"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </section>
                    <section className="column">
                        <label>Bild</label>
                        <input
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            onChange={handleImageChange}
                        />
                    </section>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <button
                        disabled={isLoading || !image}
                        type="submit"
                    >
                        Registrera produkt
                    </button>
                </div>
            )}
        </form>
    );
};

export default AddProduct;
