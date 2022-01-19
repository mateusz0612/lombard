import { AuthErrorCodes } from "firebase/auth";

const registrationErrors: Record<string, string> = {
  [AuthErrorCodes.INVALID_EMAIL]: "Nieprawidłowy adres email",
  [AuthErrorCodes.EMAIL_EXISTS]: "Użytkownik o takim emailu już istnieje",
  [AuthErrorCodes.WEAK_PASSWORD]: "Hasło musi być dłuższe niż 6 znaków",
  [AuthErrorCodes.USER_DELETED]: "Nie znaleziono takiego użytkownika",
  [AuthErrorCodes.INVALID_PASSWORD]: "Hasło jest nieprawidłowe",
};

export const getRegistrationErrorMessage = (errorCode: string) =>
  registrationErrors[errorCode];
