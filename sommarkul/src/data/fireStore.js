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

//async function addItems(item) {
	// referens till collection 'item'
//	await addDoc(collectionRef, item) }

//async function deleteItems(key) {
//	const docRef = doc(collectionRef, key)
	// console.log('deleteitem: ', docRef);
//	deleteDoc(docRef) }

//async function editItems(key, updatedEmployee) {
	// vi behöver en "collection reference"
	// vi skapar en referens till dokumentet vi ska ändra på
	// leta upp en funktion som kan uppdatera ett dokument
//	const docRef = doc(collectionRef, key)

	// Två alternativ för att ändra:
	// updateDoc - uppdaterar ett befintligt objekt
	// setDoc - uppdaterar eller skapar ett objekt
//	await updateDoc(docRef, updatedEmployee) }


//export {  addItems, deleteItems, editItems, newItems }



async function GetTypes() {
  const NameCollection = collection(db, collectionName);
  const NameSnapshot = await getDocs(NameCollection);

  const types = NameSnapshot.docs.map(doc => doc.data().type);
    // för att inte få med dubletter
 
  return types
}






// Ladda upp datan till firestorage
async function addItemToFirestore(item) {
  try {
    // Lägg till artikel i Firestore
    const docRef = await addDoc(collectionRef, item);
    //console.log('Artikel tillagd med ID:', docRef.id);
    
    // Om artikel har en bild, ladda upp bilden till Storage
    if (item.imgurl) {
      // Hämta URL:en för produkten
      const imageurl = item.imgurl;
      // Ladda upp bilden till Storage
      const storageRef = ref(storage, `images/${docRef.id}`); 
      await uploadString(storageRef, imageurl, 'data_url');
      console.log('Bilden laddades upp till Storage');
    }
    
    return docRef.id;
  } catch (error) {
    console.error('Fel vid tillägg av artikel:', error);
    return null;
  }
}



export { GetItem, addItemToFirestore, GetTypes };
