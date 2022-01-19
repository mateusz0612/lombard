import { useUserContext } from "../../contexts/UserContext";
import { useLogout } from "../../hooks/useLogout";

export const useUserInfo = () => {
  const user = useUserContext();
  const { logout } = useLogout();

  const fullName = user?.user?.displayName as string;
  const onLogoutClick = () => logout();

  return { fullName, onLogoutClick };
};
