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
import { format } from "date-fns";
import { toast } from "../../helpers";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface LoansListProps {
  loans: ILoan[];
  isLoading: boolean;
  deleteLoan: (uid: string) => void;
}

const tableHeadingStyles: React.CSSProperties = {
  fontWeight: 700,
};

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
            <TableCell style={tableHeadingStyles}>Kod</TableCell>
            <TableCell align="left" style={tableHeadingStyles}>
              PESEL
            </TableCell>
            <TableCell align="left" style={tableHeadingStyles}>
              Id pracownika
            </TableCell>
            <TableCell align="center" style={tableHeadingStyles}>
              Data wzięcia pożyczki
            </TableCell>
            <TableCell align="center" style={tableHeadingStyles}>
              Stopa procentowa
            </TableCell>
            <TableCell align="center" style={tableHeadingStyles}>
              Kwota do zwrotu
            </TableCell>
            <TableCell align="center" style={tableHeadingStyles}>
              Rozlicz
            </TableCell>
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
              <TableCell align="left">{loan.personalIdNumber}</TableCell>
              <TableCell align="left">{loan.employeeId}</TableCell>
              <TableCell align="center">
                {format(loan.dateOfLoan.toDate(), "MM/dd/yyyy")}
              </TableCell>
              <TableCell align="center">{loan.interest}</TableCell>
              <TableCell align="center">{loan.returnPrice}</TableCell>
              <TableCell align="center">
                <div
                  onClick={() => {
                    deleteLoan(loan?.code);
                    toast("success", "Rozliczono pożyczkę", false);
                  }}
                >
                  <CheckCircleOutlineIcon
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
