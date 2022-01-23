import { format } from 'date-fns';
import { FC, useEffect, useState } from 'react';
import { useClients } from '../../hooks/useClients';
import { ILoan } from '../../types';
import { Loader } from '../Loader';
import { LoanInfoBrick } from '../LoanInfoBrick/LoanInfoBrick.component';
import { LoanInfoWall } from '../LoanInfoWall/LoanInfoWall.component';
import * as Styled from '../LoanInfoWall/LoanInfoWall.styled'

interface ILoanInfo {
  loanInfo: ILoan,
}

export const LoanInfo: FC<ILoanInfo> = ({ loanInfo }) => {
  const { clients, isLoading: isLoadingClients } = useClients()
  const [currentClient, setCurrentClient] = useState({
    firstName: '',
    secondName: '',
    email: ''
  });

  useEffect(() => {
    if (!isLoadingClients) {
      setCurrentClient(clients.filter(client => client['personalIdNumber'] === loanInfo.personalIdNumber)[0])
    }
  }, [isLoadingClients, clients, loanInfo.personalIdNumber])

  if (isLoadingClients) {
    return <Loader />
  }

  return (
    <LoanInfoWall>
      <Styled.Code>
        <LoanInfoBrick value={loanInfo.code} label="Kod pożyczki" />
      </Styled.Code>
      <Styled.PESEL>
        <LoanInfoBrick value={loanInfo.personalIdNumber} label="PESEL" />
      </Styled.PESEL>
      <Styled.Name>
        <LoanInfoBrick value={`${currentClient.firstName} ${currentClient.secondName}`} label="Imię i nazwisko" />
      </Styled.Name>
      <Styled.Email>
        <LoanInfoBrick value={currentClient.email} label="E-mail" />
      </Styled.Email>
      <Styled.LoanDate>
        <LoanInfoBrick value={format(loanInfo.dateOfLoan.toDate(), 'MM/dd/yyyy')} label="Data wzięcia pożyczki" />
      </Styled.LoanDate>
      <Styled.Interest>
        <LoanInfoBrick value={loanInfo.interest} label="Stopa procentowa w skali miesiąca" />
      </Styled.Interest>
      <Styled.ReturnPrice>
        <LoanInfoBrick value={loanInfo.returnPrice} label="Kwota do zwrotu" />
      </Styled.ReturnPrice>
    </LoanInfoWall>
  );
};

