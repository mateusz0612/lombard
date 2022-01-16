import { BrowserRouter } from "react-router-dom";
import { RouteList } from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
