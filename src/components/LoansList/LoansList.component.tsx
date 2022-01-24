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
import { Label } from "../styled";
import { ILoan } from "../../types";
import { format } from "date-fns";
import { ConfirmationModal } from "../ConfirmationModal";
import { useLoanList } from "./LoanList.hooks";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InfoIcon from "@mui/icons-material/Info";

interface LoansListProps {
  loans: ILoan[];
  isLoading: boolean;
  deleteLoan: (uid: string) => void;
}

const iconStyles: React.CSSProperties = {
  cursor: "pointer",
};

export const LoansList: FC<LoansListProps> = ({
  loans,
  isLoading,
  deleteLoan,
}) => {
  const [currentLoanCode, setCurrentLoanCode] = useState("");

  const {
    columns,
    isOpen,
    onLoanInfoClick,
    openModal,
    onDeleteLoanConfirm,
    onDeleteLoanReject,
  } = useLoanList();

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
          {loans.map((loan) => (
            <TableRow
              key={loan?.code}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {loan.code}
              </TableCell>
              <TableCell align="left">{loan?.personalIdNumber}</TableCell>
              <TableCell align="left">{loan?.employeeId}</TableCell>
              <TableCell align="center">
                {format(loan.dateOfLoan.toDate(), "MM/dd/yyyy")}
              </TableCell>
              <TableCell align="center">{loan?.interest}</TableCell>
              <TableCell align="center">{loan?.returnPrice}</TableCell>
              <TableCell align="center">
                <div
                  onClick={() => {
                    setCurrentLoanCode(loan?.code);
                    openModal();
                  }}
                >
                  <CheckCircleOutlineIcon style={iconStyles} />
                </div>
              </TableCell>
              <TableCell align="center">
                <InfoIcon
                  style={iconStyles}
                  onClick={() => onLoanInfoClick(loan?.code)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ConfirmationModal
        isOpen={isOpen}
        onReject={onDeleteLoanReject}
        onConfirm={() => onDeleteLoanConfirm(currentLoanCode)}
      >
        <Label align="center">
          Czy na pewno chcesz rozliczyć pożyczkę o kodzie{" "}
          <b>{currentLoanCode}</b>?
        </Label>
      </ConfirmationModal>
    </TableContainer>
  );
};
