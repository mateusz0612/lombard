import { FC } from "react";
import { Button, Stack } from "@mui/material";
import { Modal } from "../Modal";
import { CreateLoanForm } from "../CreateLoanForm";
import { IModal } from "../../types";

type CreateLoanModalProps = {
  personalIdNumber: string;
} & IModal;

export const CreateLoanModal: FC<CreateLoanModalProps> = ({
  isOpen,
  closeModal,
  personalIdNumber,
}) => {
  const onModalClose = () => closeModal();

  return (
    <Modal isOpen={isOpen}>
      <Stack justifyContent="center" alignItems="center ">
        <Button onClick={onModalClose}>Zamknij</Button>
        <CreateLoanForm personalIdNumber={personalIdNumber} />
      </Stack>
    </Modal>
  );
};
