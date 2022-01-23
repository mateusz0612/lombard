import { FC } from "react";
import { Modal } from "../Modal";
import { Button, Stack } from "@mui/material";
import { useRegister } from "../../hooks/useRegister";
import { ClientForm } from "../ClientForm";
import { IRegisterClientData, IModal } from "../../types";
import { toast } from "../../helpers";

export const CreateClientModal: FC<IModal> = ({ isOpen, closeModal }) => {
  const { registerUser, isRegisterProgressing, registerError } = useRegister();

  const onModalClose = () => {
    closeModal();
  };

  const onUserCreate = async (userData: IRegisterClientData) => {
    await registerUser(userData);
    closeModal();
    toast("success", "Dodano klienta!", false);
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
