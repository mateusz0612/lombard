import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RouteList, ProtectedRouteList, Paths } from "./routes";
import { Loader } from "./components/Loader";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { GlobalStyle } from "./components/styled";

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="App">
      <GlobalStyle />
      <Loader isLoading={loading}>
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
      </Loader>
    </div>
  );
}

export default App;
