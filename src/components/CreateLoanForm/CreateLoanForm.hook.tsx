import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../contexts/UserContext";
import { Collections } from "../../firebase";
import { usePost } from "../../hooks/usePost";
import {
  createLoanFormSchema,
  defaultCreateLoanFormData,
} from "./CreateLoanForm.schema";
import { Timestamp } from "firebase/firestore";

export const useCreateLoanForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset
  } = useForm({
    defaultValues: defaultCreateLoanFormData,
    resolver: yupResolver(createLoanFormSchema),
    mode: "onChange",
  });
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const { postNewDoc } = usePost();

  const user = useUserContext();

  const values = [watch('personalIdNumber'), watch('interest'), watch('returnPrice')]

  const date = new Date();

  useEffect(() => {
    const isValidCheck = () => {
      return Object.entries(values).every(value => !!value) && Object.entries(errors).length === 0
    }

    setIsValid(() => isValidCheck());
  }, [values]);

  const onLoanFormSubmit = handleSubmit((data) => {
    const payload = { ...data, employeeId: user?.user?.uid, dateOfLoan: Timestamp.fromDate(date) }

    postNewDoc({ collectionName: Collections.LOANS, payload: payload }).then(res => navigate(`/loan-info/${res.id}`));
  });

  return {
    register,
    onLoanFormSubmit,
    errors,
    isValid
  };
};
