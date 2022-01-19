import { FC } from "react";
import { Stack, Button } from "@mui/material";
import { Label } from "../../components/styled";
import { EmployeeNavigation } from "../../components/EmployeeNavigation";
import { ClientsList } from "../../components/ClientsList";
import { CreateClientModal } from "../../components/CreateClientModal";
import { useEmployeePanel } from "../EmployeePanel";
import { useClients } from "../../hooks/useClients";
import { useModal } from "../../hooks/useModal";
import { useDelete } from "../../hooks/useDelete";
import { Collections } from "../../firebase";
import { theme } from "../../components/styled";

export const EmployeePanelClients: FC = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const { wrapperDirection, isMobile } = useEmployeePanel();
  const { clients, isLoading } = useClients();
  const { deleteItem } = useDelete();

  const deleteClient = (uid: string) => {
    deleteItem({ uid, collection: Collections.USERS });
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
          Lista klientów lombardu
        </Label>
        <Button onClick={openModal}>Dodaj klienta</Button>
        <Stack
          mt={2}
          mb={6}
          width={isMobile ? "100%" : "90%"}
          justifyContent="center"
          alignItems="center"
        >
          <ClientsList
            clients={clients}
            isLoading={isLoading}
            deleteClient={deleteClient}
          />
        </Stack>
        <CreateClientModal isOpen={isOpen} closeModal={closeModal} />
      </Stack>
    </Stack>
  );
};
