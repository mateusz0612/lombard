import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/useLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultLoginFormData, loginFormSchema } from "./LoginForm.schema";

export const useLoginForm = () => {
  const { login, isLoginProgressing, loginError } = useLogin();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: defaultLoginFormData,
    resolver: yupResolver(loginFormSchema),
    mode: "onChange",
  });

  const onLoginClick = handleSubmit((data) => login(data));

  return {
    onLoginClick,
    register,
    errors,
    isLoginProgressing,
    loginError,
  };
};
