import { FC } from "react";
import { Label } from "../../components/styled";
import { LoginForm } from "../../components/LoginForm";
import * as Styled from "./EmployeePanel.styled";

export const EmployeePanel: FC = () => {
  return (
    <Styled.Wrapper justifyContent="center" alignItems="center">
      <Label fontSize={64} fontWeight={600}>
        Lombard
      </Label>
      <Label fontSize={20} align="center">
        Witam w systemie lombard! Zaloguj się aby sprawdzić zastawione
        przedmioty oraz sprawdzić wzięte pożyczki.
      </Label>
      <LoginForm />
    </Styled.Wrapper>
  );
};
