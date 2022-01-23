import { Route } from "react-router-dom";
import { LandingPage } from "../views/LandingPage/LandingPage.component";
import { EmployeeLogin } from "../views/EmployeeLogin";
import { EmployeePanel } from "../views/EmployeePanel/EmployeePanel.component";
import { EmployeePanelClients } from "../views/EmployeePanelClients";
import { Loan } from "../views/LoanPanel/Loan.component";
import { LoanDetails } from "../views/LoanDetails/LoanDetails.component";
import { LoanPanelLoans } from "../views/LoanPanelLoans/LoanPanelLoans.component";

export enum Paths {
  LandingPage = "/",
  DefaultRoute = "/*",
  EmployeeLogin = "/employee-login",
  EmployeePanel = "/employee-panel",
  EmployeePanelClients = "/employee-panel-clients",
  LoanPanel = "/loan-panel",
  LoanPanelInfo = "/loan-panel-info",
  LoanPanelLoans = "/loan-panel-loans",
  LoanInfo = "/loan-info/:code",
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
  <Route key={Paths.LoanPanel} path={Paths.LoanPanel} element={<Loan />} />,
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
    key={Paths.LoanInfo}
    path={Paths.LoanInfo}
    element={<LoanDetails />}
  />,
  <Route
    key={Paths.LoanPanelInfo}
    path={Paths.LoanPanelInfo}
    element={<Loan />}
  />,
  <Route
    key={Paths.LoanPanelLoans}
    path={Paths.LoanPanelLoans}
    element={<LoanPanelLoans />}
  />
];
