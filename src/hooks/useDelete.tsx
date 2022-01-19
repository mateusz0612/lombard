import { doc, deleteDoc } from "firebase/firestore";
import { Collections, db } from "../firebase";

interface IDelete {
  uid: string;
  collection: Collections;
}

export const useDelete = () => {
  const deleteItem = async ({ uid, collection }: IDelete) => {
    try {
      await deleteDoc(doc(db, collection, uid));
    } catch (e) {
      console.error(e);
    }
  };

  return { deleteItem };
};
