import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RouteList, ProtectedRouteList, Paths } from "./routes";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
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
