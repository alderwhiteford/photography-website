// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsvXob3v7PsxZZW0bnSGzInbmLWizaXw8",
  authDomain: "portfolio-website-561af.firebaseapp.com",
  projectId: "portfolio-website-561af",
  storageBucket: "portfolio-website-561af.appspot.com",
  messagingSenderId: "378534511939",
  appId: "1:378534511939:web:a3c8d4c235315b4f1b5bf6",
  measurementId: "G-Q9F94L1V7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Retrieve the locations for the World page: 
async function getDocuments(path) {
  const locations = collection(db, path);
  const locationsSnapshot = await getDocs(locations);
  const locationsList = locationsSnapshot.docs.map(doc => doc.data());
  return locationsList;
}

export { getDocuments }