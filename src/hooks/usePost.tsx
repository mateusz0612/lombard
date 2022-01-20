import { setDoc, doc, addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

interface IPost {
  collectionName: string;
  docId: string;
  payload: Object;
}

export const usePost = () => {
  const postDoc = async ({ collectionName, docId, payload }: IPost) => {
    try {
      await setDoc(doc(db, collectionName, docId), {
        ...payload
      });

    } catch (error) {
      throw new Error(error as string)
    }
  }
  const postNewDoc = async ({ collectionName, payload }: Omit<IPost, "docId">) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), {
        ...payload
      });
      return docRef;

    } catch (error) {
      throw new Error(error as string)
    }
  }
  return { postDoc, postNewDoc }
}