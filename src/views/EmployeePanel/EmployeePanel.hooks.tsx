import { useUserContext } from "../../contexts/UserContext";
import { useMediaQuery } from "@mui/material";
import { theme } from "../../components/styled";
import { ResponsiveStyleValue } from "@mui/system";

export const useEmployeePanel = () => {
  const user = useUserContext();
  const isMobile = useMediaQuery(theme.queries.mobile);

  const fullName = user?.user?.displayName as string;
  const wrapperDirection: ResponsiveStyleValue<"column" | "row"> = isMobile
    ? "column"
    : "row";

  return { fullName, wrapperDirection, isMobile };
};
