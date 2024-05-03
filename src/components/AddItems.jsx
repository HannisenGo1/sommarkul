import React, { useState } from 'react';
import { addProductWithImage, uploadImageToStorage } from '../data/fireStore';
import { ProductStore } from '../data/changeStore';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [information, setInformation] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState(null); 
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const setProducts = ProductStore(state => state.setProducts);
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validera att alla obligatoriska fält är ifyllda
        if (!name || !price || !information || !type || !image) {
            setErrorMessage('Alla fält måste fyllas i.');
            return;
        }

        try {
            const imageUrl = await uploadImageToStorage(image);
            const newProductData = { name, price, information, type, imgurl: imageUrl };

            await addProductWithImage(newProductData, image);

            setSuccessMessage('Produkten har lagts till');
            setErrorMessage('');
            resetForm();

        } catch (error) {
            console.error('Fel vid tillägg av ny produkt:', error);
            setErrorMessage('Kunde inte lägga till produkten. Försök igen senare.');
        }
    };

    const resetForm = () => {
        // Återställ fälten
        setName('');
        setPrice('');
        setInformation('');
        setType('');
        setImage(null);
        setErrorMessage('');
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            if (file.type === 'image/png' || file.type === 'image/jpeg') {
                setImage(file);
                setErrorMessage('');
            } else {
                setImage(null);
                setErrorMessage('Felaktigt filformat. Vänligen välj en PNG- eller JPEG-fil.');
            }
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <button className="addProductBtn" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Tillbaka' : 'Lägg till produkt'}
            </button>
            {showForm && (
                <div className="addProductDiv">
                    <h3>Registrera en ny produkt</h3>
                    <section className="inputSection">
                        <label>Namn</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </section>
                    <section className="inputSection">
                        <label>Pris</label>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </section>
                    <section className="inputSection">
                        <label>Information</label>
                        <input
                            type="text"
                            value={information}
                            onChange={(e) => setInformation(e.target.value)}
                        />
                    </section>
                    <section className="inputSection">
                        <label>Typ</label>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="">Välj en typ</option>
                            <option value="lek">Lek</option>
                            <option value="bad">Bad</option>
                        </select>
                    </section>
                    <section className="inputSection">
                        <label></label>
                        <input
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            onChange={handleImageChange}
                        />
                    </section>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
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
}

export default AddProduct;


