import { FC } from "react";
import { Stack, Button } from "@mui/material";
import { Label } from "../../components/styled";
import { EmployeeNavigation } from "../../components/EmployeeNavigation";
import { useEmployeePanel } from "../EmployeePanel";
import { theme } from "../../components/styled";
import { useLoans } from "../../hooks/useLoans";
import { LoanInfo } from "../../components/LoanInfo/LoanInfo.component";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { toast } from "../../helpers";

export const LoanDetails: FC = () => {
  const params = useParams();
  const { wrapperDirection, isMobile } = useEmployeePanel();
  const { loans, isLoading } = useLoans({ code: params.code });

  const onCopyLoanCodeClick = () => {
    navigator.clipboard.writeText(loans[0]?.code);
    toast("success", "Pomyślnie skopiowano kod pożyczki", false);
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
          Informacje o pożyczce
        </Label>
        <Stack
          mt={2}
          mb={6}
          width={isMobile ? "100%" : "90%"}
          justifyContent="center"
          alignItems="center"
        >
          {isLoading ? (
            <Loader />
          ) : (
            <Stack spacing={3} justifyContent="center" alignItems="center">
              <LoanInfo loanInfo={loans[0]} />
              <Button
                variant="contained"
                color="secondary"
                onClick={onCopyLoanCodeClick}
              >
                Skopiuj kod pożyczki
              </Button>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
