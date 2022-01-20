import { ILoan } from "../../types";
import * as yup from "yup";

export const defaultCreateLoanFormData: Omit<ILoan, "code" | "id" | "employeeId" | "dateOfLoan"> = {
  clientId: "",
  interest: 0,
  returnPrice: 0,
};

export const createLoanFormSchema = yup.object().shape({
  clientId: yup
    .string()
    .trim()
    .required("Pole jest wymagane")
    .length(11, "Pesel musi zawierac 11 cyfr"),
  returnPrice: yup
    .number()
    .required("Pole jest wymagane")
    .moreThan(0, "Kwota musi być większa od 0"),
  interest: yup
    .number()
    .required("Pole jest wymagane")
    .min(0, "Stopa procentowa nie może być ujemna")
});