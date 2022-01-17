import { createContext, useState, useEffect, useContext, FC } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

interface UserProviderProps {
  children: React.ReactNode[] | React.ReactNode;
}

interface ContextState {
  user: User | null;
}

const Context = createContext<ContextState | undefined>(undefined);

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const userContextValue: ContextState = {
    user,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Context.Provider value={userContextValue}>{children}</Context.Provider>
  );
};

export const useUserContext = () => useContext(Context);
