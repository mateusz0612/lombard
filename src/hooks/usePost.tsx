import { setDoc, doc, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "../helpers";

interface IPost {
  collectionName: string;
  docId: string;
  payload: Object;
  successToastMessage?: string;
}

export const usePost = () => {
  const postDoc = async ({
    collectionName,
    docId,
    payload,
    successToastMessage,
  }: IPost) => {
    try {
      await setDoc(doc(db, collectionName, docId), {
        ...payload,
      });
      successToastMessage && toast("success", successToastMessage, false);
    } catch (error) {
      toast("error", "Coś poszło nie tak. Spróbuj panownie", false);
      throw new Error(error as string);
    }
  };

  const postNewDoc = async ({
    collectionName,
    payload,
    successToastMessage,
  }: Omit<IPost, "docId">) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), {
        ...payload,
      });
      successToastMessage && toast("success", successToastMessage, false);
      return docRef;
    } catch (error) {
      toast("error", "Coś poszło nie tak. Spróbuj panownie", false);
      throw new Error(error as string);
    }
  };

  return { postDoc, postNewDoc };
};
