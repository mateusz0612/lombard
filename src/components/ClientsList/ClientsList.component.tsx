import { FC, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { Loader } from "../Loader";
import { ClientListItem } from "../ClientListItem";
import { IClientData } from "../../types";
import { EditClientModal } from "../EditClientModal";
import { CreateLoanModal } from "../CreateLoanModal";
import { useModal } from "../../hooks/useModal";
import { toast } from "../../helpers";

interface ClientsListProps {
  clients: IClientData[];
  isLoading: boolean;
  deleteClient: (uid: string) => void;
}

const tableHeadingStyle = {
  fontWeight: 700,
};

const defaultClientData: IClientData = {
  email: "",
  firstName: "",
  secondName: "",
  personalIdNumber: "",
  uid: "",
};

export const ClientsList: FC<ClientsListProps> = ({
  clients,
  isLoading,
  deleteClient,
}) => {
  const [currentClient, setCurrentClient] =
    useState<IClientData>(defaultClientData);
  const [currentPersonalIdNumber, setCurrentPersonalIdNumber] = useState("");

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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" style={tableHeadingStyle}>
              Imię i nazwisko
            </TableCell>
            <TableCell align="left" style={tableHeadingStyle}>
              Email
            </TableCell>
            <TableCell align="left" style={tableHeadingStyle}>
              Pesel
            </TableCell>
            <TableCell align="center" style={tableHeadingStyle}>
              Usuń
            </TableCell>
            <TableCell align="center" style={tableHeadingStyle}>
              Edytuj
            </TableCell>
            <TableCell align="center" style={tableHeadingStyle}>
              Pożyczka
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <ClientListItem
              key={client?.uid}
              client={client}
              onDeleteClick={() => {
                deleteClient(client?.uid);
                toast("success", "Klient został usunięty!", false);
              }}
              onEditClick={() => {
                setCurrentClient(client);
                openEditModal();
              }}
              onLoanAddClick={() => {
                setCurrentPersonalIdNumber(client?.personalIdNumber);
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
        personalIdNumber={currentPersonalIdNumber}
      />
    </TableContainer>
  );
};
