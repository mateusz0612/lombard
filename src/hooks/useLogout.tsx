import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";
import { Paths } from "../routes";
import { useUserContext } from "../contexts/UserContext";
import { toast } from "../helpers";

export const useLogout = () => {
  const user = useUserContext();
  const clearUserContext = user!.clearUserContext;

  const logout = async () => {
    await signOut(auth);
    clearUserContext();
    toast("success", "Wylogowano pomyślnie", false);
    return <Navigate to={Paths.LandingPage} />;
  };

  return {
    logout,
  };
};
