import { FC } from 'react';
import { CreateLoanForm } from '../../components/CreateLoanForm';
import { Label } from '../../components/styled';

export const Loan: FC = () => {
  return (
    <div>
      <Label>
        <CreateLoanForm />
      </Label>
    </div>
  )
}

