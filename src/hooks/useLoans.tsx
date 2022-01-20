import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db, Collections } from "../firebase";
import { ICode, ILoan } from "../types";

export const useLoans = ({ code }: ICode) => {
  const [loans, setLoans] = useState<ILoan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, Collections.LOANS),
      (loansCollections) => {
        const loans: ILoan[] = [];

        for (const loan of loansCollections?.docs) {
          const loanData: ILoan = {
            code: loan.ref.id,
            personalIdNumber: loan.data()?.personalIdNumber as string,
            interest: loan?.data()?.interest as number,
            returnPrice: loan?.data()?.returnPrice as number,
            dateOfLoan: loan?.data()?.dateOfLoan,
            employeeId: loan?.data()?.employeeId as string,
          };

          loans.push(loanData);
        }

        setLoans(loans);
        setIsLoading(false);
      }
    );

    return unsub;
  }, []);

  if (code) {
    return { loans: loans.filter(loan => loan['code'] === code), isLoading }
  }

  return { loans, isLoading };
};
