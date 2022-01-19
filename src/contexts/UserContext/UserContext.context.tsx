import { createContext, useState, useEffect, useContext, FC } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../firebase";

interface UserProviderProps {
  children: React.ReactNode[] | React.ReactNode;
}

interface ContextState {
  user: User | undefined;
}

const Context = createContext<ContextState | undefined>(undefined);

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
      }
    });

    return unsubscribe;
  }, []);

  const userContextValue: ContextState = {
    user,
  };

  return (
    <Context.Provider value={userContextValue}>{children}</Context.Provider>
  );
};

export const useUserContext = () => useContext(Context);
