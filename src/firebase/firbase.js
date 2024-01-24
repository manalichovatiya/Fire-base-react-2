import { getSelectionRange } from "@testing-library/user-event/dist/utils";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRJu9PNBr4QgxHusxQR0SiQ4ispna6Xwg",
  authDomain: "todoapp-380f5.firebaseapp.com",
  projectId: "todoapp-380f5",
  storageBucket: "todoapp-380f5.appspot.com",
  messagingSenderId: "515710010957",
  appId: "1:515710010957:web:cde410686e515c44e4fe04",
  measurementId: "G-7S4Z0H8E1C"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getSelectionRange(app);

export { app, firestore, storage }