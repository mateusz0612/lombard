import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

export const useCreateLoanForm = (personalIdNumber: string) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: defaultCreateLoanFormData,
    resolver: yupResolver(createLoanFormSchema),
    mode: "onChange",
  });
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const { postNewDoc } = usePost();

  const user = useUserContext();

  const date = new Date();

  // eslint-disable-next-line
  const values = [watch("interest"), watch("returnPrice")];

  useEffect(() => {
    const isValidCheck = () => {
      return (
        Object.entries(values).every((value) => !!value) &&
        Object.entries(errors).length === 0
      );
    };

    setIsValid(() => isValidCheck());
  }, [errors, values]);

  const onLoanFormSubmit = handleSubmit(async (data) => {
    const loanPayload = {
      employeeId: user?.user?.uid,
      dateOfLoan: Timestamp.fromDate(date),
      personalIdNumber,
      returnPrice: data?.returnPrice,
      interest: data?.interest,
    };

    const loanRef = await postNewDoc({
      collectionName: Collections.LOANS,
      payload: loanPayload,
      successToastMessage: "Dodano pożyczkę!",
    });

    const loanId = loanRef?.id;

    const itemPayload = {
      name: data?.name,
      description: data?.description,
      loanId,
    };

    postNewDoc({
      collectionName: Collections.ITEMS,
      payload: itemPayload,
    }).then(() => {
      navigate(`/employee-panel-loan-info/${loanId}`);
    });
  });

  return {
    register,
    onLoanFormSubmit,
    errors,
    isValid,
  };
};
