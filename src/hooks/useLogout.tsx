import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";
import { Paths } from "../routes";

export const useLogout = () => {
  const logout = async () => {
    await signOut(auth);
    return <Navigate to={Paths.LandingPage} />;
  };
  return {
    logout,
  };
};
