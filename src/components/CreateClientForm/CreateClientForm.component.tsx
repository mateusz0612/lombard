import { FC } from "react";
import { Label, FormErrorLabel } from "../styled";
import { Stack, TextField } from "@mui/material";
import { useCreateClientForm } from "./CreateClientForm.hook";
import * as Styled from "./CreateClientForm.styled";

interface CreateClientFormProps {
  onSuccess?: () => void;
  onError?: () => void;
}

export const CreateClientForm: FC<CreateClientFormProps> = ({
  onSuccess,
  onError,
}) => {
  const {
    register,
    onRegisterFormSubmit,
    errors,
    isRegisterProgressing,
    registerError,
  } = useCreateClientForm(onSuccess, onError);

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
