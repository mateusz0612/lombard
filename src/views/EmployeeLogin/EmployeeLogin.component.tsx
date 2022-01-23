import { FC, useEffect } from "react";
import { Label } from "../../components/styled";
import { LoginForm } from "../../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../routes";
import { useUserContext } from "../../contexts/UserContext";
import * as Styled from "./EmployeeLogin.styled";

export const EmployeeLogin: FC = () => {
  const user = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.user) {
      navigate(Paths.EmployeePanel);
    }

    return () => {};
  }, [user?.user, navigate]);

  return (
    <Styled.Wrapper justifyContent="center" alignItems="center">
      <Label fontSize={64} fontWeight={600}>
        Lombard
      </Label>
      <Label fontSize={20} align="center">
        Witam w systemie lombard! Zaloguj się aby rozpocząć.
      </Label>
      <LoginForm />
    </Styled.Wrapper>
  );
};
