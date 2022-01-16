import { useState } from "react";
import { IUserRegisterData } from "../types";
import { auth, db } from "../firebase";
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
    console.log(error);
    setRegisterError(getRegistrationErrorMessage(error?.code));
  };

  const handleRegisterSuccess = async (
    userCredentials: UserCredential,
    userRegisterData: IUserRegisterData
  ) => {
    const userId = userCredentials?.user.uid;
    const { username, email } = userRegisterData;

    try {
      setDoc(doc(db, "users", userId), {
        username,
        email,
      });
    } catch (error) {
      handleRegisterError(error as AuthError);
    }
  };

  const registerUser = async (userRegisterData: IUserRegisterData) => {
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
