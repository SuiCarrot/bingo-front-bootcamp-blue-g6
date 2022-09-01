import { CardsContext } from "context/CardsContext";
import { MatchContext } from "context/matchContext";
import { PlayerContext } from "context/PlayerContext";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Routers from "./routes/routes";

function App() {
  return (
    <MatchContext>
      <PlayerContext>
        <CardsContext>
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
        </CardsContext>
      </PlayerContext>
    </MatchContext>
  );
}

export default App;
