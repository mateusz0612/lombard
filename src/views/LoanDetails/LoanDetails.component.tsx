import { FC } from "react";
import { Stack, Button } from "@mui/material";
import { Label } from "../../components/styled";
import { EmployeeNavigation } from "../../components/EmployeeNavigation";
import { useEmployeePanel } from "../EmployeePanel";
import { theme } from "../../components/styled";
import { useLoans } from "../../hooks/useLoans";
import { LoanInfo } from "../../components/LoanInfo/LoanInfo.component";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { toast } from "../../helpers";

interface LoanDetailsProps {
  isEmployeeView: boolean;
}

export const LoanDetails: FC<LoanDetailsProps> = ({ isEmployeeView }) => {
  const params = useParams();
  const navigate = useNavigate();
  const { wrapperDirection, isMobile } = useEmployeePanel();
  const { loans, isLoading } = useLoans({ code: params.code });

  const onGoBackClick = () => navigate(-1);

  const onCopyLoanCodeClick = () => {
    navigator.clipboard.writeText(loans[0]?.code);
    toast("success", "Pomyślnie skopiowano kod pożyczki", false);
  };

  const wrapperWidth = isMobile || !isEmployeeView ? "100%" : "90%";
  const wrapperMarginLeft =
    !isMobile && isEmployeeView ? theme.employeePanelPageMargin : 0;

  return (
    <Stack direction={wrapperDirection} height="100%">
      {isEmployeeView && <EmployeeNavigation />}
      <Stack
        justifyContent="flex-start"
        alignItems="center"
        width={wrapperWidth}
        mt={3}
        ml={wrapperMarginLeft}
      >
        <Button onClick={onGoBackClick}>Wróć</Button>
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
              {isEmployeeView && (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={onCopyLoanCodeClick}
                >
                  Skopiuj kod pożyczki
                </Button>
              )}
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
