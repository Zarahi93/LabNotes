/* eslint linebreak-style: ["error", "windows"] */
import { async } from '@firebase/util';
import {
  collection, addDoc, getDoc,
} from 'firebase/firestore';
import { db } from './firebase-config';

export const addNote = async (noteObject) => {
  await addDoc(collection(db, 'Notes'), noteObject);
  console.log('New note');
};

// export const getNote = async () => {
//   await getDoc(collection(db, 'Notes'));
//   console.log(db.data);
// };
