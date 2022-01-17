import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../views/LandingPage";

enum Paths {
  LandingPage = "/",
}

const routes = [{ path: Paths.LandingPage, Component: LandingPage }];

export const RouteList = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};
