import { FC } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  TableCell,
} from "@mui/material";
import { Loader } from "../Loader";
import { useItemList } from "./ItemList.hooks";
import { IItem } from "../../types";

interface ItemListProps {
  items: IItem[];
  isLoading: boolean;
}

export const ItemList: FC<ItemListProps> = ({ items, isLoading }) => {
  const { columns } = useItemList();

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
          {items.map((item) => (
            <TableRow
              key={item?.uid}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item?.uid}
              </TableCell>
              <TableCell align="left">{item?.loanId}</TableCell>
              <TableCell
                align="left"
                style={{
                  width: "15%",
                }}
              >
                {item?.name}
              </TableCell>
              <TableCell align="left">{item?.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
