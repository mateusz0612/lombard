import { FC } from "react";
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
import { useDelete } from "../../hooks/useDelete";
import DeleteIcon from "@mui/icons-material/Delete";
import { Collections } from "../../firebase";

interface ClientsListProps {
  clients: IClientData[];
  isLoading: boolean;
}

export const ClientsList: FC<ClientsListProps> = ({ clients, isLoading }) => {
  const { deleteItem } = useDelete();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Imię i nazwisko</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Pesel</TableCell>
            <TableCell align="left">Usuń</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <TableRow
              key={client?.uid}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {client?.uid}
              </TableCell>
              <TableCell align="left">
                {client?.firstName} {client?.secondName}
              </TableCell>
              <TableCell align="left">{client?.email}</TableCell>
              <TableCell align="left">{client?.personalIdNumber}</TableCell>
              <TableCell align="left">
                <div
                  onClick={() => {
                    deleteItem({
                      uid: client?.uid,
                      collection: Collections.USERS,
                    });
                  }}
                >
                  <DeleteIcon
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
