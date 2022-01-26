import { ILoan, IItem } from "../../types";
import * as yup from "yup";

export const defaultCreateLoanFormData: Omit<
  ILoan,
  "code" | "id" | "employeeId" | "dateOfLoan" | "personalIdNumber"
> &
  Omit<IItem, "uid"> = {
  interest: 0,
  returnPrice: 0,
  name: "",
  description: "",
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
  name: yup
    .string()
    .max(60, "Nazwa - max 60 znaków")
    .min(3, "Nazwa - min 3 znaki")
    .required("Pole jest wymagane"),
  description: yup.string().max(100, "Opis - max 100 znaków"),
});
