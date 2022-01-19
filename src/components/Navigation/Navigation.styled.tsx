import { ListItemText } from "@mui/material";
import styled from "styled-components";

interface NavigationWrapperProps {
  isMobile: boolean;
}

export const NavigationWrapper = styled.div<NavigationWrapperProps>`
  width: ${(props) => (props.isMobile ? "100%" : "250px")};
  height: "auto";
  background: ${(props) => props.theme.pallete.navigationBackground};
`;

export const NavigationListItemText = styled(ListItemText)`
  color: ${(props) => props.theme.pallete.white};
`;
