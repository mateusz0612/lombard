import React, { FC } from "react";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";

interface LoaderProps {
  isLoading: boolean;
  children: React.ReactNode[] | React.ReactNode;
}

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95vw;
  height: 95vh;
`;

export const Loader: FC<LoaderProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <LoaderWrapper>
        <CircularProgress />
      </LoaderWrapper>
    );
  }

  return <>{children}</>;
};
