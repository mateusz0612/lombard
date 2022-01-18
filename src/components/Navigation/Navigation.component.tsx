import { FC } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "../styled";
import { INavigationItem } from "../../types";
import * as Styled from "./Navigation.styled";

interface NavigationProps {
  navigationOptions: INavigationItem[];
  renderEmployeeInfo?: () => React.ReactNode;
}

export const Navigation: FC<NavigationProps> = ({
  navigationOptions,
  renderEmployeeInfo,
}) => {
  const isMobile = useMediaQuery(theme.queries.mobile);

  return (
    <Styled.NavigationWrapper isMobile={isMobile}>
      <Box role="presentation">
        {renderEmployeeInfo && renderEmployeeInfo()}
        <List>
          {navigationOptions?.map(({ label, icon: Icon, routeTo }) => (
            <ListItem button key={label}>
              <ListItemIcon
                style={{
                  color: theme.pallete.white,
                }}
              >
                <Icon />
              </ListItemIcon>
              <Link to={routeTo}>
                <Styled.NavigationListItemText primary={label} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Styled.NavigationWrapper>
  );
};
