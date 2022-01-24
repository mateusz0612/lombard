import { useState } from "react";
import { IRegisterClientData } from "../types";
import { Collections } from "../firebase";
import { usePost } from "./usePost";

export const useEditClient = () => {
  const [isClientEditing, setIsClientEditing] = useState(false);
  const [clientEditingError, setClientEditingError] = useState("");
  const { postDoc } = usePost();

  const editClient = async (
    userUid: string,
    newUserData: IRegisterClientData
  ) => {
    setIsClientEditing(true);
    try {
      await postDoc({
        collectionName: Collections.USERS,
        docId: userUid,
        payload: newUserData,
        successToastMessage: "Dodano klienta!",
      });
    } catch (error) {
      setClientEditingError((error as Error)?.message);
    }
    setIsClientEditing(false);
  };

  return {
    editClient,
    isClientEditing,
    clientEditingError,
  };
};
