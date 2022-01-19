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
  renderUserInfo?: () => React.ReactNode;
}

export const Navigation: FC<NavigationProps> = ({
  navigationOptions,
  renderUserInfo,
}) => {
  const isMobile = useMediaQuery(theme.queries.mobile);

  return (
    <Styled.NavigationWrapper isMobile={isMobile}>
      <Box role="presentation">
        {renderUserInfo && renderUserInfo()}
        <List>
          {navigationOptions?.map(({ label, icon: Icon, routeTo }) => (
            <Link
              key={label}
              to={routeTo}
              style={{
                textDecoration: "none",
              }}
            >
              <ListItem button>
                <ListItemIcon
                  style={{
                    color: theme.pallete.white,
                  }}
                >
                  <Icon />
                </ListItemIcon>
                <Styled.NavigationListItemText primary={label} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Styled.NavigationWrapper>
  );
};
