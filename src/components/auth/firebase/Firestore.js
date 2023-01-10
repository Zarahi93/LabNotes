/* eslint linebreak-style: ["error", "windows"] */
import { async } from '@firebase/util';
import {
  getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc,
} from 'firebase/firestore';
import { db } from './firebase-config';

export const addNote = async (e) => {
  await addDoc(collection(db, 'Notes'), e);
  console.log('New note');
};

// export const getNote = async () => {
//   await getDoc(collection(db, 'Notes'));
//   console.log(db.data);
// };
