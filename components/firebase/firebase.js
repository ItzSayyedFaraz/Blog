// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDsxf7x1AGabdxpGzjJnDMBdA7KFJjYWhs",
  authDomain: "blogpost-9818d.firebaseapp.com",
  projectId: "blogpost-9818d",
  storageBucket: "blogpost-9818d.appspot.com",
  messagingSenderId: "507016467000",
  appId: "1:507016467000:web:1cd1244c7169b0fc618ccd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db =getFirestore(app);
export const allpost=collection(db,"blogpost")
export const usersdb=collection(db,"userlogins")
export const admins=collection(db,"admin")
export default app;