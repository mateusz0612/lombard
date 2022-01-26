import { TableCell } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import { useDelete } from "../../hooks/useDelete";
import { useWhere } from "../../hooks/useWhere";
import { Collections } from "../../firebase";

const tableHeadingStyles: React.CSSProperties = {
  fontWeight: 700,
};

const columns = [
  <TableCell style={tableHeadingStyles} key="code">
    Kod
  </TableCell>,
  <TableCell align="left" style={tableHeadingStyles} key="personalIdNumber">
    PESEL
  </TableCell>,
  <TableCell align="left" style={tableHeadingStyles} key="id">
    Id pracownika
  </TableCell>,
  <TableCell align="center" style={tableHeadingStyles} key="date">
    Data wzięcia pożyczki
  </TableCell>,
  <TableCell align="center" style={tableHeadingStyles} key="interest">
    Stopa procentowa
  </TableCell>,
  <TableCell align="center" style={tableHeadingStyles} key="returnPrice">
    Kwota do zwrotu
  </TableCell>,
  <TableCell align="center" style={tableHeadingStyles} key="delete">
    Rozlicz
  </TableCell>,
  <TableCell align="center" style={tableHeadingStyles} key="info">
    Info
  </TableCell>,
];

export const useLoanList = () => {
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();
  const { deleteItem } = useDelete();
  const { where } = useWhere();

  const onLoanInfoClick = (loanCode: string) =>
    navigate(`/employee-panel-loan-info/${loanCode}`);

  const onDeleteLoanReject = () => {
    closeModal();
  };

  const getItemByLoanIdCode = async (code: string) => {
    const itemDoc = await where({
      collection: Collections.ITEMS,
      fieldPath: "loanId",
      operator: "==",
      value: code,
    });
    const itemId = itemDoc?.docs[0];

    return itemId?.id;
  };

  const onDeleteLoanConfirm = async (code: string) => {
    const itemId = await getItemByLoanIdCode(code);

    deleteItem({
      uid: itemId,
      collection: Collections.ITEMS,
    });

    deleteItem({
      uid: code,
      collection: Collections.LOANS,
      successToastMessage: "Rozliczono pożyczkę",
    });
    closeModal();
  };

  return {
    onLoanInfoClick,
    columns,
    isOpen,
    openModal,
    onDeleteLoanReject,
    onDeleteLoanConfirm,
  };
};
