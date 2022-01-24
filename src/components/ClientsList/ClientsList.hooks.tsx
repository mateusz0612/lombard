import { useState } from "react";
import { useModal } from "../../hooks/useModal";
import { useDelete } from "../../hooks/useDelete";
import { IClientData } from "../../types";
import { Collections } from "../../firebase";
import { TableCell } from "@mui/material";

const defaultClientData: IClientData = {
  email: "",
  firstName: "",
  secondName: "",
  personalIdNumber: "",
  uid: "",
};

const tableHeadingStyle = {
  fontWeight: 700,
};

const columns = [
  <TableCell align="left" style={tableHeadingStyle} key="name">
    Imię i nazwisko
  </TableCell>,
  <TableCell align="left" style={tableHeadingStyle} key="email">
    Email
  </TableCell>,
  <TableCell align="left" style={tableHeadingStyle} key="personalIdNumber">
    Pesel
  </TableCell>,
  <TableCell align="center" style={tableHeadingStyle} key="delete">
    Usuń
  </TableCell>,
  <TableCell align="center" style={tableHeadingStyle} key="edit">
    Edytuj
  </TableCell>,
  <TableCell align="center" style={tableHeadingStyle} key="loan">
    Pożyczka
  </TableCell>,
];

export const useClientsList = () => {
  const [currentClient, setCurrentClient] =
    useState<IClientData>(defaultClientData);

  const {
    isOpen: isEditModalOpen,
    openModal: openEditModal,
    closeModal: closeEditModal,
  } = useModal();

  const {
    isOpen: isLoanModalOpen,
    openModal: openLoanModal,
    closeModal: closeLoanModal,
  } = useModal();

  const {
    isOpen: isDeleteClientConfirmationModalOpen,
    openModal: openDeleteClientConfirmationModalOpen,
    closeModal: closeDeleteClientConfirmationModalOpen,
  } = useModal();

  const { deleteItem } = useDelete();

  const deleteClient = (deleteClientUid: string) => {
    deleteItem({
      uid: deleteClientUid,
      collection: Collections.USERS,
      successToastMessage: "Usunięto użytkownika",
    });
    closeDeleteClientConfirmationModalOpen();
  };

  return {
    currentClient,
    isDeleteClientConfirmationModalOpen,
    isEditModalOpen,
    isLoanModalOpen,
    openEditModal,
    closeEditModal,
    openLoanModal,
    closeLoanModal,
    openDeleteClientConfirmationModalOpen,
    closeDeleteClientConfirmationModalOpen,
    deleteClient,
    setCurrentClient,
    columns,
  };
};
