import { Timestamp } from "firebase/firestore";
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
  code: string;
  personalIdNumber: string;
  interest: number;
  returnPrice: number;
  dateOfLoan: Timestamp;
  employeeId: string;
}

export interface IItem {
  id: string;
  name: string;
  personalIdNumber: string;
  price: number;
  description: string;
  employeeId: string;
}

export interface ICode {
  code?: string
}
