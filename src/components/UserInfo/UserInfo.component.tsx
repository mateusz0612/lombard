import { FC } from "react";
import { Stack } from "@mui/material";
import { Label } from "../styled";
import { theme } from "../styled";
import * as Styled from "./UserInfo.styled";

interface EmployeeInfoProps {
  fullName: string;
  onLogoutClick: () => void;
}

export const UserInfo: FC<EmployeeInfoProps> = ({
  fullName,
  onLogoutClick,
}) => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Label color={theme.pallete.white} fontWeight={700} align="center">
        <p>{fullName}</p>
        <Styled.ProfileTypeWrapper>Pracownik</Styled.ProfileTypeWrapper>
      </Label>
      <Styled.LogoutButton
        onClick={onLogoutClick}
        style={{
          color: theme.pallete.white,
          cursor: "pointer",
        }}
      />
    </Stack>
  );
};
