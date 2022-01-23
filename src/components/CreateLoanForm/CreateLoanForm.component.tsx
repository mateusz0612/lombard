import { Stack, TextField } from "@mui/material";
import { FC } from "react";
import { Label } from "../styled";
import { useCreateLoanForm } from "./CreateLoanForm.hook";
import * as Styled from "../ClientForm/ClientForm.styled";

interface CreateLoanFormProps {
  personalIdNumber: string;
}

export const CreateLoanForm: FC<CreateLoanFormProps> = ({
  personalIdNumber,
}) => {
  const { register, onLoanFormSubmit, errors, isValid } =
    useCreateLoanForm(personalIdNumber);

  return (
    <Stack spacing={3} width={320}>
      <Label fontSize={36}>Stwórz pożyczkę</Label>
      <TextField
        label="Pesel"
        variant="outlined"
        value={personalIdNumber}
        disabled
      />
      <TextField
        label="Stopa procentowa"
        variant="outlined"
        type="number"
        error={!!errors?.interest}
        helperText={errors?.interest?.message}
        {...register("interest")}
      />
      <TextField
        label="Kwota do zwrotu"
        variant="outlined"
        type="number"
        error={!!errors.returnPrice}
        helperText={errors?.returnPrice?.message}
        {...register("returnPrice")}
      />
      <Styled.CreateClientButton
        variant="contained"
        onClick={onLoanFormSubmit}
        disabled={!isValid}
      >
        Stwórz Pożyczkę
      </Styled.CreateClientButton>
    </Stack>
  );
};
