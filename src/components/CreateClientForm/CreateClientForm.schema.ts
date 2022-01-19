import { IRegisterClientData } from "../../types";
import * as yup from "yup";

export const defaultCreateClientFormData: Omit<IRegisterClientData, "uid"> = {
  firstName: "",
  secondName: "",
  personalIdNumber: "",
  email: "",
};

export const createClientFormSchema = yup.object().shape({
  firstName: yup.string().trim().required("Pole jest wymagane"),
  secondName: yup.string().trim().required("Pole jest wymagane"),
  personalIdNumber: yup
    .string()
    .trim()
    .required("Pole jest wymagane")
    .length(11, "Pesel musi zawierac 11 cyfr"),
  email: yup
    .string()
    .email("Podaj prawidłowy mail")
    .required("Pole jest wymagane"),
});
