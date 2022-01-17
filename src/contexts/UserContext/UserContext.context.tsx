import { createContext, useState, useEffect, useContext, FC } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

interface UserProviderProps {
  children: React.ReactNode[] | React.ReactNode;
}

type UserType = User | null;
type ContextState = { user: UserType };

const Context = createContext<ContextState | undefined>(undefined);

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, [user]);

  const userContextValue = {
    user,
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <Context.Provider value={userContextValue}>{children}</Context.Provider>
  );
};

export const useUserContext = () => useContext(Context);
