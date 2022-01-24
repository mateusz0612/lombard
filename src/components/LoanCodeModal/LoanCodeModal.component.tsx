import { FC } from "react";
import { Stack, Button, TextField } from "@mui/material";
import { Modal } from "../Modal";
import { Label } from "../styled";
import { IModal } from "../../types";
import { useLoanCodeModal } from "./LoanCodeModal.hooks";

export const LoanCodeModal: FC<IModal> = ({ isOpen, closeModal }) => {
  const { code, codeHasError, onCodeChange, onCodeConfirm } =
    useLoanCodeModal();

  return (
    <Modal isOpen={isOpen}>
      <Stack justifyContent="center">
        <Stack mb={2}>
          <Label align="center" fontSize={18} fontWeight={600}>
            Wprowadź swój kod pożyczki a następnie kliknij 'Sprawdź pożyczkę'.
          </Label>
        </Stack>
        <TextField
          placeholder="Wprowadź kod pożyczki"
          label="Kod pożyczki"
          value={code}
          onChange={onCodeChange}
          error={codeHasError}
          helperText={codeHasError && "Kod musi mieć 20 znaków"}
        />
        <Stack direction="row" justifyContent="space-between" mt={2}>
          <Button variant="contained" color="secondary" onClick={closeModal}>
            Zamknij
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={codeHasError}
            onClick={onCodeConfirm}
          >
            Sprawdź pożyczkę
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
};
