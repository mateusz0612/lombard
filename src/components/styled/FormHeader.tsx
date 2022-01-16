import { ReactChild, FC } from "react";
import { FormLabel } from "@mui/material";
import styled from "styled-components";

interface FormHeaderProps {
  children: ReactChild;
}

const StyledFormHeader = styled(FormLabel)`
  font-size: 36px;
  letter-spacing: 3px;
  align-self: center;
`;

export const FormHeader: FC<FormHeaderProps> = ({ children }) => {
  return <StyledFormHeader>{children}</StyledFormHeader>;
};
