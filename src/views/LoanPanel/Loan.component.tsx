import { Stack } from '@mui/material';
import { FC } from 'react';
import { CreateLoanForm } from '../../components/CreateLoanForm';
import { EmployeeNavigation } from '../../components/EmployeeNavigation';
import { theme } from '../../components/styled';
import { useEmployeePanel } from '../EmployeePanel';

export const Loan: FC = () => {
  const { wrapperDirection, isMobile } = useEmployeePanel();

  return (
    <Stack direction={wrapperDirection}>
      <EmployeeNavigation />
      <Stack
        width={isMobile ? "100%" : "90%"}
        justifyContent="center"
        alignItems="center"
        mt={20}
        ml={!isMobile ? theme.employeePanelPageMargin : 0}
      >
        <CreateLoanForm />
      </Stack>
    </Stack>
  )
}

