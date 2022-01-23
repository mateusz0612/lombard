import { FC } from 'react';
import * as Styled from './LoanInfoWall.styled'

type LoanInfoWallProps = {
  children: JSX.Element | JSX.Element[];
}

export const LoanInfoWall: FC<LoanInfoWallProps> = ({ children }) =>
  <Styled.Wall>
    {children}
  </Styled.Wall>

