import React from 'react';
import { deleteProduct } from '../data/crud.js';

const DeleteButton = ({ productKey }) => {
    const handleDelete = async () => {
        try {
            await deleteProduct(productKey);
            console.log('Produkt borttagen med key:', productKey);
        } catch (error) {
            console.error('Fel vid borttagning av produkt:', error);
        }
    };

    return (
        <button className="deletebtn" onClick={handleDelete}>
            Ta bort
        </button>
    );
};

export default DeleteButton;