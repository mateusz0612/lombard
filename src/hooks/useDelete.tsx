import { doc, deleteDoc } from "firebase/firestore";
import { Collections, db } from "../firebase";
import { toast } from "../helpers";

interface IDelete {
  uid: string;
  collection: Collections;
  successToastMessage?: string;
}

export const useDelete = () => {
  const deleteItem = async ({
    uid,
    collection,
    successToastMessage,
  }: IDelete) => {
    try {
      await deleteDoc(doc(db, collection, uid));
      successToastMessage && toast("success", successToastMessage, false);
    } catch (e) {
      toast("error", "Coś poszło nie tak. Spróbuj panownie.", false);
      console.error(e);
    }
  };

  return { deleteItem };
};
