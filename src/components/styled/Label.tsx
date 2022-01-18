import { ReactChild, FC } from "react";
import { FormLabel } from "@mui/material";
import styled from "styled-components";

interface LabelProps {
  fontSize?: number;
  fontWeight?: number;
  align?: "start" | "end" | "left" | "right" | "center" | "justify";
  color?: string;
  children: ReactChild;
}

const StyledLabel = styled(FormLabel)`
  align-self: center;
`;

export const Label: FC<LabelProps> = ({
  fontSize,
  fontWeight,
  align,
  color,
  children,
}) => {
  return (
    <StyledLabel style={{ fontSize, fontWeight, color, textAlign: align }}>
      {children}
    </StyledLabel>
  );
};
