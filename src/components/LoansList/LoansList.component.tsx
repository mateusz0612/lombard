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
import { ILoan } from "../../types";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from "date-fns";

interface LoansListProps {
  loans: ILoan[];
  isLoading: boolean;
  deleteLoan: (uid: string) => void;
}

export const LoansList: FC<LoansListProps> = ({
  loans,
  isLoading,
  deleteLoan,
}) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Kod</TableCell>
            <TableCell align="left">PESEL</TableCell>
            <TableCell align="left">Id pracownika</TableCell>
            <TableCell align="left">Data wzięcia pożyczki</TableCell>
            <TableCell align="left">Stopa procentowa</TableCell>
            <TableCell align="left">Kwota do zwrotu</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loans.map((loan) => (
            <TableRow
              key={loan.code}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {loan.code}
              </TableCell>
              <TableCell align="left">
                {loan.personalIdNumber}
              </TableCell>
              <TableCell align="left">{loan.employeeId}</TableCell>
              <TableCell align="left">{format(loan.dateOfLoan.toDate(), 'MM/dd/yyyy')}</TableCell>
              <TableCell align="left">{loan.interest}</TableCell>
              <TableCell align="left">{loan.returnPrice}</TableCell>
              <TableCell align="left">
                <div
                  onClick={() => {
                    deleteLoan(loan?.code);
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
