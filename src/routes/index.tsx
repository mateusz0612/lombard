import { Route } from "react-router-dom";
import { EmployeePanel } from "../views/EmployeePanel";
import { LandingPage } from "../views/LandingPage/LandingPage.component";

export enum Paths {
  DefaultRoute = "/*",
  LandingPage = "/",
  EmployeePanel = "/employee-panel",
}

export const RouteList = [
  <Route
    key={Paths.LandingPage}
    path={Paths.LandingPage}
    element={<LandingPage />}
  />,
  <Route
    key={Paths.EmployeePanel}
    path={Paths.EmployeePanel}
    element={<EmployeePanel />}
  />,
];

export const ProtectedRouteList = [
  <Route
    key="protected"
    path="/protected"
    element={<div>MAMALE PROTECTED</div>}
  />,
];
