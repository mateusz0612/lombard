import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRegister } from "../../hooks/useRegister";
import {
  defaultRegisterFormData,
  registerFormSchema,
} from "./RegisterForm.schema";

export const useRegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: defaultRegisterFormData,
    resolver: yupResolver(registerFormSchema),
    mode: "onChange",
  });

  const { registerUser, isRegisterProgressing, registerError } = useRegister();

  const onRegisterFormSubmit = handleSubmit((data) => {
    registerUser(data);
  });

  return {
    register,
    onRegisterFormSubmit,
    errors,
    isRegisterProgressing,
    registerError,
  };
};
