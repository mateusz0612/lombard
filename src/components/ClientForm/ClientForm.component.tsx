import { FC } from "react";
import { Label, FormErrorLabel } from "../styled";
import { Stack, TextField } from "@mui/material";
import { useClientForm } from "./ClientForm.hook";
import { IRegisterClientData } from "../../types";
import * as Styled from "./ClientForm.styled";

interface ClientFormProps {
  onSuccess: (data: IRegisterClientData) => void;
  submitButtonText: string;
  headingText: string;
  isProgressing: boolean;
  errorMessage: string;
  defaultValues?: IRegisterClientData;
}

const inputStyles: React.CSSProperties = {
  textTransform: "capitalize",
};

export const ClientForm: FC<ClientFormProps> = ({
  onSuccess,
  isProgressing,
  errorMessage,
  submitButtonText,
  headingText,
  defaultValues,
}) => {
  const { register, onRegisterFormSubmit, errors } = useClientForm(
    onSuccess,
    defaultValues
  );

  return (
    <Stack spacing={3} width={320}>
      <Label fontSize={36}>{headingText}</Label>
      <TextField
        label="Imię"
        variant="outlined"
        error={!!errors?.firstName}
        helperText={errors?.firstName?.message}
        inputProps={{
          style: inputStyles,
        }}
        {...register("firstName")}
      />
      <TextField
        label="Nazwisko"
        variant="outlined"
        error={!!errors?.secondName}
        helperText={errors?.secondName?.message}
        inputProps={{
          style: inputStyles,
        }}
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
        disabled={isProgressing}
      >
        {submitButtonText}
      </Styled.CreateClientButton>
      {errorMessage && <FormErrorLabel>{errorMessage}</FormErrorLabel>}
    </Stack>
  );
};
