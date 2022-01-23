import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db, Collections } from "../firebase";
import { ICode, ILoan } from "../types";
import { intervalToDuration } from "date-fns";

export const useLoans = ({ code }: ICode) => {
  const [loans, setLoans] = useState<ILoan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const countInterest = (start: Date, current: Date, interest: number, price: number) => {

    function roundUp(num: number, precision: number) {
      precision = Math.pow(10, precision)
      return Math.ceil(num * precision) / precision
    }


    const { months, years } = intervalToDuration({
      start,
      end: current
    })

    let rc = price;
    for (let m = 0; m < (months as number + (years as number) * 12); m++) {
      rc *= (interest / 100) + 1
    }

    return roundUp(rc, 2);
  }

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
            returnPrice: countInterest(loan?.data()?.dateOfLoan.toDate(), new Date(), loan?.data()?.interest, loan?.data()?.returnPrice) as number,
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
