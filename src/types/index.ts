export interface IClientData {
  firstName: string;
  secondName: string;
  email: string;
  personalIdNumber: string;
  password: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

export type IUser = Omit<Omit<IClientData, "password">, "personalIdNumber"> & {
  uid: string;
};
