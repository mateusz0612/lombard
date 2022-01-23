import styled from "styled-components";

export const Wall = styled.div`
  display: grid;
  grid-template-areas: 
    "kp kp kp kp kp kp kp kp kp"
    "pl pl pl in in in em em em"
    "dp dp dp dp dp sp sp sp sp"
    "kz kz kz kz kz kz kz kz kz";
`;

export const Code = styled.div`
  grid-area: kp;
  border: 1px solid #858585;
`;

export const PESEL = styled.div`
  grid-area: pl;
  border-left: 1px solid #858585;
  border-bottom: 1px solid #858585;
`

export const Name = styled.div`
  grid-area: in;
  border-left: 1px solid #858585;
  border-bottom: 1px solid #858585;
`

export const Email = styled.div`
  grid-area: em;
  border-left: 1px solid #858585;
  border-bottom: 1px solid #858585;
  border-right: 1px solid #858585;
`

export const LoanDate = styled.div`
  grid-area: dp;
  border-left: 1px solid #858585;
  border-bottom: 1px solid #858585;
`
export const Interest = styled.div`
  grid-area: sp;
  border-left: 1px solid #858585;
  border-bottom: 1px solid #858585;
  border-right: 1px solid #858585;
`

export const ReturnPrice = styled.div`
  grid-area: kz;
  border-left: 1px solid #858585;
  border-bottom: 1px solid #858585;
  border-right: 1px solid #858585;
`