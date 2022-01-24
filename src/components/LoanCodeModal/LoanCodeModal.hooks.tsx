import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLoanCodeModal = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const isEmpty = code.length === 0;
  const hasRightLength = code.length !== 20;
  const codeHasError = isEmpty || hasRightLength;

  const onCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const onCodeConfirm = () => navigate(`/loan-info/${code}`);

  return {
    code,
    codeHasError,
    onCodeChange,
    onCodeConfirm,
  };
};
