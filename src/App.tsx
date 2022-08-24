import { MatchContext } from "context/matchContext";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Routers from "./routes/routes";

function App() {
  return (
    <MatchContext>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </MatchContext>
  );
}

export default App;
