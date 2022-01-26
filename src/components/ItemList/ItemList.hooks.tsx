import { TableCell } from "@mui/material";

const tableHeadingStyle = {
  fontWeight: 700,
};

const columns = [
  <TableCell align="left" style={tableHeadingStyle} key="name">
    ID przedmiotu
  </TableCell>,
  <TableCell align="left" style={tableHeadingStyle} key="delete">
    ID pożyczki
  </TableCell>,
  <TableCell align="left" style={tableHeadingStyle} key="email">
    Nazwa
  </TableCell>,
  <TableCell align="left" style={tableHeadingStyle} key="personalIdNumber">
    Opis
  </TableCell>,
];

export const useItemList = () => {
  return { columns };
};
