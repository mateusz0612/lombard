import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RouteList, ProtectedRouteList, Paths } from "./routes";
import { Stack } from "@mui/material";
import { Loader } from "./components/Loader";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { GlobalStyle } from "./components/styled";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <Stack
        width="100%"
        minHeight="95vh"
        justifyContent="center"
        alignItems="center"
      >
        <Loader />
      </Stack>
    );
  }

  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {RouteList}
          {user && ProtectedRouteList}
          <Route
            key={Paths.DefaultRoute}
            path={Paths.DefaultRoute}
            element={<Navigate to={Paths.LandingPage} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
