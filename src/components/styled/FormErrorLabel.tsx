import { FormLabel } from "@mui/material";
import { ReactChild, FC } from "react";
import styled from "styled-components";

interface FormErrorLabelProps {
  children: ReactChild;
}

const StyledErrorLabel = styled(FormLabel)`
  color: red;
  align-self: center;
`;

export const FormErrorLabel: FC<FormErrorLabelProps> = ({ children }) => {
  return <StyledErrorLabel>{children}</StyledErrorLabel>;
};
