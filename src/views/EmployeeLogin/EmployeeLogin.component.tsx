import { FC } from "react";
import { Label } from "../../components/styled";
import { LoginForm } from "../../components/LoginForm";
import * as Styled from "./EmployeeLogin.styled";

export const EmployeeLogin: FC = () => {
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
