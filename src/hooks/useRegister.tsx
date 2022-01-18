import { useState } from "react";
import { IClientData } from "../types";
import { auth, db, Collections } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  UserCredential,
  AuthError,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getRegistrationErrorMessage } from "../helpers";

export const useRegister = () => {
  const [registerError, setRegisterError] = useState("");
  const [isRegisterProgressing, setisRegisterProgressing] = useState(false);

  const handleRegisterError = (error: AuthError) => {
    console.error(error);
    setRegisterError(getRegistrationErrorMessage(error?.code));
  };

  const updateUserCollection = async (
    userUid: string,
    userRegisterData: IClientData
  ) => {
    try {
      await setDoc(doc(db, Collections.USERS, userUid), {
        ...userRegisterData,
      });
    } catch (error) {
      handleRegisterError(error as AuthError);
    }
  };

  const handleRegisterSuccess = async (
    userCredentials: UserCredential,
    userRegisterData: IClientData
  ) => {
    const userUid = userCredentials?.user.uid;
    const { firstName, secondName } = userRegisterData;
    await updateUserCollection(userUid, userRegisterData);
    await updateProfile(auth.currentUser!, {
      displayName: `${firstName} ${secondName}`,
    });
  };

  const registerUser = async (userRegisterData: IClientData) => {
    const { email, password } = userRegisterData;
    setisRegisterProgressing(true);
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      handleRegisterSuccess(userCredentials, userRegisterData);
    } catch (error) {
      handleRegisterError(error as AuthError);
    }
    setisRegisterProgressing(false);
  };

  return {
    registerError,
    isRegisterProgressing,
    registerUser,
  };
};
