import { FC } from "react";
import { Stack, Button } from "@mui/material";
import { Modal } from "../Modal";

interface ConfirmationModalProps {
  isOpen: boolean;
  onReject: () => void;
  onConfirm: () => void;
  children: React.ReactElement;
}

export const ConfirmationModal: FC<ConfirmationModalProps> = ({
  isOpen,
  onReject,
  onConfirm,
  children,
}) => {
  return (
    <Modal isOpen={isOpen}>
      {children}
      <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
        <Button variant="contained" color="secondary" onClick={onReject}>
          Nie
        </Button>
        <Button variant="contained" color="primary" onClick={onConfirm}>
          Tak
        </Button>
      </Stack>
    </Modal>
  );
};
