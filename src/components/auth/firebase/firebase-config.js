/* eslint linebreak-style: ["error", "windows"] */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAbWS1-G5KSWo723_hZco_A-cuoCFvpaTs',
  authDomain: 'your-notes-9196d.firebaseapp.com',
  projectId: 'your-notes-9196d',
  storageBucket: 'your-notes-9196d.appspot.com',
  messagingSenderId: '335858061176',
  appId: '1:335858061176:web:0945b375a4f9b8b204028d',
  measurementId: 'G-M0DVK2HF56',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
// eslint-disable-next-line import/prefer-default-export
export const auth = getAuth(app);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
