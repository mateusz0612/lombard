import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";

export const LogoutButton = styled(LogoutIcon)`
  color: ${(props) => props.theme.pallete.white};
  cursor: pointer;
`;
