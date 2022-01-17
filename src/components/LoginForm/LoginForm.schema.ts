import * as yup from "yup";

interface ILoginForm {
  email: string;
  password: string;
}

export const defaultLoginFormData: ILoginForm = {
  email: "",
  password: "",
};

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Podaj prawidłowy mail")
    .required("Email jest wymagany"),
  password: yup.string().required("Hasło jest wymagane"),
});
