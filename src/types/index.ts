import { FC } from "react";

export interface IClientData {
  uid: string;
  firstName: string;
  secondName: string;
  email: string;
  personalIdNumber: string;
}

export type IRegisterClientData = Omit<IClientData, "uid">;

export interface IUserCredentials {
  email: string;
  password: string;
}

export interface INavigationItem {
  label: string;
  icon: FC;
  routeTo: string;
};

export type IUser = Omit<Omit<IClientData, "password">, "personalIdNumber"> & {
  uid: string;
};
export interface ILoan {
  id: string;
  code: string;
  clientId: string;
  interest: number;
  returnPrice: number;
  dateOfLoan: Date | string;
  employeeId: string;
}

export interface IItem {
  id: string;
  name: string;
  clientId: string;
  price: number;
  description: string;
  employeeId: string;
}
