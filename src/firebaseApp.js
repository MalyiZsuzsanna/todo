import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)
//létrehoztunk a referenciát a szolgáltatáshoz:
export const auth=getAuth(app)