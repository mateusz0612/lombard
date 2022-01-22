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
import { IClientData } from "../../types";
import { EditClientModal } from "../EditClientModal";
import { useModal } from "../../hooks/useModal";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface ClientsListProps {
  clients: IClientData[];
  isLoading: boolean;
  deleteClient: (uid: string) => void;
}

const iconStyle = {
  cursor: "pointer",
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
  const { isOpen, openModal, closeModal } = useModal();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Imię i nazwisko</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Pesel</TableCell>
            <TableCell align="left">Usuń</TableCell>
            <TableCell align="left">Edytuj</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <TableRow
              key={client?.uid}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">
                <span
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {client?.firstName} {client?.secondName}
                </span>
              </TableCell>
              <TableCell align="left">{client?.email}</TableCell>
              <TableCell align="left">{client?.personalIdNumber}</TableCell>
              <TableCell align="left">
                <DeleteIcon
                  style={iconStyle}
                  onClick={() => {
                    deleteClient(client?.uid);
                  }}
                />
              </TableCell>
              <TableCell>
                <EditIcon
                  style={iconStyle}
                  onClick={() => {
                    setCurrentClient(client);
                    openModal();
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <EditClientModal
        isOpen={isOpen}
        closeModal={closeModal}
        editUserData={currentClient}
      />
    </TableContainer>
  );
};
