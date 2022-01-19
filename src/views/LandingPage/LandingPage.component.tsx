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
    >
      <Label fontSize={32} fontWeight={700}>
        Witaj w systemie lombard!
      </Label>
      <Label fontSize={32}>Zaloguj się aby rozpocząć.</Label>
      <Stack spacing={2} mt={2}>
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
    </Stack>
  );
};
