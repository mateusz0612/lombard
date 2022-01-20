import { Route } from "react-router-dom";
import { LandingPage } from "../views/LandingPage/LandingPage.component";
import { EmployeeLogin } from "../views/EmployeeLogin";
import { EmployeePanel } from "../views/EmployeePanel/EmployeePanel.component";
import { EmployeePanelClients } from "../views/EmployeePanelClients";
import { Loan } from "../views/Loan/Loan.component";

export enum Paths {
  LandingPage = "/",
  DefaultRoute = "/*",
  EmployeeLogin = "/employee-login",
  EmployeePanel = "/employee-panel",
  EmployeePanelClients = "/employee-panel-clients",
  LoanPanel = "/loan-panel"
}

export const RouteList = [
  <Route
    key={Paths.LandingPage}
    path={Paths.LandingPage}
    element={<LandingPage />}
  />,
  <Route
    key={Paths.EmployeeLogin}
    path={Paths.EmployeeLogin}
    element={<EmployeeLogin />}
  />,
];

export const ProtectedRouteList = [
  <Route
    key={Paths.EmployeePanel}
    path={Paths.EmployeePanel}
    element={<EmployeePanel />}
  />,
  <Route
    key={Paths.EmployeePanelClients}
    path={Paths.EmployeePanelClients}
    element={<EmployeePanelClients />}
  />,
  <Route
    key={Paths.LoanPanel}
    path={Paths.LoanPanel}
    element={<Loan />}
  />,
];
