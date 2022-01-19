import { useState } from "react";
import { IRegisterClientData } from "../types";
import { db, Collections } from "../firebase";
import { AuthError } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { getRegistrationErrorMessage } from "../helpers";

export const useRegister = () => {
  const [registerError, setRegisterError] = useState("");
  const [isRegisterProgressing, setisRegisterProgressing] = useState(false);

  const handleRegisterError = (error: AuthError) => {
    console.error(error);
    setRegisterError(getRegistrationErrorMessage(error?.code));
  };

  const updateUserCollection = async (
    userRegisterData: IRegisterClientData
  ) => {
    try {
      await addDoc(collection(db, Collections.USERS), {
        firstName: userRegisterData?.firstName,
        secondName: userRegisterData?.secondName,
        email: userRegisterData?.email,
        personalIdNumber: userRegisterData?.personalIdNumber,
      });
    } catch (error) {
      handleRegisterError(error as AuthError);
    }
  };

  const handleRegisterSuccess = async (
    userRegisterData: IRegisterClientData
  ) => {
    await updateUserCollection(userRegisterData);
  };

  const registerUser = async (userRegisterData: IRegisterClientData) => {
    setisRegisterProgressing(true);
    handleRegisterSuccess(userRegisterData);
    setisRegisterProgressing(false);
  };

  return {
    registerError,
    isRegisterProgressing,
    registerUser,
  };
};
