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
}
