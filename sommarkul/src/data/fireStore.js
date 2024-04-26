import { collection, getDocs, addDoc} from 'firebase/firestore/lite';
// , deleteDoc, updateDoc, doc 
import { db } from './fire.js';

// Hämta datan ifrån firestore
const collectionName = 'item';
const collectionRef = collection(db, collectionName);

async function GetItem() {
  const NameCollection = collection(db, collectionName);
  const NameSnapshot = await getDocs(NameCollection);

  const NameList = NameSnapshot.docs.map(doc => withKey(doc));
  console.log('Item: snapshot is', NameSnapshot);
  return NameList;
}
 
function withKey(doc) {
  let o = doc.data();
  o.key = doc.id; 
  return o;
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



export { GetItem, addItemToFirestore };
