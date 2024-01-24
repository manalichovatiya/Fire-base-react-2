import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "../firebase/firbase";

export const getData = async () => {
  console.log("Fetching data...");
  const allItems = await getDocs(collection(firestore, "todos"));
  return allItems.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const postData = async (todos) => {
  const newDocRef = doc(collection(firestore, "todos"));
  return await setDoc(newDocRef, todos);
};

export const updateData = async (id, updatedData) => {
  const docRef = doc(collection(firestore, "todos"), id);
  return await updateDoc(docRef, updatedData);
};

export const deleteData = async (id) => {
  const docRef = doc(collection(firestore, "todos"), id);
  return await deleteDoc(docRef);
};