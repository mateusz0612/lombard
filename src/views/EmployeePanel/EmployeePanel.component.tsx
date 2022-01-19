import { FC } from "react";
import { Stack } from "@mui/material";
import { Label } from "../../components/styled";
import { EmployeeNavigation } from "../../components/EmployeeNavigation";
import { useEmployeePanel } from "./EmployeePanel.hooks";
import * as Styled from "./EmployeePanel.styled";

export const EmployeePanel: FC = () => {
  const { fullName, wrapperDirection } = useEmployeePanel();

  return (
    <Stack direction={wrapperDirection}>
      <EmployeeNavigation />
      <Stack justifyContent="center" alignItems="center" width="90%">
        <Label fontSize={32} align="center">
          Cześć, <Styled.FullNameLabel>{fullName}</Styled.FullNameLabel> miło
          cię znowu widzieć!
        </Label>
        <Label fontSize={20} align="center">
          Wybierz opcję z panelu aby zarządzać lombardem
        </Label>
      </Stack>
    </Stack>
  );
};
