import { FC } from "react";
import { Stack, Button } from "@mui/material";
import { ClientForm } from "../ClientForm";
import { Modal } from "../Modal";
import { useEditClient } from "../../hooks/useEditClient";
import { IClientData, IRegisterClientData, IModal } from "../../types";
import { toast } from "../../helpers";

type EditClientModalProps = {
  editUserData: IClientData;
} & IModal;

export const EditClientModal: FC<EditClientModalProps> = ({
  isOpen,
  closeModal,
  editUserData,
}) => {
  const { editClient, isClientEditing, clientEditingError } = useEditClient();

  const onModalClose = () => {
    closeModal();
  };

  const onEditClient = (data: IRegisterClientData) => {
    editClient(editUserData?.uid, data);
    closeModal();
    toast("success", "Zaktualizowano klienta!", false);
  };

  return (
    <Modal isOpen={isOpen}>
      <Stack justifyContent="center" alignItems="center">
        <Button onClick={onModalClose}>Zamknij</Button>
        <ClientForm
          onSuccess={onEditClient}
          isProgressing={isClientEditing}
          errorMessage={clientEditingError}
          submitButtonText="Edytuj"
          headingText="Edytuj klienta"
          defaultValues={editUserData}
        />
      </Stack>
    </Modal>
  );
};
