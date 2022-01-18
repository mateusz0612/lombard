import { FC } from "react";
import { Navigation } from "../../components/Navigation";
import { EmployeeInfo } from "../../components/EmployeeInfo";
import { useEmployeePanelNavigation } from "./EmployeePanel.hooks";
import { useEmployeeInfo } from "../../components/EmployeeInfo";

export const EmployeePanel: FC = () => {
  const { navigationOptions } = useEmployeePanelNavigation();
  const { fullName, onLogoutClick } = useEmployeeInfo();

  return (
    <>
      <Navigation
        navigationOptions={navigationOptions}
        renderEmployeeInfo={() => (
          <EmployeeInfo fullName={fullName} onLogoutClick={onLogoutClick} />
        )}
      />
    </>
  );
};
