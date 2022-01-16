import { IUserRegisterData } from "../../types";
import * as yup from "yup";

type IRegisterDataForm = IUserRegisterData & {
  repeatPassword: string;
};

export const defaultRegisterFormData: IRegisterDataForm = {
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
};

export const registerFormSchema = yup.object().shape({
  username: yup.string().required("Pole jest wymagane"),
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
