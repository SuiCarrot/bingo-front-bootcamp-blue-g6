import { CardsContext } from "context/CardsContext";
import { MatchContext } from "context/matchContext";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Routers from "./routes/routes";

function App() {
  return (
    <MatchContext>
      <CardsContext>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </CardsContext>
    </MatchContext>
  );
}

export default App;
