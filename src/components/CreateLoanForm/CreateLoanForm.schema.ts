import { ILoan } from "../../types";
import * as yup from "yup";

export const defaultCreateLoanFormData: Omit<
  ILoan,
  "code" | "id" | "employeeId" | "dateOfLoan" | "personalIdNumber"
> = {
  interest: 0,
  returnPrice: 0,
};

export const createLoanFormSchema = yup.object().shape({
  returnPrice: yup
    .number()
    .moreThan(0, "Kwota musi być większa od 0")
    .typeError("Pole jest wymagane"),
  interest: yup
    .number()
    .min(0, "Stopa procentowa nie może być ujemna")
    .typeError("Pole jest wymagane"),
});
