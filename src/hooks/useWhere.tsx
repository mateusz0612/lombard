import {
  collection as fcollection,
  query,
  where as fwhere,
  getDocs,
  WhereFilterOp,
} from "firebase/firestore";
import { db } from "../firebase";

interface IWhere {
  collection: string;
  fieldPath: string;
  operator: WhereFilterOp;
  value: string;
}

export const useWhere = () => {
  const where = async ({ collection, fieldPath, value, operator }: IWhere) => {
    const itemQuery = query(
      fcollection(db, collection),
      fwhere(fieldPath, operator, value)
    );

    const itemDocs = await getDocs(itemQuery);

    return itemDocs;
  };

  return { where };
};
