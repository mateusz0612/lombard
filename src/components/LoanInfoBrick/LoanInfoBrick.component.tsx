import { FC } from 'react';
import * as Styled from './LoanInfoBrick.styled'

type LoanInfoBrickProps = {
  label: string;
  value: string | number | Date;
}

export const LoanInfoBrick: FC<LoanInfoBrickProps> = ({ label, value }) => {
  return (
    <Styled.Brick>
      <Styled.BrickValue>
        {value}
      </Styled.BrickValue>
      <Styled.BrickLabel>
        {label}
      </Styled.BrickLabel>
    </Styled.Brick>
  )
};
