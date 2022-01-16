import { Routes, Route } from "react-router-dom";
import { RegisterForm } from "../components/RegisterForm/RegisterForm.component";

enum Paths {
  LandingPage = "/",
  Register = "/register",
  Login = "/login",
}

const LandingPage = () => <h2>Landing</h2>;
const Register = () => <RegisterForm />;
const Login = () => <h2>Login</h2>;

const routes = [
  { path: Paths.LandingPage, Component: LandingPage },
  { path: Paths.Register, Component: Register },
  { path: Paths.Login, Component: Login },
];

export const RouteList = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};
