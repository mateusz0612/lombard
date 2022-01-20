import { Stack, TextField } from '@mui/material';
import { FC } from 'react'
import { Label } from '../styled';
import { useCreateLoanForm } from './CreateLoanForm.hook';
import * as Styled from "../CreateClientForm/CreateClientForm.styled";

export const CreateLoanForm: FC = () => {
  const {
    register,
    onLoanFormSubmit,
    errors,
    isValid
  } = useCreateLoanForm();

  return (
    <Stack spacing={3} width={320}>
      <Label fontSize={36}>Stwórz pożyczkę</Label>
      <TextField
        label="Pesel"
        variant="outlined"
        error={!!errors?.clientId}
        helperText={errors?.clientId?.message}
        {...register("clientId")}
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
}
