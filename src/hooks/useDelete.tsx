import { doc, deleteDoc } from "firebase/firestore";
import { Collections, db } from "../firebase";
import { toast } from "../helpers";

interface IDelete {
  uid: string;
  collection: Collections;
}

export const useDelete = () => {
  const deleteItem = async ({ uid, collection }: IDelete) => {
    try {
      await deleteDoc(doc(db, collection, uid));
    } catch (e) {
      toast("error", "Coś poszło nie tak. Spróbuj panownie.", false);
      console.error(e);
    }
  };

  return { deleteItem };
};
