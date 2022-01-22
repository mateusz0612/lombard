import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db, Collections } from "../firebase";
import { IClientData } from "../types";

export const useClients = () => {
  const [clients, setClients] = useState<IClientData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, Collections.USERS),
      (usersCollections) => {
        const snapshotClients: IClientData[] = [];

        for (const user of usersCollections?.docs) {
          const clientData: IClientData = {
            firstName: user?.data()?.firstName as string,
            secondName: user?.data()?.secondName as string,
            email: user?.data()?.email as string,
            personalIdNumber: user?.data()?.personalIdNumber as string,
            uid: user?.id,
          };

          snapshotClients.push(clientData);
        }

        setClients(snapshotClients);
        setIsLoading(false);
      }
    );

    return unsub;
  }, []);

  return { clients, isLoading };
};
