import { FC } from "react";
import { TableCell, TableRow } from "@mui/material";
import { IClientData } from "../../types";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

interface ClientListItemProps {
  client: IClientData;
  onDeleteClick: () => void;
  onEditClick: () => void;
  onLoanAddClick: () => void;
}

const iconStyle: React.CSSProperties = {
  cursor: "pointer",
};

const nameWrapperStyle: React.CSSProperties = {
  textTransform: "capitalize",
};

export const ClientListItem: FC<ClientListItemProps> = ({
  client,
  onDeleteClick,
  onEditClick,
  onLoanAddClick,
}) => {
  return (
    <TableRow
      key={client?.uid}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="left">
        <span style={nameWrapperStyle}>
          {client?.firstName} {client?.secondName}
        </span>
      </TableCell>
      <TableCell align="left">{client?.email}</TableCell>
      <TableCell align="left">{client?.personalIdNumber}</TableCell>
      <TableCell align="center">
        <DeleteIcon style={iconStyle} onClick={onDeleteClick} />
      </TableCell>
      <TableCell align="center">
        <EditIcon style={iconStyle} onClick={onEditClick} />
      </TableCell>
      <TableCell align="center">
        <AttachMoneyIcon style={iconStyle} onClick={onLoanAddClick} />
      </TableCell>
    </TableRow>
  );
};
