import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../contexts/UserContext";
import { Collections } from "../../firebase";
import { usePost } from "../../hooks/usePost";
import {
  createLoanFormSchema,
  defaultCreateLoanFormData,
} from "./CreateLoanForm.schema";

export const useCreateLoanForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    watch
  } = useForm({
    defaultValues: defaultCreateLoanFormData,
    resolver: yupResolver(createLoanFormSchema),
    mode: "onChange",
  });
  const [isValid, setIsValid] = useState(false);
  const { postNewDoc } = usePost();

  const user = useUserContext();

  const values = [watch('clientId'), watch('interest'), watch('returnPrice')]

  const date = new Date();

  useEffect(() => {
    const isValidCheck = () => {
      return Object.entries(values).every(value => !!value) && Object.entries(errors).length == 0
    }

    setIsValid(() => isValidCheck());
  }, [values]);

  const onLoanFormSubmit = handleSubmit((data) => {
    const payload = { ...data, employeeId: user?.user?.uid, dateOfLoan: date }

    const code = postNewDoc({ collectionName: Collections.LOANS, payload: payload }).then(res => alert(res.id));
    reset();
  });

  return {
    register,
    onLoanFormSubmit,
    errors,
    isValid
  };
};
