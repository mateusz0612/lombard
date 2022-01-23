import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, AuthError } from "firebase/auth";
import { auth } from "../firebase";
import { IUserCredentials } from "../types";
import { Paths } from "../routes";
import { getRegistrationErrorMessage, toast } from "../helpers";

export const useLogin = () => {
  const navigate = useNavigate();
  const [isLoginProgressing, setisLoginProgressing] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleLoginError = (error: AuthError) => {
    console.error(error?.code);
    setLoginError(getRegistrationErrorMessage(error?.code));
  };

  const handleLoginSucces = () => {
    navigate(Paths.EmployeePanel);
    toast("success", "Pomyślnie zalogowano!", false);
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
