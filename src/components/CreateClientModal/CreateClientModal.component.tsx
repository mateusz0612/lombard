import { FC } from "react";
import { Modal, Button, Stack } from "@mui/material";
import { CreateClientForm } from "../CreateClientForm";

interface CreateClientModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const CreateClientModal: FC<CreateClientModalProps> = ({
  isOpen,
  closeModal,
}) => {
  const onModalClose = () => {
    closeModal();
  };

  return (
    <Modal open={isOpen}>
      <Stack sx={style} justifyContent="center" alignItems="center">
        <Button onClick={onModalClose}>Zamknij</Button>
        <CreateClientForm onSuccess={onModalClose} />
      </Stack>
    </Modal>
  );
};
