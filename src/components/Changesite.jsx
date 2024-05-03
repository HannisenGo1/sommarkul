import React, { useState, useEffect } from 'react';
import { GetItem, addItems, deleteItems, editItems } from '../data/fireStore';
import AddProduct from './AddItems';
import EditProduct from './EditItems';
import DeleteButton from './DeleteItems';

const ChangeSite = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const productList = await GetItem();
            setProducts(productList);
        } catch (error) {
            console.error('Fel vid hämtning av produkter:', error);
        }
    };

    const handleEdit = (product) => {
        setIsEditing(true);
        setEditingProduct(product);
    };

    const handleEditDone = () => {
        setIsEditing(false);
        setEditingProduct(null);
    };

    const handleDelete = async (productId) => {
        try {
            await deleteItems(productId);
            fetchProducts(); 
        } catch (error) {
            console.error('Fel vid borttagning av produkt:', error);
        }
    };

    const handleUpdateProduct = async (editedProduct) => {
        try {
            await editItems(editedProduct.key, editedProduct);
            setIsEditing(false);
            fetchProducts(); // Uppdatera produkterna efter att ha redigerat en produkt
        } catch (error) {
            console.error('Fel vid uppdatering av produkt:', error);
        }
    };

    const handleAddProduct = async (newProduct, event) => {
        try {
            event.preventDefault();
            if (!newProduct.name || !newProduct.price || !newProduct.information || !newProduct.type || !newProduct.image || !newProduct.imgurl) {
                console.error('Alla fält måste fyllas i.');
                return;
            }

            await addItems(newProduct);
            fetchProducts(); 
        } catch (error) {
            console.error('Fel vid tillägg av ny produkt:', error);
        }
    };

    return (
        <>
            <h2 className="textadminvy">Administratör vyn</h2>
            <div className="AddNewDiv">
                <AddProduct setProducts={handleAddProduct} />
            </div>
            <div className="all-products-div">
                {products.map((product, index) => (
                    <div className="productDiv" key={index}>
                        <h3 className="productName">{product.name}</h3>
                        <img src={product.imgurl} alt={product.name} className="productImage" />
                        <div className="priceWrapper">
                            <p className="productPrice">Pris: {product.price}:-</p>
                            <button className="editbtn" onClick={() => handleEdit(product)}>Redigera</button>
                            <DeleteButton productKey={product.key} onDelete={() => handleDelete(product.key)} />
                        </div>
                    </div>
                ))}
            </div>
            {isEditing && (
                <EditProduct product={editingProduct} onUpdateProduct={handleUpdateProduct} onCancelEdit={handleEditDone} />
            )}
        </>
    );
};

export default ChangeSite;


