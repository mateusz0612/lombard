import { FC } from "react";
import { FormHeader, FormErrorLabel } from "../styled";
import { Stack, TextField } from "@mui/material";
import { useRegisterForm } from "./RegisterForm.hooks";
import * as Styled from "./RegisterForm.styled";

export const RegisterForm: FC = () => {
  const {
    register,
    onRegisterFormSubmit,
    errors,
    isRegisterProgressing,
    registerError,
  } = useRegisterForm();

  return (
    <Stack spacing={3} maxWidth={300}>
      <FormHeader>Rejestracja</FormHeader>
      <TextField
        label="Nazwa użytkownika"
        variant="outlined"
        error={!!errors?.username}
        helperText={errors?.username?.message}
        {...register("username")}
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
      <Styled.RegisterButton
        variant="contained"
        onClick={onRegisterFormSubmit}
        disabled={isRegisterProgressing}
      >
        Zarejestruj
      </Styled.RegisterButton>
      {registerError && <FormErrorLabel>{registerError}</FormErrorLabel>}
    </Stack>
  );
};
