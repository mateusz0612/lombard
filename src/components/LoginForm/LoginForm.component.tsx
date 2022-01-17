import { FC } from "react";
import { Label } from "../styled";
import { Stack, TextField } from "@mui/material";
import { FormErrorLabel } from "../styled";
import { useLoginForm } from "./LoginForm.hooks";
import * as Styled from "./LoginForm.styled";

export const LoginForm: FC = () => {
  const { onLoginClick, register, errors, isLoginProgressing, loginError } =
    useLoginForm();

  return (
    <Stack spacing={3} width={320}>
      <Label fontSize={36}>Zaloguj sie</Label>
      <TextField
        label="Email"
        variant="outlined"
        error={!!errors?.email}
        helperText={errors?.email?.message}
        {...register("email")}
      />
      <TextField
        label="Hasło"
        type="password"
        variant="outlined"
        error={!!errors?.password}
        helperText={errors?.password?.message}
        {...register("password")}
      />
      <Styled.LoginButton
        variant="contained"
        onClick={onLoginClick}
        disabled={isLoginProgressing}
      >
        Zaloguj się
      </Styled.LoginButton>
      {loginError && <FormErrorLabel>{loginError}</FormErrorLabel>}
    </Stack>
  );
};
