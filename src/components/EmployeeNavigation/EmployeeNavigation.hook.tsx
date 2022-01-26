import { useMemo } from "react";
import { INavigationItem } from "../../types";
import { Paths } from "../../routes";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import MoneyIcon from "@mui/icons-material/Money";

export const useEmployeePanelNavigation = () => {
  const navigationOptions: INavigationItem[] = useMemo(
    () => [
      {
        label: "Panel",
        icon: HomeIcon,
        routeTo: Paths.EmployeePanel,
      },
      {
        label: "Pożyczki",
        icon: MoneyIcon,
        routeTo: Paths.EmployeePanelLoans,
      },
      {
        label: "Przedmioty",
        icon: LocalLaundryServiceIcon,
        routeTo: Paths.EmployeePanelItems,
      },
      {
        label: "Klienci",
        icon: PersonIcon,
        routeTo: Paths.EmployeePanelClients,
      },
    ],
    []
  );

  return { navigationOptions };
};
