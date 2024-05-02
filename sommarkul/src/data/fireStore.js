import { collection, getDocs, addDoc, deleteDoc, setDoc, doc} from 'firebase/firestore/lite';
import { db } from './fire.js';

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
	await addDoc(collectionRef, item)
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
