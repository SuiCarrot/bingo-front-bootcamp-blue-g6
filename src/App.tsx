import { CardsContext } from "context/CardsContext";
import { MatchContext, useMatch } from "context/matchContext";
import { PlayerContext } from "context/PlayerContext";
import useCookies from "react-cookie/cjs/useCookies";
import { BrowserRouter } from "react-router-dom";
import { MatchGameContextType } from "types/interfaces";
import "./App.scss";
import Routers from "./routes/routes";

function App() {
  const { valuesMatch } = useMatch() as MatchGameContextType;

  const [ cookies, setCookies ] = useCookies(['Match', 'Player', 'Cards', 'DrawnNumbers']);

  const onMatch = () => {
    setCookies('Match', valuesMatch, {path: ''}); 
  }

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
