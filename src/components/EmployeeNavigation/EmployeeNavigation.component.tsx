import { FC } from "react";
import { UserInfo, useUserInfo } from "../UserInfo";
import { Navigation } from "../Navigation";
import { useEmployeePanelNavigation } from "./EmployeeNavigation.hook";

export const EmployeeNavigation: FC = () => {
  const { navigationOptions } = useEmployeePanelNavigation();
  const { fullName, onLogoutClick } = useUserInfo();

  return (
    <>
      <Navigation
        navigationOptions={navigationOptions}
        renderUserInfo={() => (
          <UserInfo fullName={fullName} onLogoutClick={onLogoutClick} />
        )}
      />
    </>
  );
};
