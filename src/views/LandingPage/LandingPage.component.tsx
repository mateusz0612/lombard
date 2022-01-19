import { FC } from "react";
import { Label } from "../../components/styled";
import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Paths } from "../../routes";

export const LandingPage: FC = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minWidth="100%"
      minHeight="100vh"
      spacing={1}
    >
      <Label fontSize={32} fontWeight={700}>
        Witaj w systemie lombard!
      </Label>
      <Label fontSize={32}>Sprawdź swoją pożyczkę za pomocą kodu.</Label>
      <Button variant="contained" color="primary">
        Sprawdź pożyczkę
      </Button>
      <Label fontSize={32}>
        Jesteś pracownikiem? Zaloguj się aby rozpocząć.
      </Label>
      <Link
        to={Paths.EmployeeLogin}
        style={{
          textDecoration: "none",
        }}
      >
        <Button variant="contained" color="secondary">
          Zaloguj się jako pracownik
        </Button>
      </Link>
    </Stack>
  );
};
