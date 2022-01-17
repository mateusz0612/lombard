import { FC } from "react";
import { Label, FormErrorLabel } from "../styled";
import { Stack, TextField } from "@mui/material";
import { useCreateClientForm } from "./CreateClientForm";
import * as Styled from "./CreateClientForm.styled";

export const CreateClientForm: FC = () => {
  const {
    register,
    onRegisterFormSubmit,
    errors,
    isRegisterProgressing,
    registerError,
  } = useCreateClientForm();

  return (
    <Stack spacing={3} width={320}>
      <Label fontSize={36}>Stwórz klienta</Label>
      <TextField
        label="Imię"
        variant="outlined"
        error={!!errors?.firstName}
        helperText={errors?.firstName?.message}
        {...register("firstName")}
      />
      <TextField
        label="Nazwisko"
        variant="outlined"
        error={!!errors?.secondName}
        helperText={errors?.secondName?.message}
        {...register("secondName")}
      />
      <TextField
        label="Pesel"
        variant="outlined"
        error={!!errors?.personalIdNumber}
        helperText={errors?.personalIdNumber?.message}
        {...register("personalIdNumber")}
      />
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        error={!!errors?.email}
        helperText={errors?.email?.message}
        {...register("email")}
      />
      <TextField
        label="Hasło"
        type="password"
        variant="outlined"
        error={!!errors.password}
        helperText={errors?.password?.message}
        {...register("password")}
      />
      <TextField
        label="Powtórz Hasło"
        type="password"
        variant="outlined"
        error={!!errors?.repeatPassword}
        helperText={errors?.repeatPassword?.message}
        {...register("repeatPassword")}
      />
      <Styled.CreateClientButton
        variant="contained"
        onClick={onRegisterFormSubmit}
        disabled={isRegisterProgressing}
      >
        Stwórz klienta
      </Styled.CreateClientButton>
      {registerError && <FormErrorLabel>{registerError}</FormErrorLabel>}
    </Stack>
  );
};
