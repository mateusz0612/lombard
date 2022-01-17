import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, AuthError } from "firebase/auth";
import { auth } from "../firebase";
import { IUserCredentials } from "../types";
import { Paths } from "../routes";
import { getRegistrationErrorMessage } from "../helpers";

export const useLogin = () => {
  const navigate = useNavigate();
  const [isLoginProgressing, setisLoginProgressing] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleLoginError = (error: AuthError) => {
    console.error(error);
    setLoginError(getRegistrationErrorMessage(error?.code));
  };

  const handleLoginSucces = () => {
    navigate(Paths.EmployeePanel);
  };

  const login = async (userCredentials: IUserCredentials) => {
    setisLoginProgressing(true);
    const { email, password } = userCredentials;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      handleLoginSucces();
    } catch (error) {
      handleLoginError(error as AuthError);
    }

    setisLoginProgressing(false);
  };

  return {
    login,
    isLoginProgressing,
    loginError,
  };
};
