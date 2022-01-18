import { createContext, useState, useEffect, useContext, FC } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db, Collections } from "../../firebase";
import { IUser } from "../../types";

interface UserProviderProps {
  children: React.ReactNode[] | React.ReactNode;
}

interface ContextState {
  user: IUser | null;
}

const Context = createContext<ContextState | undefined>(undefined);

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const userContextValue: ContextState = {
    user,
  };

  const getUserData = async (userUid: string) => {
    const userRef = doc(db, Collections.USERS, userUid);
    const userDoc = await getDoc(userRef);
    const userData = userDoc?.data();

    return {
      firstName: userData?.firstName as string,
      secondName: userData?.secondName as string,
      email: userData?.email as string,
      uid: userUid,
    };
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await getUserData(user?.uid);
        setUser(userData);
      }
    });

    return unsubscribe;
  }, [user]);

  return (
    <Context.Provider value={userContextValue}>{children}</Context.Provider>
  );
};

export const useUserContext = () => useContext(Context);
