import { collection, getDocs, addDoc} from 'firebase/firestore/lite';
// , deleteDoc, updateDoc, doc 
import { db } from './fire.js';

// Hämta datan ifrån firestore
const collectionName = 'item';
const collectionRef = collection(db, collectionName);

async function GetItem() {
	const NameCollection = collection(db, collectionName);
	const NameSnapshot = await getDocs(NameCollection);
	
	const itemList = NameSnapshot.docs.map(doc => withKey(doc));
	console.log('Item: snapshot is', NameSnapshot);
	return itemList;
}

function withKey(doc) {
	let o = doc.data();
	o.key = doc.id; 
	return o;
}


async function GetTypes() {
	const NameCollection = collection(db, collectionName);
	const NameSnapshot = await getDocs(NameCollection);
	
	const types = NameSnapshot.docs.map(doc => doc.data().type);
	return types
}



export { GetItem,  GetTypes };
