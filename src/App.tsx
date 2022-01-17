import { BrowserRouter, Routes } from "react-router-dom";
import { RouteList, ProtectedRouteList } from "./routes";
import { useUserContext } from "./contexts/UserContext";

function App() {
  const user = useUserContext();

  console.log(user);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {RouteList}
          {user && ProtectedRouteList}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
