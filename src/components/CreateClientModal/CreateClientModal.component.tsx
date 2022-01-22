import { FC } from "react";
import { Modal } from "../Modal";
import { Button, Stack } from "@mui/material";
import { useRegister } from "../../hooks/useRegister";
import { ClientForm } from "../ClientForm";
import { IRegisterClientData } from "../../types";

interface CreateClientModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const CreateClientModal: FC<CreateClientModalProps> = ({
  isOpen,
  closeModal,
}) => {
  const { registerUser, isRegisterProgressing, registerError } = useRegister();

  const onModalClose = () => {
    closeModal();
  };

  const onUserCreate = async (userData: IRegisterClientData) => {
    await registerUser(userData);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen}>
      <Stack justifyContent="center" alignItems="center">
        <Button onClick={onModalClose}>Zamknij</Button>
        <ClientForm
          onSuccess={onUserCreate}
          isProgressing={isRegisterProgressing}
          errorMessage={registerError}
          submitButtonText="Stwórz"
          headingText="Stwórz klienta"
        />
      </Stack>
    </Modal>
  );
};
