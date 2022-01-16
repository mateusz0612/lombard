import { AuthErrorCodes } from "firebase/auth";

const registrationErrors: Record<string, string> = {
  [AuthErrorCodes.INVALID_EMAIL]: "Nieprawidłowy adres email",
  [AuthErrorCodes.EMAIL_EXISTS]: "Użytkownik o takim emailu już istnieje",
  [AuthErrorCodes.WEAK_PASSWORD]: "Hasło musi być dłuższe niż 6 znaków",
};

export const getRegistrationErrorMessage = (errorCode: string) =>
  registrationErrors[errorCode];
