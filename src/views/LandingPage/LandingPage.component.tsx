import { FC } from "react";
import { Label } from "../../components/styled";
import { CreateClientForm } from "../../components/CreateClientForm";
import * as Styled from "./LandingPage.styled";

export const LandingPage: FC = () => {
  return (
    <Styled.Wrapper justifyContent="center" alignItems="center">
      <Label fontSize={64} fontWeight={600}>
        Lombard
      </Label>
      <Label fontSize={20} align="center">
        Witam cię w systemie lombard! Zaloguj się aby sprawdzić zastawione
        przedmioty oraz sprawdzić wzięte pożyczki.
      </Label>
      <CreateClientForm />
    </Styled.Wrapper>
  );
};
