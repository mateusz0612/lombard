import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IRegisterClientData } from "../../types";
import {
  createClientFormSchema,
  defaultCreateClientFormData,
} from "./ClientForm.schema";

export const useClientForm = (
  onSuccess: (data: IRegisterClientData) => void,
  defaultValues?: IRegisterClientData
) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues || defaultCreateClientFormData,
    resolver: yupResolver(createClientFormSchema),
    mode: "onChange",
  });

  const onRegisterFormSubmit = handleSubmit((data) => {
    try {
      onSuccess(data);
    } catch (error) {
      console.error(error);
    }
  });

  return {
    register,
    onRegisterFormSubmit,
    errors,
  };
};
