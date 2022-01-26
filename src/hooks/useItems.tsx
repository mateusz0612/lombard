import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { Collections, db } from "../firebase";
import { IItem } from "../types";

export const useItems = (itemUid?: string) => {
  const [items, setItems] = useState<IItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, Collections.ITEMS),
      (itemsCollection) => {
        const snapshotItems: IItem[] = itemsCollection?.docs?.map((item) => ({
          uid: item?.id,
          name: item?.data()?.name as string,
          description: item?.data()?.description as string,
          loanId: item?.data()?.loanId as string,
        }));

        setItems(snapshotItems);
      }
    );

    setIsLoading(false);
    return unsub;
  }, []);

  if (itemUid) {
    return { items: items.filter((item) => item?.uid === itemUid), isLoading };
  }

  return {
    items,
    isLoading,
  };
};
