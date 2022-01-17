import { useState } from "react";
import { IClientData } from "../types";
import { auth, db, Collections } from "../firebase";
import {
  createUserWithEmailAndPassword,
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

  const handleRegisterSuccess = async (
    userCredentials: UserCredential,
    userRegisterData: IClientData
  ) => {
    const userId = userCredentials?.user.uid;
    const { firstName, secondName, email, personalIdNumber } = userRegisterData;

    try {
      setDoc(doc(db, Collections.USERS, userId), {
        firstName,
        secondName,
        personalIdNumber,
        email,
      });
    } catch (error) {
      handleRegisterError(error as AuthError);
    }
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
