import { useMemo } from "react";
import { INavigationItem } from "../../types";
import AddIcon from "@mui/icons-material/Add";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import MoneyIcon from "@mui/icons-material/Money";

export const useEmployeePanelNavigation = () => {
  const navigationOptions: INavigationItem[] = useMemo(
    () => [
      {
        label: "Pożyczki",
        icon: MoneyIcon,
        routeTo: "/",
      },
      {
        label: "Przedmioty",
        icon: LocalLaundryServiceIcon,
        routeTo: "/",
      },
      {
        label: "Dodaj klienta",
        icon: AddIcon,
        routeTo: "/",
      },
    ],
    []
  );

  return { navigationOptions };
};
