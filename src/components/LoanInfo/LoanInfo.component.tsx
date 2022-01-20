import { format } from 'date-fns';
import React, { FC, useEffect, useState } from 'react';
import { useClients } from '../../hooks/useClients';
import { IClientData, ILoan } from '../../types';
import { Loader } from '../Loader';

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
    <>
      {loanInfo.personalIdNumber}
      {currentClient.firstName}
      {currentClient.secondName}
      {currentClient.email}
      {format(loanInfo.dateOfLoan.toDate(), 'MM/dd/yyyy')}
      {loanInfo.returnPrice}
      {loanInfo.interest}
      {loanInfo.code}
    </>
  );
};

