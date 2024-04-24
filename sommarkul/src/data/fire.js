import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyCbc4Nx5SJS6_p6NJl8ZjIfslWa8oqsGpY",
    authDomain: "testninghanna.firebaseapp.com",
    projectId: "testninghanna",
    storageBucket: "testninghanna.appspot.com",
    messagingSenderId: "407763069247",
    appId: "1:407763069247:web:ebfa58877013bdb9a74b8a"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}