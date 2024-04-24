import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore/lite';
import { db } from './fire.js';

const collectionName = 'item';
const collectionRef = collection(db, collectionName);

async function GetItem() {
  const NameCollection = collection(db, collectionName);
  const NameSnapshot = await getDocs(NameCollection);

  const NameList = NameSnapshot.docs.map(doc => withKey(doc));
  console.log('Item: snapshot is', NameSnapshot);
  return NameList;
 

}
 

async function addItemToFirestore(item) {
  try {
    // Lägg till artikeln i Firestore
    const docRef = await addDoc(collectionRef, item);
    console.log('Artikel tillagd med ID:', docRef.id);
    
    // Om artikeln har en bild, ladda upp bilden till Storage
    if (item.imgurl) {
      // Hämta URL:en för produkten
      const imageurl = item.imgurl;
	  console.log('hittas url?', imgurl)
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



function withKey(doc) {
  let o = doc.data();
  o.key = doc.id; 
  return o;
}

export { GetItem, addItemToFirestore };
