import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRegister } from "../../hooks/useRegister";
import {
  createClientFormSchema,
  defaultCreateClientFormData,
} from "./CreateClientForm.schema";

export const useCreateClientForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: defaultCreateClientFormData,
    resolver: yupResolver(createClientFormSchema),
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
