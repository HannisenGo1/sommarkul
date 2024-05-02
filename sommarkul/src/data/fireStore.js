import { collection, getDocs, addDoc, deleteDoc, setDoc, doc} from 'firebase/firestore/lite';
import { db } from './fire.js';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const storage = getStorage();

async function uploadImageToStorage(imgurl) {
    try {
        
        const storageRef = ref(storage, `images/${imgurl}`);
        
       
        await uploadBytes(storageRef, imgurl);

        // Hämta länken till den uppladdade bilden
        const downloadURL = await getDownloadURL(storageRef);

        return downloadURL;
    } catch (error) {
        console.error('Fel vid uppladdning av bild till Firebase Storage:', error);
        throw error;
    }
}

export { uploadImageToStorage };
// Hämta datan ifrån firestore
const collectionName = 'item';
const collectionRef = collection(db, collectionName);

async function GetItem() {
	const nameCollection = collection(db, collectionName);
	const nameSnapshot = await getDocs(nameCollection);
	const itemList = nameSnapshot.docs.map(doc => withKey(doc));
	console.log('Item: snapshot is', nameSnapshot);
	return itemList;
}

function withKey(doc) {
	let o = doc.data();
	o.key = doc.id; 
	return o;
}


async function GetTypes() {
	const nameCollection = collection(db, collectionName);
	const nameSnapshot = await getDocs(nameCollection);
	const types = nameSnapshot.docs.map(doc => doc.data().type);
	return types
}
async function addItems(item) {
const collectionRef = collection(db, 'item');
    await addDoc(collectionRef, item);
}

async function deleteItems(key) {
	const docRef = doc(collectionRef, key)
	console.log("deleteItems :: ", key)
	deleteDoc(docRef)
}
async function editItems(key, updatedItems) {
	const docRef = doc(collectionRef, key)
	await setDoc(docRef, updatedItems)
}


export { GetItem,  GetTypes, addItems, deleteItems, editItems };
