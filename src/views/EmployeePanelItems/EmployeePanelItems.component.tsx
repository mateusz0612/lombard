import { Stack } from "@mui/material";
import { FC } from "react";
import { EmployeeNavigation } from "../../components/EmployeeNavigation";
import { ItemList } from "../../components/ItemList";
import { Label } from "../../components/styled";
import { useEmployeePanel } from "../EmployeePanel";
import { useItems } from "../../hooks/useItems";
import { theme } from "../../components/styled";

export const EmployeePanelItems: FC = () => {
  const { wrapperDirection, isMobile } = useEmployeePanel();
  const { items, isLoading } = useItems();

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
          Lista zastawionych przedmiotów
        </Label>
        <Stack
          mt={2}
          mb={6}
          width={isMobile ? "100%" : "90%"}
          justifyContent="center"
          alignItems="center"
        >
          <ItemList isLoading={isLoading} items={items} />
        </Stack>
      </Stack>
    </Stack>
  );
};
