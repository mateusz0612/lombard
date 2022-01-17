import { ReactChild, FC } from "react";
import { FormLabel } from "@mui/material";
import styled from "styled-components";

interface LabelProps {
  fontSize?: number;
  fontWeight?: number;
  align?: "start" | "end" | "left" | "right" | "center" | "justify";
  children: ReactChild;
}

const StyledLabel = styled(FormLabel)`
  align-self: center;
`;

export const Label: FC<LabelProps> = ({
  fontSize,
  fontWeight,
  align,
  children,
}) => {
  return (
    <StyledLabel style={{ fontSize, fontWeight, textAlign: align }}>
      {children}
    </StyledLabel>
  );
};
