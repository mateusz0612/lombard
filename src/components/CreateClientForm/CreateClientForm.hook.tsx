import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRegister } from "../../hooks/useRegister";
import {
  createClientFormSchema,
  defaultCreateClientFormData,
} from "./CreateClientForm.schema";

export const useCreateClientForm = (
  onSuccess?: () => void,
  onError?: () => void
) => {
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
    try {
      registerUser(data);
      onSuccess && onSuccess();
    } catch (e) {
      onError && onError();
    }
  });

  return {
    register,
    onRegisterFormSubmit,
    errors,
    isRegisterProgressing,
    registerError,
  };
};
