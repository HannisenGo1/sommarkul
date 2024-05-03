import { ProductStore } from '../data/changeStore';
import { addItems, deleteItems, editItems, GetItem } from "../data/fireStore";

const addProduct = async (newProductData) => {
    try {
        await addItems(newProductData);
        console.log('Ny produkt tillagd');
        const products = await GetItem(); 
        ProductStore.getState().setProducts(products); 
    } catch (error) {
        console.error('Fel vid tillägg av ny produkt:', error);
    }
};

const editProduct = async (productId, updatedProductData) => {
    try {
        await editItems(productId, updatedProductData); 
        console.log('Produkt uppdaterad:', productId);
        const products = await GetItem();
        ProductStore.getState().setProducts(products); 
    } catch (error) {
        console.error('Fel vid uppdatering av produkt:', error);
    }
};

const deleteProduct = async (productId) => {
    try {
        await deleteItems(productId);
        console.log('Produkt borttagen:', productId);
        const products = await GetItem(); 
        ProductStore.getState().setProducts(products); 
    } catch (error) {
        console.error('Fel vid borttagning av produkt:', error);
    }
};

export { addProduct, editProduct, deleteProduct };





