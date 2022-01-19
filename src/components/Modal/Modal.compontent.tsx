import { FC } from "react";
import { Modal as MuiModal, Stack } from "@mui/material";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactElement | React.ReactElement[];
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Modal: FC<ModalProps> = ({ isOpen, children }) => {
  return (
    <MuiModal open={isOpen}>
      <Stack sx={style}>{children}</Stack>
    </MuiModal>
  );
};
