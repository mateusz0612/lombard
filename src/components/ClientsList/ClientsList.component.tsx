import { FC } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { useClientsList } from "./ClientsList.hooks";
import { Loader } from "../Loader";
import { Label } from "../styled/Label";
import { ClientListItem } from "../ClientListItem";
import { IClientData } from "../../types";
import { EditClientModal } from "../EditClientModal";
import { CreateLoanModal } from "../CreateLoanModal";
import { ConfirmationModal } from "../ConfirmationModal";

interface ClientsListProps {
  clients: IClientData[];
  isLoading: boolean;
}

export const ClientsList: FC<ClientsListProps> = ({ clients, isLoading }) => {
  const {
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
  } = useClientsList();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>{columns}</TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <ClientListItem
              key={client?.uid}
              client={client}
              onDeleteClick={() => {
                setCurrentClient(client);
                openDeleteClientConfirmationModalOpen();
              }}
              onEditClick={() => {
                setCurrentClient(client);
                openEditModal();
              }}
              onLoanAddClick={() => {
                setCurrentClient(client);
                openLoanModal();
              }}
            />
          ))}
        </TableBody>
      </Table>
      <EditClientModal
        isOpen={isEditModalOpen}
        closeModal={closeEditModal}
        editUserData={currentClient}
      />
      <CreateLoanModal
        isOpen={isLoanModalOpen}
        closeModal={closeLoanModal}
        personalIdNumber={currentClient?.personalIdNumber}
      />
      <ConfirmationModal
        isOpen={isDeleteClientConfirmationModalOpen}
        onReject={() => closeDeleteClientConfirmationModalOpen()}
        onConfirm={() => deleteClient(currentClient?.uid)}
      >
        <Label align="center">
          Czy na pewno chcesz usunać użytownika{" "}
          <b>
            {currentClient?.firstName} {currentClient?.secondName}
          </b>
        </Label>
      </ConfirmationModal>
    </TableContainer>
  );
};
