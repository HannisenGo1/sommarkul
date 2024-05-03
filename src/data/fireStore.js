import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore/lite';
import { db } from './fire.js';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const storage = getStorage();

async function uploadImageToStorage(file) {
    try {
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);

        // Hämta länken till den uppladdade bilden
        const downloadURL = await getDownloadURL(storageRef);

        return downloadURL;
    } catch (error) {
        console.error('Fel vid uppladdning av bild till Firebase Storage:', error);
        throw error;
    }
}

async function addProductWithImage(productData, imageFile) {
    try {
        const imageURL = await uploadImageToStorage(imageFile);
        const productWithImage = { ...productData, imgurl: imageURL };
        await addDoc(collection(db, 'item'), productWithImage);
        console.log('Produkt med bild har lagts till i Firestore');

        // Hämta den uppdaterade listan av produkter
        const updatedItemList = await GetItem();
        return updatedItemList;
    } catch (error) {
        console.error('Fel vid tillägg av ny produkt med bild:', error);
        throw error;
    }
}

async function GetItem() {
    try {
        const nameCollection = collection(db, 'item');
        const nameSnapshot = await getDocs(nameCollection);
        const itemList = nameSnapshot.docs.map(doc => withKey(doc));
        console.log('Item: snapshot is', nameSnapshot);
        return itemList;
    } catch (error) {
        console.error('Fel vid hämtning av produkter:', error);
        return [];
    }
}

function withKey(doc) {
    let o = doc.data();
    o.key = doc.id; 
    return o;
}

async function addItems(item) {
    try {
        const collectionRef = collection(db, 'item');
        await addDoc(collectionRef, item);

        // Hämta den uppdaterade listan av produkter
        const updatedItemList = await GetItem();
        return updatedItemList;
    } catch (error) {
        console.error('Fel vid tillägg av ny produkt:', error);
        throw error;
    }
}

async function deleteItems(key) {
    try {
        const docRef = doc(collection(db, 'item'), key);
        await deleteDoc(docRef);

        // Hämta den uppdaterade listan av produkter
        const updatedItemList = await GetItem();
        return updatedItemList;
    } catch (error) {
        console.error('Fel vid borttagning av produkt:', error);
        throw error;
    }
}

async function editItems(key, updatedItems) {
    try {
        const docRef = doc(collection(db, 'item'), key);
        await updateDoc(docRef, updatedItems);

        // Hämta den uppdaterade listan av produkter
        const updatedItemList = await GetItem();
        return updatedItemList;
    } catch (error) {
        console.error('Fel vid uppdatering av produkt:', error);
        throw error;
    }
}
async function GetTypes() {
	const nameCollection = collection(db, 'item');
	const nameSnapshot = await getDocs(nameCollection);
	const types = nameSnapshot.docs.map(doc => doc.data().type);
	return types
}

export { uploadImageToStorage, addProductWithImage, GetItem, addItems, deleteItems, editItems, GetTypes };





