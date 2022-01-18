import { Route } from "react-router-dom";
import { EmployeeLogin } from "../views/EmployeeLogin";
import { EmployeePanel } from "../views/EmployeePanel/EmployeePanel.component";
import { LandingPage } from "../views/LandingPage/LandingPage.component";

export enum Paths {
  LandingPage = "/",
  DefaultRoute = "/*",
  EmployeeLogin = "/employee-login",
  EmployeePanel = "/employee-panel",
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
];
