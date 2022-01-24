import { FC } from "react";
import { Stack } from "@mui/material";
import { Label } from "../../components/styled";
import { EmployeeNavigation } from "../../components/EmployeeNavigation";
import { useEmployeePanel } from "../EmployeePanel";
import { useDelete } from "../../hooks/useDelete";
import { Collections } from "../../firebase";
import { theme } from "../../components/styled";
import { useLoans } from "../../hooks/useLoans";
import { LoansList } from "../../components/LoansList/LoansList.component";

export const LoanPanelLoans: FC = () => {
  const { wrapperDirection, isMobile } = useEmployeePanel();
  const { loans, isLoading } = useLoans({});
  const { deleteItem } = useDelete();

  const deleteLoan = (uid: string) => {
    deleteItem({
      uid,
      collection: Collections.LOANS,
      successToastMessage: "Rozliczono pożyczkę",
    });
  };

  return (
    <Stack direction={wrapperDirection} height="100%">
      <EmployeeNavigation />
      <Stack
        justifyContent="flex-start"
        alignItems="center"
        width={isMobile ? "100%" : "90%"}
        mt={3}
        ml={!isMobile ? theme.employeePanelPageMargin : 0}
      >
        <Label fontSize={24} fontWeight={700}>
          Lista pożyczek
        </Label>
        <Stack
          mt={2}
          mb={6}
          width={isMobile ? "100%" : "90%"}
          justifyContent="center"
          alignItems="center"
        >
          <LoansList
            loans={loans}
            isLoading={isLoading}
            deleteLoan={deleteLoan}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
