import { IClientData } from "../../types";
import * as yup from "yup";

type IRegisterDataForm = IClientData & {
  repeatPassword: string;
};

export const defaultCreateClientFormData: IRegisterDataForm = {
  firstName: "",
  secondName: "",
  personalIdNumber: "",
  email: "",
  password: "",
  repeatPassword: "",
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
  password: yup
    .string()
    .min(8, "Hasło musi zawierać przynajmniej 8 znaków")
    .required("Pole jest wymagane"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Hasła muszą sie zgadzać"),
});
